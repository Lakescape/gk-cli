import React from "react";

type CurrencyOptions = {
  symbol?: string;
  locale?: string;
};

const currency = (cents: number, opts: CurrencyOptions = {}) => {
  const { symbol = "﷼", locale = "en-SA" } = opts;
  return `${symbol}${(cents / 100).toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

export function KpiCards() {
  const kpis = [
    { label: "Total Revenue", value: currency(125000000), detail: "156 jobs completed" },
    { label: "Gross Profit", value: currency(43750000), detail: "35.0% margin" },
    { label: "Profit Margin", value: "35.0%", detail: "of total revenue" },
    { label: "Outstanding A/R", value: currency(8500000), detail: "12 overdue" },
    { label: "Active Customers", value: "89", detail: "unique customers" },
    { label: "Win Rate", value: "68%", detail: "last 30 days" },
  ];

  return (
    <section className="card-grid">
      {kpis.map((kpi) => (
        <article key={kpi.label} className="glass-panel p-4 shadow-glow">
          <p className="stat-label">{kpi.label}</p>
          <div className="flex items-end justify-between pt-2">
            <p className="stat-value">{kpi.value}</p>
          </div>
          <p className="mt-1 text-xs text-slate-300">{kpi.detail}</p>
        </article>
      ))}
    </section>
  );
}

const statusTone: Record<string, string> = {
  sent: "badge-warning",
  won: "badge-success",
  draft: "badge-muted",
  lost: "badge-danger",
  pending: "badge-warning",
  viewed: "badge-warning",
  scheduled: "badge-warning",
  completed: "badge-success",
  in_progress: "badge-warning",
};

export function BidsTable() {
  const bids = [
    {
      id: 232,
      customer: "John Smith",
      service: "Boat Lift",
      dimensions: "30ft × 30ft",
      total: currency(3200026),
      status: "won",
      outcome: "won",
      layout: "View",
      created: "Nov 25, 2025",
    },
    {
      id: 31,
      customer: "Christer Rundlof",
      service: "Dock Repair",
      dimensions: "24ft × 16ft",
      total: currency(199654),
      status: "draft",
      outcome: "pending",
      layout: "View",
      created: "Oct 27, 2025",
    },
    {
      id: 30,
      customer: "Sarah Borders",
      service: "Seawall",
      dimensions: "—",
      total: currency(4500000),
      status: "sent",
      outcome: "pending",
      layout: "No layout",
      created: "Oct 26, 2025",
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
            <th>Outcome</th>
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
                <span className={`${statusTone[bid.outcome] ?? "badge-muted"} capitalize`}>
                  {bid.outcome}
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
      job: "JOB-2025-089",
      customer: "John Smith",
      service: "Dock Repair",
      status: "completed",
      revenue: currency(8374395),
      endDate: "Nov 20, 2025",
    },
    {
      job: "JOB-2025-090",
      customer: "Sarah Borders",
      service: "Seawall",
      status: "scheduled",
      revenue: currency(4500000),
      endDate: "Dec 5, 2025",
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
          <p className="font-semibold text-white">30ft × 30ft footprint</p>
          <p className="text-slate-400">Auto-scales piling count + boat slip cutouts.</p>
        </div>
        <div className="glass-border rounded-xl p-3">
          <p className="stat-label">Materials</p>
          <p className="font-semibold text-white">Composite decking · Steel pilings</p>
          <p className="text-slate-400">Configured for per-tenant cost codes.</p>
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
