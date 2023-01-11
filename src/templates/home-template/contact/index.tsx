import { Button, useToast, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '$components/form/input';
import { Textarea } from '$components/form/text-area';
import { glassmorphismContainer } from '$styles/tokens';
import { Section } from '$components/ui/section';
import { sendEmail } from '$http/send-email';

import { contactFormSchema } from './form-schema';
import { CONTACT } from '$shared/sections';

interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

export function Contact() {
  const toast = useToast();

  const { register, handleSubmit, formState, reset } = useForm<ContactFormData>(
    {
      resolver: yupResolver(contactFormSchema),
    },
  );

  const handleContact = handleSubmit(async (data) => {
    const response = await sendEmail(data);

    if (response.ok) {
      toast({
        title: 'Mensagem enviada',
        description: 'Sua mensagem foi enviada, entrarei em contato em breve.',
        status: 'success',
        isClosable: true,
        duration: 3000,
      });

      reset();
    } else {
      toast({
        title: 'Aconteceu um erro',
        description:
          'Não foi possível enviar a mensagem, tente novamente em alguns instantes ou entre em contato diretamente com o e-mail silvanosilvino@hotmail.com.',
        status: 'error',
        isClosable: true,
        duration: 8000,
      });
    }
  });

  return (
    <Section title="Contato" w="full" dataScroll={CONTACT}>
      <VStack
        as="form"
        onSubmit={handleContact}
        spacing="8"
        p="8"
        w="full"
        sx={glassmorphismContainer({ bg: 'background.500' })}
      >
        <Input
          {...register('email')}
          label="E-mail"
          error={formState.errors.email}
        />

        <Input
          {...register('name')}
          label="Nome"
          error={formState.errors.name}
        />

        <Textarea
          {...register('message')}
          label="Mensagem"
          error={formState.errors.message}
        />

        <Button type="submit" w="full" variant="outline">
          Enviar
        </Button>
      </VStack>
    </Section>
  );
}
