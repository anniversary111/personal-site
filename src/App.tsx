import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Phone, 
  ChevronRight, 
  Database, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  Target, 
  Compass, 
  Cpu, 
  GraduationCap, 
  Heart,
  Camera,
  Music,
  Tent,
  Waves,
  Snowflake,
  ExternalLink,
  MessageCircle,
  Zap
} from 'lucide-react';

import profilePic from './profile.jpg';

const App = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation */}
      <nav className="glass-nav sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-bold text-lg tracking-tight">李周年 // Li Zhounian</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
            <a href="#career" className="hover:text-black transition-colors">背景 / Background</a>
            <a href="#skills" className="hover:text-black transition-colors">能力 / Tools</a>
            <a href="#projects" className="hover:text-black transition-colors">项目 / Projects</a>
            <a href="#leadership" className="hover:text-black transition-colors">领导力 / Leadership</a>
            <a href="#whyme" className="hover:text-black transition-colors">匹配 / Why Me</a>
            <a href="#interests" className="hover:text-black transition-colors">生活 / Life</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 mt-12 space-y-8">
        
        {/* Section 1: Hero Profile (High-Impact Hero) */}
        <section className="col-span-full">
          <motion.div 
            {...fadeIn}
            className="bento-card relative overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col justify-end border-none p-0 group"
          >
            <div className="absolute inset-0 bg-zinc-900">
               <img 
                 src={profilePic} 
                 alt="李周年" 
                 className="w-full h-full object-[75%_center] object-cover transition-transform duration-1000 group-hover:scale-105"
                 onError={(e) => {
                   console.error("图片加载失败：请检查 /src/profile.jpg 是否合法");
                 }}
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
               <div className="absolute inset-0 bg-black/15" />
            </div>

            <div className="relative z-10 p-8 md:p-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-lg">
                  <span className="text-accent font-bold text-sm tracking-[0.4em] uppercase mb-6 block drop-shadow-sm">Procurement Professional Trainee Candidate</span>
                  <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white leading-[1.1]">
                    Hi, I'm <span className="italic">李周年</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8">
                    数据逻辑驱动的供应管理准专才。<br />
                    致力于通过精准的变量控制，助力小鹏汽车实现高效供应与极致交付。
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl text-sm text-white border border-white/20 font-bold">
                      <GraduationCap size={18} className="text-accent" />
                      <span>布里斯托大学 // Master</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-2xl text-sm text-white border border-white/20 font-bold">
                      <Zap size={18} className="text-accent" />
                      <span>数据逻辑驱动供应</span>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block text-right pb-2">
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.5em] font-black mb-2">Philosophy</p>
                  <p className="text-white/80 text-sm font-medium italic">
                    “追求供需与效率的绝对平衡。”
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Career & Framework (Internships) */}
        <section id="career" className="space-y-6">
          <div className="flex items-center gap-3 ml-2">
            <Compass className="text-accent" size={20} />
            <h2 className="text-xl font-bold">行业经历与能力基石 // Background</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeIn} className="bento-card group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-extrabold mb-1">中泰证券 // 投行部 IPO 项目组</h3>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">核心职能：数据核对与逻辑治理</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  <BarChart3 size={20} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" />
                    BOM 逻辑治理与闭环意识
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    主导 BOM 结构梳理与原材料层级还原，核对 500+ 项复杂财务数据。通过极高的细节把控力，确保核算过程精准闭环。
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" />
                    跨主体协同与高效响应
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    深度对接会计师与发行人，快速响应多主体合规要求。在复杂项目中体现了敏捷的跨部门协同与问题解决能力。
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bento-card group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-extrabold mb-1">罗克韦尔自动化 // 产品信息管理</h3>
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">核心职能：主数据标准化与流程优化</p>
                </div>
                <div className="bg-gray-100 p-2 rounded-xl group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                  <Database size={20} />
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" />
                    标准化意识与系统支持
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    负责 3000+ 条产品主数据管理，优化 100+ 份技术手册命名规范。以强大的标准化执行力，筑牢系统化供应的数字底座。
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
                  <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-accent" />
                    流程优化与资产效能
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    通过字段更新与权限重构，缩短物料信息跨部门流转链路。在支持日常运营的同时，具备显著的流程优化自驱力。
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Tools & Expertise */}
        <section id="skills" className="grid grid-cols-1 md:grid-cols-12 gap-8">
           <motion.div {...fadeIn} className="md:col-span-4 bento-card flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-4">掌握的分析工具 // Tools</h2>
              <p className="text-sm text-gray-500 mb-6 font-medium">不止于使用工具，更在于通过工具发现业务洞察。</p>
              <div className="flex flex-wrap gap-2">
                {['SQL', 'Python', 'Excel', 'Tableau', 'Power BI', 'R'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 border border-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
           </motion.div>
           <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="md:col-span-8 bento-card">
              <h2 className="text-xl font-bold mb-6">可迁移的专业软实力 // Expertise</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: "数据清洗/清洗", desc: "处理脏数据与孤岛信息", icon: <Database className="text-blue-500" size={16}/> },
                  { label: "可视化分析", desc: "辅助供应链决策透明化", icon: <BarChart3 className="text-green-500" size={16}/> },
                  { label: "流程化思维", desc: "习惯通过逻辑建立路径", icon: <Zap className="text-yellow-500" size={16}/> },
                  { label: "项目协同", desc: "跨部门沟通与同步能力", icon: <Users className="text-purple-500" size={16}/> }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-2xl flex flex-col gap-2 hover:bg-white transition-all cursor-default group border border-transparent hover:border-gray-100">
                    <div className="p-2 bg-white rounded-xl w-fit group-hover:shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold mb-1 font-sans">{item.label}</h4>
                      <p className="text-[10px] text-gray-400 leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           </motion.div>
        </section>

        {/* Section 4: Projects */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center gap-3 ml-2">
            <Target className="text-accent" size={20} />
            <h2 className="text-xl font-bold">精选项目经历 // Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="bento-card group h-full">
              <div className="p-6">
                <h4 className="text-sm font-bold text-accent mb-2">资源调研与链路分析</h4>
                <h3 className="text-lg font-bold mb-3">四省秸秆原料供应链调查研究</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  深度调研 3183 份行业样本，利用 ISM 模型精准还原供应链各环节的影响因果。结合数据量化链条效应，提出可落地的资源配置优化建议。
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bento-card group h-full">
                <div className="p-6">
                <h4 className="text-sm font-bold text-accent mb-2">复杂因素拆解与策略干预</h4>
                <h3 className="text-lg font-bold mb-3">区域居民分类行为影响机制研究</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  从用户心理与环境约束入手，通过多维回归分析定位核心博弈点。以数据为支撑制定针对性的管理策略，展示了对社会化供应链末端的洞察力。
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bento-card group h-full">
              <div className="p-6">
                <h4 className="text-sm font-bold text-accent mb-2">算法模型与数据决策支持</h4>
                <h3 className="text-lg font-bold mb-3">基于 Transformer 的短时预测研究</h3>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  攻克数据非平稳性难题，负责从特征提取到模型落地的全过程。体现了对于前沿算法的拆解与应用能力，致力于为管理决策注入“确定性”。
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4.5: Leadership (Student Experience) */}
        <section id="leadership" className="space-y-6">
          <div className="flex items-center gap-3 ml-2">
            <Users className="text-accent" size={20} />
            <h2 className="text-xl font-bold">领导力与学生工作 // Leadership</h2>
          </div>
          <div className="bento-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-4 border-l border-gray-100">
                  <h4 className="text-sm font-bold mb-2">多组织统筹与推进</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    曾担任多项校园活动负责人，展现出强大的组织号召力。在多线程任务并行下，确保项目从执行指令到结果闭环的零误差交付。
                  </p>
               </div>
               <div className="p-4 border-l border-gray-100">
                  <h4 className="text-sm font-bold mb-2">跨部门沟通与博弈</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    在宣传与外联工作中，频繁对接外部合作伙伴。通过高效、真诚的沟通建立信任，通过协调多方利益点达成合作共识。
                  </p>
               </div>
               <div className="p-4 border-l border-gray-100">
                  <h4 className="text-sm font-bold mb-2">责任心与抗压执行</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    面对突发状况具备极强的应变能力。以高度的自驱力与责任感，在时间紧任务重的情况下，保证核心目标的达成。
                  </p>
               </div>
            </div>
          </div>
        </section>

        {/* Section 5: Why Me (Role Matching) */}
        <section id="whyme" className="space-y-6">
          <div className="flex items-center gap-3 ml-2">
            <MessageCircle className="text-accent" size={20} />
            <h2 className="text-xl font-bold">岗位匹配 // Why Me</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div {...fadeIn} className="bento-card border-l-4 border-l-accent">
               <h3 className="text-lg font-bold mb-4">我如何理解采购供应管理？</h3>
               <p className="text-sm text-gray-500 leading-relaxed font-medium mb-4 italic">
                 “采购是‘交付、成本与合规’的动态平衡。供应管理者应当是高效的系统执行者，不仅要关注商务细节，更要具备全局意识，通过风险对冲确保供应链的韧性。”
               </p>
               <span className="text-[10px] uppercase font-bold text-gray-300">Strategic Alignment // Role Fit</span>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bento-card border-l-4 border-l-accent">
               <h3 className="text-lg font-bold mb-4">为什么我是合适的人选？</h3>
               <p className="text-sm text-gray-500 leading-relaxed font-medium mb-4 italic">
                 “严谨的数据处理习惯让我对 BOM 核对与异常管理具备天然的敏锐度。投行与罗克韦尔的多元背景，磨炼了我的抗压性、协调力与标准化意识，完美契合小鹏对采购新人的要求。”
               </p>
               <span className="text-[10px] uppercase font-bold text-gray-300">Candidate Value // Unique Edge</span>
            </motion.div>
          </div>
        </section>

        {/* Section 6: Interests & Lifestyle */}
        <section id="interests" className="space-y-6">
          <div className="flex items-center gap-3 ml-2">
            <Heart className="text-accent" size={20} />
            <h2 className="text-xl font-bold">职业化生活志 // Life</h2>
          </div>
          <motion.div {...fadeIn} className="bento-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
                 {[
                   { label: "中国舞十级 // 塑造审美与坚韧", icon: <Music className="text-pink-500" size={16}/> },
                   { label: "网球羽球 // 追求竞技与反应速度", icon: <Target className="text-orange-500" size={16}/> },
                   { label: "摄影 // 捕捉细节与结构力", icon: <Camera className="text-indigo-500" size={16}/> },
                   { label: "徒步/健身 // 磨炼心志与执行力", icon: <Tent className="text-green-600" size={16}/> },
                   { label: "滑雪 // 极限状态下的快速抉择", icon: <Snowflake className="text-blue-400" size={16}/> },
                   { label: "环球旅行 // 多元文化下的适配力", icon: <Waves className="text-teal-500" size={16}/> }
                 ].map((interest, idx) => (
                   <div key={idx} className="p-4 bg-gray-50 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white border border-transparent hover:border-gray-100 transition-all">
                      <div className="mb-2 p-3 bg-white rounded-2xl shadow-sm">
                        {interest.icon}
                      </div>
                      <span className="text-xs font-bold text-gray-700 font-sans tracking-tight">{interest.label}</span>
                   </div>
                 ))}
              </div>
              <div className="md:col-span-2 flex flex-col">
                  <div className="p-10 bg-gray-900 rounded-[2.5rem] text-white h-full flex flex-col justify-center">
                    <h4 className="text-sm font-bold mb-6 text-accent flex items-center gap-2">
                      <Zap size={14} />
                      Personal Values
                    </h4>
                    <ul className="text-sm space-y-4 opacity-90 font-medium italic">
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">/</span>
                        <span>对数据逻辑有近乎偏执的追求</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">/</span>
                        <span>在运动中学习抗压与策略博弈</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">/</span>
                        <span>热爱多元文化带来的思维碰撞</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent mt-1">/</span>
                        <span>始终保持对行业前沿的好奇心</span>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
                {['# 跨部门协同', '# 极致执行力', '# 逻辑控', '# 终身学习', '# 风险洞察', '# 责任感'].map((tag) => (
                  <span key={tag} className="px-4 py-1 bg-gray-50 rounded-full text-[11px] font-bold text-gray-400 border border-gray-100">
                    {tag}
                  </span>
                ))}
            </div>
          </motion.div>
        </section>

        {/* Section 7: Final Contact */}
        <section id="contact">
          <motion.div 
            {...fadeIn}
            className="bento-card border-none bg-zinc-950 text-white p-12 overflow-hidden relative min-h-[400px] flex flex-col justify-between"
          >
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
                Let's Build the Future <br />
                <span className="text-accent italic">@小鹏汽车</span>
              </h2>
              <p className="text-white/40 max-w-2xl text-[17px] font-medium leading-relaxed">
                我已做好准备将数据敏锐度与极致执行力投入到供应管理一线。如果您正在寻找一名具备复合背景、严谨认真且极具成长潜力的校招生，请联系我。
              </p>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mt-12 md:mt-0">
               <div className="flex flex-col md:flex-row gap-8">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest block">Email</span>
                    <a href="mailto:lizhounian86@163.com" className="text-xl font-bold hover:text-accent transition-colors">
                       lizhounian86@163.com
                    </a>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest block">Phone</span>
                    <a href="tel:18954871576" className="text-xl font-bold hover:text-accent transition-colors">
                       18954871576
                    </a>
                  </div>
               </div>
               
               <div className="text-right">
                  <p className="text-white/20 uppercase text-[10px] tracking-widest font-bold mb-2">Location Strategy</p>
                  <p className="text-white/50 text-xs font-bold">广州 / 肇庆 / 智能制造基地</p>
               </div>
            </div>

            {/* Background elements */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent rounded-full blur-[140px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-10 right-10 opacity-10">
               <Cpu size={180} />
            </div>
          </motion.div>
        </section>

        <footer className="text-center py-10">
           <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.4em]">
             © 2026 Li Zhounian // Driven by Data // Committed to Supply
           </p>
        </footer>

      </main>
    </div>
  );
};

export default App;
