import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { ConfigurationError } from "#libs/errors";
import { logger } from "#libs/logs";
import { sendMail } from "#libs/mail";

export const mail = {
  send: defineAction({
    accept: "form",
    input: z.object({
      from: z.string().email(),
      message: z.string().min(50),
      subject: z.string().min(5),
    }),
    handler: async (input) => {
      try {
        const response = await sendMail(input);
        logger.info(response, "Email sent");
        return { code: 250, message: response.response };
      } catch (err) {
        logger.error(err, "Error sending the email");
        if (err instanceof ConfigurationError) {
          throw new ActionError({
            code: "INTERNAL_SERVER_ERROR",
            message: "could not send the email",
          });
        }
        throw err;
      }
    },
  }),
};
