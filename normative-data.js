const normativeDocuments = {
  federal: [],
  regional: [
    {
      type: 'Закон ЛНР', number: '104-I', registrationDate: '05.11.2024',
      title: 'О молодежной политике в Луганской Народной Республике',
      description: 'Базовый региональный закон о целях, направлениях и формах реализации молодежной политики.',
      file: 'documents/regional/law-youth-policy.pdf'
    },
    {
      type: 'Закон ЛНР', number: '184-I', registrationDate: '08.09.2025',
      title: 'О добровольческой (волонтерской) деятельности в Луганской Народной Республике',
      description: 'Регулирует отношения, возникающие при осуществлении добровольческой деятельности в ЛНР.',
      file: 'documents/regional/law-volunteering.pdf'
    },
    {
      type: 'Закон ЛНР', number: '119-I', registrationDate: '19.12.2024',
      title: 'О патриотическом воспитании граждан в Луганской Народной Республике',
      description: 'Определяет цели, задачи и направления патриотического воспитания граждан в ЛНР.',
      file: 'documents/regional/law-patriotic-education.pdf'
    },
    {
      type: 'Постановление', number: '282/25', registrationDate: '12.12.2025',
      title: 'Государственная программа ЛНР «Молодежная политика»',
      description: 'О внесении изменений в государственную программу ЛНР «Молодежная политика» и изложении ее в новой редакции.',
      file: 'documents/regional/government-youth-policy-program.pdf'
    },
    {
      type: 'Постановление', number: '139/25', registrationDate: '05.08.2025',
      title: 'О реализации молодежных инициативных проектов в ЛНР',
      description: 'Положение о региональном конкурсе инициативных проектов и порядке предоставления субсидий муниципальным образованиям.',
      file: 'documents/regional/government-youth-initiatives.pdf'
    },
    {
      type: 'Постановление', number: '115/25', registrationDate: '25.06.2025',
      title: 'Типовое положение о молодежном совете при органе местного самоуправления',
      description: 'Определяет статус, цели, задачи и порядок деятельности муниципального молодежного совета.',
      file: 'documents/regional/government-youth-councils.pdf'
    },
    {
      type: 'Постановление', number: '21/25', registrationDate: '21.02.2025',
      title: 'О создании Проектного офиса по развитию молодежного туризма',
      description: 'Положение и состав Проектного офиса по развитию молодежного туризма в ЛНР.',
      file: 'documents/regional/government-youth-tourism-office.pdf'
    },
    {
      type: 'Указ Главы', number: 'УГ-1297/25', registrationDate: '08.12.2025',
      title: 'Республиканская межведомственная комиссия по вопросам молодежной политики',
      description: 'О создании республиканской межведомственной комиссии по вопросам молодежной политики в ЛНР.',
      file: 'documents/regional/decree-youth-policy-commission.pdf'
    },
    {
      type: 'Указ Главы', number: 'УГ-980/25', registrationDate: '12.09.2025',
      title: 'Комиссия по установлению связи между вредом добровольцу и волонтерской деятельностью',
      description: 'О создании комиссии ЛНР по установлению причинно-следственной связи при причинении вреда жизни или здоровью добровольца.',
      file: 'documents/regional/decree-volunteer-compensation-commission.pdf'
    },
    {
      type: 'Указ Главы', number: 'УГ-75/26', registrationDate: '03.02.2026',
      title: 'Об уполномоченном органе в области поддержки студенческих отрядов',
      description: 'Министерство молодежной политики ЛНР определено уполномоченным органом в области государственной поддержки студенческих отрядов.',
      file: 'documents/regional/decree-student-teams-authority.pdf'
    },
    {
      type: 'Указ Главы', number: 'УГ-288/24', registrationDate: '12.04.2024',
      title: 'Региональный координационный совет по взаимодействию с «Движением первых»',
      description: 'О создании Регионального координационного совета при Главе ЛНР по взаимодействию с «Движением первых».',
      file: 'documents/regional/decree-first-movement-council.pdf'
    },
    {
      type: 'Указ Главы', number: 'УГ-324/26', registrationDate: '21.04.2026',
      title: 'Совет по защите традиционных ценностей, культуры и исторической памяти',
      description: 'О Совете по защите традиционных российских духовно-нравственных ценностей, культуры и исторической памяти при Главе ЛНР.',
      file: 'documents/regional/decree-traditional-values-council.pdf'
    },
    {
      type: 'Приказ ММП', number: '63', registrationDate: '24.06.2025',
      title: 'Административный регламент включения молодежных объединений в реестр',
      description: 'Регламент предоставления государственной услуги по включению объединений в реестр получателей государственной поддержки.',
      file: 'documents/regional/order-register-service-regulation.pdf'
    },
    {
      type: 'Приказ ММП', number: '59', registrationDate: '16.04.2026',
      title: 'Порядок взаимодействия с организаторами и организациями добровольческой деятельности',
      description: 'Порядок взаимодействия Министерства и подведомственных учреждений с организаторами и организациями добровольческой деятельности.',
      file: 'documents/regional/order-volunteer-organizations-cooperation.pdf'
    },
    {
      type: 'Приказ ММП', number: '2', registrationDate: '13.01.2025',
      title: 'Перечень мер поддержки участников добровольческой деятельности',
      description: 'Об утверждении перечня мер поддержки участников добровольческой (волонтерской) деятельности на территории ЛНР.',
      file: 'documents/regional/order-volunteer-support.pdf'
    },
    {
      type: 'Приказ ММП', number: '12', registrationDate: '2025',
      title: 'План мероприятий по противодействию коррупции на 2025 год',
      description: 'План мероприятий по противодействию коррупции в Министерстве молодежной политики ЛНР.',
      file: 'documents/regional/order-anti-corruption-plan.pdf'
    },
    {
      type: 'Приказ ММП', number: '90', registrationDate: '22.06.2026',
      title: 'Комиссия по развитию добровольчества и взаимодействию с социально ориентированными НКО',
      description: 'Положение о работе комиссии при Совете по защите традиционных ценностей, культуры и исторической памяти при Главе ЛНР.',
      file: 'documents/regional/order-volunteering-commission.pdf'
    },
    {
      type: 'Приказ ММП', number: '132', registrationDate: '18.12.2024',
      title: 'Положение об Общественном совете при Министерстве молодежной политики ЛНР',
      description: 'Редакция положения 2024 года, утратившая силу после принятия приказа от 27.06.2025 № 64.',
      file: 'documents/regional/order-public-council-2024.pdf'
    },
    {
      type: 'Приказ ММП', number: '64', registrationDate: '27.06.2025',
      title: 'Положение об общественном совете при Министерстве молодежной политики ЛНР',
      description: 'Действующая редакция положения об общественном совете при Министерстве.',
      file: 'documents/regional/order-public-council-2025.pdf'
    },
    {
      type: 'Приказ ММП', number: '127', registrationDate: '10.12.2024',
      title: 'Порядок формирования реестра молодежных и детских общественных объединений',
      description: 'Порядок формирования и ведения реестра объединений, пользующихся государственной поддержкой в ЛНР.',
      file: 'documents/regional/order-youth-ngo-register.pdf'
    },
    {
      type: 'Приказ ММП', number: '33', registrationDate: '12.03.2026',
      title: 'Порядок формирования реестра студенческих отрядов ЛНР',
      description: 'Определяет процедуру формирования и ведения реестра студенческих отрядов, созданных на территории ЛНР.',
      file: 'documents/regional/order-student-teams-register.pdf'
    },
    {
      type: 'Приказ ММП', number: '128', registrationDate: '23.12.2024',
      title: 'Совет проректоров по реализации молодежной политики',
      description: 'Положение о Совете проректоров образовательных организаций высшего образования ЛНР при Министерстве молодежной политики.',
      file: 'documents/regional/order-vice-rectors-council.pdf'
    }
  ]
};
