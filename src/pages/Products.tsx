import SectionLayout from '../layouts/SectionLayout'
import type { SidebarGroup } from '../components/Sidebar'
import { PRODUCTS, TEE_INTRO, PROCESS_STEPS } from '../data/company'
import lineupPhoto from '../assets/photos/products-lineup.jpg'

const PRODUCTS_NAV: SidebarGroup[] = [
  {
    title: '제품카테고리',
    icon: 'box',
    items: [
      { label: '배관 이음방식', to: '#joint-types' },
      { label: '설비 유닛', to: '#units' },
      { label: '제작 공정', to: '#process' },
    ],
  },
]

const jointProducts = PRODUCTS.filter((p) => p.group === 'joint')
const unitProducts = PRODUCTS.filter((p) => p.group === 'unit')

function ProductCard({ product }: { product: (typeof PRODUCTS)[number] }) {
  return (
    <div className="product-card">
      <div className="product-media">
        <img src={product.image} alt={product.name} />
        <span className="product-no">{product.no}</span>
      </div>
      <h3>{product.name}</h3>
      <p className="product-en">{product.en}</p>
      <p className="product-desc">{product.desc}</p>
      <ul className="product-features">
        {product.features.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </div>
  )
}

function Products() {
  return (
    <SectionLayout
      eyebrow="PRODUCTS"
      title="제품카테고리"
      lead="현장 조건에 맞는 최적의 접합 방식을 제공합니다"
      sidebarGroups={PRODUCTS_NAV}
    >
      <div className="tee-intro">
        <div className="tee-intro-grid">
          <div>
            <p className="tee-intro-tag">{TEE_INTRO.en}</p>
            <h2>{TEE_INTRO.title}</h2>
            <p className="content-body">{TEE_INTRO.desc}</p>
            <p className="tee-spec">{TEE_INTRO.spec}</p>
          </div>
          <img className="tee-intro-photo" src={lineupPhoto} alt="한경방재 분기배관 완제품" />
        </div>
        <ul className="tee-advantages">
          {TEE_INTRO.advantages.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>

      <section id="joint-types" className="product-section">
        <h2 className="product-section-title">배관 이음방식</h2>
        <div className="product-grid">
          {jointProducts.map((p) => (
            <ProductCard product={p} key={p.no} />
          ))}
        </div>
      </section>

      <section id="units" className="product-section">
        <h2 className="product-section-title">설비 유닛</h2>
        <div className="product-grid">
          {unitProducts.map((p) => (
            <ProductCard product={p} key={p.no} />
          ))}
        </div>
      </section>

      <section id="process" className="product-section">
        <h2 className="product-section-title">제작 공정</h2>
        <ol className="process-list">
          {PROCESS_STEPS.map((step) => (
            <li key={step.no}>
              <span className="process-no">{step.no}</span>
              <div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </SectionLayout>
  )
}

export default Products
