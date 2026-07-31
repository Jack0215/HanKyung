import productWelding from '../assets/photos/product-welding.jpg'
import productScrew from '../assets/photos/product-screw.jpg'
import productSocket from '../assets/photos/product-socket.jpg'
import productGroove from '../assets/photos/product-groove.jpg'
import productMechanical from '../assets/photos/product-mechanical.jpg'
import productSpPump from '../assets/photos/product-sppump.jpg'
import productValve from '../assets/photos/product-valve.jpg'

export const COMPANY = {
  nameKo: '주식회사 한경방재',
  nameShort: '한경방재',
  nameEn: 'HanKyung Bangjae Co., Ltd.',
  ceo: '김석현',
  established: '2025.11.17',
  bizRegNo: '473-88-03620',
  corpRegNo: '165011-0010077',
  addressShort: '충남 당진시 신평면 신평길 320 (신흥리 428-14)',
  addressFull: '충청남도 당진시 신평면 신평길 320',
  tel: '041-363-1170',
  fax: '041-363-1171',
  telHref: 'tel:041-363-1170',
}

export const DEPARTMENTS = ['영업부', '관리부', '설계부', '생산부', '품질부']

export const HISTORY = [
  { date: '2025.11', label: '주식회사 한경방재 법인설립' },
  { date: '2026.01', label: '공장이전 (충남 당진시 신흥리)' },
  { date: '2026.02', label: '공장등록 완료 (부지면적 3,306㎡)' },
  { date: '2026.03', label: 'ISO 9001:2015 품질경영시스템 인증 획득' },
]

export const CERTIFICATIONS = [
  {
    title: 'ISO 9001:2015',
    desc: '품질경영시스템 인증 (인증기관 ICR · 인증서번호 Q495612)',
  },
  { title: 'KFI 성능인증', desc: '소방용 분기배관 성능인증서' },
  { title: 'KS D 3507', desc: '배관용 탄소강관' },
  { title: 'KS D 3562', desc: '압력배관용 탄소강관' },
  { title: 'KS D 3576', desc: '배관용 스테인리스강관' },
]

export const FACILITIES = {
  lead: '첨단 생산설비를 통해 정밀한 제품을 생산하고 있습니다.',
  body: '모든 분기배관의 제조공정을 단일공장에서 진행하므로 엄격한 품질관리가 가능하며, 업계 최대 수준의 생산라인 확보로 고객이 원하는 납기에 신속히 대응할 수 있습니다.',
  manufacturing: [
    { name: '자동 레이저 컷팅 머신', qty: 1 },
    { name: '플라즈마 절단기', qty: 1 },
    { name: '확관기', qty: 1 },
    { name: '원형절단기', qty: 3 },
    { name: '밴드쏘', qty: 2 },
    { name: '자동 절단기', qty: 2 },
    { name: '드릴링기', qty: 6 },
    { name: '티가공기', qty: 3 },
    { name: '면가공기', qty: 2 },
    { name: '축관기', qty: 3 },
    { name: 'R가공기', qty: 1 },
    { name: '파이프머신', qty: 7 },
    { name: 'CNC', qty: 4 },
    { name: '그루빙기', qty: 6 },
    { name: '아크용접기', qty: 15 },
    { name: '알곤용접기', qty: 3 },
  ],
  testing: [
    { name: '본체강도시험기', qty: 1 },
    { name: '전기로', qty: 1 },
    { name: '편평시험기', qty: 1 },
  ],
}

export const MANAGEMENT_POLICY = {
  slogan: '21세기 환경에너지 선두기업',
  groups: [
    {
      title: '영업전략',
      items: [
        '우량매출업체 확보로 안정적 매출의 극대화',
        '최상의 서비스를 통한 고객만족 실현',
        'MBO(목표관리) 도입 시행으로 영업 생산성 향상',
      ],
    },
    {
      title: '경영전략',
      items: [
        '신의와 믿음을 통한 고객만족 실현',
        '투명경영을 통한 경쟁력 확보',
        'R&D를 통하여 특화된 경쟁력 확보',
      ],
    },
    {
      title: '경영혁신',
      items: [
        '기업 핵심 인재의 확보 육성',
        '조직목표와 개인목표의 조화',
        '급변하는 시장에 대응하는 리더십',
      ],
    },
  ],
}

export const CEO_GREETING = {
  headline:
    '젊은 시각과 현장 중심의 실행력으로 방재·소방 설비 분야의 새로운 기준을 만들어가겠습니다.',
  paragraphs: [
    '안녕하십니까. (주)한경방재 대표 김석현입니다.',
    '(주)한경방재는 다년간 현장에서 축적한 기술과 경험을 바탕으로 설계부터 시공, 사후관리까지 전 과정을 책임지는 방재 전문 기업입니다.',
    '신속한 판단과 정확한 시공, 그리고 끝까지 책임지는 자세로 고객의 안전과 신뢰를 최우선 가치로 삼겠습니다.',
    '앞으로도 변화하는 환경에 발맞춰 능동적으로 대응하며 기술력과 품질 경쟁력을 지속적으로 강화해 고객과 함께 성장하는 기업이 되겠습니다. 감사합니다.',
  ],
  signOff: '주식회사 한경방재 대표 김석현',
}

export const ORG_CHART = {
  top: '대표이사',
  side: '감사',
  mid: '사장',
  departments: DEPARTMENTS,
}

export const PROJECT_STATS = {
  count: '280',
  partners: [
    'GS건설',
    '대우건설',
    'SK건설',
    '롯데건설',
    '현대건설',
    '삼성물산',
    '포스코건설',
    '대림건설',
    '호반건설',
    '신세계건설',
    '한신공영',
    '코오롱건설',
    '태영건설',
  ],
}

export const LOCATION = {
  address: '충남 당진시 신평면 신평길 320 (신흥리 428-14)',
  directions: [
    '서해안고속도로 송악IC → 서해대교 방면',
    '운정IC교차로 인근',
    '삽교천방조제 · SK신흥주유소 인근',
  ],
}

export const TEE_INTRO = {
  title: '분기배관',
  en: 'Tee Branching Pipe',
  desc: '소화배관 시공 시 TEE, REDUCER(용접식, 나사식)를 사용하지 않고 파이프에 직접 성형하는 신공법으로 공사기간 단축, 공사비 절감 및 시공의 안전성을 가져옵니다.',
  spec: '대구경 200A ~ 500A 대응',
  advantages: [
    '배관 연결 부위의 감소로 공기를 혁신적으로 단축할 수 있습니다.',
    '공사비, 자재비의 절감효과가 뛰어납니다.',
    '완벽한 제품검사와 입출고 관리를 통해 누수율, 불량률이 낮습니다.',
    '업계 최초로 정밀가공기를 도입, 분기배관을 정밀가공산업으로 한 차원 업그레이드 하였습니다.',
  ],
}

export const PROCESS_STEPS = [
  {
    no: '01',
    title: '자재입고',
    desc: '원자재가 물류회사를 경유하여 가공공장으로 입고되면, 발주처별·현장별로 구분하여 안전하게 보관합니다.',
  },
  {
    no: '02',
    title: '도면설계',
    desc: '입수된 도면에 의거하여 작업자가 이해하기 쉬운 가공도면을 작성하여 정확히 전달합니다.',
  },
  {
    no: '03',
    title: 'Marking',
    desc: '가공도면과 정확히 일치하도록 마킹 후 다음 공정으로 이동합니다.',
  },
  {
    no: '04',
    title: '절단 (Band Sawing)',
    desc: '표시된 부분을 정확히 절단하고, 절단 시 발생한 이물질을 제거합니다.',
  },
  {
    no: '05',
    title: '홀가공',
    desc: 'Marking 부위에 각 규격(Size)별로 정확히 홀가공을 합니다.',
  },
  {
    no: '06',
    title: '티가공 및 진원',
    desc: '정확한 Size로 티가공(Branching) 후 진원 작업으로 요구 규격을 완성합니다.',
  },
]

export type Product = {
  no: string
  name: string
  en: string
  desc: string
  features: string[]
  group: 'joint' | 'unit'
  image: string
}

export const PRODUCTS: Product[] = [
  {
    no: '01',
    name: '용접타입',
    en: 'Welding Type',
    group: 'joint',
    image: productWelding,
    desc: '본관과 지관을 용접 접합하여 강도와 기밀성이 뛰어난 기본형 분기배관입니다.',
    features: [
      '3방향 나사 및 용접이음을 1공정으로 단축',
      '연결 포인트 최소화로 낮은 누수율',
      '공장 제작으로 현장 설치시간 단축',
    ],
  },
  {
    no: '02',
    name: '나사타입',
    en: 'Screw Type',
    group: 'joint',
    image: productScrew,
    desc: '이음부를 나사가공하여 시공 현장에서 간편하게 체결할 수 있는 분기배관입니다.',
    features: ['현장 화기작업 없이 체결 가능', '분해·재조립이 간편해 유지보수 용이'],
  },
  {
    no: '03',
    name: '확관형 소켓타입',
    en: 'Expanded Socket Type',
    group: 'joint',
    image: productSocket,
    desc: '소켓 부위를 확관 가공해 배관을 삽입 접합하는 방식으로 시공성이 우수합니다.',
    features: ['삽입 접합 방식으로 정렬 오차 최소화', '접합부 기밀성 확보에 유리'],
  },
  {
    no: '04',
    name: '그루브타입',
    en: 'Groove Type',
    group: 'joint',
    image: productGroove,
    desc: '그루브 조인트를 적용해 무용접으로 빠르고 간편한 시공이 가능합니다.',
    features: ['무용접 시공으로 화기작업 최소화', '커플링 체결로 공사기간 단축'],
  },
  {
    no: '05',
    name: '메카니컬타입',
    en: 'Mechanical Type',
    group: 'joint',
    image: productMechanical,
    desc: '기계식 커플링 방식으로 화기 작업 없이 안전하게 시공할 수 있습니다.',
    features: ['볼트 체결 방식으로 안전한 시공', '부분 교체·유지보수가 용이'],
  },
  {
    no: '06',
    name: 'SP펌프 UNIT',
    en: 'SP Pump Unit',
    group: 'unit',
    image: productSpPump,
    desc: '스프링클러 설비용 펌프 유닛을 일체형으로 설계·제작합니다.',
    features: ['현장 조건에 맞춘 일체형 제작', '배관·밸브·계측기 통합 구성'],
  },
  {
    no: '07',
    name: '밸브장치 및 헷다',
    en: 'Valve & Header',
    group: 'unit',
    image: productValve,
    desc: '소방배관용 밸브 장치와 헤더 배관을 현장 조건에 맞게 맞춤 제작합니다.',
    features: ['By-pass 밸브 구성 대응', '규격별 맞춤 헤더 제작'],
  },
]
