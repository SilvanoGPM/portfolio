import * as yup from 'yup';

export const contactFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('E-mail é obrigatório')
    .email('Formato de e-mail inválido'),

  name: yup
    .string()
    .required('Nome é obrigatório')
    .min(3, 'Seu nome deve conter pelo menos 3 caracteres'),

  message: yup
    .string()
    .required('Mensagem é obrigatória')
    .min(10, 'A mensagem deve conter pelo menos 10 caracteres'),
});
