                     ┌────────────────────────────┐
                     │         Route 53           │
                     │   (Gestión de dominio)     │
                     └────────────┬───────────────┘
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
         ┌──────────▼───────────┐      ┌────────▼───────────┐
         │       S3 (Frontend)  │      │  EC2 (Laravel API) │
         │  - React SPA estática│      │  - PHP 8 / MySQL   │
         │  - Hosting HTTPS     │      │  - API REST CRUD   │
         └──────────┬───────────┘      └────────┬───────────┘
                    │                           │
                    │                           │
                    │             ┌─────────────▼───────────────┐
                    │             │   Parameter Store (SSM)     │
                    │             │ .env / tokens / credentials │
                    │             └─────────────┬───────────────┘
                    │                           │
                    │                           │
                    │             ┌─────────────▼───────────────┐
                    │             │      CloudWatch Logs        │
                    │             │ - Monitoreo de EC2 y API    │
                    │             │ - Alarmas de rendimiento     │
                    │             └─────────────┬───────────────┘
                    │                           │
                    │             ┌─────────────▼───────────────┐
                    │             │         AWS Backup          │
                    │             │ - S3 y DB backups automáticos│
                    │             └─────────────┬───────────────┘
                    │                           │
                    │                           │
                    │           ┌───────────────▼───────────────┐
                    │           │   EventBridge / StepFunctions │
                    │           │ - Reglas y flujos programados │
                    │           └───────────────┬───────────────┘
                    │                           │
                    │           ┌───────────────▼───────────────┐
                    │           │        AWS Lambda             │
                    │           │ - Ejecuta tareas puntuales    │
                    │           │   (notificaciones, reportes)  │
                    │           └───────────────┬───────────────┘
                    │                           │
                    │           ┌───────────────▼───────────────┐
                    │           │     SNS / SES / Pinpoint      │
                    │           │ - Envío de correos / SMS /    │
                    │           │   campañas automáticas        │
                    │           └───────────────┬───────────────┘
                    │                           │
                    │           ┌───────────────▼───────────────┐
                    │           │             SQS               │
                    │           │ - Cola de jobs asíncronos     │
                    │           │   (notificaciones, emails)    │
                    │           └───────────────────────────────┘
                    │
         ┌──────────▼───────────┐
         │     Budgets / Cost   │
         │ - Control de gastos  │
         └──────────┬───────────┘
                    │
         ┌──────────▼───────────┐
         │  CodePipeline /      │
         │  CodeDeploy          │
         │ - CI/CD desde GitHub │
         │ - Despliegue EC2     │
         └──────────────────────┘
