import { GasProduct, FacilityHub, NoticeItem, MsdsDocument } from '../types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuA3hW9qDinMmw18ibnkRHvmt3wTg0NJaMSDgnAdBHTjD2eH25OXN2R439HN6uAy0wqXIiw8vKacgLHHVS_bC2JwZy8Lh0PEu3mkEN00-tuqyGcXRs7ezyfj64rCoA-HoryvX9Dz8bZp_wESaX2UwMGaGcdvl6AjYVG-tAKqMkKE8zxmoCPSbKzB47F0_oym2sWAdyhJOC4Fcmric3E0mydmRAOIDR8zVMnbyXC9FaoaGD2dhVeYFyP3Xg";

export const PRODUCT_IMAGES = {
  industrial: "https://lh3.googleusercontent.com/aida-public/AB6AXuDo_y4kaJmvp7Go8DnDrnng3DaGFRW5bn_3OuMcuDPLFoXCbbkyVM7ldtyopK03bIS1snmhEgjpFThlO1-VRxAgEhtqIPYA4RCu-soMtROIlrwlsr6qdOP38Y5pjg1FUFhqyRmh-O4tD1HKAqkS4_NWaTxoyLgbXyxFxcT89yN4kh-bVsvY_hadvHcfriamay8MgL5fED2DxreKaZIG_rBVja2GhVTFuAbPoAAYA2gUjCc0-FtLO6IVZg",
  fuel: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTiZw9oHVo5Ggy5Dr_mhwbpLF6egMZVngvIinYNAPcvzgnwkdYVJdXte7F_w7EiSBsZlcBwDQnSQMjlw-SzY9Gvo5nS3hkZpAt2NpA8yjV0MAxn1xadntFMZD4oFhb6MbQ949AUWQkO-wHvsHpiIHHFSgMqdK0UYitdQBV7pvNbviSpibkaDCbfkoPr2tLdoeMYe2KK1j8FoQD8yigmPW75c8DcqWg5Oje475NYmrKjDeNV8K8re7COQ",
  specialty: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh1yO_BmYWt0-6NUOG9szI561JlgNxI23D0SILtf24x3k5nkPL9guZt83eI-oURoVq7VI8UTtZqejuAsByJpjQzj8XA2ybOtY3LRoYKQDkl__uwJCRpoK1eVEMa7fx2LJImdrsENl7DwExhv20TxJu0BnCtQNpZvMNRabxfMstlb7MoOD7gmDhIq6WfWwf5pj-_3WwMfMMiu-6TlFWqD598Xw-prpjX4YooLecu1GIJ5cRbP-Ou443pg",
  medical: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWuZnWaTd84ek_46gTnAurV3DyVNAAuCSPZOpZB2mUiMatrItV6oGeNGqbwJzOs5QTI_GiJ2VyRnC2WDp1EFAlEuJB4VBm6tClN8yR7Oo-x38LZfbnJo_2tFQ2Um07nvfjSWrK-xoG2ERl1bAwldfvNrsyCLsqgnOpm8_r5biRktbevotT65_W6VbiWXwDUhUhZBTmHv_BoxMWRbraMV6tiY9KlBG_oNt7GUyFhcvg5JEbz0L5AGTOmg",
  calibration: "https://lh3.googleusercontent.com/aida-public/AB6AXuDa8g-l2IcG7Cp3fpuRnrWQmtoQhJnBDU_Ot2-b10EvHLZYmce4o_hyMOP_NSTX2I4uE1wC9m5OrDS1cHaUTghPrN3-_NtInUSoAG8rDfmIYPv-pUvj0JVjcAljzH_5wuEDHsXrbgQyUQkhIptnb2u1sExC24WveSGLmKI1vCzk-UfV1B9dbkTFq36iFUhxX2dko4ngkZy_gzXH5sfSwamkKovQAzS7mwF9TuvptPc7gRcs9R9UNJE6OA",
  infrastructure: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9bq3w6O1a3Ff0s77TeuBb6X70GbI7MHK85fB7SdW6SYziQe6IkrNXunyLrBCPg7wKhT_N_SKHfI-brTmqDGzKl-7HYx4G5c-kzv5nouxY3GWeg3hpW0qOomnZYypMFx0_3MPHLik-q-N4Hlg_w5RraBdA69-nlFKKEIPPlOjr0H1CocJp132Cxd11hpnxZrVIAhl7Ge2bXQOYirEVXivqHxm8uEzNeqozW2oRnwIEPYBWGK1GPX-OUQ",
};

export const LAB_IMAGES = {
  filling: "https://lh3.googleusercontent.com/aida-public/AB6AXuBgyb8M5LM3iwmyPMhc4zYx_46J1f5oDt7MG4UxnpQLHc9amH2Rx2xru2a3YkW80AB5bSre5lNp6GDJA-08umQxKkTN3WdaT0IZUJ-3X91X-h-ILLcjeeA4P8_WLQvzExbOKtdYOsOh355GQgLTKYrxSjsonzpllU8xeUA1zNwDBB9uAi1TONvtAWF-c3Y0z_kKYmwVPOHVNJnNfasfbaBkagnq7DXzW9w5yEVEf6HR0TxMRJ_fsoEe5Q",
  gc: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdFog1lj0QUgrpf5oQ8_stCzyMmwAC0eu2iLK2NiQ30bwgQeBYRl0ChRM_S7XeL7nDk9SRfz3ud07jLUem12Rzr8dxYCSHPs81o95sUHiwuDW8Aas7KwgKNfO5jqEuKgnFMNWTYzMys8I-T5bzYj6l_uxO40QwWuqL8qDFtAs-toJWbYHf-ogis98wkwmn-FAE9Nu-MgIjF9x89JxqiQ47m6y7Gd1BbLuFdcglzF-j1eT3jCF2tHP3_w",
  telemetry: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8K3tZcYGuAQ56oHUzR07GdXNXHPqGpAB2yHopVEWoeqUqrq7ZvAi69sHldBRQIO3XjzlAVY13q60vvbg4ZhuMQVDGICapGU75AjY-jM8qFA67W_8csFopXVd4HQiG9AwQJG3PUVrLrzpfpZdQgejxefhhBIAiANBpiFnVrd8Z25qXW7ZMMaqZLLt7QGfjnH88J31oC_I0cZyfxH4pJGyrVDb4AV09zjDxXaQp3W_6mX8w3ECP6BaufQ",
};

export const BENTO_IMAGES = {
  esg: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8lcvpW8dcvNpMCAmqFZF846i6rligSEwTmH8jmccHjjyJVos8wykUZdh7zq0iiWrZhFhHhHtzL87FIoOmz-ST9QYvCQqEzkVi3Afj9rcb2cGIpcN_34NA3U7_4A3pN8hzIbqikjU6gP9aFF7EF6vXpyw-wqqlHOi6U6QJx29n3wYRafjGVw08mwxHTfnS6Tzf0y-iw-cmE32FJJBrIMsL0g8NtXeJgjh6rKlYuv1j8SXKObrxK6m90g",
  history: "https://lh3.googleusercontent.com/aida-public/AB6AXuDm-nHFDEpsXib-kqzM5Lj5Trw5JXT0KcZor7rbQVft_rPECmdBPpnWgdkTKhtMi6bOVIu4jiXfkAJcLgZUzqafB2_BRG4WwptbaUSBWAi6PFCvCAeRNc75s1jyp-t-mi7WnUQVpO6J_sHAWeIOl-YPrTweGSAf0TJ6eY7qfBi0E-AoXgvJejzOtUAHyAk_oGYPUSkcZgdKTl7M5USFZv6-9kl_HfDX84g04shBb6NMJv9342u_MQ6O_w",
  msds: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxO8d_BeX8-w9-bbWxQ4fga9TngkFC1eL_F31hJffr7L4MixzX6Bgh86ajJqczxTF3QCLbaQyhFMmNbbP0wkyqpjkbeLq9FPsABQn95xPiJs5O5J6JorLX5lczEpWEjulb7ECw2r-fEw14qOPFteYKz8UR0I8jWWrBG9p71elC7byDEvhG1qjqzN5Ni1RrUWDZd7XIgexaxfL3V7F_hvsH7CjxDpRKznHAbQNRTXBqoPCjNNt3M0YIew",
  network: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtSk8AnbDuqSD_AashOtlL3jtJ3fr13IzFpWlMuPyOQuWnqqYOdgLRhcfVpYQYmaXyeQ-n3YOqUoj787VXwPuUgZv77AUkzBC4Lw9zZ3fbSLDKemoV-0k8zNMd3RvW8RatpXUuRZVTWknz4BwlfkYSbQdLfYpeQz1HxQBjtq7hTeqiwTW3GeLqe3uNvVcYulqlMIbXHSS6zeyPQbUgds1LfcTvG0RQRtuxR99EdGtrGpIdeKfwEe6tkQ",
};

export const GAS_PRODUCTS: GasProduct[] = [
  {
    id: 'prod-01',
    code: '01 / INDUSTRIAL',
    name: '산업용 가스 (Industrial Gases)',
    chemicalFormula: 'O₂, N₂, Ar, CO₂, He, H₂',
    category: 'industrial',
    categoryLabel: '산업용 가스',
    subtitle: '산소(O₂), 질소(N₂), 아르곤(Ar), 탄산(CO₂) 등 철강, 조선, 석유화학 산업 전반의 고순도 기초 소재 가스',
    description: '철강, 조선소, 제강, 화학 플랜트, 금속 열처리 등 산업 기초 공정에 필수적인 고순도 산업용 가스입니다. 파이프라인 직공급부터 벌크로리 및 실린더 번들까지 안정적인 연속 공급망을 제공합니다.',
    purity: '순도 99.999% (5N)',
    grade: '공업용 / 정밀 산업용',
    deliveryMethods: ['벌크로리 공급', '실린더 번들', '초저온 용기(LGC)', 'ISO 탱크'],
    applications: ['선박 건조 및 용접', '제철 제강 산화 반응', '석유화학 정제 설비 퍼지', '식음료 탄산 주입'],
    imageUrl: PRODUCT_IMAGES.industrial,
    hazards: ['고압가스', '조연성(산소)', '질식성(질소/아르곤/탄산)'],
    specs: {
      molecularWeight: 'O₂: 31.998 / N₂: 28.013 g/mol',
      boilingPoint: 'O₂: -182.9℃ / N₂: -195.8℃',
      cylinderPressure: '15.0 ~ 20.0 MPa (150~200 bar)',
      purityGuaranteed: '99.999% 이상',
      impurities: 'H₂O < 2.0 ppm, THC < 0.5 ppm, CO+CO₂ < 1.0 ppm'
    },
    msdsId: 'msds-01'
  },
  {
    id: 'prod-02',
    code: '02 / FUEL ENERGY',
    name: '연료용 가스 (Fuel & Energy)',
    chemicalFormula: 'C₃H₈, Pramax, C₂H₆, C₄H₁₀',
    category: 'fuel',
    categoryLabel: '연료용 가스',
    subtitle: '프로판(C₃H₈), 프라멕스(Pramax), 에탄(C₂H₆), 부탄, 이소부탄 등 고열량 고효율의 친환경 산업 연료 가스',
    description: '고열량 및 완전연소 특성을 갖는 청정 고효율 산업 연료 가스로서 아세틸렌 대체용 초고효율 절단가스 프라멕스(Pramax) 및 친환경 LPG 직납 시스템을 지원합니다.',
    purity: '고순도 연료 규격 / 99.5%+',
    grade: '고열량 절단·용접용',
    deliveryMethods: ['고압 벌크로리', '산업용 실린더', '탱크로리 직입고'],
    applications: ['후판 고속 절단 및 화염 가공', '공업로 및 소둔로 열원', '친환경 건조 공정', '선박 엔진 시운전 연료'],
    imageUrl: PRODUCT_IMAGES.fuel,
    hazards: ['인화성 가스', '고압가스'],
    specs: {
      molecularWeight: 'C₃H₈: 44.1 g/mol',
      boilingPoint: '-42.1℃',
      cylinderPressure: '0.8 ~ 1.5 MPa',
      purityGuaranteed: '순도 99.5% 이상',
      impurities: '발열량 24,000 kcal/Nm³ 이상'
    },
    msdsId: 'msds-02'
  },
  {
    id: 'prod-03',
    code: '03 / SPECIALTY',
    name: '특수 가스 (Specialty & Electronic Gases)',
    chemicalFormula: 'NF₃, SiH₄, N₂O, CF₄, WF₆, UHP He',
    category: 'specialty',
    categoryLabel: '특수 가스',
    subtitle: '반도체, 디스플레이, 정밀 전자 산업의 핵심 공정(에칭, 증착 등)에 필수적인 초고순도 전자급 특수가스',
    description: '초미세 반도체 노광, 식각(Etching), 화학기상증착(CVD), 이온주입 공정에 사용되는 초고순도(UHP 6N~7N) 특수가스로서 클래스 100 클린룸 내에서 충전 및 극미량 파티클 전수검사를 거칩니다.',
    purity: 'UHP 6N~7N급 (99.9999%~)',
    grade: '전자급 (Electronic Grade)',
    deliveryMethods: ['Y-실린더', '특수 합금 실린더', '토노(Tonne) 컨테이너'],
    applications: ['반도체 웨이퍼 증착 및 에칭', 'OLED 디스플레이 패널 세정', '태양광 셀 박막 형성', '광섬유 모재 제조'],
    imageUrl: PRODUCT_IMAGES.specialty,
    hazards: ['독성/특수취급가스', '자연발화성(SiH₄)', '고압가스'],
    specs: {
      molecularWeight: 'NF₃: 71.0 / SiH₄: 32.12 g/mol',
      boilingPoint: 'NF₃: -129℃',
      cylinderPressure: '12.0 ~ 15.0 MPa',
      purityGuaranteed: '99.9999% (6N) ~ 99.99999% (7N)',
      impurities: '금속 불순물 < 0.1 ppb, H₂O < 0.1 ppm'
    },
    msdsId: 'msds-03'
  },
  {
    id: 'prod-04',
    code: '04 / MEDICAL',
    name: '의료용 가스 (Medical Gases)',
    chemicalFormula: '의료용 O₂, N₂O, 액체질소, CO₂',
    category: 'medical',
    categoryLabel: '의료용 가스',
    subtitle: '종합병원, 병의원에 안정적으로 공급되는 GMP 적합 기준의 고순도 의료용 산소 및 흡입 마취용 가스',
    description: '식품의약품안전처 KGMP(의약품 제조 및 품질관리 기준) 인증 전용 라인에서 제조되는 의료용 가스로 종합병원 응급실, 수술실, 중환자실로의 365일 24시간 중단 없는 비상 공급망을 구축하고 있습니다.',
    purity: '의약품 GMP 규격 99.5%+',
    grade: '의료용 의약품 등급',
    deliveryMethods: ['병원 전용 벌크탱크 로리', '의료용 실린더 번들', '원격 잔량제어 LGC'],
    applications: ['환자 인공호흡 및 고압산소치료', '전신 흡입 마취(N₂O)', '복강경 수술 주입(CO₂)', '피부 및 냉동 치료'],
    imageUrl: PRODUCT_IMAGES.medical,
    hazards: ['조연성', '고압가스'],
    specs: {
      molecularWeight: '31.998 g/mol',
      boilingPoint: '-182.9℃',
      cylinderPressure: '15.0 MPa (150 bar)',
      purityGuaranteed: '99.5% 이상 (약전 규격)',
      impurities: '식약처 의약품 안전성 시험 적합'
    },
    msdsId: 'msds-04'
  },
  {
    id: 'prod-05',
    code: '05 / CALIBRATION',
    name: '표준 가스 (Standard Calibration Gas)',
    chemicalFormula: 'ppm / ppb 단위 복합 혼합 가스',
    category: 'calibration',
    categoryLabel: '표준 가스',
    subtitle: '정밀 환경 분석기기, 가스 측정기, 연구소 교정용으로 배합된 극미량 ppm/ppb 단위의 공인 표준 혼합가스',
    description: '국가공인 표준시험기관(KOLAS) 인정 기준에 부합하는 정밀 중량법 및 분압법 배합 기술을 기반으로 대기환경측정, 자동차 배출가스 검사, 플랜트 누출 탐지용 표준가스를 100% 공인 성적서와 함께 제조 공급합니다.',
    purity: '정밀 혼합비 불확도 ±1.0% 이내',
    grade: '국가표준 교정용',
    deliveryMethods: ['알루미늄 정밀 실린더', '미니 실린더', '특수 밸브 팩'],
    applications: ['굴뚝 TMS 연속측정기 교정', '반도체 배기 라인 검교정', '환경부 공인 대기측정망', '국책 연구원 화학 분석'],
    imageUrl: PRODUCT_IMAGES.calibration,
    hazards: ['고압가스 (가스 성분에 따라 독성/가연성 표기)'],
    specs: {
      molecularWeight: '조액 성분에 따라 상이',
      boilingPoint: '상온 기체',
      cylinderPressure: '10.0 ~ 15.0 MPa',
      purityGuaranteed: '상대 확장 불확도 1% 이내',
      impurities: 'NIST/KRISS 추적성 보증'
    },
    msdsId: 'msds-05'
  },
  {
    id: 'prod-06',
    code: '06 / INFRASTRUCTURE',
    name: '가스 설비 및 초저온 장비 (Gas Infrastructure)',
    chemicalFormula: 'Cryogenic Tank, Vaporizer, Manifold',
    category: 'infrastructure',
    categoryLabel: '가스 설비 및 초저온 장비',
    subtitle: '초저온 액체 저장탱크(LGC), 고압 기화기, 초고압 압력조정기 및 산업단지 특화 배관 엔지니어링 구축',
    description: '초저온 진공 단열 액체 저장탱크(1.5톤~100톤), 대기식 고압 기화기, 감압 스테이션, 가스 누출 자동 차단 제어반 등 엔지니어링 전 공정을 설계, 인허가(KGS), 시공, 유지보수까지 일괄 턴키로 수행합니다.',
    purity: 'KGS 코드 및 ASME 인증',
    grade: '초저온 엔지니어링 플랜트',
    deliveryMethods: ['현장 시공 턴키', '자체 제작 납품', '모듈형 스키드(Skid)'],
    applications: ['신축 공장 초저온 배관망 구축', '반도체 배관 가스 유틸리티', 'LPG/LNG 기화 공급설비', 'KGS 법정 특정설비 완성검사'],
    imageUrl: PRODUCT_IMAGES.infrastructure,
    hazards: ['초저온 동상 주의', '고압 배관 설비'],
    specs: {
      molecularWeight: 'SUS 304/316L 배관 규격',
      boilingPoint: '-196℃ 극저온 설계',
      cylinderPressure: '설계압력 0.99 ~ 2.45 MPa',
      purityGuaranteed: 'He 누출 테스트 10⁻⁸ mbar·L/s 이하',
      impurities: '자동 차단 및 긴급 방출 밸브 완비'
    },
    msdsId: 'msds-06'
  }
];

export const NATIONWIDE_HUBS: FacilityHub[] = [
  {
    id: 'hub-01',
    name: '부산 본사 및 감전동 물류 플랜트',
    region: '부산/경남',
    type: 'headquarters',
    address: '부산광역시 사상구 학감대로 161 (감전동)',
    phone: '051-317-0021',
    tankCapacity: '초저온 액체탱크 120톤 / 실린더 30,000본',
    fleetCount: 28,
    coordinates: { x: 74, y: 78 },
    features: ['본사 경영관제센터', '의료용 가스 전용 GMP 충전동', '초저온 LGC 원격 모니터링']
  },
  {
    id: 'hub-02',
    name: '경기 화성 하이테크 플랜트',
    region: '경기/수도권',
    type: 'production_plant',
    address: '경기도 화성시 향남읍 제약공단로 88',
    phone: '031-353-8820',
    tankCapacity: '초저온 액체탱크 250톤 / UHP 정제기지',
    fleetCount: 35,
    coordinates: { x: 42, y: 32 },
    features: ['수도권 반도체 전용 직공급 허브', 'Class 100 클린룸 충전소', '24시간 무중단 급송']
  },
  {
    id: 'hub-03',
    name: '충남 서산 석유화학 거점 플랜트',
    region: '충청권',
    type: 'production_plant',
    address: '충청남도 서산시 대산읍 대죽1로 45',
    phone: '041-668-5501',
    tankCapacity: '초저온 액체탱크 300톤 / 대용량 기화설비',
    fleetCount: 22,
    coordinates: { x: 34, y: 44 },
    features: ['대산 석유화학단지 파이프라인 연계', '산업용 질소 대량 공급', 'ISO 탱크컨테이너 야드']
  },
  {
    id: 'hub-04',
    name: '전북 군산 에너지 플랜트',
    region: '호남권',
    type: 'production_plant',
    address: '전북특별자치도 군산시 산단북로 112',
    phone: '063-462-7711',
    tankCapacity: '초저온 액체탱크 180톤',
    fleetCount: 16,
    coordinates: { x: 38, y: 58 },
    features: ['신재생에너지 및 이차전지 가스 공급', '새만금 산업단지 직결 배관망', '고순도 아르곤 공급']
  },
  {
    id: 'hub-05',
    name: '울산 규제자유특구 미래에너지 R&D 플랜트',
    region: '영남/울산',
    type: 'rnd_center',
    address: '울산광역시 남구 여천로 214번길',
    phone: '052-258-4490',
    tankCapacity: '초저온 액체탱크 200톤 / 친환경 암모니아 테스트베드',
    fleetCount: 20,
    coordinates: { x: 80, y: 70 },
    features: ['울산 암모니아 TTS 벙커링 실증센터', '친환경 수소 가스 연구동', 'HAZOP 안전평가실']
  },
  {
    id: 'hub-06',
    name: '전남 여수 화학단지 물류 기지',
    region: '호남/전남',
    type: 'logistics_hub',
    address: '전라남도 여수시 산단중앙로 78',
    phone: '061-683-9110',
    tankCapacity: '초저온 액체탱크 150톤',
    fleetCount: 14,
    coordinates: { x: 55, y: 84 },
    features: ['여수 국가산업단지 비상공급 대응', '특수 혼합가스 즉시 배합', 'KGS 현장 안전점검팀']
  },
  {
    id: 'hub-07',
    name: '경북 구미 전자소재 물류센터',
    region: '경북권',
    type: 'logistics_hub',
    address: '경상북도 구미시 1공단로 190',
    phone: '054-461-3320',
    tankCapacity: '특수가스 전용 실린더 15,000본',
    fleetCount: 12,
    coordinates: { x: 67, y: 56 },
    features: ['전자소재 및 디스플레이 특화', '정밀 분석 GC 센터', '비상 핫라인 운영']
  }
];

export const NOTICES: NoticeItem[] = [
  {
    id: 'notice-01',
    badge: '용역 입찰공고',
    badgeType: 'tender',
    date: '2025.02',
    title: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발』 안전진단 평가 입찰',
    summary: '실증 R&D 과제 관련 "구축시스템 3자 안전진단 평가" 전문 용역 수행사 선정을 위한 공개 입찰 공고입니다. 제안요청서 열람 후 기간 내 접수 요망.',
    content: `1. 입찰건명: 울산 규제자유특구 친환경선박용 암모니아 TTS(Truck to Ship) 벙커링 인프라 구축 안전진단 평가 용역
2. 사업기간: 계약체결일로부터 8개월간
3. 참가자격: 고압가스 안전관리법 및 산업안전보건법에 따른 공인 안전진단 전문기관
4. 제안서 접수처: (주)MS가스 기술연구소 실증사업팀
5. 비고: 제안요청서(RFP) 및 도면은 보안서약서 제출 후 수령 가능합니다.`,
    agency: '(주)MS가스 기술연구소',
    deadline: '2025.03.15 17:00',
    externalLink: true
  },
  {
    id: 'notice-02',
    badge: 'HAZOP 용역',
    badgeType: 'hazard',
    date: '2025.02',
    title: '탱크로리 이용 암모니아 벙커링 설비 정성적 위험평가(HAZOP) 분석 용역 입찰',
    summary: '이동식 탱크로리 기반 해양 암모니아 벙커링 인프라 설비의 잠재적 위험요소 도출 및 안전 대책 마련을 위한 HAZOP 정밀 분석 평가 용역.',
    content: `1. 용역 목적: 이동식 암모니아 벙커링 시스템의 고위험 노드 분석 및 비상 차단 시스템(ESD) 신뢰성 정량·정성 평가
2. 주요 과업: Node 분석, Guideword 기반 공정 위험도 평가, 안전 인터록 회로 적정성 검토
3. 제출 서류: 용역 사업수행계획서, 기술인력 보유증명서, 가격제안서
4. 문의: (주)MS가스 안전환경품질본부`,
    agency: '(주)MS가스 안전품질본부',
    deadline: '2025.03.20 18:00',
    externalLink: true
  },
  {
    id: 'notice-03',
    badge: '기업 소식',
    badgeType: 'news',
    date: '2025.01',
    title: '(주)MS가스 전청민 대표이사 은탑산업훈장 수훈 및 충남도지사 표창',
    summary: '대한민국 산업가스 유통 인프라의 고도화 및 탄소중립 실증특례 프로젝트 추진 기여도를 인정받아 정부 포상을 수훈하였습니다.',
    content: `(주)MS가스 전청민 대표이사가 2025년 대한민국 가스안전대상에서 최고 영예인 '은탑산업훈장'을 수훈하였습니다.
또한 충청남도 서산 플랜트의 지역경제 활성화와 탄소중립 암모니아 인프라 개발 공로를 인정받아 충남도지사 표창을 함께 수상하였습니다.
반세기를 이어온 MS가스의 기술력과 안전 최우선 원칙을 바탕으로 대한민국 첨단산업의 든든한 에너지 파트너가 될 것을 약속드립니다.`,
    agency: '홍보팀 / 대외협력본부',
    deadline: '상시 게시',
    externalLink: false
  },
  {
    id: 'notice-04',
    badge: '채용 공고',
    badgeType: 'news',
    date: '2025.01',
    title: '2025년 상반기 첨단 특수가스 플랜트 엔지니어 및 초저온 배관 기술직 공개 채용',
    summary: '화성 하이테크 플랜트 및 부산 본사에서 근무할 가스기능장/공조냉동기계 자격 보유자 및 R&D 석·박사 연구원을 채용합니다.',
    content: `모집부문: 
1. 가스 엔지니어링 시공 및 KGS 인허가 (경력 3년 이상)
2. 정밀 분석 연구원 (GC/MS, ppb 불순물 분석)
3. 전국 초저온 탱크로리 전문 물류 운송 기사 (대형특수면허 보유자 우대)
접수방법: 온라인 채용 페이지를 통한 서류 접수`,
    agency: '인사총무팀',
    deadline: '2025.02.28',
    externalLink: false
  }
];

export const MSDS_DOCS: MsdsDocument[] = [
  {
    id: 'msds-01',
    casNo: '7782-44-7',
    productName: '산업용 및 초고순도 산소 (Oxygen, O₂)',
    chemicalName: 'Oxygen, Compressed gas / Cryogenic liquid',
    formula: 'O₂',
    category: '산업용 / 고압가스',
    unNumber: 'UN 1072 (기체) / UN 1073 (액체)',
    updatedAt: '2025.01.10',
    fileSize: '342 KB',
    ghsPictograms: ['gas-cylinder', 'flame-over-circle'],
    healthHazard: '고농도 산소의 장시간 흡입 시 중추신경계 자극 가능, 액체 접촉 시 동상 유발',
    fireHazard: '강력한 산화제로서 가연성 물질과 접촉 시 격렬하게 연소를 촉진함',
    handlingCare: '오일, 그리스 등 유기물과의 접촉 엄금, 전용 밸브 및 탈지 배관 사용 필수'
  },
  {
    id: 'msds-02',
    casNo: '7727-37-9',
    productName: '초고순도 및 액체 질소 (Nitrogen, N₂)',
    chemicalName: 'Nitrogen, Compressed / Refrigerated liquid',
    formula: 'N₂',
    category: '산업용 / 전자급 / 퍼지가스',
    unNumber: 'UN 1066 (기체) / UN 1977 (액체)',
    updatedAt: '2025.01.12',
    fileSize: '318 KB',
    ghsPictograms: ['gas-cylinder'],
    healthHazard: '무색, 무취, 불활성이며 밀폐 공간 누출 시 급격한 산소 결핍으로 질식 위험',
    fireHazard: '비인화성, 불연성',
    handlingCare: '환기가 양호한 장소에서 보관, 산소 농도 측정기 상시 비치 및 초저온 보호장구 착용'
  },
  {
    id: 'msds-03',
    casNo: '7440-37-1',
    productName: '순수 아르곤 (Argon, Ar)',
    chemicalName: 'Argon, Compressed / Liquid',
    formula: 'Ar',
    category: '산업용 / 용접특수 / 반도체',
    unNumber: 'UN 1006 (기체) / UN 1951 (액체)',
    updatedAt: '2024.12.20',
    fileSize: '305 KB',
    ghsPictograms: ['gas-cylinder'],
    healthHazard: '단순 질식제, 공기보다 무거워 바닥으로 축적될 수 있음',
    fireHazard: '불활성 가스로 화재 위험 없음',
    handlingCare: '통풍 설비 가동, 실린더 전도시 충격 방지 캡 체결'
  },
  {
    id: 'msds-04',
    casNo: '124-38-9',
    productName: '액화 탄산가스 (Carbon Dioxide, CO₂)',
    chemicalName: 'Carbon Dioxide, Liquefied',
    formula: 'CO₂',
    category: '산업용 / 용접 / 식음료',
    unNumber: 'UN 1013 (기체) / UN 2187 (액체)',
    updatedAt: '2024.12.15',
    fileSize: '320 KB',
    ghsPictograms: ['gas-cylinder'],
    healthHazard: '고농도 흡입 시 두통, 어지러움, 호흡 억제 및 의식 상실 유발',
    fireHazard: '불연성 (소화제로 활용)',
    handlingCare: '직사광선 차단, 40℃ 이하 서늘한 장소 보관'
  },
  {
    id: 'msds-05',
    casNo: '7783-54-2',
    productName: '삼불화질소 (Nitrogen Trifluoride, NF₃)',
    chemicalName: 'Nitrogen Trifluoride, Electronic Grade',
    formula: 'NF₃',
    category: '반도체 전자 특수가스',
    unNumber: 'UN 2451',
    updatedAt: '2025.01.18',
    fileSize: '412 KB',
    ghsPictograms: ['gas-cylinder', 'flame-over-circle', 'skull-crossbones', 'health-hazard'],
    healthHazard: '흡입 시 메트헤모글로빈혈증 유발 및 적혈구 파괴, 유독성 가스',
    fireHazard: '강한 산화제로서 고온에서 불소 기체 분해',
    handlingCare: '특수 독성가스 캐비닛 내 보관, 스크러버 정화 시설 연계, 비상 차단 밸브(ESV)'
  },
  {
    id: 'msds-06',
    casNo: '7803-62-5',
    productName: '모노실란 (Monosilane, SiH₄)',
    chemicalName: 'Silane, Compressed Gas',
    formula: 'SiH₄',
    category: '반도체 증착 특수가스',
    unNumber: 'UN 2203',
    updatedAt: '2025.01.20',
    fileSize: '450 KB',
    ghsPictograms: ['gas-cylinder', 'flame'],
    healthHazard: '공기 중에서 자연 발화하며 유독한 실리카 흄(SiO₂) 발생',
    fireHazard: '자연발화성(Pyrophoric) 가스, 공기와 접촉 즉시 폭발적 화염 형성',
    handlingCare: '초고압 퍼지 시스템, 헬륨 누출 시험 필수, 배기 정화설비 철저 점검'
  },
  {
    id: 'msds-07',
    casNo: '7664-41-7',
    productName: '무수 암모니아 (Anhydrous Ammonia, NH₃)',
    chemicalName: 'Ammonia, Anhydrous / Liquefied',
    formula: 'NH₃',
    category: '친환경 미래 에너지 / 냉매',
    unNumber: 'UN 1005',
    updatedAt: '2025.02.01',
    fileSize: '488 KB',
    ghsPictograms: ['gas-cylinder', 'flame', 'skull-crossbones', 'corrosion', 'environment'],
    healthHazard: '강한 부식성 및 자극성 기체, 흡입 시 폐부종 유발, 수생 환경에 유해',
    fireHazard: '가연성 가스 (폭발 하한 15%), 고온 열분해 시 수소 발생',
    handlingCare: '수막 살수 설비, 내식성 SUS 316L 배관, 밀폐형 로딩암 및 건식 커플러 필수'
  }
];

export const HISTORY_TIMELINE = [
  {
    year: '1974',
    title: '동방가스상사 창립',
    desc: '부산 감전동에서 고압가스 유통을 개시하며 반세기 역사의 초석을 다짐.'
  },
  {
    year: '1985',
    title: '초저온 액화가스 저장 플랜트 준공',
    desc: '부산·경남권 최초 대용량 초저온 액체산소, 질소 저장탱크 및 자동 충전 라인 가동.'
  },
  {
    year: '1996',
    title: '(주)MS가스 법인 전환 및 전국화',
    desc: '사명을 (주)MS가스로 개편하고 중부권, 호남권으로 초저온 유통 인프라 대폭 확장.'
  },
  {
    year: '2005',
    title: 'ISO 9001 / 14001 품질·환경 인증 획득',
    desc: '전 사업장 국제 표준 품질경영시스템 구축 및 KGS 안전관리 우수사업장 선정.'
  },
  {
    year: '2015',
    title: '반도체·전자 특수가스 정제 라인 완공',
    desc: '경기 화성 하이테크 플랜트 신축, UHP 6N급 특수가스 및 클린룸 충전 설비 가동.'
  },
  {
    year: '2021',
    title: '전국 17개소 실시간 원격 관제망(IoT) 완성',
    desc: '전국 초저온 저장탱크 및 벌크로리 탱크 실시간 압력·잔량·GPS 통합 관제 시스템 론칭.'
  },
  {
    year: '2024',
    title: '울산 규제자유특구 암모니아 TTS 실증 주도 & 은탑산업훈장',
    desc: '국내 최초 친환경 암모니아 벙커링 인프라 구축 주도 및 대표이사 은탑산업훈장 수훈.'
  }
];
