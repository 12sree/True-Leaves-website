import { useState } from 'react';

// ── assign real images here ──────────────────────────────────────────────────
import cocopeat1  from '../common/img/cocopeat-1.jpeg';
import cocopeat2  from '../common/img/cocopeat-2.jpeg';
import cocopeat3  from '../common/img/cocopeat-3.jpeg';
import cocopeat4  from '../common/img/cocopeat-4.jpg';
import coconutmusk01 from '../common/img/coconut-musk-01.jpeg';
import coconutmusk02 from '../common/img/coconut-musk-02.jpeg';
import coconutmusk03 from '../common/img/coconut-musk-03.jpeg';
import creepers1  from '../common/img/creepers-1.jpeg';
import creepers2  from '../common/img/creepers-2.jpeg';
import creepers3  from '../common/img/creepers-3.jpg';
import cocopeatdisc1  from '../common/img/cocopeatdisc-1.jpeg';
import cocopeatdisc2  from '../common/img/cocopeatdisc-2.jpeg';
import cocopeatdisc3  from '../common/img/cocopeatdisc-3.jpeg';
import coirpots1  from '../common/img/coirpots-1.jpeg';
import coirpots2  from '../common/img/coirpots-2.jpeg';
import coirpots3  from '../common/img/coirpots-3.jpeg';
import coirpots4  from '../common/img/coirpots-4.jpg';
import pottingmix1 from '../common/img/pottingmix-1.jpeg';
import pottingmix2 from '../common/img/pottingmix-2.jpeg';
import pottingmix3 from '../common/img/pottingmix-3.jpeg';
import perlite1 from '../common/img/perlite-1.jpeg';
import perlite2 from '../common/img/perlite-2.jpeg';
import clayballs1 from '../common/img/clayballs-1.jpg';
import clayballs2 from '../common/img/clayballs-2.jpg';
import clayballs3 from '../common/img/clayballs-3.jpg';
import seedlingpot1 from '../common/img/seedlingpot-1.jpg';
import seedlingpot2 from '../common/img/seedlingpot-2.jpg';
import unknown from '../common/img/unknown.jpg';
import seedlingtray1 from '../common/img/seedlingtray-1.jpg';
import seedlingtray2 from '../common/img/seedlingtray-2.jpg';
import seedlingtray98_1 from '../common/img/seedlingtray98-1.jpg';
import seedlingtray98_2 from '../common/img/seedlingtray98-2.jpg';
import seedlingtray98_3 from '../common/img/seedlingtray98-3.jpg';
import seedlingtray40_1 from '../common/img/seedlingtray40-1.jpg';
import seedlingtray40_2 from '../common/img/seedlingtray40-2.jpg';
import seedlingtray40_3 from '../common/img/seedlingtray40-3.jpg';
import dutchbucketset1 from '../common/img/dutchbucketset-1.jpg';
import dutchbucketset2 from '../common/img/dutchbucketset-2.jpg';
import dutchbucketset3 from '../common/img/dutchbucketset-3.jpg';
import coupleropen1 from '../common/img/coupleropen-1.jpg';
import coupleropen2 from '../common/img/coupleropen-2.jpg';
import endcapspout1 from '../common/img/endcapspout-1.jpg';
import endcapspout2 from '../common/img/endcapspout-2.jpg';
import endcapspout3 from '../common/img/endcapspout-3.jpg';
import endcap1 from '../common/img/endcap-1.jpg';
import endcap2 from '../common/img/endcap-2.jpg';
import endcap3 from '../common/img/endcap-3.jpg';
import singlewalled1 from '../common/img/singlewalled-1.jpg';
import singlewalled2 from '../common/img/singlewalled-2.jpg';
import singlewalled3 from '../common/img/singlewalled-3.jpg';
import twinwalled1 from '../common/img/twinwalled1.jpg';
import twinwalled2 from '../common/img/twinwalled2.jpg';
import twinwalled3 from '../common/img/twinwalled3.jpg';
import twinwalledendcap1 from '../common/img/twinwalledendcap1.jpg';
import twinwalledendcap2 from '../common/img/twinwalledendcap2.jpg';
import twinwalledendcap3 from '../common/img/twinwalledendcap3.png';
import twinwalledspout1 from '../common/img/twinwalledspout-1.jpg';
import twinwalledspout2 from '../common/img/twinwalledspout-2.jpg';
import twinwalledspout3 from '../common/img/twinwalledspout-3.jpg';
import microgreentray1 from '../common/img/microgreentray-1.jpg';
import microgreentray2 from '../common/img/microgreentray-2.jpg';
import microgreentray3 from '../common/img/microgreentray-3.jpg';
import tray1 from '../common/img/tray-1.jpg';
import tray2 from '../common/img/tray-2.jpg';
import tray3 from '../common/img/tray-3.jpg';
import traywoholes1 from '../common/img/traywoholes-1.jpg';
import traywoholes2 from '../common/img/traywoholes-2.jpg';
import traywoholes3 from '../common/img/traywoholes-3.jpg';
import mgmat1 from '../common/img/mgmat-1.jpeg';
import mgmat2 from '../common/img/mgmat-2.jpg';
import mgmat3 from '../common/img/mgmat-3.jpg';
import growcubes1 from '../common/img/growcubes-1.jpeg';
import growcubes2 from '../common/img/growcubes-2.jpeg';
import growcubes3 from '../common/img/growcubes-3.jpeg';
import hydronetpot2_1 from '../common/img/hydronetpot2-1.jpeg';
import hydronetpot2_2 from '../common/img/hydronetpot2_2.jpeg';
import hydronetpot2_3 from '../common/img/hydronetpot2-3.jpg';
import hydronetpot2_5_1 from '../common/img/hydronetpot2.5-1.jpg';
import hydronetpot2_5_2 from '../common/img/hydronetpot2.5-2.png';
import hydronetpot2_5_3 from '../common/img/hydronetpot2.5-3.jpeg';
import hydronetpot3_1 from '../common/img/hydronetpot3-1.jpeg';
import hydronetpot3_2 from '../common/img/hydronetpot3-2.jpeg';
import hydronetpot3_3 from '../common/img/hydronetpot3-3.jpg';
import hydronetpot2_3_1 from '../common/img/hydronetpot2.3_1.jpg';
import hydronetpot2_3_2 from '../common/img/hydronetpot2.3_2.jpeg';
import hydronetpot2_4_1 from '../common/img/hydronetpot2.4-1.jpeg';
import hydronetpot2_4_2 from '../common/img/hydronetpot2.4-2.jpeg';
import hydronetpot5_1 from '../common/img/hydronetpot5-1.jpg';
import hydronetpot5_2 from '../common/img/hydronetpot5-2.jpeg';

// ─────────────────────────────────────────────────────────────────────────────

const categories = [
  {
    label: 'Growing Media',
    products: [
      { code: 'UR001', name: 'Low EC Cocopeat Block 5kg (Home Garden)', desc: 'Natural cocopeat growing medium – lightweight, eco-friendly, perfect for seed germination & all indoor/outdoor plants.', imgs: [cocopeat1, cocopeat3] },
      { code: 'UR002', name: 'Low EC Sterilized Cocopeat Block 5kg', desc: 'Natural cocopeat growing medium – lightweight, eco-friendly, perfect for seed germination & all indoor/outdoor plants.', imgs: [cocopeat2, cocopeat4] },
      { code: 'UR003', name: 'Coconut Husk', desc: 'Natural coconut husk – improves aeration, controls weed & pests and promotes healthy plant growth.', imgs: [coconutmusk01, coconutmusk02, coconutmusk03] },
      { code: 'UR005', name: 'Cocopeat Disc', desc: 'Cocopeat discs – compact, easy to use, expand with water for pots & containers, a natural alternative to peat moss.', imgs: [cocopeatdisc1, cocopeatdisc2, cocopeatdisc3] },
      { code: 'UR007', name: 'Potting Mix', desc: 'Nutrient-rich organic potting mix – well-aerated, pathogen-free blend of soil, compost & natural manures for healthy plant growth.', imgs: [pottingmix1, pottingmix2, pottingmix3] },
      { code: 'UR008', name: 'Perlite', desc: 'Lightweight, porous medium for gardening & hydroponics, ensuring perfect aeration, drainage, and healthy root growth.', imgs: [perlite1, perlite2] },
      { code: 'UR034', name: 'Clay Balls / LECA Balls', desc: 'Natural, stable LECA balls providing excellent drainage, aeration and support for hydroponic and drip systems.', imgs: [clayballs1, clayballs2, clayballs3] },
    ],
  },
  {
    label: 'Pots & Supports',
    products: [
      { code: 'UR004', name: 'Coco Pole Plant Support Stake', desc: 'Eco-friendly coir poles – sturdy support for creepers & ornamentals, boosting root growth, moisture, and healthy plants.', imgs: [creepers1, creepers2, creepers3] },
      { code: 'UR006', name: 'Coir Pots', desc: 'Biodegradable coir pots – eco-friendly, promote root aeration, easy for seed germination & sapling growth.', imgs: [coirpots1, coirpots2, coirpots3, coirpots4] },
      { code: 'UR035', name: 'Nursery Seedling Pot', desc: 'Durable, weather-resistant pot with excellent drainage for healthy outdoor seedlings and plants.', imgs: [seedlingpot1, seedlingpot2] },
    ],
  },
  {
    label: 'Hydroponic Net Pots',
    products: [
      { code: 'UR009', name: 'Hydroponic Net Pot 2"', desc: 'Durable mesh planters for superior root aeration, drainage, and healthy plant growth.', imgs: [hydronetpot2_1, hydronetpot2_2, hydronetpot2_3] },
      { code: 'UR010', name: 'Hydroponic Net Pot 2.5"', desc: 'Durable mesh planter for optimal root aeration, drainage, and healthy hydroponic growth.', imgs: [hydronetpot2_5_1, hydronetpot2_5_2, hydronetpot2_5_3] },
      { code: 'UR011', name: 'Hydroponic Net Pot 3"', desc: 'Sturdy mesh planter for excellent root aeration, drainage, and healthy hydroponic plant growth.', imgs: [hydronetpot3_1, hydronetpot3_2, hydronetpot3_3] },
      { code: 'UR012', name: 'Hydroponic Net Pot 2" x 3"', desc: 'Premium mesh planter for superior root aeration, drainage, and healthy hydroponic growth.', imgs: [hydronetpot2_3_1, hydronetpot2_3_2] },
      { code: 'UR013', name: 'Hydroponic Net Pot 2" x 4"', desc: 'Premium mesh planter for superior root aeration, drainage, and healthy hydroponic growth.', imgs: [hydronetpot2_4_1, hydronetpot2_4_2] },
      { code: 'UR014', name: 'Hydroponic Net Pot 5"', desc: 'Durable mesh planter for optimal root aeration, drainage, and healthy hydroponic plant growth.', imgs: [hydronetpot5_1, hydronetpot5_2] },
    ],
  },
  {
    label: 'Grow Cubes & Germination',
    products: [
      { code: 'UR015', name: 'Grow Cubes 25×25×35mm (156 cubes/sheet)', desc: 'Sheet: 325×305×35mm. Biodegradable germination medium for fast, healthy seedling growth, ideal for hydroponics and soil transplanting.', imgs: [growcubes1, growcubes2] },
      { code: 'UR016', name: 'Grow Cubes 35×35×50mm (192 cubes/sheet)', desc: 'Sheet: 555×415×50mm. Biodegradable germination medium for fast, healthy seedling growth, ideal for hydroponics and soil transplanting.', imgs: [growcubes2, growcubes3] },
      { code: 'UR017', name: 'Grow Cubes 22×20×38mm (276 cubes/sheet)', desc: 'Sheet: 245×510×38mm. Biodegradable germination medium for fast, healthy seedling growth, ideal for hydroponics and soil transplanting.', imgs: [growcubes3, growcubes1] },
    ],
  },
  {
    label: 'Trays & Seedling',
    products: [
      { code: 'UR018', name: 'Oasis Microgreen Mat', desc: 'Sheet: 32.5×30.5×1.3cm. Ideal for hydroponic indoor growing, providing perfect air-water ratio for fast, healthy sprouts.', imgs: [mgmat1, mgmat2, mgmat3] },
      { code: 'UR019', name: 'Microgreen Tray with Holes', desc: '600×300×30mm. Durable, stackable tray with 1.5mm holes, perfect for hydroponics, wheatgrass, and indoor gardening.', imgs: [traywoholes1, traywoholes2, traywoholes3] },
      { code: 'UR020', name: 'Microgreen Tray without Holes', desc: '600×300×30mm. Durable, stackable tray for hydroponics, indoor gardening, and microgreens cultivation.', imgs: [traywoholes1, traywoholes2, traywoholes3] },
      { code: 'UR021', name: 'Microgreen Tray Set', desc: '300×250×40mm. Double-layer hydroponic tray for safe seed germination with reduced watering and healthy root growth.', imgs: [microgreentray1, microgreentray2, microgreentray3] },
      { code: 'UR022', name: 'Hydroponic Tray 24"×16"×3"', desc: 'Durable, food-grade tray for home gardening with higher productivity, water efficiency, and pest-free growth.', imgs: [tray1, tray2, tray3] },
      { code: 'UR031', name: 'Reusable Seedling Tray 40 Holes', desc: 'Food-grade tray with 40 cells and proper drainage for healthy seedling growth.', imgs: [seedlingtray40_1, seedlingtray40_2, seedlingtray40_3] },
      { code: 'UR032', name: 'Reusable Seedling Tray 98 Holes', desc: 'Food-grade tray with 98 cells and proper drainage for healthy seedling growth.', imgs: [seedlingtray98_1, seedlingtray98_2, seedlingtray98_3] },
      { code: 'UR033', name: 'Reusable Seedling Tray 200 Holes', desc: 'Food-grade tray with 200 cells and proper drainage for healthy seedling growth.', imgs: [seedlingtray1, seedlingtray2] },
    ],
  },
  {
    label: 'NFT Channels & Fittings',
    products: [
      { code: 'UR023', name: 'NFT Twin-Walled Channel (with Lid)', desc: 'Food-grade hydroponic channel with openable lids for efficient nutrient flow and customizable plant spacing.', imgs: [twinwalled1, twinwalled2, twinwalled3] },
      { code: 'UR024', name: 'Twin-Walled 2" End Cap', desc: 'Food-grade uPVC end cap for leak-proof closure of NFT hydroponic channels.', imgs: [twinwalledendcap1, twinwalledendcap2, twinwalledendcap3] },
      { code: 'UR025', name: 'Twin-Walled 2" End Cap Spout', desc: 'Food-grade uPVC leak-proof end cap with spout for NFT hydroponic channels.', imgs: [twinwalledspout1, twinwalledspout2, twinwalledspout3] },
      { code: 'UR026', name: 'NFT Single-Walled Channel (with Lid)', desc: 'Food-grade uPVC hydroponic channel with openable lids for efficient nutrient flow and plant growth.', imgs: [singlewalled1, singlewalled2, singlewalled3] },
      { code: 'UR027', name: 'Single-Walled 2" End Cap', desc: 'Food-grade uPVC leak-proof end cap for closing NFT hydroponic channels.', imgs: [endcap1, endcap2, endcap3] },
      { code: 'UR028', name: 'Single-Walled 2" End Cap Spout', desc: 'Food-grade uPVC leak-proof end cap with spout for NFT hydroponic channels.', imgs: [endcapspout1, endcapspout2, endcapspout3] },
      { code: 'UR029', name: 'Single-Walled 2" Coupler (Openable)', desc: 'Food-grade uPVC leak-proof openable coupler for connecting NFT hydroponic channels.', imgs: [coupleropen2, coupleropen1] },
      { code: 'UR030', name: 'Dutch Bucket Set (with Lid & Grow Cup)', desc: 'Durable hydroponic bucket with lid, grow cup, and siphon for efficient vine crop cultivation.', imgs: [dutchbucketset1, dutchbucketset2, dutchbucketset3] },
    ],
  },
  {
    label: 'Nutrients & pH',
    products: [
      { code: 'UR036–038', name: 'Hydroponic Nutrient Powder (A & B)', desc: 'Water-soluble two-part formula for balanced growth, strong roots, and lush foliage in hydroponic systems.', imgs: [unknown] },
      { code: 'UR039', name: 'pH Up Solution', desc: 'Water-soluble liquid to safely raise hydroponic nutrient pH for optimal nutrient absorption.', imgs: [unknown] },
    ],
  },
];

function ProductCard({ code, name, desc, imgs }) {
  const [active, setActive] = useState(0);

  return (
    <div className="service-card h-100">

      {/* Main image */}
      <div style={{ height: '180px', overflow: 'hidden', background: '#f4faf5' }}>
        <img
          src={imgs[active]}
          alt={`${name} ${active + 1}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s ease' }}
        />
      </div>

      {/* Thumbnail strip */}
      {imgs.length > 1 && (
        <div style={{ display: 'flex', gap: 4, padding: '6px 8px', background: '#fff', borderTop: '1px solid #eee', overflowX: 'auto' }}>
          {imgs.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                flexShrink: 0,
                width: 44, height: 44,
                padding: 0, border: 'none',
                borderRadius: 6,
                outline: i === active ? '2px solid var(--secondary)' : '2px solid transparent',
                overflow: 'hidden',
                cursor: 'pointer',
                background: 'none',
                transition: 'outline 0.2s',
              }}
            >
              <img src={src} alt={`thumb ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          ))}
        </div>
      )}

      <div className="service-card-body">
        <span className="badge rounded-pill mb-2" style={{ background: 'var(--light)', color: 'var(--primary)', fontSize: '0.72rem', fontWeight: 600 }}>{code}</span>
        <h6 className="service-card-title" style={{ fontSize: '0.92rem' }}>{name}</h6>
        <p className="service-card-desc" style={{ fontSize: '0.82rem' }}>{desc}</p>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="container-fluid py-5" style={{ background: 'var(--light)' }}>
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: '560px' }} data-aos="fade-up">
          <span className="section-subtitle">Our Range</span>
          <h2 className="section-title">Accessories & Equipment</h2>
          <p className="text-muted">Everything you need for hydroponic and organic farming — from growing media to nutrient solutions.</p>
        </div>

        {categories.map(({ label, products }) => (
          <div className="mb-5" key={label}>
            <h5 className="mb-4 pb-2 border-bottom" style={{ color: 'var(--primary)', fontFamily: "'Poppins', sans-serif" }}>
              <i className="bi bi-grid-3x3-gap-fill me-2"></i>{label}
            </h5>
            <div className="row g-4">
              {products.map(({ code, name, desc, imgs }, i) => (
                <div className="col-lg-3 col-md-4 col-sm-6" key={code} data-aos="fade-up" data-aos-delay={i * 60}>
                  <ProductCard code={code} name={name} desc={desc} imgs={imgs} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
