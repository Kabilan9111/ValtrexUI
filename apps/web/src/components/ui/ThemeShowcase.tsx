import React from 'react';
import { motion } from 'framer-motion';
import { useAppStore } from '@/store';
import { allThemes } from '@/themes';
import { COLOR_DNA_TOKENS, TYPOGRAPHY_DNA_TOKENS } from '@/themes/dna/tokens';
import { Search, Bell, Settings, ChevronDown, Check, Circle, Activity, CreditCard, DollarSign, Users, ChevronRight, PieChart } from 'lucide-react';
import clsx from 'clsx';

export function ThemeShowcase() {
  const { selectedThemeId } = useAppStore();
  const theme = allThemes.find(t => t.id === selectedThemeId) || allThemes[0];
  
  const colorDNA = COLOR_DNA_TOKENS[theme.dna.color];
  const typoDNA = TYPOGRAPHY_DNA_TOKENS[theme.dna.typography];

  // Helper to extract background color from text- color class
  const getBgClass = (textClass: string) => textClass.replace('text-', 'bg-');

  return (
    <div className={clsx(
      "w-full min-h-screen p-8 rounded-2xl border overflow-y-auto space-y-12 pb-24",
      colorDNA.background,
      colorDNA.text,
      colorDNA.border,
      typoDNA.fontFamily
    )}>
      
      {/* Header */}
      <div className={clsx("border-b pb-6 flex items-center justify-between", colorDNA.border)}>
        <div>
          <h1 className={clsx("text-3xl font-bold mb-2", colorDNA.primary, typoDNA.headingClass)}>{theme.metadata.name}</h1>
          <p className={colorDNA.muted}>{theme.metadata.description}</p>
        </div>
        <div className="flex gap-3">
          <button className={clsx("px-4 py-2 rounded-xl border font-bold text-sm transition-colors", colorDNA.border, colorDNA.text, "hover:opacity-80")}>
            Documentation
          </button>
          <button className={clsx("px-4 py-2 rounded-xl font-bold text-sm shadow-lg hover:opacity-90 transition-all text-white", getBgClass(colorDNA.primary))}>
            Download Tokens
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colors & Typography */}
        <div className="space-y-8">
          <section>
            <h2 className={clsx("text-lg font-bold mb-4 flex items-center gap-2", colorDNA.text, typoDNA.headingClass)}>
              <div className={clsx("w-2 h-2 rounded-full", getBgClass(colorDNA.primary))} /> Colors
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className={clsx("p-3 rounded-lg border flex items-center gap-3", colorDNA.card, colorDNA.border)}>
                <div className={clsx("w-8 h-8 rounded-md shadow-sm", getBgClass(colorDNA.primary))} />
                <div><div className={clsx("text-xs font-bold", colorDNA.muted)}>Primary</div><div className="text-sm">DNA</div></div>
              </div>
              <div className={clsx("p-3 rounded-lg border flex items-center gap-3", colorDNA.card, colorDNA.border)}>
                <div className={clsx("w-8 h-8 rounded-md shadow-sm", colorDNA.card, "border", colorDNA.border)} />
                <div><div className={clsx("text-xs font-bold", colorDNA.muted)}>Surface</div><div className="text-sm">DNA</div></div>
              </div>
              <div className={clsx("p-3 rounded-lg border flex items-center gap-3", colorDNA.card, colorDNA.border)}>
                <div className={clsx("w-8 h-8 rounded-md shadow-sm", colorDNA.background, "border", colorDNA.border)} />
                <div><div className={clsx("text-xs font-bold", colorDNA.muted)}>Background</div><div className="text-sm">DNA</div></div>
              </div>
              <div className={clsx("p-3 rounded-lg border flex items-center gap-3", colorDNA.card, colorDNA.border)}>
                <div className={clsx("w-8 h-8 rounded-md shadow-sm", getBgClass(colorDNA.text))} />
                <div><div className={clsx("text-xs font-bold", colorDNA.muted)}>Text Primary</div><div className="text-sm">DNA</div></div>
              </div>
            </div>
          </section>

          <section>
            <h2 className={clsx("text-lg font-bold mb-4 flex items-center gap-2", colorDNA.text, typoDNA.headingClass)}>
              <div className={clsx("w-2 h-2 rounded-full", getBgClass(colorDNA.primary))} /> Typography
            </h2>
            <div className={clsx("p-6 rounded-2xl border space-y-4", colorDNA.card, colorDNA.border)}>
              <div>
                <h1 className={clsx("text-4xl", typoDNA.headingClass)}>Heading 1</h1>
                <p className={clsx("text-xs mt-1", colorDNA.muted)}>{typoDNA.fontFamily}</p>
              </div>
              <div>
                <h2 className={clsx("text-2xl", typoDNA.headingClass)}>Heading 2</h2>
              </div>
              <div>
                <p className={clsx("text-base leading-relaxed", colorDNA.text, typoDNA.bodyClass)}>
                  This is body text. The quick brown fox jumps over the lazy dog. 
                  Design systems make it easy to scale UI while maintaining consistency.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Buttons & Inputs */}
        <div className="space-y-8">
          <section>
            <h2 className={clsx("text-lg font-bold mb-4 flex items-center gap-2", colorDNA.text, typoDNA.headingClass)}>
              <div className={clsx("w-2 h-2 rounded-full", getBgClass(colorDNA.primary))} /> Buttons
            </h2>
            <div className={clsx("p-6 rounded-2xl border space-y-4 flex flex-col items-start", colorDNA.card, colorDNA.border)}>
              <button className={clsx("px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:opacity-90 transition-all w-full flex justify-center items-center gap-2 text-white", getBgClass(colorDNA.primary))}>
                Primary Action <ChevronRight className="w-4 h-4" />
              </button>
              <button className={clsx("px-6 py-2.5 rounded-xl border font-bold text-sm w-full transition-all hover:opacity-80", colorDNA.card, colorDNA.border, colorDNA.text)}>
                Secondary Action
              </button>
              <button className={clsx("px-6 py-2.5 rounded-xl border border-transparent font-bold text-sm w-full transition-all hover:opacity-80", colorDNA.primary)}>
                Ghost Button
              </button>
            </div>
          </section>

          <section>
            <h2 className={clsx("text-lg font-bold mb-4 flex items-center gap-2", colorDNA.text, typoDNA.headingClass)}>
              <div className={clsx("w-2 h-2 rounded-full", getBgClass(colorDNA.primary))} /> Forms & Inputs
            </h2>
            <div className={clsx("p-6 rounded-2xl border space-y-4", colorDNA.card, colorDNA.border)}>
              <div className="space-y-1.5">
                <label className={clsx("text-xs font-bold", colorDNA.muted)}>Email Address</label>
                <input type="email" placeholder="you@example.com" className={clsx("w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-all", colorDNA.background, colorDNA.border, colorDNA.text)} />
              </div>
              <div className="space-y-1.5">
                <label className={clsx("text-xs font-bold", colorDNA.muted)}>Project Category</label>
                <div className="relative">
                  <select className={clsx("w-full border rounded-xl px-4 py-2.5 text-sm appearance-none focus:outline-none transition-all", colorDNA.background, colorDNA.border, colorDNA.text)}>
                    <option>SaaS Application</option>
                    <option>E-Commerce</option>
                    <option>Marketing Site</option>
                  </select>
                  <ChevronDown className={clsx("w-4 h-4 absolute right-4 top-3 pointer-events-none", colorDNA.muted)} />
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <div className={clsx("w-5 h-5 rounded border flex items-center justify-center text-white", getBgClass(colorDNA.primary), colorDNA.border)}>
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className={clsx("text-sm", colorDNA.text)}>Subscribe to newsletter</span>
              </div>
            </div>
          </section>
        </div>

        {/* Cards & Complex UI */}
        <div className="space-y-8">
          <section>
            <h2 className={clsx("text-lg font-bold mb-4 flex items-center gap-2", colorDNA.text, typoDNA.headingClass)}>
              <div className={clsx("w-2 h-2 rounded-full", getBgClass(colorDNA.primary))} /> Cards & Data
            </h2>
            
            {/* Stat Card */}
            <div className={clsx("p-6 rounded-2xl border mb-4 shadow-sm hover:shadow-md transition-shadow", colorDNA.card, colorDNA.border)}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className={clsx("text-sm font-bold uppercase tracking-wider mb-1", colorDNA.muted)}>Total Revenue</div>
                  <div className={clsx("text-3xl font-black", colorDNA.text)}>$124,563.00</div>
                </div>
                <div className={clsx("w-10 h-10 rounded-xl flex items-center justify-center border", colorDNA.border)}>
                  <DollarSign className={clsx("w-5 h-5", colorDNA.primary)} />
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">+14.5%</span>
                <span className={colorDNA.muted}>from last month</span>
              </div>
            </div>

            {/* List Card */}
            <div className={clsx("p-6 rounded-2xl border shadow-sm", colorDNA.card, colorDNA.border)}>
              <div className="flex justify-between items-center mb-6">
                <h3 className={clsx("font-bold", colorDNA.text)}>Recent Users</h3>
                <button className={clsx("text-xs font-bold", colorDNA.primary)}>View All</button>
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className={clsx("w-10 h-10 rounded-full border flex items-center justify-center", colorDNA.background, colorDNA.border)}>
                      <Users className={clsx("w-4 h-4", colorDNA.muted)} />
                    </div>
                    <div className="flex-1">
                      <div className={clsx("text-sm font-bold", colorDNA.text)}>User {i}</div>
                      <div className={clsx("text-xs", colorDNA.muted)}>user{i}@example.com</div>
                    </div>
                    <button className={clsx("px-3 py-1.5 rounded-lg border text-xs font-bold hover:opacity-80 transition-colors", colorDNA.border, colorDNA.text)}>
                      Edit
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
          </section>
        </div>

      </div>

      {/* Tables Section */}
      <section>
        <h2 className={clsx("text-lg font-bold mb-4 flex items-center gap-2", colorDNA.text, typoDNA.headingClass)}>
          <div className={clsx("w-2 h-2 rounded-full", getBgClass(colorDNA.primary))} /> Data Tables
        </h2>
        <div className={clsx("rounded-2xl border overflow-hidden", colorDNA.card, colorDNA.border)}>
          <table className="w-full text-left text-sm">
            <thead className={clsx("border-b uppercase tracking-wider text-[11px] font-bold", colorDNA.background, colorDNA.border, colorDNA.muted)}>
              <tr>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className={clsx("divide-y", colorDNA.border)}>
              {[
                { id: "TRX-8921", customer: "Acme Corp", amount: "$4,500.00", status: "Completed", color: "emerald" },
                { id: "TRX-8922", customer: "Globex Inc", amount: "$1,250.00", status: "Processing", color: "blue" },
                { id: "TRX-8923", customer: "Stark Ind", amount: "$9,800.00", status: "Failed", color: "rose" },
              ].map((row, i) => (
                <tr key={i} className="hover:opacity-80 transition-opacity">
                  <td className={clsx("px-6 py-4 font-mono text-xs font-bold", colorDNA.text)}>{row.id}</td>
                  <td className={clsx("px-6 py-4", colorDNA.muted)}>{row.customer}</td>
                  <td className={clsx("px-6 py-4 font-bold", colorDNA.text)}>{row.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold bg-${row.color}-500/10 text-${row.color}-500 border border-${row.color}-500/20`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className={clsx("transition-colors font-bold text-xs hover:opacity-80", colorDNA.primary)}>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
}

