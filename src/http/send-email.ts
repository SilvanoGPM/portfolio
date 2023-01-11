import { formDataFromObject } from '$utils/form-data-from-object';

interface SendEmailParams {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(params: SendEmailParams) {
  const action = 'https://formspree.io/f/mvonoykd';

  const formData = formDataFromObject(params);

  return fetch(action, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  });
}
