import { Button, Icon, useToast, VStack, Text, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AiOutlineSend } from 'react-icons/ai';

import { Input } from '$components/form/input';
import { Textarea } from '$components/form/text-area';
import { glassmorphismContainer } from '$styles/tokens';
import { Section } from '$components/layout/section';
import { sendEmail } from '$http/send-email';

import { contactFormSchema } from './form-schema';
import { CONTACT } from '$shared/sections';

interface ContactFormData {
  email: string;
  name: string;
  message: string;
}

export function Contact() {
  const toast = useToast({
    position: 'bottom-left',
  });

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
    <Section
      title="Contato"
      w="full"
      dataScroll={CONTACT}
      p="8"
      textAlign="center"
      sx={glassmorphismContainer({ bg: 'background.alpha.500' })}
    >
      <Text mb="8" maxW="600px" fontWeight="bold" mx="auto">
        Vamos criar algo incrível juntos, estou aqui para transformar suas
        ideias em código. Acesse minhas redes no canto superior ou me envie um
        E-mail.
      </Text>

      <VStack as="form" onSubmit={handleContact} spacing="4" w="full">
        <Flex wrap="wrap" gap="2" w="full">
          <Input
            {...register('name')}
            placeholder="Nome *"
            error={formState.errors.name}
          />

          <Input
            {...register('email')}
            placeholder="E-mail *"
            error={formState.errors.email}
          />
        </Flex>

        <Textarea
          {...register('message')}
          id="message"
          placeholder="Mensagem *"
          error={formState.errors.message}
        />

        <Button
          type="submit"
          w="full"
          size="lg"
          variant="outline"
          rightIcon={<Icon as={AiOutlineSend} />}
        >
          Enviar
        </Button>
      </VStack>
    </Section>
  );
}
