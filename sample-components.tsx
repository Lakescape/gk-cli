import React from "react";

const currency = (cents: number) =>
  `$${(cents / 100).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

export function KpiCards() {
  const kpis = [
    { label: "Total Revenue", value: currency(824500000), delta: "+12% YoY" },
    { label: "Gross Profit", value: currency(296400000), delta: "+6.4%" },
    { label: "Profit Margin", value: "36%", delta: "+1.3pp" },
    { label: "Outstanding A/R", value: currency(126800000), delta: "-4.2%" },
    { label: "Active Customers", value: "187", delta: "+18" },
    { label: "Win Rate", value: "28%", delta: "+2pp" },
  ];

  return (
    <section className="card-grid">
      {kpis.map((kpi) => (
        <article key={kpi.label} className="glass-panel p-4 shadow-glow">
          <p className="stat-label">{kpi.label}</p>
          <div className="flex items-end justify-between pt-2">
            <p className="stat-value">{kpi.value}</p>
            <span className="badge badge-success">{kpi.delta}</span>
          </div>
        </article>
      ))}
    </section>
  );
}

const statusTone: Record<string, string> = {
  sent: "badge-warning",
  accepted: "badge-success",
  lost: "badge-danger",
  in_progress: "badge-warning",
  completed: "badge-success",
  pending: "badge-warning",
};

export function BidsTable() {
  const bids = [
    {
      id: "BID-2487",
      customer: "Lake Travis Estates",
      service: "Dock Repair",
      dimensions: "42ft x 24ft",
      total: currency(1485000),
      status: "sent",
      layout: "View",
      created: "Sep 30, 2025",
    },
    {
      id: "BID-2488",
      customer: "Sunset Cove HOA",
      service: "Seawall",
      dimensions: "88ft shoreline",
      total: currency(4850000),
      status: "accepted",
      layout: "View",
      created: "Sep 29, 2025",
    },
  ];

  return (
    <div className="table-surface">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Service</th>
            <th>Dimensions</th>
            <th>Total</th>
            <th>Status</th>
            <th>Layout</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {bids.map((bid) => (
            <tr key={bid.id} className="border-b border-white/5">
              <td className="font-medium">{bid.id}</td>
              <td className="text-slate-200">{bid.customer}</td>
              <td className="text-slate-200">{bid.service}</td>
              <td className="text-slate-300">{bid.dimensions}</td>
              <td className="text-white">{bid.total}</td>
              <td>
                <span className={`${statusTone[bid.status]} capitalize`}>
                  {bid.status.replace("_", " ")}
                </span>
              </td>
              <td>
                <button className="btn-primary px-3 py-1 text-xs">{bid.layout}</button>
              </td>
              <td className="text-slate-300">{bid.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function JobsTable() {
  const jobs = [
    {
      job: "JOB-1173",
      customer: "Windy Point Marina",
      service: "Seawall",
      status: "in_progress",
      revenue: currency(12850000),
      endDate: "Oct 14, 2025",
    },
    {
      job: "JOB-1174",
      customer: "Hidden Shores",
      service: "Dock Repair",
      status: "completed",
      revenue: currency(6850000),
      endDate: "Sep 18, 2025",
    },
  ];

  return (
    <div className="table-surface">
      <table>
        <thead>
          <tr>
            <th>Job #</th>
            <th>Customer</th>
            <th>Service</th>
            <th>Status</th>
            <th>Revenue</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.job} className="border-b border-white/5">
              <td className="font-medium">{job.job}</td>
              <td className="text-slate-200">{job.customer}</td>
              <td className="text-slate-200">{job.service}</td>
              <td>
                <span className={`${statusTone[job.status]} capitalize`}>
                  {job.status.replace("_", " ")}
                </span>
              </td>
              <td className="text-white">{job.revenue}</td>
              <td className="text-slate-300">{job.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LayoutGeneratorHero() {
  return (
    <section className="glass-panel p-6 shadow-glow">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="stat-label">AI Layout Generator</p>
          <h2 className="text-2xl font-semibold text-white">SVG dock diagrams in seconds</h2>
          <p className="mt-2 text-sm text-slate-300">
            Feed dimensions, pilings, materials, and boat slip details to instantly generate a dock layout preview.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
            <span className="badge badge-success">SVG export</span>
            <span className="badge badge-warning">Live preview</span>
            <span className="badge badge-success">Versioning</span>
          </div>
        </div>
        <button className="btn-primary px-5 py-2 text-sm">Open Layout Modal</button>
      </div>
      <div className="gradient-divider my-5" />
      <div className="grid gap-3 md:grid-cols-3 text-xs text-slate-200">
        <div className="glass-border rounded-xl p-3">
          <p className="stat-label">Dimensions</p>
          <p className="font-semibold text-white">42ft x 24ft footprint</p>
          <p className="text-slate-400">Auto-scales piling count + boat slip cutouts.</p>
        </div>
        <div className="glass-border rounded-xl p-3">
          <p className="stat-label">Materials</p>
          <p className="font-semibold text-white">Ipe decking · Galvanized pilings</p>
          <p className="text-slate-400">Pre-configured cost codes per tenant.</p>
        </div>
        <div className="glass-border rounded-xl p-3">
          <p className="stat-label">Docs</p>
          <p className="font-semibold text-white">SVG + HTML exports</p>
          <p className="text-slate-400">Served from /documents/view/:type/:filename.</p>
        </div>
      </div>
    </section>
  );
}

export default function SampleDashboard() {
  return (
    <div className="space-y-6 p-6">
      <KpiCards />
      <LayoutGeneratorHero />
      <BidsTable />
      <JobsTable />
    </div>
  );
}
