import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import pageTitleBg from '../assets/img/page-title-bg.jpg';

interface SubCategory {
  name: string;
  items: string[];
}

interface Category {
  name: string;
  subcategories?: SubCategory[];
  items?: string[];
}

const PRODUCT_CATALOG: Category[] = [
  {
    name: 'PROCESS WISE',
    subcategories: [
      {
        name: 'PRETREATMENT',
        items: [
          'Desizing Agents',
          'Wetting and Penetrating Agents',
          'Mercerizing Agent',
          'Sequestering Agents',
          'Demineralising Agents',
          'Wetting agents cum Detergents',
          'Silicone Defoamers',
          'Non-silicate Peroxide Stabilizers',
          'Neutralizers',
          'Polyester Weight Reducing Catalyst',
          'Anti-back Staining Agents',
          'Core Alkali Neutralizers'
        ]
      },
      {
        name: 'DYEING',
        items: [
          'DEFOAMER',
          'ACID BUFFERS',
          'POLYESTER DYEING CARRIER',
          'DISPERSING AGENT AND OLIGOMER REMOVING AGENTS',
          'LEVELLING AGENTS',
          'ANTICREASE LUBRICANTS',
          'WASHING OFF AGENTS',
          'DYE‐FIXING AGENTS',
          'SODA ASH SUBSTITUTE',
          'CATIONISING AGENT',
          'REDUCTION CLEARING AGENTS'
        ]
      },
      {
        name: 'PRINTING',
        items: [
          'FIXATION ACCELERATOR IN POLYESTER PRINTING FIXED ON LOOP STEAMER',
          'DISPERSING',
          'PENETRATING',
          'SWELLING',
          'LEVELLING',
          'DEFOAMING',
          'ANTIFROATHING AGENTS',
          'BINDERS',
          'FIXERS IN PIGMENT PRINTING',
          'THICKENERS',
          'WHITE INKS',
          'WASHING OFF AGENT',
          'SOFTENER FOR PIGMENT PRINTING',
          'OXIDISING AGENTS'
        ]
      },
      {
        name: 'FINISHING AGENTS',
        items: [
          'STIFFENERS',
          'SOFTENERS',
          'SILICONE SOFTENERS',
          'WAX FINISHING AGENTS',
          'ANTISTATIC AGENT',
          'POLYURETHANE FINISHING AGENT',
          'ANTICREASE RESINS'
        ]
      },
      {
        name: 'POLYVINYL ALCOHOL',
        items: [
          'ALL TYPES OF PVA GRADES'
        ]
      }
    ],
    items: [
      'ALL TYPES OF SOLVENTS',
      'ALL TYPES OF SURFACTANTS'
    ]
  },
  {
    name: 'BULK ORDER PRODUCTS',
    items: [
      'TOLUENE',
      'ETHYL',
      'IPA-ISOPROPYL ALCOHOL',
      'ACETONE'
    ]
  },
  {
    name: 'BASICS TEXTILE CHEMICALS',
    items: [
      'ACETIC ACID',
      'SULFURIC ACID',
      'TARTARIC ACID',
      'OXALIC ACID',
      'FORMIC ACID',
      'HYDROGEN PEROXIDE',
      'GLYCERINE',
      'CITRIC ACID',
      'POLYSOL',
      'MBX',
      'SODIUM ACETATE',
      'NID',
      'CATSTROX',
      'AERLAMIDE'
    ]
  }
];

export const Products: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Set of open node names. By default, open everything.
  const [openNodes, setOpenNodes] = useState<Record<string, boolean>>({
    'PROCESS WISE': true,
    'PRETREATMENT': true,
    'DYEING': true,
    'PRINTING': true,
    'FINISHING AGENTS': true,
    'POLYVINYL ALCOHOL': true,
    'BULK ORDER PRODUCTS': true,
    'BASICS TEXTILE CHEMICALS': true,
  });

  const toggleNode = (nodeName: string) => {
    setOpenNodes((prev) => ({
      ...prev,
      [nodeName]: !prev[nodeName],
    }));
  };

  // If search query is non-empty, auto-expand any matching category
  useEffect(() => {
    if (searchQuery.trim() === '') return;

    const query = searchQuery.toLowerCase();
    const newOpenState = { ...openNodes };
    let changed = false;

    PRODUCT_CATALOG.forEach((cat) => {
      let catMatches = false;

      if (cat.items?.some(item => item.toLowerCase().includes(query))) {
        catMatches = true;
      }

      cat.subcategories?.forEach((sub) => {
        const subMatches = sub.items.some(item => item.toLowerCase().includes(query));
        if (subMatches) {
          if (!newOpenState[sub.name]) {
            newOpenState[sub.name] = true;
            changed = true;
          }
          catMatches = true;
        }
      });

      if (catMatches && !newOpenState[cat.name]) {
        newOpenState[cat.name] = true;
        changed = true;
      }
    });

    if (changed) {
      setOpenNodes(newOpenState);
    }
  }, [searchQuery]);

  const highlightText = (text: string, search: string) => {
    if (!search.trim()) return <span>{text}</span>;
    const regex = new RegExp(`(${search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <span key={i} className="tree-highlight">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  const isItemVisible = (itemName: string) => {
    if (!searchQuery.trim()) return true;
    return itemName.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const isSubcategoryVisible = (sub: SubCategory) => {
    if (!searchQuery.trim()) return true;
    return sub.items.some(item => item.toLowerCase().includes(searchQuery.toLowerCase())) ||
      sub.name.toLowerCase().includes(searchQuery.toLowerCase());
  };

  const isCategoryVisible = (cat: Category) => {
    if (!searchQuery.trim()) return true;
    const matchesItems = cat.items?.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSub = cat.subcategories?.some(sub => isSubcategoryVisible(sub));
    return !!(matchesItems || matchesSub || cat.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {};
    PRODUCT_CATALOG.forEach((cat) => {
      allExpanded[cat.name] = true;
      cat.subcategories?.forEach((sub) => {
        allExpanded[sub.name] = true;
      });
    });
    setOpenNodes(allExpanded);
  };

  const collapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    PRODUCT_CATALOG.forEach((cat) => {
      allCollapsed[cat.name] = false;
      cat.subcategories?.forEach((sub) => {
        allCollapsed[sub.name] = false;
      });
    });
    setOpenNodes(allCollapsed);
  };

  return (
    <>
      {/* Page Title */}
      <div
        className="page-title position-relative d-flex align-items-center justify-content-center"
        data-aos="fade"
        style={{
          backgroundImage: `url(${pageTitleBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          padding: '120px 0 80px 0'
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
        <div className="container-fluid container-xl position-relative text-center z-10">
          <span className="hero-badge" data-aos="fade-up" data-aos-delay="100">
            <span className="pulse-dot"></span>Interactive Directory
          </span>
          <h1 className="text-white font-extrabold tracking-tight mt-2" data-aos="fade-up" data-aos-delay="200" style={{ fontSize: '3.2rem' }}>
            Products
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto mt-3" data-aos="fade-up" data-aos-delay="300" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            Explore the hierarchical structure of our product catalog. Expand the folders to discover chemical agents, solvents, and specialty compounds.
          </p>
          <nav className="breadcrumbs d-flex justify-content-center mt-4" data-aos="fade-up" data-aos-delay="400">
            <ol className="d-flex list-unstyled gap-2 m-0 p-0 text-slate-300" style={{ fontSize: '14.5px' }}>
              <li><Link to="/" className="text-slate-400 hover:text-white transition">Home</Link></li>

              <li className="text-white font-semibold">Products</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Directory Section */}
      <section className="about section bg-slate-50/50" style={{ padding: '80px 0' }}>
        <div className="container-fluid container-xl">

          <div className="mb-5 text-center" data-aos="fade-up">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1.5 rounded-pill mb-3" style={{ background: 'rgba(13, 66, 255, 0.08)', color: '#0d42ff', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
              <span className="partner-glow-dot"></span>
              Visual Hierarchy
            </div>
            <h2 className="mb-4 text-slate-800 font-extrabold" style={{ fontSize: '32px' }}>
              Products Directory
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto" style={{ fontSize: '15.5px', lineHeight: '1.7' }}>
              Use the interactive folder explorer below to browse our offerings. Toggle directories to expand or collapse sub-categories, and use the search bar to locate specific chemical formulations instantly.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-lg-10">

              {/* Directory Filter & Search Header */}
              <div className="bg-white px-4 py-3 rounded-t-3xl border border-slate-100 border-b-0 shadow-sm d-flex flex-md-row flex-column justify-content-between align-items-center gap-3">
                <div className="d-flex gap-2">
                  <button
                    onClick={expandAll}
                    className="btn btn-sm btn-outline-primary rounded-pill px-3"
                    style={{ fontSize: '12px', fontWeight: 600 }}
                  >
                    <i className="bi bi-folder-plus me-1"></i> Expand All
                  </button>
                  <button
                    onClick={collapseAll}
                    className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                    style={{ fontSize: '12px', fontWeight: 600 }}
                  >
                    <i className="bi bi-folder-minus me-1"></i> Collapse All
                  </button>
                </div>
                <div className="position-relative w-100" style={{ maxWidth: '350px' }}>
                  <input
                    type="text"
                    placeholder="Search chemical name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="form-control rounded-pill ps-4 pe-5"
                    style={{ fontSize: '14px', height: '38px', border: '1px solid rgba(13, 66, 255, 0.15)' }}
                  />
                  <i
                    className="bi bi-search position-absolute end-0 top-50 translate-middle-y me-3 text-slate-400"
                    style={{ pointerEvents: 'none' }}
                  ></i>
                </div>
              </div>

              {/* Main Directory Tree Container */}
              <div className="tree-container rounded-b-3xl border-t-0">
                <ul className="tree-root">

                  {/* ROOT NODE: Our Products */}
                  <li className="tree-node" style={{ paddingLeft: 0 }}>
                    <div className="tree-node-content tree-node-category" style={{ background: 'rgba(13, 66, 255, 0.05)', border: '1px solid rgba(13, 66, 255, 0.1)' }}>
                      <i className="bi bi-box-seam-fill tree-node-icon text-primary"></i>
                      <span>OUR PRODUCTS (CATALOG ROOT)</span>
                    </div>

                    <ul className="tree-children mt-3">

                      {PRODUCT_CATALOG.map((cat, catIdx) => {
                        if (!isCategoryVisible(cat)) return null;
                        const isCatOpen = !!openNodes[cat.name];

                        return (
                          <li key={catIdx} className="tree-node">

                            {/* Category Node */}
                            <div
                              className="tree-node-content tree-node-category"
                              onClick={() => toggleNode(cat.name)}
                            >
                              <i className={`bi ${isCatOpen ? 'bi-folder2-open' : 'bi-folder2'} tree-node-icon`}></i>
                              <span>{highlightText(cat.name, searchQuery)}</span>
                            </div>

                            {/* Category Children */}
                            {isCatOpen && (
                              <ul className="tree-children">

                                {/* Subcategories (if any) */}
                                {cat.subcategories?.map((sub, subIdx) => {
                                  if (!isSubcategoryVisible(sub)) return null;
                                  const isSubOpen = !!openNodes[sub.name];

                                  return (
                                    <li key={subIdx} className="tree-node">

                                      {/* Subcategory Node */}
                                      <div
                                        className="tree-node-content tree-node-subcategory"
                                        onClick={() => toggleNode(sub.name)}
                                      >
                                        <i className={`bi ${isSubOpen ? 'bi-folder2-open' : 'bi-folder2'} tree-node-icon`}></i>
                                        <span>{highlightText(sub.name, searchQuery)}</span>
                                      </div>

                                      {/* Subcategory Items */}
                                      {isSubOpen && (
                                        <ul className="tree-children">
                                          {sub.items.map((item, itemIdx) => {
                                            if (!isItemVisible(item)) return null;
                                            return (
                                              <li key={itemIdx} className="tree-node">
                                                <div className="tree-node-content tree-node-item">
                                                  <i className="bi bi-droplet-fill tree-node-icon"></i>
                                                  <span>{highlightText(item, searchQuery)}</span>
                                                </div>
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      )}

                                    </li>
                                  );
                                })}

                                {/* Direct Category Items (if any, e.g. solvents/surfactants) */}
                                {cat.items?.map((item, itemIdx) => {
                                  if (!isItemVisible(item)) return null;
                                  return (
                                    <li key={itemIdx} className="tree-node">
                                      <div className="tree-node-content tree-node-item">
                                        <i className="bi bi-droplet-fill tree-node-icon"></i>
                                        <span>{highlightText(item, searchQuery)}</span>
                                      </div>
                                    </li>
                                  );
                                })}

                              </ul>
                            )}

                          </li>
                        );
                      })}

                    </ul>
                  </li>

                </ul>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Products;
