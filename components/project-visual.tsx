import { ArrowUpRight, Check, Globe2, Leaf, ShoppingBag, SlidersHorizontal } from "lucide-react";
export function ProjectVisual({ kind }: { kind: string }) {
  return <div className={"project-visual visual-" + kind} aria-hidden="true">
    {kind === "community" ? <div className="community-preview">
      <div className="mock-nav"><b><Leaf size={16} /> COMMUNITY</b><span>Our work&nbsp;&nbsp; About&nbsp;&nbsp; Contact</span></div>
      <div className="community-body"><span>PEOPLE. PURPOSE. PROGRESS.</span><h4>Stronger communities.<br />Brighter futures.</h4><i>Explore our work <ArrowUpRight size={12} /></i><div className="community-globe"><Globe2 /></div></div>
      <div className="mock-bottom"><span>Community first.</span><span>Together ↗</span></div>
    </div> : kind === "invoice" ? <div className="app-preview invoice-preview">
      <aside><span className="mock-logo">i.</span>{["Overview", "Invoices", "Clients", "Settings"].map((x, i) => <span className={i === 1 ? "selected" : ""} key={x}>{x}</span>)}</aside>
      <div className="mock-main"><div className="mock-title"><b>Invoices</b><span>+ New invoice</span></div><div className="mock-metrics">{["Draft", "Pending", "Paid"].map((x,i) => <div key={x}><small>{x}</small><strong>{["03","06","12"][i]}</strong></div>)}</div><div className="mock-table"><div><b>Invoice</b><b>Status</b><b>Total</b></div>{["001","002","003"].map((x,i) => <div key={x}><span>INV-{x}</span><em>{i === 1 ? "Pending" : "Paid"}</em><span>•••</span></div>)}</div></div>
    </div> : kind === "pos" ? <div className="app-preview pos-preview"><div className="pos-main"><div className="mock-title"><b><ShoppingBag size={15} /> Point of Sale</b><SlidersHorizontal size={14}/></div><div className="pos-tabs">All products <span>Food</span><span>Drinks</span></div><div className="products-grid">{["Coffee", "Croissant", "Matcha", "Sandwich", "Juice", "Cookie"].map((x,i) => <div key={x}><span className={"product-shape shape-"+i} /><b>{x}</b><small>Product preview</small></div>)}</div></div><aside className="pos-order"><b>Current order</b><div className="order-line"/><div className="order-line"/><div className="order-total">Checkout <ArrowUpRight size={13}/></div></aside></div>
    : <div className="data-preview"><div className="mock-title"><b>Campaign overview</b><span>Monthly report</span></div><div className="data-stats"><div><small>Organise</small><strong>Data</strong></div><div><small>Understand</small><strong>Trends</strong></div><div><small>Communicate</small><strong>Insight</strong></div></div><div className="data-bottom"><div className="bar-chart">{[30,48,38,68,58,85,72,96].map((h,i) => <span key={i} style={{height:h+"%"}} />)}</div><div className="donut-chart"><Check /></div></div></div>}
    <span className="preview-caption">ILLUSTRATIVE INTERFACE</span>
  </div>;
}
