window.CLOUD_CONTENT = {
  "modules": [
    {
      "id": "F1",
      "title": "Основы облака",
      "terms": "IaaS, PaaS, SaaS · модели размещения · AWS CAF",
      "number": 1,
      "course": "Foundations",
      "html": "<p><strong>Cloud computing</strong>: получение IT-ресурсов по запросу через интернет с оплатой по использованию. Ресурсы можно создавать программно, без покупки физических серверов.</p>\n<table>\n<thead>\n<tr>\n<th>Модель</th>\n<th>Что получает клиент</th>\n<th>Что клиент обычно контролирует</th>\n<th>Пример для понимания</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>IaaS</td>\n<td>Инфраструктуру</td>\n<td>ОС, приложения, данные, настройки сети</td>\n<td>EC2</td>\n</tr>\n<tr>\n<td>PaaS</td>\n<td>Платформу для запуска приложения</td>\n<td>Свой код, данные, настройки приложения</td>\n<td>Elastic Beanstalk</td>\n</tr>\n<tr>\n<td>SaaS</td>\n<td>Готовое приложение</td>\n<td>Использование и доступные настройки</td>\n<td>Готовая почта/CRM</td>\n</tr>\n</tbody></table>\n<p><strong>Deployment models</strong>: cloud — размещение в облаке; on-premises/private cloud — собственная инфраструктура; hybrid — сочетание своей инфраструктуры и облака. IaaS/PaaS/SaaS отвечают на другой вопрос: какой уровень сервиса предоставляют.</p>\n<p>Шесть преимуществ из лекции:</p>\n<ol>\n<li>Trade capital expense for variable expense: заменить крупные предварительные вложения расходами по использованию.</li>\n<li>Benefit from massive economies of scale: масштаб AWS снижает удельные затраты.</li>\n<li>Stop guessing capacity: выделять ресурсы по потребности.</li>\n<li>Increase speed and agility: быстрее запускать изменения.</li>\n<li>Stop spending money running and maintaining data centers: меньше работы с физической инфраструктурой.</li>\n<li>Go global in minutes: быстро разворачивать ресурсы в разных регионах.</li>\n</ol>\n<p><strong>Scalability</strong> — возможность выдержать рост нагрузки добавлением мощности. <strong>Elasticity</strong> — подстраивать мощность под изменения нагрузки, включая уменьшение.</p>\n<p><strong>AWS CAF, Cloud Adoption Framework</strong>, помогает планировать переход в облако. Шесть perspectives: <strong>Business, People, Governance, Platform, Security, Operations</strong>. Business — бизнес-ценность; People — навыки и изменения в организации; Governance — управление и контроль; Platform — технологическая платформа; Security — безопасность; Operations — эксплуатация. Не путай их с шестью pillars Well-Architected.</p>\n",
      "academy": null
    },
    {
      "id": "F2",
      "title": "Стоимость и биллинг",
      "terms": "Pricing Calculator · Cost Explorer · AWS Budgets · TCO",
      "number": 2,
      "course": "Foundations",
      "html": "<p>Основные составляющие оплаты в лекции: <strong>compute, storage, outbound data transfer</strong>. Входящий трафик обычно бесплатен, но стоимость передачи зависит от сервиса, маршрута и зон/регионов. Не превращай правило «обычно» в утверждение «любой трафик внутри региона бесплатен».</p>\n<p><strong>CapEx</strong> — предварительные капитальные расходы, например покупка серверов. <strong>OpEx</strong> — операционные расходы. <strong>TCO, Total Cost of Ownership</strong> — совокупные прямые и косвенные расходы: серверы, storage, сеть, лицензии, электричество, охлаждение, помещения, обслуживание и работа персонала.</p>\n<table>\n<thead>\n<tr>\n<th>Инструмент</th>\n<th>На какой вопрос отвечает</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>AWS Pricing Calculator</td>\n<td>Сколько примерно будет стоить спроектированная система?</td>\n</tr>\n<tr>\n<td>AWS Bills / Billing dashboard</td>\n<td>Что начислили и как выглядит текущий счёт?</td>\n</tr>\n<tr>\n<td>AWS Cost Explorer</td>\n<td>Куда ушли расходы, как они меняются, каков прогноз?</td>\n</tr>\n<tr>\n<td>AWS Budgets</td>\n<td>Когда фактические или прогнозируемые расходы/использование пересекут заданный порог?</td>\n</tr>\n<tr>\n<td>Cost and Usage Report</td>\n<td>Где получить подробные данные о расходах и использовании?</td>\n</tr>\n<tr>\n<td>AWS Organizations</td>\n<td>Как управлять несколькими аккаунтами и объединить billing?</td>\n</tr>\n</tbody></table>\n<p><strong>Consolidated billing</strong> объединяет оплату аккаунтов, сохраняя их отдельными аккаунтами. <strong>OU</strong> — organizational unit, группа аккаунтов. <strong>SCP, service control policy</strong>, ограничивает максимально допустимые разрешения в организации. Сам по себе SCP не выдаёт пользователю разрешение на операцию.</p>\n<p>В лекции приведены <strong>Basic, Developer, Business, Enterprise Support</strong>. Для теста по этим слайдам выучи соответствия: Basic — базовые ресурсы и помощь по аккаунту/billing; Developer — разработка; Business — production; Enterprise — business/mission-critical. <strong>TAM, Technical Account Manager</strong>, связан с Enterprise в учебной модели. Это перечень из лекции, а не проверенный актуальный каталог коммерческих тарифов.</p>\n<p>IAM и Elastic Beanstalk не имеют отдельной платы за сам сервис в модели лекции, но созданные ими или используемые вместе ресурсы могут стоить денег. «No additional charge» не означает «вся архитектура бесплатна». Не заучивай старые суммы, сроки Free Tier и проценты из case study как универсальные гарантии.</p>\n",
      "academy": null
    },
    {
      "id": "F3",
      "title": "Инфраструктура AWS",
      "terms": "Regions · Availability Zones · edge locations",
      "number": 3,
      "course": "Foundations",
      "html": "<table>\n<thead>\n<tr>\n<th>Термин</th>\n<th>Смысл</th>\n<th>Экзаменационная подсказка</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Region</td>\n<td>Географическая область с несколькими AZ</td>\n<td>Выбор по требованиям к данным, latency, сервисам и цене</td>\n</tr>\n<tr>\n<td>Availability Zone</td>\n<td>Изолированная инфраструктура из одного или нескольких дата-центров внутри Region</td>\n<td>Размещение в нескольких AZ повышает устойчивость</td>\n</tr>\n<tr>\n<td>Data center</td>\n<td>Физический объект с оборудованием</td>\n<td>AZ не обязана равняться одному дата-центру</td>\n</tr>\n<tr>\n<td>Edge location</td>\n<td>Точка присутствия ближе к пользователям</td>\n<td>CloudFront, доставка с низкой latency</td>\n</tr>\n</tbody></table>\n<p><strong>VPC</strong> относится к одному Region и может охватывать несколько AZ. <strong>Subnet</strong> относится к одной AZ. <strong>IAM и Route 53</strong> рассматриваются в курсе как глобальные сервисы, <strong>EC2 и Lambda</strong> — региональные.</p>\n<p>Репликация между регионами требует выбора и настройки подходящего механизма. Создание ресурса в одном регионе само по себе не гарантирует его копию в другом.</p>\n",
      "academy": null
    },
    {
      "id": "F4",
      "title": "Облачная безопасность",
      "terms": "Shared responsibility · IAM · CloudTrail · Config",
      "number": 4,
      "course": "Foundations",
      "html": "<p><strong>AWS отвечает за security OF the cloud</strong>: физические здания, оборудование, инфраструктуру сети и виртуализацию. <strong>Клиент отвечает за security IN the cloud</strong>: данные, разрешения, приложения и доступные ему настройки.</p>\n<p>В EC2 клиент обновляет guest OS и свои приложения. В managed services AWS берёт на себя больше обслуживания платформы. При этом клиент по-прежнему выбирает, кто имеет доступ к его данным. Нельзя отвечать «AWS делает всю безопасность», увидев слово managed.</p>\n<table>\n<thead>\n<tr>\n<th>Понятие</th>\n<th>Что означает</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Principal</td>\n<td>Сущность, которая делает запрос: например пользователь или role session</td>\n</tr>\n<tr>\n<td>Authentication</td>\n<td>Кто ты? Проверка личности/credentials</td>\n</tr>\n<tr>\n<td>Authorization</td>\n<td>Что тебе разрешено делать? Проверка permissions</td>\n</tr>\n<tr>\n<td>IAM user</td>\n<td>Identity в аккаунте для пользователя или workload в традиционной модели IAM</td>\n</tr>\n<tr>\n<td>IAM group</td>\n<td>Набор пользователей для совместного назначения permissions</td>\n</tr>\n<tr>\n<td>IAM role</td>\n<td>Роль, которую принимает доверенная сущность, получая временные credentials</td>\n</tr>\n<tr>\n<td>IAM policy</td>\n<td>JSON-документ с правилами разрешения или запрета</td>\n</tr>\n</tbody></table>\n<p>Группы содержат IAM users. Пользователь может состоять в нескольких группах. Роль не является обычным членом IAM group. Роль может использовать приложение, AWS service или человек, которому доверено её принимать.</p>\n<p><strong>Console credentials</strong>: имя пользователя и пароль, возможно MFA. <strong>Programmatic credentials</strong>: access key ID и secret access key. У временных credentials также есть <strong>session token</strong>. Для приложения на EC2 предпочтительна IAM role с необходимыми permissions: SDK может получить временные credentials, без ключей в исходном коде или AMI.</p>\n<p><strong>Least privilege</strong>: разрешить только нужные actions на нужных resources. <strong>MFA</strong> добавляет фактор проверки личности, но сама по себе не выдаёт дополнительные permissions.</p>\n<h3>Защита аккаунта и данных</h3>\n<p><strong>Защита аккаунта</strong>: защитить root с MFA, не использовать root для повседневной работы, выдавать минимальные права, применять временные credentials, вести аудит. Credentials profiles позволяют выбирать конфигурацию, например <code>boto3.Session(profile_name=&#39;prod&#39;)</code>. Сам credentials file не превращает постоянный ключ во временный.</p>\n<table>\n<thead>\n<tr>\n<th>Сервис</th>\n<th>Запомнить</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>AWS CloudTrail</td>\n<td>Аудит: кто вызвал API, какую операцию и когда</td>\n</tr>\n<tr>\n<td>AWS Config</td>\n<td>Конфигурации ресурсов и оценка соответствия правилам</td>\n</tr>\n<tr>\n<td>AWS Artifact</td>\n<td>Отчёты и документы AWS по compliance</td>\n</tr>\n<tr>\n<td>AWS KMS</td>\n<td>Управление ключами шифрования</td>\n</tr>\n<tr>\n<td>AWS Shield</td>\n<td>Защита от DDoS</td>\n</tr>\n<tr>\n<td>AWS WAF</td>\n<td>Правила для HTTP(S), например защита от SQL injection и XSS</td>\n</tr>\n</tbody></table>\n<p><strong>Encryption in transit</strong>: TLS/HTTPS защищает данные при передаче. <strong>Encryption at rest</strong>: шифрование сохранённых данных. Permissions и encryption решают разные задачи: зашифрованный объект всё равно требует правильно настроенного доступа.</p>\n",
      "academy": null
    },
    {
      "id": "F5",
      "title": "Сети и доставка контента",
      "terms": "VPC · subnet · NAT · Security Groups · CloudFront",
      "number": 5,
      "course": "Foundations",
      "html": "<p><strong>VPC</strong> — логически изолированная сеть. <strong>CIDR</strong> задаёт диапазон адресов. IPv4 имеет 32 бита, IPv6 — 128. Для IPv4 количество адресов в <code>/n</code> равно <code>2^(32-n)</code>.</p>\n<p>В обычной AWS IPv4 subnet резервируются пять адресов. Поэтому <code>/24</code>: 256 всего, <strong>251 доступен</strong>; <code>/28</code>: 16 всего, <strong>11 доступны</strong>. Чем больше число после <code>/</code>, тем меньше диапазон. <code>0.0.0.0/0</code> — любой IPv4 destination/source, <code>/32</code> — один IPv4 адрес.</p>\n<p><strong>Public subnet</strong> имеет маршрут к internet gateway. Для прямого IPv4 доступа EC2 в интернет нужны также public IPv4/Elastic IP и разрешающие правила безопасности. Название subnet или один лишь публичный IP без маршрута не решают задачу.</p>\n<table>\n<thead>\n<tr>\n<th>Компонент</th>\n<th>Назначение</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Route table</td>\n<td>Направляет трафик по destination и target</td>\n</tr>\n<tr>\n<td>Local route</td>\n<td>Маршрутизация внутри VPC</td>\n</tr>\n<tr>\n<td>Internet gateway, IGW</td>\n<td>Связь VPC с интернетом при подходящей адресации/маршрутах</td>\n</tr>\n<tr>\n<td>Public NAT gateway</td>\n<td>Исходящий IPv4 доступ private subnet в интернет, без произвольного входящего подключения из интернета</td>\n</tr>\n<tr>\n<td>VPC endpoint</td>\n<td>Доступ к поддерживаемому AWS service через частную связность</td>\n</tr>\n<tr>\n<td>Gateway endpoint</td>\n<td>В рамках курса: S3 и DynamoDB</td>\n</tr>\n<tr>\n<td>Interface endpoint</td>\n<td>ENI с частными IP, использует AWS PrivateLink</td>\n</tr>\n<tr>\n<td>VPC peering</td>\n<td>Прямое соединение двух VPC, без транзитивности</td>\n</tr>\n<tr>\n<td>Transit Gateway</td>\n<td>Центральный узел связи нескольких сетей</td>\n</tr>\n<tr>\n<td>Site-to-Site VPN</td>\n<td>Зашифрованный туннель между сетями через интернет</td>\n</tr>\n<tr>\n<td>Direct Connect</td>\n<td>Выделенное соединение с AWS</td>\n</tr>\n<tr>\n<td>ENI</td>\n<td>Виртуальный сетевой интерфейс</td>\n</tr>\n</tbody></table>\n<p>Типовой путь исходящего трафика: <strong>private EC2 → private route table → public NAT gateway в public subnet → IGW → internet</strong>. Ответный трафик проходит обратно. Для S3/DynamoDB можно использовать подходящий gateway endpoint вместо пути через NAT.</p>\n<h3>Security group и NACL</h3>\n<table>\n<thead>\n<tr>\n<th>Свойство</th>\n<th>Security group</th>\n<th>Network ACL</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Уровень в курсе</td>\n<td>Instance, точнее сетевой интерфейс</td>\n<td>Subnet</td>\n</tr>\n<tr>\n<td>Состояние</td>\n<td>Stateful</td>\n<td>Stateless</td>\n</tr>\n<tr>\n<td>Правила</td>\n<td>Только Allow</td>\n<td>Allow и Deny</td>\n</tr>\n<tr>\n<td>Порядок</td>\n<td>Проверяется набор применимых allow rules</td>\n<td>По возрастанию номера, первое совпадение решает</td>\n</tr>\n<tr>\n<td>Ответ на разрешённый запрос</td>\n<td>Автоматически разрешён с точки зрения SG</td>\n<td>Нужны подходящие правила обратного направления</td>\n</tr>\n</tbody></table>\n<p>У новой custom SG нет разрешающих inbound rules. Default SG имеет особое inbound правило для трафика от интерфейсов с той же SG. В F5 слайд 34 текст «default denies all inbound» не учитывает это правило, которое видно в таблице самого слайда. См. <a href=\"https://docs.aws.amazon.com/vpc/latest/userguide/default-security-group.html\">AWS default security groups</a>. Default NACL разрешает трафик; новая custom NACL запрещает его, пока не добавлены allow rules.</p>\n<p><strong>Route 53</strong>: DNS, перевод имён в адреса, health checks и маршрутизация. Simple — простой ответ; weighted — доли по весам; latency — по задержке; geolocation — по местоположению пользователя; geoproximity — по географической близости ресурсов с настройкой bias; failover — primary/secondary; multivalue answer — несколько здоровых записей.</p>\n<p><strong>CloudFront</strong>: CDN, доставка и кэширование контента ближе к пользователю через edge locations. <strong>Origin</strong> — источник, например S3 или HTTP server. Route 53 отвечает, куда обратиться, CloudFront помогает доставить ответ с низкой latency.</p>\n<p>OSI для базового повторения: L3 — IP и routing; L4 — TCP/UDP; L7 — HTTP/HTTPS. Удобные порты: SSH 22, HTTP 80, HTTPS 443, RDP 3389.</p>\n",
      "academy": null
    },
    {
      "id": "F6",
      "title": "Вычисления",
      "terms": "EC2 · цены · контейнеры · Lambda · Elastic Beanstalk",
      "number": 6,
      "course": "Foundations",
      "html": "<p><strong>EC2</strong> — виртуальные серверы. <strong>AMI</strong> — образ/шаблон для запуска instance. <strong>Instance type</strong> определяет сочетание CPU, RAM, storage и network. <strong>User data</strong> обычно используется для первоначальной настройки при запуске. <strong>Key pair</strong> используется для аутентификации при подключении, а SG определяет, разрешён ли сетевой трафик.</p>\n<p>Категории instance types: general purpose, compute optimized, memory optimized, storage optimized, accelerated computing. Выбирай по ограничивающему ресурсу workload.</p>\n<table>\n<thead>\n<tr>\n<th>Вариант</th>\n<th>Когда выбирать</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>On-Demand</td>\n<td>Краткосрочная или непредсказуемая потребность без обязательства на срок</td>\n</tr>\n<tr>\n<td>Reserved Instances в модели курса</td>\n<td>Предсказуемая длительная нагрузка, скидка при обязательстве на 1/3 года</td>\n</tr>\n<tr>\n<td>Spot</td>\n<td>Задача терпит прерывание и повторный запуск, например batch processing</td>\n</tr>\n<tr>\n<td>Dedicated Hosts</td>\n<td>Нужен выделенный физический сервер, контроль размещения/BYOL</td>\n</tr>\n<tr>\n<td>Dedicated Instances</td>\n<td>Instance работает на выделенном для клиента оборудовании</td>\n</tr>\n</tbody></table>\n<p>Не выбирай Spot для единственного компонента, который не должен прерываться. Остановка EBS-backed instance не означает прекращения всех затрат: сохранённые ресурсы могут продолжать тарифицироваться.</p>\n<p><strong>EBS-backed storage</strong> сохраняет данные при остановке instance. <strong>Instance store</strong> — временное хранилище, данные могут пропасть при stop/termination или отказе host. Перезагрузка и остановка — разные события.</p>\n<table>\n<thead>\n<tr>\n<th>Сервис/понятие</th>\n<th>Роль</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Docker container</td>\n<td>Упаковка приложения с зависимостями</td>\n</tr>\n<tr>\n<td>ECS</td>\n<td>Оркестрация контейнеров</td>\n</tr>\n<tr>\n<td>EKS</td>\n<td>Managed Kubernetes</td>\n</tr>\n<tr>\n<td>ECR</td>\n<td>Registry для container images</td>\n</tr>\n<tr>\n<td>Fargate</td>\n<td>Запуск контейнеров без управления EC2 hosts</td>\n</tr>\n<tr>\n<td>Lambda</td>\n<td>Выполнение функций по событиям без управления серверами</td>\n</tr>\n<tr>\n<td>Elastic Beanstalk</td>\n<td>Развёртывание приложения с управлением инфраструктурой окружения</td>\n</tr>\n</tbody></table>\n<p>Serverless означает, что клиент не управляет серверами, а не отсутствие физических серверов. В Foundations для Lambda указан максимум выполнения <strong>15 минут</strong>. Вопрос «быстро развернуть web app, загрузив код, и меньше управлять инфраструктурой» часто указывает на <strong>Elastic Beanstalk</strong>. Вопрос «выполнить функцию при событии» — на <strong>Lambda</strong>.</p>\n<p>Четыре направления cost optimization в F6: <strong>right size, increase elasticity, optimal pricing model, optimize storage choices</strong>. Это не четыре pillars Well-Architected.</p>\n",
      "academy": null
    },
    {
      "id": "F7",
      "title": "Хранение данных",
      "terms": "EBS · S3 · EFS · Glacier · durability",
      "number": 7,
      "course": "Foundations",
      "html": "<table>\n<thead>\n<tr>\n<th>Сервис</th>\n<th>Тип</th>\n<th>Типовая задача</th>\n<th>Область/особенность</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>EBS</td>\n<td>Block</td>\n<td>Диск EC2, ОС или приложение с блочным доступом</td>\n<td>Volume находится в AZ, backup через snapshots</td>\n</tr>\n<tr>\n<td>S3</td>\n<td>Object</td>\n<td>Файлы, изображения, backup, static website</td>\n<td>Bucket в Region, объект по key</td>\n</tr>\n<tr>\n<td>EFS</td>\n<td>File</td>\n<td>Общая файловая система для нескольких Linux instances</td>\n<td>Сетевой доступ, NFS</td>\n</tr>\n<tr>\n<td>S3 Glacier storage classes</td>\n<td>Object archive</td>\n<td>Долговременный архив с подходящим временем retrieval</td>\n<td>Цена и скорость зависят от класса</td>\n</tr>\n</tbody></table>\n<p>EBS реплицирует данные внутри AZ. Это не замена backup. EFS предоставляет файловый интерфейс и возможность совместного доступа. S3 предназначен для операций с объектами через API, а не для обычного блочного диска ОС.</p>\n<p><strong>Durability</strong> — вероятность сохранить данные. <strong>Availability</strong> — доступность сервиса/данных в нужный момент. «11 nines durability» не означает «11 nines uptime».</p>\n",
      "academy": null
    },
    {
      "id": "F8",
      "title": "Базы данных",
      "terms": "RDS · Aurora · DynamoDB · Redshift",
      "number": 8,
      "course": "Foundations",
      "html": "<table>\n<thead>\n<tr>\n<th>Сервис</th>\n<th>Тип / назначение</th>\n<th>Подсказка</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>RDS</td>\n<td>Managed relational databases</td>\n<td>SQL, связи, заданная схема</td>\n</tr>\n<tr>\n<td>Aurora</td>\n<td>Relational, совместимость с MySQL/PostgreSQL</td>\n<td>AWS-managed relational engine</td>\n</tr>\n<tr>\n<td>DynamoDB</td>\n<td>Managed NoSQL key-value/document</td>\n<td>Гибкие items, масштабирование, быстрый доступ по ключам</td>\n</tr>\n<tr>\n<td>Redshift</td>\n<td>Data warehouse</td>\n<td>Аналитика больших наборов данных, OLAP</td>\n</tr>\n</tbody></table>\n<p>У RDS AWS управляет значительной частью обслуживания, backup и инфраструктуры. Клиент управляет данными, разрешениями и схемой приложения. RDS не устраняет необходимость понимать запросы и работу базы.</p>\n<p><strong>RDS Multi-AZ</strong> в классической модели primary/standby из лекции: синхронная репликация, standby для failover и availability. <strong>Read replica</strong>: асинхронная репликация, разгрузка чтения. Не выбирай standby как обычную read replica. У новых вариантов RDS бывают другие возможности: вопрос нужно читать в контексте описанной архитектуры.</p>\n<p>Реляционная модель — таблицы/строки/столбцы и schema. NoSQL в D5 — разные модели и гибкое представление данных. Утверждения лекции про vertical SQL и horizontal NoSQL — учебное упрощение, а не запрет на горизонтальное масштабирование реляционных систем.</p>\n",
      "academy": null
    },
    {
      "id": "F9",
      "title": "Архитектура облака",
      "terms": "Well-Architected · availability · Trusted Advisor",
      "number": 9,
      "course": "Foundations",
      "html": "<p><strong>Well-Architected Framework</strong> — рекомендации для оценки архитектуры. Шесть pillars: <strong>Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability</strong>. В F9 objectives указывают шесть, основной подробный разбор сильнее сосредоточен на первых пяти. Полный перечень подтверждён в <a href=\"https://docs.aws.amazon.com/wellarchitected/latest/framework/the-pillars-of-the-framework.html\">AWS Well-Architected</a>.</p>\n<table>\n<thead>\n<tr>\n<th>Pillar</th>\n<th>Как распознать в вопросе</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Operational Excellence</td>\n<td>Эксплуатация, мониторинг, улучшение процессов, small reversible changes</td>\n</tr>\n<tr>\n<td>Security</td>\n<td>Identity, защита данных, traceability, реагирование на security events</td>\n</tr>\n<tr>\n<td>Reliability</td>\n<td>Восстановление, выдерживание отказов, повторяемые изменения</td>\n</tr>\n<tr>\n<td>Performance Efficiency</td>\n<td>Подходящие ресурсы и эффективное выполнение требований</td>\n</tr>\n<tr>\n<td>Cost Optimization</td>\n<td>Устранение лишних затрат, соответствие capacity нагрузке</td>\n</tr>\n<tr>\n<td>Sustainability</td>\n<td>Снижение экологического воздействия и лишнего потребления ресурсов</td>\n</tr>\n</tbody></table>\n<p><strong>Availability = normal operation time / total time × 100%.</strong> Например, 99.9% доступности за 30 дней допускает 43.2 минуты недоступности. <strong>High availability</strong> минимизирует простой. <strong>Fault tolerance</strong> позволяет продолжить работу при отказе компонента. <strong>Recoverability</strong> — способность восстановить сервис после сбоя. Надёжность и доступность связаны, но не одинаковы.</p>\n<p><strong>Trusted Advisor</strong> предлагает рекомендации по AWS best practices. В версии F9 перечислены пять categories: <strong>Cost Optimization, Performance, Security, Fault Tolerance, Service Limits</strong>. Это перечень лекции, не проверенное утверждение о текущем полном наборе проверок продукта. <strong>Well-Architected</strong> — framework оценки архитектуры, <strong>Trusted Advisor</strong> — инструмент рекомендаций по среде.</p>\n",
      "academy": null
    },
    {
      "id": "F10",
      "title": "Масштабирование и мониторинг",
      "terms": "ELB · CloudWatch · EC2 Auto Scaling · SNS",
      "number": 10,
      "course": "Foundations",
      "html": "<h3>ELB, CloudWatch, Auto Scaling</h3>\n<table>\n<thead>\n<tr>\n<th>Компонент</th>\n<th>Его работа</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Elastic Load Balancing</td>\n<td>Распределить трафик между healthy targets</td>\n</tr>\n<tr>\n<td>CloudWatch</td>\n<td>Собрать metrics/logs и оценить alarm condition</td>\n</tr>\n<tr>\n<td>EC2 Auto Scaling</td>\n<td>Добавить/удалить/заменить EC2 instances</td>\n</tr>\n<tr>\n<td>SNS</td>\n<td>Отправить уведомление подписчикам</td>\n</tr>\n</tbody></table>\n<p><strong>ALB, Application Load Balancer</strong> — L7, HTTP(S), маршрутизация по path/host, удобно для web applications. <strong>NLB, Network Load Balancer</strong> — L4, TCP/UDP/TLS, высокая производительность, static IP scenarios. <strong>Classic Load Balancer</strong> — прежний тип, рассматриваемый в лекции. Три типа в слайдах не означают, что других типов не существует.</p>\n<p><strong>Listener</strong> принимает подключения на заданном protocol/port. <strong>Target group</strong> объединяет targets. <strong>Health check</strong> помогает исключать нездоровые targets из распределения трафика.</p>\n<p><strong>Auto Scaling group</strong> имеет minimum size, desired capacity и maximum size. <strong>Scale out/in</strong> — увеличить/уменьшить число instances. <strong>Scale up/down</strong> — изменить мощность отдельного instance. Scheduled scaling — известное время изменений, dynamic — реакция на metrics, predictive — прогноз.</p>\n<p>Пример: CPU держится выше порога → CloudWatch alarm → scaling policy → ASG запускает instances → после health checks load balancer направляет на них трафик. ELB сам по себе не заменяет ASG.</p>\n<p>В старых слайдах используется <strong>launch configuration</strong>. Его функция — шаблон запуска instances. При разборе актуальной практики AWS встречается <strong>launch template</strong>. Для вопроса по слайду распознавай назначение шаблона, не смешивай его с running instance или AMI.</p>\n",
      "academy": null
    },
    {
      "id": "D1",
      "title": "Введение в разработку",
      "terms": "Роли в облаке · пример кафе · документация",
      "number": 1,
      "course": "Developing",
      "html": "<p><strong>Developer</strong> пишет, тестирует и исправляет код. <strong>Cloud architect</strong> проектирует систему и выбирает архитектурные решения. <strong>DevOps engineer</strong> автоматизирует инфраструктуру, сборку и delivery. <strong>IT professional</strong> занимается технической эксплуатацией; <strong>IT leader</strong> руководит командой, бюджетом и выбором технологий.</p>\n<p>В café case S3 хранит статические страницы, DynamoDB — изменяемые данные о продуктах, API Gateway — интерфейс запросов. Позднейшие части полного курса расширяют архитектуру. Для этого экзамена подробно разбираем только указанные пройденные модули.</p>\n<h3>Где искать документацию</h3>\n<p>В <a href=\"https://docs.aws.amazon.com/\">AWS Documentation</a> можно найти руководства по сервисам, справочники API и ссылки на SDK. За сигнатурой Python-метода для S3 обращайся к справочнику Boto3, а за описанием концепций IAM — к IAM User Guide.</p>\n",
      "academy": null
    },
    {
      "id": "D2",
      "title": "Инструменты разработчика",
      "terms": "SDLC · SDK · Boto3 · CLI · CloudShell",
      "number": 2,
      "course": "Developing",
      "html": "<p>Основные software development phases из D2: <strong>Develop → Build → Test → Deploy → Maintain</strong>. Develop — код и review, Build — сборка и unit tests, Test — интеграционные/load/UI/security tests, Deploy — размещение, Maintain — эксплуатация и мониторинг. Unit tests могут запускаться при сборке: не связывай слово test только с одной фазой.</p>\n<table>\n<thead>\n<tr>\n<th>Инструмент</th>\n<th>Что даёт</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Console</td>\n<td>Графический web-интерфейс</td>\n</tr>\n<tr>\n<td>AWS CLI</td>\n<td>Команды из shell</td>\n</tr>\n<tr>\n<td>SDK</td>\n<td>Доступ к AWS services из кода на выбранном языке</td>\n</tr>\n<tr>\n<td>Service API</td>\n<td>Контракт операций сервиса</td>\n</tr>\n<tr>\n<td>IDE</td>\n<td>Среда редактирования, запуска и отладки кода</td>\n</tr>\n<tr>\n<td>AWS Toolkit</td>\n<td>Интеграция IDE с AWS</td>\n</tr>\n<tr>\n<td>CloudShell</td>\n<td>Shell в браузере, предаутентифицированный в console, инструменты уже установлены</td>\n</tr>\n<tr>\n<td>Amazon Q Developer</td>\n<td>Помощь с кодом, объяснением, тестированием, поиском уязвимостей и troubleshooting</td>\n</tr>\n</tbody></table>\n<p>Форма CLI: <code>aws &lt;service&gt; &lt;operation&gt; &lt;parameters&gt;</code>, например <code>aws s3 ls</code>. <strong>Endpoint</strong> — адрес входа в service API. <strong>Region</strong> и credentials/profile — разные настройки.</p>\n<p><strong>Boto3</strong> — AWS SDK for Python. <code>boto3.client(&#39;s3&#39;)</code> даёт низкоуровневые методы операций сервиса и ответы-структуры. <code>boto3.resource(&#39;s3&#39;)</code> даёт объектную абстракцию ресурсов, например Bucket. Не у всех сервисов есть resource API.</p>\n<pre><code class=\"language-python\">import boto3\n\ns3 = boto3.client(&#39;s3&#39;, region_name=&#39;eu-west-1&#39;)\ns3.upload_file(&#39;menu.json&#39;, &#39;exam-bucket&#39;, &#39;data/menu.json&#39;)\n</code></pre>\n<p>Здесь local filename — <code>menu.json</code>, bucket — <code>exam-bucket</code>, key — <code>data/menu.json</code>. Credentials в этом фрагменте не прописаны: SDK использует настроенный механизм получения credentials.</p>\n<p><strong>4xx</strong> обычно указывает на проблему запроса/доступа: проверь параметры, resource и permissions. <strong>5xx</strong> обычно указывает на server error: может понадобиться retry. В D2 это базовое правило. Отдельные 4xx, например throttling, тоже могут требовать retry. Для transient errors используют ограниченные retries с backoff, а не бесконечное немедленное повторение.</p>\n",
      "academy": null
    },
    {
      "id": "D3",
      "title": "Разработка с Amazon S3",
      "terms": "Buckets и keys · versioning · presigned URLs · CORS",
      "number": 3,
      "course": "Developing",
      "html": "<h3>Модель S3</h3>\n<ul>\n<li><strong>Bucket</strong> — контейнер объектов. Для обычных general purpose buckets в модели курса имя глобально уникально в AWS partition, bucket создаётся в выбранном Region.</li>\n<li><strong>Object</strong> — содержимое плюс metadata.</li>\n<li><strong>Key</strong> — полное имя объекта внутри bucket, например <code>photos/2026/cat.jpg</code>.</li>\n<li><strong>Prefix</strong> — начало key, позволяющее группировать объекты. В обычной модели S3 «папки» представлены prefixes.</li>\n<li><strong>Version ID</strong> — идентификатор версии при включённом versioning.</li>\n<li><strong>Metadata</strong> — system-defined или user-defined пары key-value. Для пользовательских HTTP metadata используется префикс <code>x-amz-meta-</code>.</li>\n</ul>\n<p>Пример URL: <code>https://exam-bucket.s3.eu-west-1.amazonaws.com/photos/cat.jpg</code>. Bucket — <code>exam-bucket</code>, Region — <code>eu-west-1</code>, object key — <code>photos/cat.jpg</code>. Наличие URL само по себе не даёт разрешения читать private object.</p>\n<p><strong>PUT</strong> загружает/заменяет объект, <strong>GET</strong> получает объект или диапазон bytes, <strong>DELETE</strong> удаляет объект/создаёт delete marker при соответствующих условиях versioning. Сервис также имеет другие API, например LIST и HEAD: фраза слайда «three operations» обозначает рассматриваемые основные действия.</p>\n<p><strong>Versioning</strong> сохраняет версии при перезаписи и помогает восстановить случайно удалённый объект. Обычный DELETE без version ID в versioned bucket обычно создаёт delete marker. После включения versioning можно suspend, но нельзя вернуть bucket в исходное unversioned состояние. Versioning не делает невозможным явное удаление конкретной версии.</p>\n<p><strong>Multipart upload</strong> разбивает загрузку на части, позволяет параллельную загрузку и повтор неудачной части. В лекции D3: recommended от 100 MB, required свыше 5 GB, максимальный объект 5 TB. Это численные значения учебного материала; если вопрос явно спрашивает текущие лимиты AWS, нужна отдельная проверка актуальной документации.</p>\n<p>Storage classes из лекции: Standard — частый доступ; Standard-IA — редкий доступ с быстрым retrieval; One Zone-IA — редкий доступ с размещением в одной AZ; Intelligent-Tiering — меняющийся/неизвестный pattern; Glacier и Deep Archive — архив. Не выбирай архив только по словам «редкий доступ», если одновременно требуется немедленное чтение: учитывай конкретный класс и время восстановления.</p>\n<p><strong>Lifecycle policy</strong> переводит объекты между подходящими storage classes и/или удаляет по заданным условиям. Versioning отвечает за версии, lifecycle — за управление их жизненным циклом.</p>\n<h3>S3 protection и access</h3>\n<p><strong>Identity policy</strong> прикрепляется к identity. <strong>Bucket policy</strong> — resource-based, задаёт доступ к bucket/objects. <strong>ACL</strong> — более старый механизм доступа, рассматриваемый в лекции. <strong>Block Public Access</strong> помогает ограничить публичность.</p>\n<p><strong>Presigned URL</strong> — временная подписанная ссылка на конкретную операцию с объектом. Использует разрешения подписавшего principal, не открывает весь bucket и не выдаёт получателю AWS secret key. Ссылка может стать недействительной раньше заданного срока, например при истечении временных credentials.</p>\n<p><strong>SSE-S3</strong> использует ключи S3, <strong>SSE-KMS</strong> — AWS KMS, <strong>SSE-C</strong> в модели лекции — ключи, предоставляемые клиентом. <strong>Client-side encryption</strong> шифрует данные до отправки. Новые загрузки S3 автоматически шифруются at rest по умолчанию. Это уточнение проверено по <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingServerSideEncryption.html\">AWS S3 documentation</a>.</p>\n<p><strong>CORS</strong> позволяет браузеру прочитать разрешённый ответ с другого origin. Он не выдаёт IAM permissions и не заменяет authentication/authorization. Origin включает scheme, hostname и port.</p>\n",
      "academy": null
    },
    {
      "id": "D4",
      "title": "Доступ к ресурсам",
      "terms": "IAM policies · роли · временные credentials · least privilege",
      "number": 4,
      "course": "Developing",
      "html": "<p><strong>AWS отвечает за security OF the cloud</strong>: физические здания, оборудование, инфраструктуру сети и виртуализацию. <strong>Клиент отвечает за security IN the cloud</strong>: данные, разрешения, приложения и доступные ему настройки.</p>\n<p>В EC2 клиент обновляет guest OS и свои приложения. В managed services AWS берёт на себя больше обслуживания платформы. При этом клиент по-прежнему выбирает, кто имеет доступ к его данным. Нельзя отвечать «AWS делает всю безопасность», увидев слово managed.</p>\n<table>\n<thead>\n<tr>\n<th>Понятие</th>\n<th>Что означает</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Principal</td>\n<td>Сущность, которая делает запрос: например пользователь или role session</td>\n</tr>\n<tr>\n<td>Authentication</td>\n<td>Кто ты? Проверка личности/credentials</td>\n</tr>\n<tr>\n<td>Authorization</td>\n<td>Что тебе разрешено делать? Проверка permissions</td>\n</tr>\n<tr>\n<td>IAM user</td>\n<td>Identity в аккаунте для пользователя или workload в традиционной модели IAM</td>\n</tr>\n<tr>\n<td>IAM group</td>\n<td>Набор пользователей для совместного назначения permissions</td>\n</tr>\n<tr>\n<td>IAM role</td>\n<td>Роль, которую принимает доверенная сущность, получая временные credentials</td>\n</tr>\n<tr>\n<td>IAM policy</td>\n<td>JSON-документ с правилами разрешения или запрета</td>\n</tr>\n</tbody></table>\n<p>Группы содержат IAM users. Пользователь может состоять в нескольких группах. Роль не является обычным членом IAM group. Роль может использовать приложение, AWS service или человек, которому доверено её принимать.</p>\n<p><strong>Console credentials</strong>: имя пользователя и пароль, возможно MFA. <strong>Programmatic credentials</strong>: access key ID и secret access key. У временных credentials также есть <strong>session token</strong>. Для приложения на EC2 предпочтительна IAM role с необходимыми permissions: SDK может получить временные credentials, без ключей в исходном коде или AMI.</p>\n<p><strong>Least privilege</strong>: разрешить только нужные actions на нужных resources. <strong>MFA</strong> добавляет фактор проверки личности, но сама по себе не выдаёт дополнительные permissions.</p>\n<h3>Как читать IAM policy</h3>\n<pre><code class=\"language-json\">{\n  &quot;Version&quot;: &quot;2012-10-17&quot;,\n  &quot;Statement&quot;: [{\n    &quot;Effect&quot;: &quot;Allow&quot;,\n    &quot;Action&quot;: &quot;s3:GetObject&quot;,\n    &quot;Resource&quot;: &quot;arn:aws:s3:::exam-bucket/*&quot;\n  }]\n}\n</code></pre>\n<p>Этот statement разрешает получать объекты в <code>exam-bucket</code>. Он не разрешает удалять объекты и не равнозначен разрешению <code>s3:ListBucket</code>.</p>\n<ul>\n<li><strong>Effect</strong>: Allow или Deny.</li>\n<li><strong>Action</strong>: операция, например <code>s3:GetObject</code>.</li>\n<li><strong>Resource</strong>: ARN ресурса, к которому относится действие.</li>\n<li><strong>Principal</strong>: кому разрешается действие в resource-based policy.</li>\n<li><strong>Condition</strong>: дополнительные условия, если они указаны.</li>\n<li><strong>Version</strong>: версия языка policy. Это не дата создания текущей политики.</li>\n</ul>\n<p>Упрощённое правило для типовых задач курса: сначала <strong>implicit deny</strong>, затем ищем применимые Allow, затем учитываем ограничения. <strong>Explicit Deny перекрывает Allow</strong>. В реальной оценке также действуют SCP, permissions boundaries и другие ограничения, поэтому наличия одного Allow не всегда достаточно.</p>\n<table>\n<thead>\n<tr>\n<th>Классификация</th>\n<th>Различие</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Identity-based / resource-based</td>\n<td>Политика прикреплена к identity или к ресурсу</td>\n</tr>\n<tr>\n<td>Managed / inline</td>\n<td>Политика существует отдельно и переиспользуется или встроена в конкретную identity</td>\n</tr>\n<tr>\n<td>AWS managed / customer managed</td>\n<td>Отдельную managed policy поддерживает AWS или сам клиент</td>\n</tr>\n</tbody></table>\n<p>Это две разные классификации. <strong>Inline policy у IAM user/group/role является identity-based</strong>. В D4, слайд 32, есть ошибочная подпись resource-based. Проверено по <a href=\"https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html\">AWS IAM documentation</a>.</p>\n",
      "academy": null
    },
    {
      "id": "D5",
      "title": "Разработка с DynamoDB",
      "terms": "Keys · GSI/LSI · Query/Scan · RCU/WCU · Streams",
      "number": 5,
      "course": "Developing",
      "html": "<p><strong>Table → items → attributes</strong>. Item соответствует отдельной записи, attribute — её полю. Не все items должны иметь одинаковые non-key attributes. При этом key schema таблицы задана.</p>\n<table>\n<thead>\n<tr>\n<th>Primary key</th>\n<th>Правило уникальности</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Simple: partition key</td>\n<td>Значение partition key уникально для item</td>\n</tr>\n<tr>\n<td>Composite: partition key + sort key</td>\n<td>Уникальна комбинация двух значений, partition key может повторяться</td>\n</tr>\n</tbody></table>\n<p>Например, <code>CustomerId</code> + <code>OrderDate</code>: у одного клиента несколько заказов, различаются sort key. Partition key проходит через hash function для распределения данных. Items с одним partition key упорядочены по sort key. Плохое распределение обращений может создать <strong>hot partition</strong>, поэтому важны равномерно используемые ключи.</p>\n<h3>Secondary indexes</h3>\n<table>\n<thead>\n<tr>\n<th>Свойство</th>\n<th>GSI</th>\n<th>LSI</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Partition key</td>\n<td>Может отличаться от base table</td>\n<td>Тот же, что у base table</td>\n</tr>\n<tr>\n<td>Sort key</td>\n<td>Может отличаться, необязателен при simple key</td>\n<td>Другой sort key</td>\n</tr>\n<tr>\n<td>Создание</td>\n<td>Можно при создании и добавить позже</td>\n<td>При создании таблицы</td>\n</tr>\n<tr>\n<td>Consistency чтения</td>\n<td>Eventually consistent</td>\n<td>Eventual или strong</td>\n</tr>\n<tr>\n<td>Provisioned throughput</td>\n<td>Собственные настройки</td>\n<td>Использует capacity таблицы</td>\n</tr>\n</tbody></table>\n<p>GSI позволяет другой access pattern по другому ключу. LSI позволяет иначе сортировать items для того же partition key. <strong>Global в GSI не означает multi-Region</strong>. Multi-Region replication — это <strong>global tables</strong>. Уточнения по индексам: <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SecondaryIndexes.html\">AWS secondary indexes</a>.</p>\n<h3>Operations</h3>\n<table>\n<thead>\n<tr>\n<th>Операция</th>\n<th>Что делает</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>CreateTable</td>\n<td>Создаёт таблицу</td>\n</tr>\n<tr>\n<td>PutItem</td>\n<td>Создаёт item или полностью заменяет item с тем же primary key</td>\n</tr>\n<tr>\n<td>UpdateItem</td>\n<td>Меняет указанные attributes</td>\n</tr>\n<tr>\n<td>GetItem</td>\n<td>Получает один item по полному primary key</td>\n</tr>\n<tr>\n<td>DeleteItem</td>\n<td>Удаляет item по primary key</td>\n</tr>\n<tr>\n<td>Query</td>\n<td>Ищет по равенству partition key, возможно условие по sort key</td>\n</tr>\n<tr>\n<td>Scan</td>\n<td>Читает items таблицы/индекса, затем может применять filter</td>\n</tr>\n<tr>\n<td>Batch operations</td>\n<td>Группируют чтение/запись нескольких items</td>\n</tr>\n<tr>\n<td>Transaction operations</td>\n<td>Обеспечивают согласованное all-or-nothing выполнение</td>\n</tr>\n</tbody></table>\n<p>Для composite key при <code>GetItem</code> нужны оба key attributes. <code>Query</code> по индексу использует ключи индекса. FilterExpression не превращает Scan в эффективный поиск по ключу и не устраняет стоимость прочитанных, затем отфильтрованных данных. У Batch нет общей гарантии all-or-nothing только потому, что операции объединены.</p>\n<h3>Read consistency и throughput</h3>\n<p><strong>Eventually consistent</strong> может вернуть данные без самого последнего успешного изменения, стоит меньше capacity. <strong>Strongly consistent</strong> отражает ранее успешно завершившиеся записи при чтении. По умолчанию чтение eventual. Для таблиц/LSI можно указать <code>ConsistentRead=True</code>; для GSI strong read не поддерживается. <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html\">AWS read consistency</a>.</p>\n<p><strong>Provisioned</strong>: задаёшь RCU/WCU. <strong>On-demand</strong>: платишь за запросы, удобно при неизвестной/неровной нагрузке. On-demand не означает отсутствие quotas.</p>\n<p>Для обычных независимых операций чтения/записи одинаковых items в задачах курса:</p>\n<pre><code class=\"language-text\">Strong RCU = reads_per_second × ceil(item_size_KB / 4)\nEventual RCU = reads_per_second × ceil(item_size_KB / 4) / 2\nWCU = writes_per_second × ceil(item_size_KB / 1)\n</code></pre>\n<p><code>ceil</code> округляет вверх. Размер округляй для item, а минуты сначала переводишь в секунды. Это не универсальная формула для всех особенностей Query/Scan/batch. Transactional operations требуют удвоенной capacity относительно соответствующих обычных strong reads/writes. Единицы и правила проверены по <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Constraints.html\">AWS capacity documentation</a>.</p>\n<p><strong>Пример со слайдов D5 36–37</strong>: 20 items/с, по 11 KB, eventual read. <code>ceil(11/4)=3</code>, <code>20×3/2 = 30 RCU</code>. При strong read получится 60 RCU.</p>\n<p><strong>Пример со слайдов D5 38–39</strong>: 120 items/мин, по 7 KB. <code>120/60=2 writes/с</code>, <code>2×7 = 14 WCU</code>.</p>\n<p>Ещё для самопроверки: 10 strong reads/с по 5 KB = <strong>20 RCU</strong>; 10 eventual reads/с по 5 KB = <strong>10 RCU</strong>; 5 writes/с по 1.2 KB = <strong>10 WCU</strong>.</p>\n<h3>Streams, global tables, backup</h3>\n<p><strong>DynamoDB Streams</strong> содержит записи изменений items, организованные в shards. Может запускать обработку через Lambda. <strong>Global tables</strong> реплицируют таблицу между выбранными Regions. <strong>Backup/PITR</strong> нужны для восстановления данных после нежелательных изменений. Репликация и backup не взаимозаменяемы: ошибка приложения может реплицироваться.</p>\n<p>Для модели курса запомни eventual replication global tables. В актуальном DynamoDB есть и варианты multi-Region strong consistency, поэтому не учи утверждение «все global tables при любых настройках только eventual» как вечное правило. <a href=\"https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html\">AWS documentation</a>.</p>\n",
      "academy": null
    },
    {
      "id": "D6",
      "title": "REST API и API Gateway",
      "terms": "Интеграции · stages · authorizers · throttling",
      "number": 6,
      "course": "Developing",
      "html": "<p><strong>API</strong> — контракт взаимодействия приложений, скрывающий детали реализации. <strong>API Gateway</strong> — managed сервис, который принимает запросы, маршрутизирует их к backend, может проверять доступ, ограничивать частоту и собирать monitoring.</p>\n<p><strong>RESTful request/response</strong> обычно stateless: серверу не требуется хранить контекст сессии предыдущих запросов, чтобы понять текущий. <strong>WebSocket</strong> — длительное двустороннее соединение, удобно для chat/realtime updates.</p>\n<p>В API Gateway есть <strong>REST APIs</strong>, <strong>HTTP APIs</strong> и <strong>WebSocket APIs</strong>. REST и HTTP APIs оба подходят для RESTful сценариев. REST API в лекции имеет больше возможностей управления, HTTP API ориентирован на простой proxy с меньшей стоимостью/latency. Не переноси feature одного типа API на все остальные.</p>\n<h3>Resource, method, integration</h3>\n<p><code>GET /products/34</code>: <code>/products/34</code> — путь к ресурсу, <code>GET</code> — method, <code>34</code> может быть path parameter. <code>?category=coffee</code> — query parameter. Body — payload запроса. Headers — дополнительные сведения, например authorization/content type.</p>\n<table>\n<thead>\n<tr>\n<th>HTTP method</th>\n<th>Типовое намерение</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>GET</td>\n<td>Получить данные</td>\n</tr>\n<tr>\n<td>POST</td>\n<td>Создать/запустить действие</td>\n</tr>\n<tr>\n<td>PUT</td>\n<td>Создать или полностью заменить ресурс по заданному адресу</td>\n</tr>\n<tr>\n<td>PATCH</td>\n<td>Частично обновить</td>\n</tr>\n<tr>\n<td>DELETE</td>\n<td>Удалить</td>\n</tr>\n<tr>\n<td>OPTIONS</td>\n<td>Информация о разрешённых взаимодействиях, в том числе CORS preflight</td>\n</tr>\n</tbody></table>\n<p>Создать REST API можно через console, CLI/SDK или импорт OpenAPI definition. <strong>OpenAPI</strong> описывает контракт API в JSON/YAML.</p>\n<p>Поток non-proxy REST integration: <strong>method request → integration request → backend → integration response → method response</strong>. Method request обращён к клиенту, integration request — к backend.</p>\n<table>\n<thead>\n<tr>\n<th>Integration</th>\n<th>Как понимать</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Lambda proxy</td>\n<td>Gateway передаёт сведения запроса в Lambda; функция формирует ответ в ожидаемом proxy формате</td>\n</tr>\n<tr>\n<td>Lambda non-proxy/custom</td>\n<td>Можно явно настроить преобразование request/response</td>\n</tr>\n<tr>\n<td>HTTP proxy</td>\n<td>Передача запроса HTTP backend</td>\n</tr>\n<tr>\n<td>AWS service integration</td>\n<td>Вызов поддерживаемого AWS service без промежуточного собственного кода</td>\n</tr>\n<tr>\n<td>Mock</td>\n<td>Ответ для тестирования без реального backend</td>\n</tr>\n<tr>\n<td>Private integration</td>\n<td>Доступ к private backend через подходящий VPC link</td>\n</tr>\n</tbody></table>\n<p><strong>Mapping template</strong> преобразует payload в custom integration. В обычном REST Lambda proxy ответ включает <code>statusCode</code>, headers и строковое <code>body</code>. Не считай любой произвольный JSON автоматически корректным proxy response.</p>\n<p>Endpoint types REST API в лекции: <strong>edge-optimized</strong> — через управляемый CloudFront; <strong>Regional</strong> — endpoint региона; <strong>private</strong> — доступ через VPC interface endpoint. Private API endpoint и private backend integration — разные понятия.</p>\n<h3>Deployment, stage, canary</h3>\n<p><strong>Deployment</strong> — snapshot конфигурации API. <strong>Stage</strong> — именованная ссылка на deployment плюс настройки окружения, например <code>dev</code>, <code>test</code>, <code>prod</code>. Упрощение «stage = snapshot» в D6 слайд 60 неточно. <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-stages.html\">AWS stages</a>.</p>\n<p><strong>Stage variables</strong> позволяют выбирать настройки/разные backend, например Lambda aliases dev/prod. Для одной API и двух aliases из sample question D6 подходят две stages со своими stage variables.</p>\n<p><strong>Canary deployment</strong> отправляет часть трафика на новую версию для проверки. Отдельные environments и распределение небольшой доли трафика на экспериментальную версию решают разные задачи.</p>\n<h3>Access, CORS, throttling</h3>\n<table>\n<thead>\n<tr>\n<th>Механизм</th>\n<th>Задача</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>IAM authorization</td>\n<td>Доступ по IAM credentials/permissions, signed requests</td>\n</tr>\n<tr>\n<td>Cognito authorizer для REST API</td>\n<td>Проверка пользовательских токенов</td>\n</tr>\n<tr>\n<td>JWT authorizer для HTTP API</td>\n<td>Проверка JWT от настроенного issuer</td>\n</tr>\n<tr>\n<td>Lambda authorizer</td>\n<td>Собственная логика проверки token/request</td>\n</tr>\n<tr>\n<td>Resource policy</td>\n<td>Ограничения на доступ к API, например по principal/network context</td>\n</tr>\n<tr>\n<td>WAF</td>\n<td>Фильтрация нежелательных HTTP(S) запросов</td>\n</tr>\n<tr>\n<td>CORS</td>\n<td>Разрешение браузеру прочитать cross-origin response</td>\n</tr>\n<tr>\n<td>Usage plans + API keys</td>\n<td>Идентификация клиентов для usage/quota/throttling</td>\n</tr>\n</tbody></table>\n<p><strong>API key не заменяет authentication/authorization.</strong> Для ограничения доступа AWS предлагает IAM, Lambda authorizer или Cognito. Quotas/throttling usage plan применяются best effort, это не абсолютная гарантия запрета превышения. <a href=\"https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html\">AWS API keys and usage plans</a>.</p>\n<p><strong>Throttling</strong> ограничивает частоту запросов. При превышении может вернуться <strong>429 Too Many Requests</strong>. В лекции настройки идут от более конкретных client/method к stage/method и account-level ограничениям. Не заучивай общий quota как одинаковый для всех Regions и аккаунтов.</p>\n<p><strong>CORS preflight</strong>: браузер может сначала отправить OPTIONS. Ответ сообщает допустимые origins/methods/headers. CORS не защищает endpoint от прямых запросов произвольного клиента, например из CLI, и не выдаёт доступ к private S3 объекту.</p>\n<h3>Monitoring и optimization</h3>\n<table>\n<thead>\n<tr>\n<th>Метрика/сервис</th>\n<th>Что означает</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Count</td>\n<td>Количество API calls</td>\n</tr>\n<tr>\n<td>Latency</td>\n<td>Полное время от получения запроса Gateway до отправки ответа</td>\n</tr>\n<tr>\n<td>IntegrationLatency</td>\n<td>Время взаимодействия с backend</td>\n</tr>\n<tr>\n<td>4XXError / 5XXError</td>\n<td>Client/server errors</td>\n</tr>\n<tr>\n<td>CacheHitCount</td>\n<td>Запрос обслужен из cache</td>\n</tr>\n<tr>\n<td>CacheMissCount</td>\n<td>Понадобилось обращение к backend</td>\n</tr>\n<tr>\n<td>CloudWatch</td>\n<td>Metrics, alarms, logs</td>\n</tr>\n<tr>\n<td>CloudTrail</td>\n<td>Аудит операций с API Gateway</td>\n</tr>\n<tr>\n<td>X-Ray</td>\n<td>Трассировка пути запроса и поиск задержек</td>\n</tr>\n</tbody></table>\n<p>Кэш REST API снижает повторные обращения к backend. Cache key должен различать запросы, ответы на которые различаются. <strong>TTL</strong> задаёт время жизни записи. <strong>Compression</strong> уменьшает размер передаваемого payload, но добавляет работу по сжатию/распаковке.</p>\n",
      "academy": null
    }
  ],
  "questions": [
    {
      "id": "lecture-1",
      "module": "F1",
      "question": "A company wants to replace large upfront investments in servers with payments based on actual resource consumption. Which cloud advantage addresses this goal?",
      "options": [
        "Eliminate every operational expense",
        "Reserve maximum capacity permanently",
        "Trade capital expense for variable expense",
        "Benefit from a fixed hardware procurement cycle"
      ],
      "answer": "C",
      "explanation": "Облако позволяет заменить покупку оборудования расходами по использованию. Это не устраняет все операционные расходы.",
      "source": "F1: 15–21"
    },
    {
      "id": "lecture-2",
      "module": "F1",
      "question": "Which cloud service model gives a customer control over the guest operating system of a virtual server?",
      "options": [
        "SaaS",
        "DNS",
        "PaaS",
        "IaaS"
      ],
      "answer": "D",
      "explanation": "В IaaS клиент управляет guest OS и приложением. SaaS предоставляет готовое приложение, PaaS берёт на себя больше управления платформой.",
      "source": "F1: 10–13"
    },
    {
      "id": "lecture-3",
      "module": "F1",
      "question": "An application automatically adds capacity during busy periods and removes it when demand falls. Which concept does this BEST demonstrate?",
      "options": [
        "Data sovereignty",
        "Capital expenditure",
        "Durability",
        "Elasticity"
      ],
      "answer": "D",
      "explanation": "Elasticity означает подстройку мощности вверх и вниз под нагрузку. Durability относится к сохранности данных.",
      "source": "F1: 15–21; F3: 12"
    },
    {
      "id": "lecture-4",
      "module": "F1",
      "question": "Which set contains ONLY AWS Cloud Adoption Framework perspectives?",
      "options": [
        "Compute, Storage, Database",
        "Security, Reliability, Sustainability",
        "Business, People, Governance",
        "Development, Testing, Production"
      ],
      "answer": "C",
      "explanation": "Business, People, Governance — perspectives CAF. Reliability и Sustainability относятся к Well-Architected, а development/production — к окружениям.",
      "source": "F1: 32–40"
    },
    {
      "id": "lecture-5",
      "module": "F2",
      "question": "A developer wants to estimate the monthly cost of a planned architecture before deploying it. Which tool is the BEST fit?",
      "options": [
        "AWS Artifact",
        "AWS Pricing Calculator",
        "Amazon Route 53",
        "AWS CloudTrail"
      ],
      "answer": "B",
      "explanation": "Pricing Calculator моделирует будущие расходы. CloudTrail хранит audit events, Artifact — compliance documents, Route 53 — DNS.",
      "source": "F2: 20–21"
    },
    {
      "id": "lecture-6",
      "module": "F2",
      "question": "Which pairing of billing tools and purposes is correct?",
      "options": [
        "Budgets deploys EC2; Cost Explorer creates IAM users",
        "Cost Explorer analyzes spending trends; Budgets alerts on configured thresholds",
        "Pricing Calculator enforces IAM permissions; Bills performs tracing",
        "Cost Explorer sends every API request; Budgets hosts files"
      ],
      "answer": "B",
      "explanation": "Cost Explorer помогает анализировать расходы и прогноз. Budgets уведомляет о достижении настроенных порогов, но сам по себе не задаёт IAM permissions.",
      "source": "F2: billing section"
    },
    {
      "id": "lecture-7",
      "module": "F2",
      "question": "A company needs centralized management and consolidated billing for several AWS accounts. Which service should it use?",
      "options": [
        "AWS Organizations",
        "Amazon CloudFront",
        "Amazon EBS",
        "AWS CloudShell"
      ],
      "answer": "A",
      "explanation": "Organizations управляет несколькими аккаунтами и поддерживает consolidated billing. Аккаунты при этом остаются отдельными.",
      "source": "F2: 31–37"
    },
    {
      "id": "lecture-8",
      "module": "F2",
      "question": "Which cost should be included in a Total Cost of Ownership comparison between on-premises infrastructure and AWS?",
      "options": [
        "Only the salary of the application developer",
        "Only outbound internet traffic",
        "IT staff labor, facilities, power, and equipment costs",
        "Only the purchase price of servers"
      ],
      "answer": "C",
      "explanation": "TCO включает прямые и косвенные расходы, включая эксплуатацию, персонал, помещения и оборудование. Один вид расходов не описывает весь TCO.",
      "source": "F2: 17–18"
    },
    {
      "id": "lecture-9",
      "module": "F3",
      "question": "Which statement correctly describes AWS infrastructure scope?",
      "options": [
        "A VPC belongs to one Region, and a subnet belongs to one Availability Zone",
        "An Availability Zone always contains exactly one server",
        "An edge location is always a complete AWS Region",
        "A subnet spans every Region"
      ],
      "answer": "A",
      "explanation": "VPC — региональная сеть, subnet относится к одной AZ. AZ может включать несколько дата-центров.",
      "source": "F3: 7–13, 26; F5: 12"
    },
    {
      "id": "lecture-10",
      "module": "F3",
      "question": "Which factors should influence the choice of an AWS Region? Choose TWO.",
      "options": [
        "The number of IAM groups",
        "Data residency requirements",
        "Latency to users",
        "The color of the service icon"
      ],
      "answer": "BC",
      "explanation": "Выбор региона зависит от требований к размещению данных и задержки до пользователей. Также в лекции названы доступность сервисов и стоимость.",
      "source": "F3: 8"
    },
    {
      "id": "lecture-11",
      "module": "F3",
      "question": "Which infrastructure component does CloudFront use to deliver cached content closer to users?",
      "options": [
        "DynamoDB sort keys",
        "EC2 key pairs",
        "Edge locations",
        "IAM groups"
      ],
      "answer": "C",
      "explanation": "CloudFront использует edge locations. Остальные варианты относятся к identity, подключению к EC2 и модели данных.",
      "source": "F3: 11–13"
    },
    {
      "id": "lecture-12",
      "module": "F3",
      "question": "Which pair is treated as global services in the course?",
      "options": [
        "EBS volumes and subnets",
        "DynamoDB tables and EC2 instances",
        "EC2 and Lambda",
        "IAM and Route 53"
      ],
      "answer": "D",
      "explanation": "В activity F3 IAM и Route 53 названы глобальными, EC2 и Lambda — региональными. Subnets и EBS volumes имеют привязку к AZ.",
      "source": "F3: 26"
    },
    {
      "id": "lecture-13",
      "module": "F4",
      "question": "Under the shared responsibility model, who patches the guest operating system on an Amazon EC2 instance?",
      "options": [
        "The customer",
        "The internet service provider",
        "The AWS billing team",
        "AWS, for every EC2 instance"
      ],
      "answer": "A",
      "explanation": "Клиент отвечает за guest OS EC2. AWS отвечает за физические серверы и underlying infrastructure.",
      "source": "F4: shared responsibility; D4: 7–12"
    },
    {
      "id": "lecture-14",
      "module": "F4",
      "question": "An application on EC2 must read a private S3 bucket. Which solution avoids embedding long-term access keys in the application?",
      "options": [
        "Store root credentials in user data",
        "Attach an IAM role with the required permissions to the instance",
        "Copy an access key into the AMI",
        "Make the entire bucket public"
      ],
      "answer": "B",
      "explanation": "Role предоставляет workload временные credentials. Least privilege ограничивает доступ нужными объектами/операциями.",
      "source": "F4: IAM; D4: 21–25, 47–49"
    },
    {
      "id": "lecture-15",
      "module": "F4",
      "question": "Which service records who made an AWS API call and when it occurred?",
      "options": [
        "Amazon CloudWatch metrics",
        "Amazon EFS",
        "AWS Pricing Calculator",
        "AWS CloudTrail"
      ],
      "answer": "D",
      "explanation": "CloudTrail предназначен для API audit. CloudWatch metrics показывает показатели работы, а не заменяет audit trail.",
      "source": "F4: account security; F10: 11"
    },
    {
      "id": "lecture-16",
      "module": "F4",
      "question": "A user has an applicable Allow for s3:DeleteObject and an applicable explicit Deny for the same request. What is the result?",
      "options": [
        "Allow wins because it appears first",
        "Both policies are ignored",
        "The user chooses which policy applies",
        "The request is denied"
      ],
      "answer": "D",
      "explanation": "Explicit Deny имеет приоритет над Allow. Порядок statements не меняет это правило.",
      "source": "D4: 34–35, 43"
    },
    {
      "id": "lecture-17",
      "module": "F5",
      "question": "A private EC2 instance needs to download software updates from the internet without accepting unsolicited inbound internet connections. Which component is the BEST fit?",
      "options": [
        "An IAM group",
        "A public NAT gateway with appropriate routes",
        "An S3 object tag",
        "A Route 53 hosted zone alone"
      ],
      "answer": "B",
      "explanation": "Public NAT gateway позволяет инициировать исходящий IPv4 трафик из private subnet. Для работы также нужны корректные маршруты и IGW на публичной стороне.",
      "source": "F5: 20–21"
    },
    {
      "id": "lecture-18",
      "module": "F5",
      "question": "Which comparison of security groups and network ACLs is correct?",
      "options": [
        "Both support only explicit Deny rules",
        "Both are attached directly to S3 objects",
        "Security groups are stateless; NACLs are stateful",
        "Security groups are stateful; NACLs are stateless"
      ],
      "answer": "D",
      "explanation": "SG учитывает состояние соединения и разрешает ответный трафик. NACL проверяет направления отдельно, поэтому нужны правила обратного трафика.",
      "source": "F5: 33–39"
    },
    {
      "id": "lecture-19",
      "module": "F5",
      "question": "How many IPv4 addresses are available for resources in a standard AWS /24 subnet after the five reserved addresses are excluded?",
      "options": [
        "254",
        "251",
        "248",
        "256"
      ],
      "answer": "B",
      "explanation": "В /24 всего 2^(32−24)=256 адресов. После вычитания пяти зарезервированных остаётся 251.",
      "source": "F5: 14"
    },
    {
      "id": "lecture-20",
      "module": "F5",
      "question": "Instances in a private subnet need access to S3 without routing requests through a NAT gateway or internet gateway. Which option fits this requirement?",
      "options": [
        "An S3 gateway VPC endpoint",
        "An internet-facing load balancer",
        "An EC2 key pair",
        "A public DNS record alone"
      ],
      "answer": "A",
      "explanation": "Gateway endpoint для S3 предоставляет private path к сервису. DNS record сам по себе не создаёт такую связность.",
      "source": "F5: 26"
    },
    {
      "id": "lecture-21",
      "module": "F6",
      "question": "A batch processing job can resume after interruptions and has flexible completion time. Which EC2 purchasing option is usually the BEST fit for reducing compute cost?",
      "options": [
        "Only manual capacity planning",
        "A permanent maximum On-Demand fleet",
        "Dedicated Hosts for every task",
        "Spot Instances"
      ],
      "answer": "D",
      "explanation": "Spot подходит interruption-tolerant workloads. Требование к возобновлению после interruption делает этот вариант подходящим.",
      "source": "F6: 46–48"
    },
    {
      "id": "lecture-22",
      "module": "F6",
      "question": "Which service helps developers deploy web application code while reducing the work of provisioning and managing the application's environment?",
      "options": [
        "Amazon ECR",
        "Amazon Route 53",
        "AWS Elastic Beanstalk",
        "AWS CloudTrail"
      ],
      "answer": "C",
      "explanation": "Beanstalk разворачивает приложение и управляет окружением. ECR хранит container images, Route 53 предоставляет DNS.",
      "source": "F6: 79–89"
    },
    {
      "id": "lecture-23",
      "module": "F6",
      "question": "Which service is a registry for container images?",
      "options": [
        "AWS Lambda",
        "Amazon ECR",
        "Amazon EKS",
        "Amazon ECS"
      ],
      "answer": "B",
      "explanation": "ECR — container registry. ECS и EKS оркестрируют контейнеры, Lambda выполняет функции.",
      "source": "F6: 58–66"
    },
    {
      "id": "lecture-24",
      "module": "F6",
      "question": "Which statements describe AWS Lambda in the course? Choose TWO.",
      "options": [
        "It can run code in response to events",
        "Customers do not provision or manage its underlying servers",
        "Customers must patch the physical hosts",
        "It is primarily a block storage service"
      ],
      "answer": "AB",
      "explanation": "Lambda — event-driven serverless compute. Физическая инфраструктура существует, но клиент не управляет её серверами.",
      "source": "F6: 68–75"
    },
    {
      "id": "lecture-25",
      "module": "F7",
      "question": "Which service provides persistent block storage commonly used as an EC2 instance disk?",
      "options": [
        "Amazon EBS",
        "Amazon S3",
        "Amazon CloudFront",
        "Amazon Route 53"
      ],
      "answer": "A",
      "explanation": "EBS предоставляет block volumes. S3 — object storage, CloudFront — CDN.",
      "source": "F7: 5–14"
    },
    {
      "id": "lecture-26",
      "module": "F7",
      "question": "Several Linux EC2 instances need to access a shared file system over NFS. Which service is the BEST fit?",
      "options": [
        "Amazon EFS",
        "Amazon ECR",
        "An individual instance's temporary instance store",
        "AWS CloudTrail"
      ],
      "answer": "A",
      "explanation": "EFS предоставляет общую сетевую файловую систему. Instance store относится к конкретному host и не решает задачу shared NFS.",
      "source": "F7: 36–42"
    },
    {
      "id": "lecture-27",
      "module": "F7",
      "question": "What does storage durability describe?",
      "options": [
        "The percentage of successful DNS lookups",
        "The number of instances in an Auto Scaling group",
        "The ability to preserve data over time",
        "How many requests an API authorizer allows"
      ],
      "answer": "C",
      "explanation": "Durability относится к сохранности данных. Availability описывает доступность в нужный момент.",
      "source": "F7: 32, 54"
    },
    {
      "id": "lecture-28",
      "module": "F7",
      "question": "A company must keep records for years, rarely retrieves them, and accepts a long retrieval time. Which storage choice is the BEST fit?",
      "options": [
        "An appropriate S3 Glacier archival storage class",
        "An ECR repository",
        "A continuously running compute-optimized instance",
        "EC2 instance store"
      ],
      "answer": "A",
      "explanation": "Архивный класс подходит при редком чтении и допустимой задержке retrieval. Условие про время восстановления важно для выбора.",
      "source": "F7: 44–54"
    },
    {
      "id": "lecture-29",
      "module": "F8",
      "question": "Which service is a managed NoSQL key-value and document database?",
      "options": [
        "Amazon DynamoDB",
        "Amazon RDS for PostgreSQL",
        "Amazon EFS",
        "Amazon Redshift"
      ],
      "answer": "A",
      "explanation": "DynamoDB — NoSQL key-value/document database. RDS — relational, Redshift — warehouse, EFS — file storage.",
      "source": "F8: 31–36"
    },
    {
      "id": "lecture-30",
      "module": "F8",
      "question": "In the primary/standby RDS Multi-AZ architecture shown in the lectures, what is the main purpose of the standby?",
      "options": [
        "Serve as the normal destination for read scaling",
        "Store container images",
        "Improve availability through failover",
        "Replace database backups completely"
      ],
      "answer": "C",
      "explanation": "Классический Multi-AZ standby нужен для failover. Для масштабирования чтения в лекции используются read replicas.",
      "source": "F8: 13–15"
    },
    {
      "id": "lecture-31",
      "module": "F8",
      "question": "A company wants to run analytical queries over a large warehouse of business data. Which service is the BEST match?",
      "options": [
        "Amazon EBS",
        "Amazon Redshift",
        "Amazon Route 53",
        "AWS IAM"
      ],
      "answer": "B",
      "explanation": "Redshift — managed data warehouse для аналитики. EBS может хранить blocks, но сам не является warehouse service.",
      "source": "F8: 38–47"
    },
    {
      "id": "lecture-32",
      "module": "F8",
      "question": "Which relational database service is compatible with MySQL and PostgreSQL in the lectures?",
      "options": [
        "Amazon CloudFront",
        "Amazon Aurora",
        "Amazon DynamoDB",
        "Amazon S3"
      ],
      "answer": "B",
      "explanation": "Aurora — relational engine с MySQL/PostgreSQL compatibility. Остальные варианты не являются совместимым relational engine.",
      "source": "F8: 49–53"
    },
    {
      "id": "lecture-33",
      "module": "F9",
      "question": "A team replaces manual operational procedures with code and makes frequent, small, reversible changes. Which Well-Architected pillar does this MOST directly support?",
      "options": [
        "Cost Optimization only",
        "Operational Excellence",
        "Geolocation",
        "Data residency"
      ],
      "answer": "B",
      "explanation": "Operations as code и small reversible changes относятся к Operational Excellence. Они помогают управлять эксплуатацией и улучшать процессы.",
      "source": "F9: 17–18"
    },
    {
      "id": "lecture-34",
      "module": "F9",
      "question": "Which tool provides recommendations about AWS environment best practices, such as security and cost optimization?",
      "options": [
        "Amazon ECR",
        "Amazon EFS",
        "AWS CloudShell",
        "AWS Trusted Advisor"
      ],
      "answer": "D",
      "explanation": "Trusted Advisor предлагает рекомендации по среде AWS. CloudShell — рабочий shell, а не инструмент таких рекомендаций.",
      "source": "F9: 53–60"
    },
    {
      "id": "lecture-35",
      "module": "F9",
      "question": "A service has 99.9% availability over a 30-day month. How much downtime does this allow over that period?",
      "options": [
        "432 minutes",
        "43.2 minutes",
        "4.32 minutes",
        "Zero downtime"
      ],
      "answer": "B",
      "explanation": "30×24×60=43200 минут. Недоступность 0.1%: 43200×0.001=43.2 минуты.",
      "source": "F9: 47"
    },
    {
      "id": "lecture-36",
      "module": "F9",
      "question": "Which option is one of the six Well-Architected pillars named in the module objectives?",
      "options": [
        "Platform",
        "Sustainability",
        "Governance",
        "People"
      ],
      "answer": "B",
      "explanation": "Sustainability — pillar Well-Architected. People, Governance и Platform — perspectives Cloud Adoption Framework.",
      "source": "F9: 3, 7, 42; F1: CAF"
    },
    {
      "id": "lecture-37",
      "module": "F10",
      "question": "Which service adds or removes EC2 instances according to configured demand conditions?",
      "options": [
        "Amazon Route 53",
        "Amazon S3 versioning",
        "Amazon EC2 Auto Scaling",
        "AWS Artifact"
      ],
      "answer": "C",
      "explanation": "EC2 Auto Scaling управляет количеством instances. ELB распределяет трафик между ними, CloudWatch измеряет нагрузку.",
      "source": "F10: 22–30"
    },
    {
      "id": "lecture-38",
      "module": "F10",
      "question": "A web application needs HTTP routing based on URL paths, such as /products and /images. Which load balancer is the BEST fit?",
      "options": [
        "Only a DNS resolver",
        "An IAM role",
        "Application Load Balancer",
        "An EBS volume"
      ],
      "answer": "C",
      "explanation": "ALB работает на application layer и подходит для HTTP path/host routing. DNS resolver не маршрутизирует URL paths приложения.",
      "source": "F10: ELB section"
    },
    {
      "id": "lecture-39",
      "module": "F10",
      "question": "Which service can send notifications to subscribers when a CloudWatch alarm triggers?",
      "options": [
        "Amazon SNS",
        "Amazon Aurora",
        "Amazon ECR",
        "AWS Config"
      ],
      "answer": "A",
      "explanation": "SNS отправляет уведомления подписчикам. Alarm может вызвать SNS action, чтобы оповестить людей или другие системы.",
      "source": "F10: 15, 40–41"
    },
    {
      "id": "lecture-40",
      "module": "F10",
      "question": "An Auto Scaling group has min=2, desired=3, and max=6. A permitted scaling action requests one additional instance. What is the new desired capacity?",
      "options": [
        "7",
        "6",
        "2",
        "4"
      ],
      "answer": "D",
      "explanation": "Scale out на один instance увеличивает desired с 3 до 4. Это находится в диапазоне min/max. Сам max не является целью каждого scaling action.",
      "source": "F10: 25–28"
    },
    {
      "id": "lecture-41",
      "module": "D2",
      "question": "Which sequence matches the major software development phases shown in the Developing lecture?",
      "options": [
        "Build, Route, Encrypt, Invoice, Delete",
        "Maintain, Delete, Bill, Archive, Route",
        "Develop, Build, Test, Deploy, Maintain",
        "Deploy, Purchase servers, Develop, Stop"
      ],
      "answer": "C",
      "explanation": "В D2 выделены Develop, Build, Test, Deploy, Maintain. При этом часть тестов, например unit tests, запускается и в фазе Build.",
      "source": "D2: 11"
    },
    {
      "id": "lecture-42",
      "module": "D2",
      "question": "Which option provides a pre-authenticated shell in the AWS Management Console with AWS tools already installed?",
      "options": [
        "AWS CloudShell",
        "Amazon Redshift",
        "Amazon EBS",
        "AWS Artifact"
      ],
      "answer": "A",
      "explanation": "CloudShell позволяет работать с CLI из браузера без локальной установки инструментов. Artifact предоставляет compliance documents.",
      "source": "D2: 23"
    },
    {
      "id": "lecture-43",
      "module": "D2",
      "question": "What is Boto3?",
      "options": [
        "An AWS hardware encryption device",
        "An EC2 purchasing option",
        "A DNS routing policy",
        "The AWS SDK for Python"
      ],
      "answer": "D",
      "explanation": "Boto3 — SDK for Python. Он позволяет вызывать AWS services из Python-кода.",
      "source": "D2: 25–28"
    },
    {
      "id": "lecture-44",
      "module": "D2",
      "question": "Which statement correctly compares Boto3 client and resource interfaces?",
      "options": [
        "A client maps service operations to methods; a resource provides object-oriented abstractions",
        "A resource removes the need for permissions",
        "A client always creates a new AWS account",
        "A client can only be used in the browser"
      ],
      "answer": "A",
      "explanation": "Client ближе к service API operations. Resource предоставляет более высокоуровневые объекты, например Bucket, но permissions нужны в обоих случаях.",
      "source": "D2: 27–28"
    },
    {
      "id": "lecture-45",
      "module": "D2",
      "question": "What is a service endpoint?",
      "options": [
        "A permanent root password",
        "A data center employee",
        "A billing invoice",
        "A URL through which an application accesses a service API"
      ],
      "answer": "D",
      "explanation": "Endpoint — адрес входа в web service/API. Он не является credential и сам не определяет права вызывающего.",
      "source": "D2: 26"
    },
    {
      "id": "lecture-46",
      "module": "D2",
      "question": "Which AWS CLI command structure is correct?",
      "options": [
        "service aws parameters operation",
        "aws service operation parameters",
        "operation parameters service aws",
        "parameters operation aws service"
      ],
      "answer": "B",
      "explanation": "Форма AWS CLI: aws, service, operation/subcommand, затем parameters. Например aws ec2 describe-instances.",
      "source": "D2: 22"
    },
    {
      "id": "lecture-47",
      "module": "D2",
      "question": "A developer receives AccessDenied while reading a private S3 object. What should the developer investigate FIRST?",
      "options": [
        "Move all data into an ECR repository",
        "Retry the identical request forever with no delay",
        "The caller's identity, permissions, and applicable resource restrictions",
        "Change the color theme of the console"
      ],
      "answer": "C",
      "explanation": "AccessDenied указывает на проблему доступа. Нужно проверить identity и policies/ограничения, а не рассчитывать, что бесконечный retry выдаст permissions.",
      "source": "D2: 30; D4: authorization"
    },
    {
      "id": "lecture-48",
      "module": "D2",
      "question": "Which task is an Amazon Q Developer capability described in the lecture?",
      "options": [
        "Replace every software test with a billing estimate",
        "Help explain code and identify security vulnerabilities",
        "Automatically make every application permission unrestricted",
        "Provide persistent block storage"
      ],
      "answer": "B",
      "explanation": "В лекции Q Developer помогает генерировать/объяснять код, тестировать и искать vulnerabilities. Это не storage service и не основание расширять permissions.",
      "source": "D2: 38–39"
    },
    {
      "id": "lecture-49",
      "module": "D3",
      "question": "For the key images/menu.png in a general purpose S3 bucket, what does images/ normally represent?",
      "options": [
        "A real EC2 directory mounted into S3",
        "A partition key",
        "A key prefix used to imply a folder structure",
        "An Availability Zone"
      ],
      "answer": "C",
      "explanation": "В обычной модели S3 prefix создаёт логическую группировку объектов. Это не директория файловой системы EC2.",
      "source": "D3: 16–17"
    },
    {
      "id": "lecture-50",
      "module": "D3",
      "question": "An S3 bucket contains the only current copy of documents. Which feature helps recover from accidental overwrites and ordinary deletions?",
      "options": [
        "Versioning",
        "A Route 53 weighted record",
        "Disabling every backup",
        "A larger EC2 instance type"
      ],
      "answer": "A",
      "explanation": "Versioning сохраняет версии объекта. При обычном удалении без version ID появляется delete marker, а предыдущую версию можно восстановить при наличии permissions.",
      "source": "D3: 23, 42–44"
    },
    {
      "id": "lecture-51",
      "module": "D3",
      "question": "A user needs to download one private S3 object for a limited time without receiving AWS credentials. Which option is the BEST fit?",
      "options": [
        "Share the root secret access key",
        "Place the user's password in the object metadata",
        "Make all objects in the account public",
        "Generate a presigned GET URL for that object"
      ],
      "answer": "D",
      "explanation": "Presigned URL предоставляет временный доступ к указанной операции/объекту с правами подписавшего principal. Она не требует передать secret key получателю.",
      "source": "D3: 32"
    },
    {
      "id": "lecture-52",
      "module": "D3",
      "question": "What is a benefit of S3 multipart upload?",
      "options": [
        "It bypasses all bucket policies",
        "It makes the bucket globally writable",
        "Failed parts can be retried without uploading the entire object again",
        "It converts object storage into NFS"
      ],
      "answer": "C",
      "explanation": "Multipart upload разбивает загрузку на части, которые можно отправлять параллельно и повторять отдельно. Доступ всё равно проверяется.",
      "source": "D3: 20"
    },
    {
      "id": "lecture-53",
      "module": "D3",
      "question": "A browser application on one origin calls an S3 resource on another origin. What does configuring CORS do?",
      "options": [
        "Creates a read replica of the bucket",
        "Eliminates the need for IAM permissions",
        "Grants AdministratorAccess to every visitor",
        "Allows the browser to read permitted cross-origin responses"
      ],
      "answer": "D",
      "explanation": "CORS регулирует поведение браузера для cross-origin requests. IAM/bucket permissions остаются отдельной проверкой.",
      "source": "D3: 33"
    },
    {
      "id": "lecture-54",
      "module": "D3",
      "question": "Which statement about S3 encryption is correct?",
      "options": [
        "Object encryption always encrypts all object metadata",
        "TLS protects data in transit; server-side encryption protects stored object data at rest",
        "SSE-KMS removes every need for access policies",
        "Enabling encryption automatically makes every object public"
      ],
      "answer": "B",
      "explanation": "TLS относится к передаче, server-side encryption — к сохранённым данным. Шифрование не выдаёт permissions, а metadata не следует считать целиком зашифрованной SSE.",
      "source": "D3: 28; AWS SSE documentation"
    },
    {
      "id": "lecture-55",
      "module": "D3",
      "question": "A developer uses upload_file('local.csv', 'exam-bucket', 'reports/daily.csv'). What is the S3 object key?",
      "options": [
        "local.csv",
        "exam-bucket",
        "upload_file",
        "reports/daily.csv"
      ],
      "answer": "D",
      "explanation": "В upload_file аргументы: local filename, bucket, key. Полное имя объекта внутри bucket — reports/daily.csv.",
      "source": "D3: 21; D2: SDK"
    },
    {
      "id": "lecture-56",
      "module": "D3",
      "question": "Which option is a resource-based policy attached to S3 resources?",
      "options": [
        "An EC2 instance type",
        "An S3 bucket policy",
        "A local Python variable",
        "An Auto Scaling desired capacity"
      ],
      "answer": "B",
      "explanation": "Bucket policy описывает доступ к ресурсу S3 и может содержать Principal. Это другая классификация, чем managed/inline IAM identity policy.",
      "source": "D3: 29–31"
    },
    {
      "id": "lecture-57",
      "module": "D4",
      "question": "What is the difference between authentication and authorization?",
      "options": [
        "They always mean the same operation",
        "Authentication chooses a Region; authorization compresses payloads",
        "Authentication establishes identity; authorization determines permitted actions",
        "Authorization always requires a public bucket"
      ],
      "answer": "C",
      "explanation": "Authentication отвечает «кто?», authorization — «что может делать?». Успешный вход не означает разрешения на все операции.",
      "source": "D4: 15"
    },
    {
      "id": "lecture-58",
      "module": "D4",
      "question": "Which credentials are commonly used together for a temporary AWS role session?",
      "options": [
        "Only the S3 bucket name",
        "Only the console display name",
        "Access key ID, secret access key, and session token",
        "An AMI ID and an instance type"
      ],
      "answer": "C",
      "explanation": "Временные AWS credentials включают access key ID, secret access key и session token. AMI ID и bucket name не являются credentials.",
      "source": "D4: 19–25; временные credentials"
    },
    {
      "id": "lecture-59",
      "module": "D4",
      "question": "A company wants an IAM policy that can be attached to several roles and updated centrally. Which option is the BEST fit?",
      "options": [
        "A customer managed policy",
        "An S3 object metadata field",
        "An EC2 user data string",
        "A separate inline policy manually copied into each role"
      ],
      "answer": "A",
      "explanation": "Customer managed policy существует отдельно и переиспользуется. Inline policy встроена в одну identity и имеет отношение 1:1.",
      "source": "D4: 32; AWS IAM correction"
    },
    {
      "id": "lecture-60",
      "module": "D4",
      "question": "Which statement about an inline IAM policy embedded in a user, group, or role is correct?",
      "options": [
        "It is an identity-based policy associated with one identity",
        "It is a new AWS account",
        "It disables all explicit Deny statements",
        "It is always an S3 bucket policy"
      ],
      "answer": "A",
      "explanation": "Inline IAM policy является identity-based. Подпись resource-based в D4 слайд 32 ошибочна, это подтверждает документация IAM.",
      "source": "D4: 32; AWS IAM correction"
    },
    {
      "id": "lecture-61",
      "module": "D4",
      "question": "What does the principle of least privilege require?",
      "options": [
        "Grant access to every resource first and never review it",
        "Give every developer root credentials",
        "Disable MFA for administrators",
        "Grant only the actions and resources needed for the task"
      ],
      "answer": "D",
      "explanation": "Least privilege ограничивает actions/resources реальной потребностью. Широкий доступ заранее противоречит этому принципу.",
      "source": "D4: 36"
    },
    {
      "id": "lecture-62",
      "module": "D4",
      "question": "An EC2 application needs access to a DynamoDB table in another account. Which approach BEST follows the role-based model in the lectures?",
      "options": [
        "Configure an assumable role with appropriate trust and permissions",
        "Make all AWS services in both accounts public",
        "Embed the target account's root key in the AMI",
        "Email permanent credentials to every instance"
      ],
      "answer": "A",
      "explanation": "Для cross-account access используются role trust и permissions. Принятие роли должно быть разрешено, а её permissions — ограничены нужной таблицей.",
      "source": "D4: 21, cross-account section"
    },
    {
      "id": "lecture-63",
      "module": "D4",
      "question": "An application has permission to GetObject but no permission to DeleteObject. No other applicable policy grants deletion. What is the result of a DeleteObject request?",
      "options": [
        "Allowed if the object is encrypted",
        "Allowed because read implies write",
        "Denied because the required permission is missing",
        "Allowed if the bucket name is known"
      ],
      "answer": "C",
      "explanation": "Разрешение чтения не подразумевает удаление. При отсутствии применимого разрешения действует implicit deny.",
      "source": "D4: authorization; D3: object operations"
    },
    {
      "id": "lecture-64",
      "module": "D4",
      "question": "Which policy element identifies the AWS operation, such as s3:GetObject?",
      "options": [
        "Principal's display name",
        "Action",
        "Version",
        "SortKey"
      ],
      "answer": "B",
      "explanation": "Action задаёт операцию. Resource задаёт объект действия, Effect — Allow/Deny, Version — версию policy language.",
      "source": "D4: 30–35"
    },
    {
      "id": "lecture-65",
      "module": "D5",
      "question": "A DynamoDB table has CustomerId as its partition key and OrderId as its sort key. Which condition uniquely identifies an item?",
      "options": [
        "CustomerId alone must always be unique",
        "The combination of CustomerId and OrderId must be unique",
        "OrderId alone must always be unique across all tables",
        "Every item must have identical non-key attributes"
      ],
      "answer": "B",
      "explanation": "При composite primary key уникальна пара partition key + sort key. Отдельный partition key может повторяться для разных sort keys.",
      "source": "D5: 17–19"
    },
    {
      "id": "lecture-66",
      "module": "D5",
      "question": "A table must support efficient queries using a different partition key from its existing primary key. Which feature is the BEST fit?",
      "options": [
        "A local secondary index with the same partition key",
        "An EC2 security group",
        "A global secondary index",
        "A CloudWatch alarm only"
      ],
      "answer": "C",
      "explanation": "GSI позволяет другой partition key и другой access pattern. LSI обязательно сохраняет partition key base table.",
      "source": "D5: 26–29"
    },
    {
      "id": "lecture-67",
      "module": "D5",
      "question": "Which statement about a local secondary index is correct?",
      "options": [
        "It uses the same partition key as the base table and a different sort key",
        "It removes the base table's primary key",
        "It always replicates the table to another Region",
        "It must have a different partition key from the base table"
      ],
      "answer": "A",
      "explanation": "LSI оставляет partition key таблицы, меняя sort key. Multi-Region replication относится к global tables, не к LSI.",
      "source": "D5: 28–29"
    },
    {
      "id": "lecture-68",
      "module": "D5",
      "question": "The application knows the partition key value and wants matching items, optionally restricted by sort key. Which operation is generally the appropriate starting point?",
      "options": [
        "Scan every item and ignore the key",
        "CreateRole",
        "Query",
        "ListBuckets"
      ],
      "answer": "C",
      "explanation": "Query использует partition key equality и возможное sort key condition. Scan читает items таблицы/индекса и обычно менее подходящ при известном ключе.",
      "source": "D5: operations section"
    },
    {
      "id": "lecture-69",
      "module": "D5",
      "question": "An application independently reads 20 items per second, each 11 KB, using eventual consistency. How many RCUs are needed in the course's provisioned-capacity calculation?",
      "options": [
        "60",
        "20",
        "15",
        "30"
      ],
      "answer": "D",
      "explanation": "ceil(11/4)=3 блока. 20×3=60 для strong, затем /2 для eventual: 30 RCU.",
      "source": "D5: 36–37"
    },
    {
      "id": "lecture-70",
      "module": "D5",
      "question": "An application writes 120 items per minute, each 7 KB, using ordinary nontransactional writes. How many WCUs are required?",
      "options": [
        "840",
        "14",
        "7",
        "120"
      ],
      "answer": "B",
      "explanation": "Сначала 120/60=2 writes/с. Каждый item требует 7 WCU на одну запись/с, итого 2×7=14.",
      "source": "D5: 38–39"
    },
    {
      "id": "lecture-71",
      "module": "D5",
      "question": "An application independently reads ten 5 KB items per second with strong consistency. How many RCUs are required?",
      "options": [
        "20",
        "40",
        "10",
        "5"
      ],
      "answer": "A",
      "explanation": "Один 5 KB item округляется до двух блоков по 4 KB. 10×2=20 RCU. Для eventual потребовалось бы 10.",
      "source": "D5: 33"
    },
    {
      "id": "lecture-72",
      "module": "D5",
      "question": "Which pairing of DynamoDB features and purposes is correct?",
      "options": [
        "Streams records item changes; global tables replicates tables across Regions",
        "Streams creates IAM users; global tables hosts container images",
        "Streams replaces every backup; global tables removes all permissions",
        "Streams provides DNS; global tables is an EC2 disk"
      ],
      "answer": "A",
      "explanation": "Streams даёт записи изменений, global tables — multi-Region replication. Backup/PITR остаётся отдельной задачей восстановления.",
      "source": "D5: 42–49"
    },
    {
      "id": "lecture-73",
      "module": "D6",
      "question": "A chat application needs a persistent bidirectional communication channel between clients and the service. Which API type is the BEST fit?",
      "options": [
        "WebSocket API",
        "A static S3 object key only",
        "A Cost Explorer report",
        "An EC2 AMI"
      ],
      "answer": "A",
      "explanation": "WebSocket поддерживает длительную двустороннюю связь, подходящую для chat. Обычный REST request/response не предоставляет тот же постоянный канал.",
      "source": "D6: 18–22"
    },
    {
      "id": "lecture-74",
      "module": "D6",
      "question": "Which statement correctly distinguishes an API Gateway deployment and stage?",
      "options": [
        "A deployment is an IAM user",
        "A stage is always a DynamoDB backup",
        "A deployment is a snapshot; a stage is a named reference to a deployment with settings",
        "Both terms mean an EC2 instance type"
      ],
      "answer": "C",
      "explanation": "Deployment фиксирует API configuration, stage ссылается на deployment и задаёт окружение/настройки. Формулировка stage=snapshot в одном слайде неточна.",
      "source": "D6: 55–60; AWS stages correction"
    },
    {
      "id": "lecture-75",
      "module": "D6",
      "question": "One REST API uses a Lambda function with dev and prod aliases. How can the developer support both environments with little duplicated API configuration?",
      "options": [
        "Create a separate AWS account for every HTTP request",
        "Create dev/prod stages and use stage variables to select the Lambda aliases",
        "Store the Lambda secret key in the URL",
        "Use only a canary and call it a development environment"
      ],
      "answer": "B",
      "explanation": "Stages и stage variables позволяют одной API обращаться к соответствующим aliases. Canary решает задачу постепенного выпуска версии, а не просто разделения сред.",
      "source": "D6: 55–60, 97–99"
    },
    {
      "id": "lecture-76",
      "module": "D6",
      "question": "A team wants to route 5% of production API traffic to a new deployment before a full release. Which feature should it use?",
      "options": [
        "An IAM password policy",
        "A larger CIDR prefix",
        "S3 object metadata",
        "A canary deployment"
      ],
      "answer": "D",
      "explanation": "Canary deployment направляет долю трафика новой версии. Это позволяет оценить её поведение до полного переключения.",
      "source": "D6: 58–60"
    },
    {
      "id": "lecture-77",
      "module": "D6",
      "question": "An API should return test data while the real backend is still being developed. Which integration is the BEST fit?",
      "options": [
        "Only an RDS read replica",
        "A billing budget",
        "A mandatory Direct Connect circuit",
        "Mock integration"
      ],
      "answer": "D",
      "explanation": "Mock integration возвращает настроенный ответ без backend. Полезна для разработки и проверки клиентского взаимодействия.",
      "source": "D6: backend integration section"
    },
    {
      "id": "lecture-78",
      "module": "D6",
      "question": "Which API Gateway mechanism should identify clients for usage tracking and usage-plan throttling, while dedicated authorization controls protect access?",
      "options": [
        "API keys associated with usage plans",
        "An EC2 launch image",
        "Only CORS",
        "S3 lifecycle rules"
      ],
      "answer": "A",
      "explanation": "API keys в usage plans служат для учёта/лимитов использования. AWS не рекомендует использовать их как замену IAM/Cognito/Lambda authorization.",
      "source": "D6: 71–79; AWS usage plans correction"
    },
    {
      "id": "lecture-79",
      "module": "D6",
      "question": "A browser on shop.example calls an API on api.example. The user is already authorized, but the browser rejects access to the cross-origin response. Which configuration should be investigated?",
      "options": [
        "EBS snapshot frequency",
        "The maximum size of an Auto Scaling group",
        "DynamoDB partition key distribution",
        "CORS allowed origins, methods, and headers"
      ],
      "answer": "D",
      "explanation": "При разрешённом доступе, но блокировке браузером cross-origin response, проверяют CORS. Если нет permissions, CORS сам по себе их не добавит.",
      "source": "D6: 66–69; D3: 33"
    },
    {
      "id": "lecture-80",
      "module": "D6",
      "question": "Which API Gateway metric measures the time spent interacting with the backend, rather than the full Gateway request-to-response time?",
      "options": [
        "CacheHitCount",
        "IntegrationLatency",
        "Count",
        "4XXError"
      ],
      "answer": "B",
      "explanation": "IntegrationLatency измеряет backend request/response time. Latency охватывает полное время обработки в Gateway, Count — число вызовов.",
      "source": "D6: 81–83"
    },
    {
      "id": "lecture-d1-1",
      "module": "D1",
      "question": "Who typically designs the overall cloud architecture and selects services to meet reliability and cost requirements?",
      "options": [
        "A cloud architect",
        "A technical support customer",
        "A billing contact",
        "An application end user"
      ],
      "answer": "A",
      "explanation": "Cloud architect проектирует архитектуру и выбирает технологии с учётом ограничений, стоимости и надёжности.",
      "source": "D1: 27–31"
    },
    {
      "id": "lecture-d1-2",
      "module": "D1",
      "question": "Which role is most directly responsible for writing, testing, and fixing application code?",
      "options": [
        "Cloud architect",
        "IT leader",
        "Software developer",
        "Billing administrator"
      ],
      "answer": "C",
      "explanation": "Software developer работает с кодом и прикладной логикой. Cloud architect сосредоточен на устройстве системы, а IT leader отвечает за команду и её работу.",
      "source": "D1: 27–31"
    },
    {
      "id": "lecture-d1-3",
      "module": "D1",
      "question": "In the café application, which service is used to store static website files such as HTML and JavaScript?",
      "options": [
        "Amazon DynamoDB",
        "Amazon S3",
        "AWS IAM",
        "Amazon API Gateway"
      ],
      "answer": "B",
      "explanation": "S3 хранит статические объекты сайта. DynamoDB хранит данные о товарах, а API Gateway принимает запросы приложения.",
      "source": "D1: café case; D3: S3 lab; D6: 89–91"
    },
    {
      "id": "lecture-d1-4",
      "module": "D1",
      "question": "A Python developer needs the parameters and return value for an S3 SDK method. Which reference is most appropriate?",
      "options": [
        "An AWS billing invoice",
        "The CAF perspectives overview",
        "The Route 53 console",
        "The Boto3 documentation"
      ],
      "answer": "D",
      "explanation": "Boto3 — AWS SDK для Python. Его документация описывает методы и параметры вызовов S3.",
      "source": "D1: 34; D2: 25–28"
    },
    {
      "question": "Which of these are advantages of moving from on-premises infrastructure to cloud computing?",
      "options": [
        "Avoiding large upfront hardware purchases",
        "Adding capacity when it is needed",
        "Reaching new geographic markets quickly",
        "Launching changes faster",
        "All four of these"
      ],
      "answer": "E",
      "explanation": "Все четыре пункта верны. Облако уменьшает первоначальные вложения, позволяет выделять ресурсы по запросу и упрощает быстрый запуск в новых регионах.",
      "id": "knowledge-check-f1-1",
      "module": "F1",
      "kind": "knowledge-check",
      "source": "F1 Knowledge Check · 1"
    },
    {
      "question": "What is the name of the pricing model in which customers pay for AWS resources as they consume them?",
      "options": [
        "Pay on decommissioning",
        "Pay as you go",
        "Pay when purchasing hardware",
        "Pay only after reserving capacity"
      ],
      "answer": "B",
      "explanation": "Pay as you go означает оплату по мере использования ресурсов. Долгосрочное резервирование не является обязательным условием этой модели.",
      "id": "knowledge-check-f1-2",
      "module": "F1",
      "kind": "knowledge-check",
      "source": "F1 Knowledge Check · 2"
    },
    {
      "question": "Which of the following falls outside the three standard cloud service models?",
      "options": [
        "Platform as a Service",
        "Infrastructure as a Service",
        "System Administration as a Service",
        "Software as a Service"
      ],
      "answer": "C",
      "explanation": "Три стандартные модели в этом модуле — IaaS, PaaS и SaaS. System Administration as a Service не входит в эту классификацию.",
      "id": "knowledge-check-f1-3",
      "module": "F1",
      "kind": "knowledge-check",
      "source": "F1 Knowledge Check · 3"
    },
    {
      "question": "True or false? AWS maintains the physical infrastructure behind its cloud services, and customers provision the resources they need.",
      "options": [
        "True",
        "False"
      ],
      "answer": "A",
      "explanation": "AWS обслуживает физическую инфраструктуру. Клиент выделяет нужные ему ресурсы и отвечает за их настройки и данные в пределах выбранного сервиса.",
      "id": "knowledge-check-f1-4",
      "module": "F1",
      "kind": "knowledge-check",
      "source": "F1 Knowledge Check · 4"
    },
    {
      "question": "Which activity is a burden of running your own data center rather than a cloud computing advantage?",
      "options": [
        "Deploying changes more quickly",
        "Paying to install servers in racks and power them",
        "Adjusting capacity when demand changes",
        "Replacing upfront capital costs with variable costs",
        "Benefiting from economies of scale"
      ],
      "answer": "B",
      "explanation": "Покупка, установка в стойки и питание физических серверов относятся к работе собственного дата-центра. При использовании AWS физической инфраструктурой управляет провайдер.",
      "id": "knowledge-check-f1-5",
      "module": "F1",
      "kind": "knowledge-check",
      "source": "F1 Knowledge Check · 5"
    },
    {
      "question": "Which two characteristics work against the advantages of cloud computing? Choose two.",
      "options": [
        "Repeated hardware procurement cycles",
        "High availability",
        "Long network delays",
        "Resources that can be created and discarded quickly",
        "Databases designed to tolerate failures"
      ],
      "answer": "AC",
      "explanation": "Циклы закупки оборудования замедляют запуск, а высокая задержка ухудшает отзывчивость. Высокая доступность, временные ресурсы и отказоустойчивость — возможности облака.",
      "id": "knowledge-check-f1-6",
      "module": "F1",
      "kind": "knowledge-check",
      "source": "F1 Knowledge Check · 6"
    },
    {
      "question": "Which AWS service belongs in the compute category?",
      "options": [
        "Amazon VPC",
        "Amazon S3",
        "Amazon EC2",
        "Amazon CloudFront",
        "Amazon Redshift"
      ],
      "answer": "C",
      "explanation": "EC2 предоставляет виртуальные серверы. VPC относится к сетям, S3 — к хранилищам, CloudFront — к доставке контента, Redshift — к аналитике данных.",
      "id": "knowledge-check-f1-7",
      "module": "F1",
      "kind": "knowledge-check",
      "source": "F1 Knowledge Check · 7"
    },
    {
      "question": "True or false? Before using cloud servers or storage over the internet, an AWS customer must own the physical servers providing those resources.",
      "options": [
        "True",
        "False"
      ],
      "answer": "B",
      "explanation": "Клиент получает доступ к ресурсам по запросу. Физическое оборудование для облачных сервисов находится у провайдера. Формулировка про обязательное владение оборудованием делает утверждение ложным.",
      "id": "knowledge-check-f1-8",
      "module": "F1",
      "kind": "knowledge-check",
      "source": "F1 Knowledge Check · 8"
    },
    {
      "question": "What drives economies of scale for a large cloud provider?",
      "options": [
        "A large number of competing providers",
        "Pooling demand from a large number of customers",
        "The number of services shown in the console",
        "High capital investment by each customer"
      ],
      "answer": "B",
      "explanation": "Когда провайдер объединяет спрос множества клиентов, он распределяет затраты по большему объёму и снижает стоимость обслуживания в расчёте на единицу ресурса.",
      "id": "knowledge-check-f1-9",
      "module": "F1",
      "kind": "knowledge-check",
      "source": "F1 Knowledge Check · 9"
    },
    {
      "question": "Which three interfaces can customers use to interact directly with AWS service operations? Choose three.",
      "options": [
        "A phone call to technical support",
        "The AWS Marketplace catalog",
        "The AWS Management Console",
        "The AWS Command Line Interface (CLI)",
        "An AWS Software Development Kit (SDK)"
      ],
      "answer": "CDE",
      "explanation": "Console даёт графический интерфейс, CLI запускает команды, а SDK позволяет обращаться к AWS из кода. Marketplace служит каталогом, а звонок в поддержку не является интерфейсом управления ресурсами.",
      "id": "knowledge-check-f1-10",
      "module": "F1",
      "kind": "knowledge-check",
      "source": "F1 Knowledge Check · 10"
    }
  ],
  "quickReview": [
    {
      "title": "Отличия, которые нужно воспроизвести без подсказок",
      "html": "<table>\n<thead>\n<tr>\n<th>Пара</th>\n<th>Короткое правило</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>Region / AZ / edge</td>\n<td>География / изоляция внутри региона / доставка ближе к пользователю</td>\n</tr>\n<tr>\n<td>Authentication / authorization</td>\n<td>Кто ты / что можешь</td>\n</tr>\n<tr>\n<td>User / role</td>\n<td>Identity с собственными credentials в традиционной модели / принимаемая роль с временными credentials</td>\n</tr>\n<tr>\n<td>Identity policy / bucket policy</td>\n<td>На identity / на ресурсе</td>\n</tr>\n<tr>\n<td>Managed / inline</td>\n<td>Отдельная переиспользуемая / встроенная в одну identity</td>\n</tr>\n<tr>\n<td>SG / NACL</td>\n<td>Stateful allow на ENI / stateless allow+deny на subnet</td>\n</tr>\n<tr>\n<td>IGW / public NAT</td>\n<td>Прямая интернет-связность / исходящий доступ private workloads</td>\n</tr>\n<tr>\n<td>Route 53 / CloudFront</td>\n<td>DNS / CDN</td>\n</tr>\n<tr>\n<td>S3 / EBS / EFS</td>\n<td>Object / block / file</td>\n</tr>\n<tr>\n<td>Durability / availability</td>\n<td>Сохранность / доступность</td>\n</tr>\n<tr>\n<td>Multi-AZ standby / read replica</td>\n<td>Failover / масштабирование чтения</td>\n</tr>\n<tr>\n<td>GSI / LSI</td>\n<td>Другой возможный partition key / тот же partition key</td>\n</tr>\n<tr>\n<td>GSI / global tables</td>\n<td>Индекс / multi-Region replication</td>\n</tr>\n<tr>\n<td>Query / Scan</td>\n<td>По ключу / чтение items таблицы или индекса</td>\n</tr>\n<tr>\n<td>PutItem / UpdateItem</td>\n<td>Полная замена по ключу / изменение attributes</td>\n</tr>\n<tr>\n<td>Eventual / strong</td>\n<td>Возможна задержка отражения записи / актуальные успешные записи</td>\n</tr>\n<tr>\n<td>Deployment / stage</td>\n<td>Snapshot / именованная ссылка с настройками</td>\n</tr>\n<tr>\n<td>API key / authorizer</td>\n<td>Учёт использования / контроль доступа</td>\n</tr>\n<tr>\n<td>CORS / IAM</td>\n<td>Правила браузера / permissions</td>\n</tr>\n<tr>\n<td>CloudWatch / CloudTrail / Config</td>\n<td>Metrics и alarms / API audit / configurations</td>\n</tr>\n<tr>\n<td>ELB / Auto Scaling</td>\n<td>Трафик / число instances</td>\n</tr>\n<tr>\n<td>CAF / Well-Architected</td>\n<td>План перехода организации / качество архитектуры workload</td>\n</tr>\n</tbody></table>\n"
    },
    {
      "title": "Если осталось 90 минут",
      "html": "<ol>\n<li><strong>15 мин</strong>: IAM таблицы, shared responsibility, Deny, roles.</li>\n<li><strong>15 мин</strong>: SG/NACL, Region/AZ, IGW/NAT/endpoint.</li>\n<li><strong>15 мин</strong>: S3/EBS/EFS/Glacier, versioning, presigned URL, CORS.</li>\n<li><strong>20 мин</strong>: DynamoDB keys, GSI/LSI, Query/Scan, два расчёта RCU/WCU.</li>\n<li><strong>15 мин</strong>: API methods, integrations, stages, authorizers, throttling.</li>\n<li><strong>10 мин</strong>: CloudWatch/CloudTrail/Config, ELB/ASG, RDS/DynamoDB/Redshift.</li>\n</ol>\n<p>Это аварийный порядок повторения. Он не означает, что другие темы исключены из экзамена.</p>\n"
    },
    {
      "title": "Как читать multiple-choice question",
      "html": "<p>Сначала найди требование: <strong>LEAST operational overhead, MOST cost-effective, high availability, low latency, temporary access, protect against accidental deletion</strong>. Затем ограничения: терпит ли приложение interruption, нужен ли немедленный retrieval, есть ли фиксированный partition key, нужен ли доступ из браузера или из backend.</p>\n<p>Отбрасывай ответы, которые не решают обязательное условие. Например: дешёвый архив не подходит при требовании неподходящего для него retrieval time; permanent access keys не лучший выбор при требовании временного доступа EC2 workload; CORS не решает отсутствие IAM permissions.</p>\n<p><strong>Choose TWO</strong> требует ровно два ответа. <strong>NOT/EXCEPT</strong> меняют смысл вопроса. Не выбирай вариант только потому, что в нём больше знакомых AWS названий.</p>\n<p>После ошибки запиши: «Я перепутал X с Y. Различие: ...». Вернись к вопросу через несколько часов и объясни, почему остальные варианты хуже.</p>\n"
    }
  ]
}
