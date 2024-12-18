const formResetEventKey = "form.reset";
const formResetEvent = new Event(formResetEventKey);

const formSubmitEventKey = "form.submit";
const formSubmitEvent = new Event(formSubmitEventKey);

const formSubmitFailedEventKey = "form.submit.failed";
const formSubmitFailedEvent = new Event(formSubmitFailedEventKey);

export {
  formResetEvent,
  formResetEventKey,
  formSubmitEvent,
  formSubmitEventKey,
  formSubmitFailedEvent,
  formSubmitFailedEventKey,
};
