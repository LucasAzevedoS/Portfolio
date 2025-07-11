"use client"
import SplitText from "./SplitText";
import { useState } from "react"
import {
  AppShell,
  Container,
  Group,
  Text,
  Button,
  Stack,
  Title,
  Card,
  Avatar,
  Badge,
  Timeline,
  TextInput,
  Textarea,
  ActionIcon,
  Grid,
  Box,
  Anchor,
  useMantineColorScheme,
  useMantineTheme,
  Paper,
  SimpleGrid,
  rem,
} from "@mantine/core"
import {
  IconSun,
  IconMoon,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconExternalLink,
  IconMapPin,
  IconCalendar,
  IconBriefcase,
} from "@tabler/icons-react"
import { useForm } from "@mantine/form"
import { notifications } from "@mantine/notifications"

export default function Portfolio() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const theme = useMantineTheme()
  const [activeSection, setActiveSection] = useState("sobre")

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: {
      name: (value) => (value.length < 2 ? "Nome deve ter pelo menos 2 caracteres" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
      message: (value) => (value.length < 10 ? "Mensagem deve ter pelo menos 10 caracteres" : null),
    },
  })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const handleSubmit = (values: typeof form.values) => {
    console.log("Form submitted:", values)
    notifications.show({
      title: "Mensagem enviada!",
      message: "Obrigado pelo contato. Retornarei em breve!",
      color: "green",
    })
    form.reset()
  }

  const projects = [
    {
      title: "E-Coleta",
      description:
        "Este projeto tem como objetivo o gerenciamento de coletas seletivas de resíduos.",
      technologies: [".NET", "Docker", "CICD", "SQLServer", "Azure", "Xunit"],
      github: "https://github.com/LucasAzevedoS/CiCdDotNet",
      demo: "https://demo.com",
    },
    {
      title: "CRM-Dashboard",
      description: "Dashboard de CRM para gerenciamento de clientes, vendas e relatórios.",
      technologies: [".NET", "Next.js", "TypeScript", "SQL", "N8N", "WAHAAPI", "Docker"],
      // github: "https://github.com",
      // demo: "https://demo.com",
    },
    {
      title: "Agendamento de Reuniões",
      description: "Aplicação para agendamento de reuniões com integração de calendário e cadastro de usuários.",
      technologies: [".NET", "Next.js", "TypeScript", "SQLServer"],
      // github: "https://github.com",
      // demo: "https://demo.com",
    },
  ]

  const experiences = [
    {
      title: "Técnico de Suporte Jr",
      company: "Minsait",
      period: "2023 - Presente",
      description:
        "Atuação como Técnico de Suporte Jr, com foco em resolução de problemas técnicos, suporte a usuários e manutenção de sistemas legados.",
    },
    {
      title: "Engenharia de Computação",
      company: "Univesp",
      period: "2025 - 2030",
      description: "Formação em Engenharia de Computação com foco em desenvolvimento de software, inteligência artificial e sistemas embarcados.",
    },
    {
      title: "Estudante de Análise e Desenvolvimento de Sistemas",
      company: "Fiap",
      period: "2023 - 2025",
      description: "Aprofundamento em tecnologias de desenvolvimento, incluindo C#, .NET, JavaScript, bancos de dados relacionais e praticas de DevOps.",
    },
    {
      title: "Estudante de Desenvolvimento de Sistemas",
      company: "Centro Paula Souza",
      period: "2020 - 2022",
      description: "Início dos estudos, aprendendo fundamentos de programação, algoritmos e desenvolvimento web.",
    },
  ]
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (

    <AppShell header={{ height: 70 }} padding={0}>
      <AppShell.Header>
        <Container size="xl" h="100%">

          <Group justify="space-between" h="100%">
            <Text size="xl" fw={700} c={theme.primaryColor}>
              Lucas Azevedo
            </Text>
            <Group gap="md">
              <Button
                variant="subtle"
                onClick={() => scrollToSection("sobre")}
                c={activeSection === "sobre" ? theme.primaryColor : undefined}
              >
                Sobre
              </Button>
              <Button
                variant="subtle"
                onClick={() => scrollToSection("projetos")}
                c={activeSection === "projetos" ? theme.primaryColor : undefined}
              >
                Projetos
              </Button>
              <Button
                variant="subtle"
                onClick={() => scrollToSection("experiencia")}
                c={activeSection === "experiencia" ? theme.primaryColor : undefined}
              >
                Experiência
              </Button>
              <Button
                variant="subtle"
                onClick={() => scrollToSection("contato")}
                c={activeSection === "contato" ? theme.primaryColor : undefined}
              >
                Contato
              </Button>
              <ActionIcon variant="subtle" onClick={() => toggleColorScheme()} size="lg">
                {colorScheme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
              </ActionIcon>
            </Group>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        {/* Hero Section */}
        <Box py={100} style={{ background: colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] }}>
          <Container size="xl">
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 8 }}>
                <Stack gap="xl">
                  <div>
                    <Text size="lg" c="dimmed" >
                      Olá, eu sou
                    </Text>
                    <SplitText
                      text="Lucas Azevedo"
                      className="font-bold text-center"
                      style={{ fontSize: "3rem", lineHeight: "1.2" }}
                      delay={100}
                      duration={0.6}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                      onLetterAnimationComplete={handleAnimationComplete}
                    />
                    <Title order={2} size={rem(32)} fw={400} c={theme.primaryColor} >
                      Full Stack Developer
                    </Title>
                  </div>
                  <Text size="lg" c="dimmed" maw={600}>
                    Desenvolvedor apaixonado por criar soluções digitais inovadoras. Especializado em C#, .NET, Next.js, TypeScript e
                    tecnologias modernas de desenvolvimento web e Devops.
                  </Text>
                  <Group>
                    <Button size="lg" onClick={() => scrollToSection("projetos")}>
                      Ver Projetos
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => scrollToSection("contato")}>
                      Entre em Contato
                    </Button>
                  </Group>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 4 }}>
                <Box ta="center">
                  <Avatar src="/placeholder.svg?height=300&width=300" size={300} radius="50%" mx="auto" />
                </Box>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* About Section */}
        <Box id="sobre" py={80}>
          <Container size="xl">
            <Stack gap="xl">
              <div>
                <Title order={2} size={rem(36)} ta="center" mb="md">
                  Sobre Mim
                </Title>
                <Text size="lg" c="dimmed" ta="center" maw={800} mx="auto">
                  Desenvolvedor Full Stack com experiência em criar aplicações web modernas e
                  escaláveis.
                </Text>
              </div>

              <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
                <Paper p="xl" radius="md" withBorder>
                  <Stack align="center" gap="md">
                    <IconMapPin size={32} color={theme.primaryColor} />
                    <div>
                      <Text fw={600} ta="center">
                        Localização
                      </Text>
                      <Text c="dimmed" ta="center">
                        São Paulo, Brasil
                      </Text>
                    </div>
                  </Stack>
                </Paper>

                <Paper p="xl" radius="md" withBorder>
                  <Stack align="center" gap="md">
                    <IconCalendar size={32} color={theme.primaryColor} />
                    <div>
                      <Text fw={600} ta="center">
                        Idade
                      </Text>
                      <Text c="dimmed" ta="center">
                        20 anos
                      </Text>
                    </div>
                  </Stack>
                </Paper>

                <Paper p="xl" radius="md" withBorder>
                  <Stack align="center" gap="md">
                    <IconBriefcase size={32} color={theme.primaryColor} />
                    <div>
                      <Text fw={600} ta="center">
                        Cargo Atual
                      </Text>
                      <Text c="dimmed" ta="center">
                        Junior Full Stack Developer
                      </Text>
                    </div>
                  </Stack>
                </Paper>
              </SimpleGrid>

              <Text size="lg" ta="center" maw={900} mx="auto">
                Sou apaixonado por tecnologia e sempre busco aprender novas ferramentas e metodologias. Tenho
                experiência sólida em desenvolvimento frontend e backend, com foco em criar experiências de usuário
                excepcionais e sistemas robustos. Quando não estou codando, gosto de contribuir com projetos open source
                e compartilhar conhecimento com a comunidade.
              </Text>
            </Stack>
          </Container>
        </Box>

        {/* Projects Section */}
        <Box
          id="projetos"
          py={80}
          style={{ background: colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] }}
        >
          <Container size="xl">
            <Stack gap="xl">
              <div>
                <Title order={2} size={rem(36)} ta="center" mb="md">
                  Projetos
                </Title>
                <Text size="lg" c="dimmed" ta="center" maw={800} mx="auto">
                  Alguns dos projetos que desenvolvi recentemente, demonstrando diferentes tecnologias e abordagens.
                </Text>
              </div>

              <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl">
                {projects.map((project, index) => (
                  <Card key={index} shadow="md" padding="xl" radius="md" withBorder>
                    <Stack gap="md">
                      <Title order={3} size="xl">
                        {project.title}
                      </Title>
                      <Text c="dimmed">{project.description}</Text>
                      <Group gap="xs">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="light">
                            {tech}
                          </Badge>
                        ))}
                      </Group>
                      <Group justify="space-between" mt="auto">
                        <Anchor href={project.github} target="_blank">
                          <Group gap="xs">
                            <IconBrandGithub size={16} />
                            <Text size="sm">GitHub</Text>
                          </Group>
                        </Anchor>
                        <Anchor href={project.demo} target="_blank">
                          <Group gap="xs">
                            <IconExternalLink size={16} />
                            <Text size="sm">Demo</Text>
                          </Group>
                        </Anchor>
                      </Group>
                    </Stack>
                  </Card>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>

        {/* Experience Section */}
        <Box id="experiencia" py={80}>
          <Container size="xl">
            <Stack gap="xl">
              <div>
                <Title order={2} size={rem(36)} ta="center" mb="md">
                  Experiência
                </Title>
                <Text size="lg" c="dimmed" ta="center" maw={800} mx="auto">
                  Minha jornada profissional no desenvolvimento de software.
                </Text>
              </div>

              <Timeline active={experiences.length} bulletSize={24} lineWidth={2}>
                {experiences.map((exp, index) => (
                  <Timeline.Item key={index} title={exp.title}>
                    <Text c={theme.primaryColor} size="sm" fw={600}>
                      {exp.company}
                    </Text>
                    <Text c="dimmed" size="sm" mb="xs">
                      {exp.period}
                    </Text>
                    <Text size="sm">{exp.description}</Text>
                  </Timeline.Item>
                ))}
              </Timeline>
            </Stack>
          </Container>
        </Box>

        {/* Contact Section */}
        <Box
          id="contato"
          py={80}
          style={{ background: colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0] }}
        >
          <Container size="xl">
            <Stack gap="xl">
              <div>
                <Title order={2} size={rem(36)} ta="center" mb="md">
                  Contato
                </Title>
                <Text size="lg" c="dimmed" ta="center" maw={800} mx="auto">
                  Vamos conversar sobre seu próximo projeto ou oportunidade de colaboração.
                </Text>
              </div>

              <Grid align="center" justify="center">
                <Grid.Col span={{ base: 12, md: 4 }}>
                  <Stack gap="xl">
                    <Paper p="xl" radius="md" withBorder>
                      <Stack gap="md" align="center">
                        <IconMail size={32} color={theme.primaryColor} />
                        <div>
                          <Text fw={600} ta="center">
                            Email
                          </Text>
                          <Text c="dimmed" ta="center">
                            lucas.a.souza@hotmail.com
                          </Text>
                        </div>
                      </Stack>
                    </Paper>

                    <Group justify="center" gap="xl">
                      <ActionIcon component="a" href="https://www.linkedin.com/in/lucas-azevedodev/" target="_blank" size="xl" variant="outline">
                        <IconBrandLinkedin size={24} />
                      </ActionIcon>
                      <ActionIcon component="a" href="https://github.com/LucasAzevedoS" target="_blank" size="xl" variant="outline">
                        <IconBrandGithub size={24} />
                      </ActionIcon>
                    </Group>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Stack>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          py="xl"
          style={{ borderTop: `1px solid ${colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]}` }}
        >
          <Container size="xl">
            <Text ta="center" c="dimmed">
              © {new Date().getFullYear()} Lucas Azevedo. Todos os direitos reservados.
            </Text>
          </Container>
        </Box>
      </AppShell.Main>
    </AppShell>
  )
}
