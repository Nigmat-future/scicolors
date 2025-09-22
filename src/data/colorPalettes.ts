// SCI论文常用配色方案数据
export interface ColorPalette {
  id: string;
  name: string;
  journal: string;
  description: string;
  colors: string[];
  chartTypes: string[];
  usage: string;
  category: 'nature' | 'science' | 'cell' | 'bioinformatics' | 'physics' | 'chemistry';
}

export const colorPalettes: ColorPalette[] = [
  // Nature系列 (20种)
  {
    id: 'nature-classic',
    name: 'Nature Classic',
    journal: 'Nature',
    description: '经典Nature期刊配色方案，适用于生物医学论文',
    colors: ['#E64B35', '#4DBBD5', '#00A087', '#3C5488', '#F39B7F'],
    chartTypes: ['条形图', '折线图', '散点图'],
    usage: '生物医学研究、基因表达分析',
    category: 'nature'
  },
  {
    id: 'nature-extended',
    name: 'Nature Extended',
    journal: 'Nature',
    description: 'Nature期刊扩展配色，适合多组数据对比',
    colors: ['#E64B35', '#4DBBD5', '#00A087', '#3C5488', '#F39B7F', '#8491B4', '#91D1C2', '#DC0000', '#7E6148'],
    chartTypes: ['热图', '多系列折线图', '分组条形图'],
    usage: '多组对比分析、时间序列数据',
    category: 'nature'
  },
  {
    id: 'nature-genetics-main',
    name: 'Nature Genetics Main',
    journal: 'Nature Genetics',
    description: 'Nature Genetics主要配色方案',
    colors: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E', '#E6AB02', '#A6761D'],
    chartTypes: ['基因组图', 'GWAS图', '系谱图'],
    usage: '遗传学研究、基因定位',
    category: 'nature'
  },
  {
    id: 'nature-neuroscience',
    name: 'Nature Neuroscience',
    journal: 'Nature Neuroscience',
    description: '神经科学研究专用配色',
    colors: ['#FF6B35', '#004E89', '#1A659E', '#F7931E', '#FFD23F', '#06FFA5'],
    chartTypes: ['脑区激活图', '神经元放电图', '行为学数据图'],
    usage: '神经科学、脑成像研究',
    category: 'nature'
  },
  {
    id: 'nature-medicine',
    name: 'Nature Medicine',
    journal: 'Nature Medicine',
    description: '医学研究配色方案',
    colors: ['#C7302A', '#4266F6', '#269040', '#F4A100', '#9C2AA0'],
    chartTypes: ['临床试验图', '生存曲线', '诊断效能图'],
    usage: '临床医学、转化医学研究',
    category: 'nature'
  },
  {
    id: 'nature-biotechnology',
    name: 'Nature Biotechnology',
    journal: 'Nature Biotechnology',
    description: '生物技术研究配色',
    colors: ['#E31A1C', '#FF7F00', '#1F78B4', '#33A02C', '#6A3D9A', '#FB9A99'],
    chartTypes: ['基因编辑效率图', '蛋白表达图', '细胞培养图'],
    usage: '生物技术、基因工程',
    category: 'nature'
  },
  {
    id: 'nature-immunology',
    name: 'Nature Immunology',
    journal: 'Nature Immunology',
    description: '免疫学研究专用配色',
    colors: ['#C0392B', '#8E44AD', '#2980B9', '#16A085', '#F39C12', '#D35400'],
    chartTypes: ['流式细胞术图', '免疫荧光图', 'T细胞分化图'],
    usage: '免疫细胞分析、疫苗研究',
    category: 'nature'
  },
  {
    id: 'nature-cancer',
    name: 'Nature Cancer',
    journal: 'Nature Cancer',
    description: '癌症研究专用配色',
    colors: ['#8B0000', '#FF4500', '#FFD700', '#32CD32', '#1E90FF', '#9370DB'],
    chartTypes: ['肿瘤分期图', '生存分析图', '药物敏感性图'],
    usage: '癌症生物学、肿瘤治疗',
    category: 'nature'
  },
  {
    id: 'nature-aging',
    name: 'Nature Aging',
    journal: 'Nature Aging',
    description: '衰老研究配色方案',
    colors: ['#8B4513', '#DAA520', '#CD853F', '#D2691E', '#BC8F8F', '#F4A460'],
    chartTypes: ['年龄相关变化图', '寿命分析图', '衰老标志物图'],
    usage: '衰老生物学、长寿研究',
    category: 'nature'
  },
  {
    id: 'nature-metabolism',
    name: 'Nature Metabolism',
    journal: 'Nature Metabolism',
    description: '代谢研究配色',
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'],
    chartTypes: ['代谢通路图', '能量流图', '营养素分析图'],
    usage: '代谢生物学、营养学研究',
    category: 'nature'
  },
  {
    id: 'nature-structural',
    name: 'Nature Structural Biology',
    journal: 'Nature Structural & Molecular Biology',
    description: '结构生物学配色',
    colors: ['#2E8B57', '#4682B4', '#DAA520', '#DC143C', '#8A2BE2', '#20B2AA'],
    chartTypes: ['蛋白质结构图', '分子对接图', '动力学模拟图'],
    usage: '结构生物学、分子模拟',
    category: 'nature'
  },
  {
    id: 'nature-plants',
    name: 'Nature Plants',
    journal: 'Nature Plants',
    description: '植物科学研究配色',
    colors: ['#228B22', '#32CD32', '#90EE90', '#8FBC8F', '#00FF7F', '#ADFF2F'],
    chartTypes: ['光合作用图', '植物生长图', '基因表达图'],
    usage: '植物生物学、农业科学',
    category: 'nature'
  },
  {
    id: 'nature-microbiology',
    name: 'Nature Microbiology',
    journal: 'Nature Microbiology',
    description: '微生物学研究配色',
    colors: ['#800080', '#FF1493', '#00CED1', '#FFD700', '#32CD32', '#FF4500'],
    chartTypes: ['菌群分析图', '抗生素敏感性图', '代谢网络图'],
    usage: '微生物学、病原体研究',
    category: 'nature'
  },
  {
    id: 'nature-ecology',
    name: 'Nature Ecology & Evolution',
    journal: 'Nature Ecology & Evolution',
    description: '生态进化研究配色',
    colors: ['#8FBC8F', '#CD853F', '#DEB887', '#D2B48C', '#BC8F8F', '#F4A460'],
    chartTypes: ['物种分布图', '进化树', '生态网络图'],
    usage: '生态学、进化生物学',
    category: 'nature'
  },
  {
    id: 'nature-methods-blue',
    name: 'Nature Methods Blue',
    journal: 'Nature Methods',
    description: 'Nature Methods蓝色系配色',
    colors: ['#1E90FF', '#0000CD', '#4169E1', '#6495ED', '#87CEEB', '#B0C4DE'],
    chartTypes: ['方法学比较图', '技术参数图', '性能评估图'],
    usage: '方法学研究、技术开发',
    category: 'nature'
  },
  {
    id: 'nature-communications',
    name: 'Nature Communications',
    journal: 'Nature Communications',
    description: 'Nature Communications多彩配色',
    colors: ['#FF6B35', '#F7931E', '#FFD23F', '#06FFA5', '#147DF5', '#8E44AD'],
    chartTypes: ['多学科图表', '综合分析图', '数据整合图'],
    usage: '跨学科研究、综合分析',
    category: 'nature'
  },
  {
    id: 'nature-physics',
    name: 'Nature Physics',
    journal: 'Nature Physics',
    description: 'Nature Physics专用配色',
    colors: ['#0047AB', '#4B0082', '#800080', '#DC143C', '#FF4500', '#FFD700'],
    chartTypes: ['物理实验图', '理论模型图', '相变图'],
    usage: '凝聚态物理、量子物理',
    category: 'physics'
  },
  {
    id: 'nature-materials',
    name: 'Nature Materials',
    journal: 'Nature Materials',
    description: '材料科学配色方案',
    colors: ['#708090', '#2F4F4F', '#696969', '#778899', '#B0C4DE', '#E6E6FA'],
    chartTypes: ['材料性能图', '结构表征图', '相图'],
    usage: '材料科学、纳米技术',
    category: 'physics'
  },
  {
    id: 'nature-chemistry',
    name: 'Nature Chemistry',
    journal: 'Nature Chemistry',
    description: 'Nature Chemistry配色方案',
    colors: ['#FF4500', '#32CD32', '#1E90FF', '#FFD700', '#FF1493', '#00CED1'],
    chartTypes: ['反应机理图', '分子结构图', '催化循环图'],
    usage: '有机化学、无机化学',
    category: 'chemistry'
  },
  {
    id: 'nature-energy',
    name: 'Nature Energy',
    journal: 'Nature Energy',
    description: '能源研究配色方案',
    colors: ['#FF8C00', '#FFD700', '#FFFF00', '#ADFF2F', '#32CD32', '#00FF7F'],
    chartTypes: ['能效图', '电池性能图', '太阳能转化图'],
    usage: '能源材料、可再生能源',
    category: 'physics'
  },

  // Science系列 (15种)
  {
    id: 'science-primary',
    name: 'Science Primary',
    journal: 'Science',
    description: 'Science期刊主配色方案',
    colors: ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD'],
    chartTypes: ['科学图表', '实验数据可视化'],
    usage: '物理实验、化学分析',
    category: 'science'
  },
  {
    id: 'science-advances',
    name: 'Science Advances',
    journal: 'Science Advances',
    description: 'Science Advances现代配色',
    colors: ['#E31A1C', '#1F78B4', '#33A02C', '#FF7F00', '#6A3D9A', '#FB9A99'],
    chartTypes: ['先进技术图', '创新方法图', '前沿研究图'],
    usage: '前沿科学、技术创新',
    category: 'science'
  },
  {
    id: 'science-translational',
    name: 'Science Translational Medicine',
    journal: 'Science Translational Medicine',
    description: '转化医学专用配色',
    colors: ['#C7302A', '#4266F6', '#269040', '#F4A100', '#9C2AA0', '#24B9D7'],
    chartTypes: ['临床转化图', '药物开发图', '治疗效果图'],
    usage: '转化医学、药物研发',
    category: 'science'
  },
  {
    id: 'science-immunology',
    name: 'Science Immunology',
    journal: 'Science Immunology',
    description: 'Science免疫学配色',
    colors: ['#D62728', '#2CA02C', '#FF7F0E', '#1F77B4', '#9467BD', '#8C564B'],
    chartTypes: ['免疫反应图', '疫苗效力图', '免疫细胞图'],
    usage: '免疫学、疫苗学',
    category: 'science'
  },
  {
    id: 'science-signaling',
    name: 'Science Signaling',
    journal: 'Science Signaling',
    description: '信号转导研究配色',
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'],
    chartTypes: ['信号通路图', '分子相互作用图', '时间序列图'],
    usage: '细胞信号转导、分子生物学',
    category: 'science'
  },
  {
    id: 'science-robotics',
    name: 'Science Robotics',
    journal: 'Science Robotics',
    description: '机器人学配色方案',
    colors: ['#2E8B57', '#4682B4', '#DAA520', '#DC143C', '#8A2BE2', '#20B2AA'],
    chartTypes: ['性能测试图', '运动轨迹图', '控制系统图'],
    usage: '机器人学、自动化技术',
    category: 'physics'
  },
  {
    id: 'science-classic-warm',
    name: 'Science Classic Warm',
    journal: 'Science',
    description: 'Science暖色系配色',
    colors: ['#FF4500', '#FF6347', '#FFD700', '#FFA500', '#FF1493', '#DC143C'],
    chartTypes: ['温度相关图', '能量图', '化学反应图'],
    usage: '热力学、化学动力学',
    category: 'science'
  },
  {
    id: 'science-cool-palette',
    name: 'Science Cool',
    journal: 'Science',
    description: 'Science冷色系配色',
    colors: ['#0000CD', '#1E90FF', '#00CED1', '#20B2AA', '#32CD32', '#00FF7F'],
    chartTypes: ['低温实验图', '冷却曲线', '相变图'],
    usage: '低温物理、材料科学',
    category: 'science'
  },
  {
    id: 'science-earth',
    name: 'Science Earth Tones',
    journal: 'Science',
    description: 'Science地球科学配色',
    colors: ['#8B4513', '#CD853F', '#D2691E', '#DEB887', '#F4A460', '#D2B48C'],
    chartTypes: ['地质图', '气候变化图', '环境监测图'],
    usage: '地球科学、环境科学',
    category: 'science'
  },
  {
    id: 'science-medical',
    name: 'Science Medical',
    journal: 'Science',
    description: 'Science医学研究配色',
    colors: ['#B22222', '#FF6347', '#FFA500', '#32CD32', '#1E90FF', '#9370DB'],
    chartTypes: ['医学统计图', '流行病学图', '健康指标图'],
    usage: '医学研究、公共卫生',
    category: 'science'
  },
  {
    id: 'science-ai',
    name: 'Science AI/ML',
    journal: 'Science',
    description: '人工智能机器学习配色',
    colors: ['#8B008B', '#FF1493', '#00CED1', '#FFD700', '#32CD32', '#FF4500'],
    chartTypes: ['算法性能图', '训练曲线', '预测准确度图'],
    usage: '人工智能、机器学习',
    category: 'science'
  },
  {
    id: 'science-quantum',
    name: 'Science Quantum',
    journal: 'Science',
    description: '量子科学专用配色',
    colors: ['#4B0082', '#8A2BE2', '#9370DB', '#DA70D6', '#FF69B4', '#FFB6C1'],
    chartTypes: ['量子态图', '纠缠度图', '量子计算图'],
    usage: '量子物理、量子计算',
    category: 'physics'
  },
  {
    id: 'science-space',
    name: 'Science Space',
    journal: 'Science',
    description: '空间科学配色方案',
    colors: ['#191970', '#000080', '#0000CD', '#4169E1', '#6495ED', '#87CEEB'],
    chartTypes: ['天体物理图', '轨道图', '光谱分析图'],
    usage: '天体物理、空间科学',
    category: 'physics'
  },
  {
    id: 'science-nano',
    name: 'Science Nanotechnology',
    journal: 'Science',
    description: '纳米技术配色方案',
    colors: ['#C0C0C0', '#A9A9A9', '#808080', '#696969', '#2F4F4F', '#000000'],
    chartTypes: ['纳米结构图', '表面分析图', '尺寸分布图'],
    usage: '纳米科学、表面科学',
    category: 'physics'
  },
  {
    id: 'science-bio-engineering',
    name: 'Science Bioengineering',
    journal: 'Science',
    description: '生物工程配色方案',
    colors: ['#228B22', '#32CD32', '#00FF7F', '#ADFF2F', '#7FFF00', '#9AFF9A'],
    chartTypes: ['生物反应器图', '细胞工程图', '组织工程图'],
    usage: '生物工程、合成生物学',
    category: 'science'
  },

  // Cell系列 (15种)
  {
    id: 'cell-metabolic',
    name: 'Cell Metabolic',
    journal: 'Cell',
    description: 'Cell期刊代谢研究专用配色',
    colors: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E'],
    chartTypes: ['代谢通路图', '蛋白质相互作用网络'],
    usage: '细胞生物学、代谢组学',
    category: 'cell'
  },
  {
    id: 'cell-stem-cell',
    name: 'Cell Stem Cell',
    journal: 'Cell Stem Cell',
    description: '干细胞研究配色方案',
    colors: ['#E31A1C', '#FF7F00', '#1F78B4', '#33A02C', '#6A3D9A', '#FB9A99'],
    chartTypes: ['分化轨迹图', '干细胞标记图', '再生医学图'],
    usage: '干细胞生物学、再生医学',
    category: 'cell'
  },
  {
    id: 'cell-metabolism',
    name: 'Cell Metabolism',
    journal: 'Cell Metabolism',
    description: 'Cell代谢期刊配色',
    colors: ['#FF6B35', '#F7931E', '#FFD23F', '#06FFA5', '#147DF5', '#580AFF'],
    chartTypes: ['代谢流图', '能量平衡图', '营养感知图'],
    usage: '代谢生物学、营养学',
    category: 'cell'
  },
  {
    id: 'cell-reports',
    name: 'Cell Reports',
    journal: 'Cell Reports',
    description: 'Cell Reports配色方案',
    colors: ['#C7302A', '#4266F6', '#269040', '#F4A100', '#9C2AA0', '#24B9D7'],
    chartTypes: ['基因表达图', '蛋白功能图', '细胞行为图'],
    usage: '细胞生物学研究报告',
    category: 'cell'
  },
  {
    id: 'cell-chemical-biology',
    name: 'Cell Chemical Biology',
    journal: 'Cell Chemical Biology',
    description: '化学生物学配色',
    colors: ['#FF4500', '#32CD32', '#1E90FF', '#FFD700', '#FF1493', '#00CED1'],
    chartTypes: ['药物筛选图', '化合物活性图', '分子探针图'],
    usage: '化学生物学、药物发现',
    category: 'cell'
  },
  {
    id: 'cell-systems',
    name: 'Cell Systems',
    journal: 'Cell Systems',
    description: '系统生物学配色',
    colors: ['#8E44AD', '#E67E22', '#3498DB', '#E74C3C', '#2ECC71', '#F39C12'],
    chartTypes: ['系统网络图', '多组学整合图', '动力学模型图'],
    usage: '系统生物学、网络分析',
    category: 'cell'
  },
  {
    id: 'cell-host-microbe',
    name: 'Cell Host & Microbe',
    journal: 'Cell Host & Microbe',
    description: '宿主微生物相互作用配色',
    colors: ['#800080', '#FF1493', '#00CED1', '#FFD700', '#32CD32', '#FF4500'],
    chartTypes: ['感染过程图', '免疫反应图', '微生物组图'],
    usage: '感染生物学、微生物组',
    category: 'cell'
  },
  {
    id: 'cell-genomics',
    name: 'Cell Genomics',
    journal: 'Cell Genomics',
    description: 'Cell基因组学配色',
    colors: ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD', '#8C564B'],
    chartTypes: ['基因组图谱', '变异分析图', '功能注释图'],
    usage: '基因组学、功能基因组学',
    category: 'cell'
  },
  {
    id: 'cell-death-disease',
    name: 'Cell Death & Disease',
    journal: 'Cell Death & Disease',
    description: '细胞死亡与疾病配色',
    colors: ['#8B0000', '#DC143C', '#B22222', '#CD5C5C', '#F08080', '#FFA07A'],
    chartTypes: ['细胞凋亡图', '疾病进展图', '治疗反应图'],
    usage: '细胞死亡、疾病机制',
    category: 'cell'
  },
  {
    id: 'cell-calcium',
    name: 'Cell Calcium Signaling',
    journal: 'Cell Calcium',
    description: '钙信号传导配色',
    colors: ['#FFD700', '#FFA500', '#FF8C00', '#FF4500', '#FF6347', '#FF7F50'],
    chartTypes: ['钙离子浓度图', '信号传导图', '细胞反应图'],
    usage: '钙信号、细胞生理学',
    category: 'cell'
  },
  {
    id: 'cell-aging-classic',
    name: 'Cell Aging',
    journal: 'Aging Cell',
    description: '细胞衰老研究配色',
    colors: ['#8B4513', '#CD853F', '#D2691E', '#DEB887', '#F4A460', '#D2B48C'],
    chartTypes: ['衰老标志图', '寿命分析图', '细胞周期图'],
    usage: '细胞衰老、老年医学',
    category: 'cell'
  },
  {
    id: 'cell-cycle',
    name: 'Cell Cycle Control',
    journal: 'Cell Cycle',
    description: '细胞周期调控配色',
    colors: ['#0000FF', '#0080FF', '#00FFFF', '#80FF80', '#FFFF00', '#FF8000'],
    chartTypes: ['细胞周期图', '检查点图', '蛋白动态图'],
    usage: '细胞周期、细胞分裂',
    category: 'cell'
  },
  {
    id: 'cell-differentiation',
    name: 'Cell Differentiation',
    journal: 'Cell Differentiation',
    description: '细胞分化配色方案',
    colors: ['#FF69B4', '#FF1493', '#DC143C', '#B22222', '#8B0000', '#800000'],
    chartTypes: ['分化轨迹图', '标记基因图', '发育时序图'],
    usage: '细胞分化、发育生物学',
    category: 'cell'
  },
  {
    id: 'cell-communication',
    name: 'Cell Communication',
    journal: 'Cell Communication and Signaling',
    description: '细胞通讯信号配色',
    colors: ['#9370DB', '#8A2BE2', '#9400D3', '#8B008B', '#800080', '#4B0082'],
    chartTypes: ['信号网络图', '细胞通讯图', '配体受体图'],
    usage: '细胞通讯、信号转导',
    category: 'cell'
  },
  {
    id: 'cell-migration',
    name: 'Cell Migration',
    journal: 'Cell Migration',
    description: '细胞迁移研究配色',
    colors: ['#00FF7F', '#32CD32', '#228B22', '#006400', '#008000', '#00C000'],
    chartTypes: ['迁移轨迹图', '运动速度图', '趋化性图'],
    usage: '细胞迁移、运动生物学',
    category: 'cell'
  },

  // 生物信息学系列 (25种)
  {
    id: 'single-cell-seq',
    name: 'Single Cell RNA-seq',
    journal: 'Nature Biotechnology',
    description: '单细胞RNA测序专用配色方案',
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'],
    chartTypes: ['t-SNE图', 'UMAP图', '小提琴图'],
    usage: '单细胞RNA测序、细胞类型鉴定',
    category: 'bioinformatics'
  },
  {
    id: 'genomics-palette',
    name: 'Genomics Research',
    journal: 'Nature Genetics',
    description: '基因组学研究配色方案',
    colors: ['#E31A1C', '#1F78B4', '#33A02C', '#FF7F00', '#6A3D9A', '#FB9A99'],
    chartTypes: ['Manhattan图', '基因组浏览器', 'Circos图'],
    usage: 'GWAS研究、基因组注释',
    category: 'bioinformatics'
  },
  {
    id: 'proteomics-palette',
    name: 'Proteomics Analysis',
    journal: 'Molecular & Cellular Proteomics',
    description: '蛋白质组学分析配色',
    colors: ['#8E44AD', '#E67E22', '#3498DB', '#E74C3C', '#2ECC71', '#F39C12'],
    chartTypes: ['蛋白质丰度图', '质谱图', '功能富集图'],
    usage: '蛋白质组学、质谱分析',
    category: 'bioinformatics'
  },
  {
    id: 'bioinformatics-heatmap',
    name: 'Bioinformatics Heatmap',
    journal: 'Bioinformatics',
    description: '生物信息学热图专用配色',
    colors: ['#000080', '#0000FF', '#00FFFF', '#FFFF00', '#FF8000', '#FF0000'],
    chartTypes: ['基因表达热图', '相关性矩阵', '聚类图'],
    usage: '基因表达分析、数据挖掘',
    category: 'bioinformatics'
  },
  {
    id: 'phylogenetic-tree',
    name: 'Phylogenetic Analysis',
    journal: 'Molecular Biology and Evolution',
    description: '系统发育分析配色',
    colors: ['#228B22', '#32CD32', '#90EE90', '#8FBC8F', '#00FF7F', '#ADFF2F'],
    chartTypes: ['系统发育树', '物种进化图', '基因家族树'],
    usage: '分子进化、系统发育',
    category: 'bioinformatics'
  },
  {
    id: 'multi-omics',
    name: 'Multi-omics Integration',
    journal: 'Nature Methods',
    description: '多组学整合分析配色',
    colors: ['#FF1493', '#00CED1', '#FFD700', '#32CD32', '#8A2BE2', '#FF4500'],
    chartTypes: ['多组学网络图', '整合分析图', '通路富集图'],
    usage: '多组学、系统生物学',
    category: 'bioinformatics'
  },
  {
    id: 'metagenomics',
    name: 'Metagenomics',
    journal: 'Nature Microbiology',
    description: '宏基因组学配色方案',
    colors: ['#800080', '#FF1493', '#00CED1', '#FFD700', '#32CD32', '#FF4500'],
    chartTypes: ['物种丰度图', '功能注释图', '多样性分析图'],
    usage: '宏基因组、微生物组',
    category: 'bioinformatics'
  },
  {
    id: 'epigenomics',
    name: 'Epigenomics',
    journal: 'Genome Biology',
    description: '表观基因组学配色',
    colors: ['#4B0082', '#8A2BE2', '#9370DB', '#DA70D6', '#FF69B4', '#FFB6C1'],
    chartTypes: ['甲基化图', '组蛋白修饰图', '染色质状态图'],
    usage: '表观遗传学、染色质生物学',
    category: 'bioinformatics'
  },
  {
    id: 'structural-bioinformatics',
    name: 'Structural Bioinformatics',
    journal: 'Proteins: Structure, Function, and Bioinformatics',
    description: '结构生物信息学配色',
    colors: ['#2E8B57', '#4682B4', '#DAA520', '#DC143C', '#8A2BE2', '#20B2AA'],
    chartTypes: ['蛋白质结构图', '分子对接图', '结构比对图'],
    usage: '蛋白质结构预测、分子模拟',
    category: 'bioinformatics'
  },
  {
    id: 'cancer-genomics',
    name: 'Cancer Genomics',
    journal: 'Cancer Research',
    description: '癌症基因组学配色',
    colors: ['#8B0000', '#DC143C', '#B22222', '#CD5C5C', '#F08080', '#FFA07A'],
    chartTypes: ['突变图谱', '拷贝数变异图', '生存分析图'],
    usage: '癌症基因组学、肿瘤分析',
    category: 'bioinformatics'
  },
  {
    id: 'network-biology',
    name: 'Network Biology',
    journal: 'Nature Networks',
    description: '网络生物学配色方案',
    colors: ['#FF6B35', '#004E89', '#1A659E', '#F7931E', '#FFD23F', '#06FFA5'],
    chartTypes: ['蛋白相互作用网络', '基因调控网络', '代谢网络'],
    usage: '网络生物学、系统分析',
    category: 'bioinformatics'
  },
  {
    id: 'drug-discovery',
    name: 'Drug Discovery',
    journal: 'Journal of Medicinal Chemistry',
    description: '药物发现配色方案',
    colors: ['#FF4500', '#32CD32', '#1E90FF', '#FFD700', '#FF1493', '#00CED1'],
    chartTypes: ['化合物筛选图', '药效关系图', '毒性预测图'],
    usage: '药物设计、化合物筛选',
    category: 'bioinformatics'
  },
  {
    id: 'immunoinformatics',
    name: 'Immunoinformatics',
    journal: 'Immunome Research',
    description: '免疫信息学配色',
    colors: ['#C0392B', '#8E44AD', '#2980B9', '#16A085', '#F39C12', '#D35400'],
    chartTypes: ['抗原预测图', '免疫反应图', 'HLA结合图'],
    usage: '免疫信息学、疫苗设计',
    category: 'bioinformatics'
  },
  {
    id: 'pharmacogenomics',
    name: 'Pharmacogenomics',
    journal: 'Pharmacogenomics',
    description: '药物基因组学配色',
    colors: ['#E67E22', '#3498DB', '#E74C3C', '#2ECC71', '#F39C12', '#9B59B6'],
    chartTypes: ['药物反应图', '基因型-表型图', '药代动力学图'],
    usage: '个性化医疗、药物基因组学',
    category: 'bioinformatics'
  },
  {
    id: 'comparative-genomics',
    name: 'Comparative Genomics',
    journal: 'Genome Research',
    description: '比较基因组学配色',
    colors: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E', '#E6AB02'],
    chartTypes: ['基因组比对图', '共线性图', '进化分析图'],
    usage: '比较基因组学、物种进化',
    category: 'bioinformatics'
  },
  {
    id: 'transcriptomics',
    name: 'Transcriptomics',
    journal: 'RNA',
    description: '转录组学分析配色',
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD'],
    chartTypes: ['基因表达图', '差异表达图', 'GO富集图'],
    usage: '转录组分析、RNA研究',
    category: 'bioinformatics'
  },
  {
    id: 'metabolomics',
    name: 'Metabolomics',
    journal: 'Metabolomics',
    description: '代谢组学分析配色',
    colors: ['#FF8C00', '#FFD700', '#FFFF00', '#ADFF2F', '#32CD32', '#00FF7F'],
    chartTypes: ['代谢物图谱', '通路分析图', 'PCA图'],
    usage: '代谢组学、小分子分析',
    category: 'bioinformatics'
  },
  {
    id: 'lipidomics',
    name: 'Lipidomics',
    journal: 'Journal of Lipid Research',
    description: '脂质组学配色方案',
    colors: ['#FFD700', '#FFA500', '#FF8C00', '#FF4500', '#FF6347', '#FF7F50'],
    chartTypes: ['脂质谱图', '脂质分类图', '膜组成图'],
    usage: '脂质组学、膜生物学',
    category: 'bioinformatics'
  },
  {
    id: 'glycomics',
    name: 'Glycomics',
    journal: 'Glycobiology',
    description: '糖组学研究配色',
    colors: ['#FF69B4', '#FF1493', '#DC143C', '#B22222', '#8B0000', '#800000'],
    chartTypes: ['糖链结构图', '糖蛋白分析图', '糖修饰图'],
    usage: '糖生物学、糖蛋白研究',
    category: 'bioinformatics'
  },
  {
    id: 'microbiome-analysis',
    name: 'Microbiome Analysis',
    journal: 'Microbiome',
    description: '微生物组分析配色',
    colors: ['#9370DB', '#8A2BE2', '#9400D3', '#8B008B', '#800080', '#4B0082'],
    chartTypes: ['菌群组成图', '多样性分析图', '功能预测图'],
    usage: '微生物组、菌群分析',
    category: 'bioinformatics'
  },
  {
    id: 'population-genetics',
    name: 'Population Genetics',
    journal: 'American Journal of Human Genetics',
    description: '群体遗传学配色',
    colors: ['#8FBC8F', '#CD853F', '#DEB887', '#D2B48C', '#BC8F8F', '#F4A460'],
    chartTypes: ['群体结构图', '遗传多样性图', '选择信号图'],
    usage: '群体遗传学、人类遗传学',
    category: 'bioinformatics'
  },
  {
    id: 'clinical-genomics',
    name: 'Clinical Genomics',
    journal: 'Genetics in Medicine',
    description: '临床基因组学配色',
    colors: ['#B22222', '#FF6347', '#FFA500', '#32CD32', '#1E90FF', '#9370DB'],
    chartTypes: ['变异解读图', '遗传咨询图', '诊断报告图'],
    usage: '临床遗传学、精准医学',
    category: 'bioinformatics'
  },
  {
    id: 'agricultural-genomics',
    name: 'Agricultural Genomics',
    journal: 'Plant Biotechnology Journal',
    description: '农业基因组学配色',
    colors: ['#228B22', '#32CD32', '#90EE90', '#8FBC8F', '#00FF7F', '#ADFF2F'],
    chartTypes: ['作物育种图', '性状关联图', '基因编辑图'],
    usage: '作物育种、农业生物技术',
    category: 'bioinformatics'
  },
  {
    id: 'marine-genomics',
    name: 'Marine Genomics',
    journal: 'Marine Genomics',
    description: '海洋基因组学配色',
    colors: ['#0000CD', '#1E90FF', '#00CED1', '#20B2AA', '#32CD32', '#00FF7F'],
    chartTypes: ['海洋生物基因组图', '适应性进化图', '生态基因组图'],
    usage: '海洋生物学、生态基因组学',
    category: 'bioinformatics'
  },
  {
    id: 'ancient-dna',
    name: 'Ancient DNA',
    journal: 'Current Biology',
    description: '古DNA研究配色',
    colors: ['#8B4513', '#CD853F', '#D2691E', '#DEB887', '#F4A460', '#D2B48C'],
    chartTypes: ['系统发育图', '古群体图', '迁徙路径图'],
    usage: '古DNA、人类进化',
    category: 'bioinformatics'
  },

  // 物理学系列 (20种)
  {
    id: 'physics-quantum',
    name: 'Physics Quantum',
    journal: 'Physical Review Letters',
    description: '物理学量子研究配色',
    colors: ['#2E8B57', '#4682B4', '#DAA520', '#DC143C', '#8A2BE2'],
    chartTypes: ['能级图', '波函数图', '相位图'],
    usage: '量子物理、凝聚态物理',
    category: 'physics'
  },
  {
    id: 'condensed-matter',
    name: 'Condensed Matter Physics',
    journal: 'Physical Review B',
    description: '凝聚态物理配色方案',
    colors: ['#0047AB', '#4B0082', '#800080', '#DC143C', '#FF4500', '#FFD700'],
    chartTypes: ['能带图', '相图', '磁化强度图'],
    usage: '凝聚态物理、材料物理',
    category: 'physics'
  },
  {
    id: 'particle-physics',
    name: 'Particle Physics',
    journal: 'Physical Review D',
    description: '粒子物理配色方案',
    colors: ['#FF1493', '#00CED1', '#FFD700', '#32CD32', '#8A2BE2', '#FF4500'],
    chartTypes: ['粒子轨迹图', '散射截面图', '质量谱图'],
    usage: '高能物理、粒子物理',
    category: 'physics'
  },
  {
    id: 'atomic-physics',
    name: 'Atomic Physics',
    journal: 'Physical Review A',
    description: '原子物理配色方案',
    colors: ['#0000CD', '#1E90FF', '#00CED1', '#20B2AA', '#32CD32', '#00FF7F'],
    chartTypes: ['原子光谱图', '激光冷却图', '量子态图'],
    usage: '原子物理、量子光学',
    category: 'physics'
  },
  {
    id: 'plasma-physics',
    name: 'Plasma Physics',
    journal: 'Physics of Plasmas',
    description: '等离子体物理配色',
    colors: ['#FF4500', '#FF6347', '#FFD700', '#FFA500', '#FF1493', '#DC143C'],
    chartTypes: ['等离子体温度图', '磁场分布图', '粒子密度图'],
    usage: '等离子体物理、聚变研究',
    category: 'physics'
  },
  {
    id: 'astrophysics',
    name: 'Astrophysics',
    journal: 'Astrophysical Journal',
    description: '天体物理配色方案',
    colors: ['#191970', '#000080', '#0000CD', '#4169E1', '#6495ED', '#87CEEB'],
    chartTypes: ['光变曲线', '光谱图', '星系分布图'],
    usage: '天体物理、宇宙学',
    category: 'physics'
  },
  {
    id: 'nuclear-physics',
    name: 'Nuclear Physics',
    journal: 'Physical Review C',
    description: '核物理配色方案',
    colors: ['#8B0000', '#DC143C', '#B22222', '#CD5C5C', '#F08080', '#FFA07A'],
    chartTypes: ['核反应截面图', '衰变谱图', '核结构图'],
    usage: '核物理、核技术',
    category: 'physics'
  },
  {
    id: 'optics-photonics',
    name: 'Optics & Photonics',
    journal: 'Optics Letters',
    description: '光学与光子学配色',
    colors: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'],
    chartTypes: ['光谱图', '透射率图', '激光功率图'],
    usage: '光学、激光物理',
    category: 'physics'
  },
  {
    id: 'biophysics',
    name: 'Biophysics',
    journal: 'Biophysical Journal',
    description: '生物物理配色方案',
    colors: ['#228B22', '#32CD32', '#90EE90', '#8FBC8F', '#00FF7F', '#ADFF2F'],
    chartTypes: ['蛋白质折叠图', '膜流动性图', '分子动力学图'],
    usage: '生物物理、分子生物物理',
    category: 'physics'
  },
  {
    id: 'geophysics',
    name: 'Geophysics',
    journal: 'Geophysical Research Letters',
    description: '地球物理配色方案',
    colors: ['#8B4513', '#CD853F', '#D2691E', '#DEB887', '#F4A460', '#D2B48C'],
    chartTypes: ['地震图', '磁场图', '重力异常图'],
    usage: '地球物理、地质学',
    category: 'physics'
  },
  {
    id: 'fluid-dynamics',
    name: 'Fluid Dynamics',
    journal: 'Physics of Fluids',
    description: '流体力学配色方案',
    colors: ['#0000CD', '#1E90FF', '#00CED1', '#20B2AA', '#32CD32', '#00FF7F'],
    chartTypes: ['流场图', '涡度图', '压力分布图'],
    usage: '流体力学、计算流体力学',
    category: 'physics'
  },
  {
    id: 'thermodynamics',
    name: 'Thermodynamics',
    journal: 'Journal of Thermophysics',
    description: '热力学配色方案',
    colors: ['#FF4500', '#FF6347', '#FFD700', '#FFA500', '#FF1493', '#DC143C'],
    chartTypes: ['温度分布图', '相变图', '热容图'],
    usage: '热力学、统计力学',
    category: 'physics'
  },
  {
    id: 'solid-state',
    name: 'Solid State Physics',
    journal: 'Solid State Communications',
    description: '固体物理配色方案',
    colors: ['#708090', '#2F4F4F', '#696969', '#778899', '#B0C4DE', '#E6E6FA'],
    chartTypes: ['晶体结构图', '电阻率图', '磁化曲线图'],
    usage: '固体物理、材料科学',
    category: 'physics'
  },
  {
    id: 'statistical-mechanics',
    name: 'Statistical Mechanics',
    journal: 'Journal of Statistical Physics',
    description: '统计力学配色方案',
    colors: ['#9370DB', '#8A2BE2', '#9400D3', '#8B008B', '#800080', '#4B0082'],
    chartTypes: ['相变图', '临界现象图', '分布函数图'],
    usage: '统计力学、复杂系统',
    category: 'physics'
  },
  {
    id: 'superconductivity',
    name: 'Superconductivity',
    journal: 'Superconductor Science and Technology',
    description: '超导物理配色方案',
    colors: ['#0000FF', '#0080FF', '#00FFFF', '#80FF80', '#FFFF00', '#FF8000'],
    chartTypes: ['电阻温度图', '磁化曲线', '临界电流图'],
    usage: '超导物理、低温物理',
    category: 'physics'
  },
  {
    id: 'magnetism',
    name: 'Magnetism',
    journal: 'Journal of Magnetism and Magnetic Materials',
    description: '磁学研究配色方案',
    colors: ['#B22222', '#FF6347', '#FFA500', '#32CD32', '#1E90FF', '#9370DB'],
    chartTypes: ['磁滞回线', '磁畴图像', '磁各向异性图'],
    usage: '磁学、自旋电子学',
    category: 'physics'
  },
  {
    id: 'crystal-physics',
    name: 'Crystal Physics',
    journal: 'Acta Crystallographica',
    description: '晶体物理配色方案',
    colors: ['#C0C0C0', '#A9A9A9', '#808080', '#696969', '#2F4F4F', '#000000'],
    chartTypes: ['晶格常数图', '衍射图', '对称性图'],
    usage: '晶体学、X射线衍射',
    category: 'physics'
  },
  {
    id: 'semiconductor-physics',
    name: 'Semiconductor Physics',
    journal: 'Applied Physics Letters',
    description: '半导体物理配色方案',
    colors: ['#FF8C00', '#FFD700', '#FFFF00', '#ADFF2F', '#32CD32', '#00FF7F'],
    chartTypes: ['能带图', 'I-V特性图', '载流子浓度图'],
    usage: '半导体物理、器件物理',
    category: 'physics'
  },
  {
    id: 'nano-physics',
    name: 'Nanophysics',
    journal: 'Nature Nanotechnology',
    description: '纳米物理配色方案',
    colors: ['#FF69B4', '#FF1493', '#DC143C', '#B22222', '#8B0000', '#800000'],
    chartTypes: ['量子点图', '纳米结构图', '单分子图'],
    usage: '纳米物理、量子器件',
    category: 'physics'
  },
  {
    id: 'computational-physics',
    name: 'Computational Physics',
    journal: 'Computer Physics Communications',
    description: '计算物理配色方案',
    colors: ['#00FF7F', '#32CD32', '#228B22', '#006400', '#008000', '#00C000'],
    chartTypes: ['数值模拟图', '计算结果图', '算法性能图'],
    usage: '计算物理、数值模拟',
    category: 'physics'
  },

  // 化学系列 (15种)
  {
    id: 'chemistry-organic',
    name: 'Chemistry Organic',
    journal: 'Journal of the American Chemical Society',
    description: '有机化学反应配色方案',
    colors: ['#FF4500', '#32CD32', '#1E90FF', '#FFD700', '#FF1493'],
    chartTypes: ['反应机理图', '能垒图', '分子轨道图'],
    usage: '有机合成、催化反应',
    category: 'chemistry'
  },
  {
    id: 'inorganic-chemistry',
    name: 'Inorganic Chemistry',
    journal: 'Inorganic Chemistry',
    description: '无机化学配色方案',
    colors: ['#B22222', '#FF6347', '#FFA500', '#32CD32', '#1E90FF', '#9370DB'],
    chartTypes: ['配位化合物图', '晶体场图', '电子结构图'],
    usage: '无机化学、配位化学',
    category: 'chemistry'
  },
  {
    id: 'analytical-chemistry',
    name: 'Analytical Chemistry',
    journal: 'Analytical Chemistry',
    description: '分析化学配色方案',
    colors: ['#8E44AD', '#E67E22', '#3498DB', '#E74C3C', '#2ECC71', '#F39C12'],
    chartTypes: ['色谱图', '质谱图', '光谱图'],
    usage: '分析化学、仪器分析',
    category: 'chemistry'
  },
  {
    id: 'physical-chemistry',
    name: 'Physical Chemistry',
    journal: 'Journal of Physical Chemistry',
    description: '物理化学配色方案',
    colors: ['#FF1493', '#00CED1', '#FFD700', '#32CD32', '#8A2BE2', '#FF4500'],
    chartTypes: ['反应动力学图', '热力学图', '分子光谱图'],
    usage: '物理化学、化学物理',
    category: 'chemistry'
  },
  {
    id: 'materials-chemistry',
    name: 'Materials Chemistry',
    journal: 'Chemistry of Materials',
    description: '材料化学配色方案',
    colors: ['#708090', '#2F4F4F', '#696969', '#778899', '#B0C4DE', '#E6E6FA'],
    chartTypes: ['材料性能图', '相图', '结构表征图'],
    usage: '材料化学、功能材料',
    category: 'chemistry'
  },
  {
    id: 'catalysis',
    name: 'Catalysis',
    journal: 'Journal of Catalysis',
    description: '催化化学配色方案',
    colors: ['#FF8C00', '#FFD700', '#FFFF00', '#ADFF2F', '#32CD32', '#00FF7F'],
    chartTypes: ['催化活性图', '选择性图', '反应机理图'],
    usage: '催化化学、工业催化',
    category: 'chemistry'
  },
  {
    id: 'electrochemistry',
    name: 'Electrochemistry',
    journal: 'Journal of Electroanalytical Chemistry',
    description: '电化学配色方案',
    colors: ['#0000CD', '#1E90FF', '#00CED1', '#20B2AA', '#32CD32', '#00FF7F'],
    chartTypes: ['循环伏安图', '电池性能图', '腐蚀图'],
    usage: '电化学、电池技术',
    category: 'chemistry'
  },
  {
    id: 'polymer-chemistry',
    name: 'Polymer Chemistry',
    journal: 'Macromolecules',
    description: '高分子化学配色方案',
    colors: ['#FF69B4', '#FF1493', '#DC143C', '#B22222', '#8B0000', '#800000'],
    chartTypes: ['聚合反应图', '分子量分布图', '热性能图'],
    usage: '高分子化学、聚合物科学',
    category: 'chemistry'
  },
  {
    id: 'biochemistry',
    name: 'Biochemistry',
    journal: 'Biochemistry',
    description: '生物化学配色方案',
    colors: ['#228B22', '#32CD32', '#90EE90', '#8FBC8F', '#00FF7F', '#ADFF2F'],
    chartTypes: ['酶动力学图', '代谢通路图', '蛋白结构图'],
    usage: '生物化学、分子生物学',
    category: 'chemistry'
  },
  {
    id: 'medicinal-chemistry',
    name: 'Medicinal Chemistry',
    journal: 'Journal of Medicinal Chemistry',
    description: '药物化学配色方案',
    colors: ['#C7302A', '#4266F6', '#269040', '#F4A100', '#9C2AA0', '#24B9D7'],
    chartTypes: ['药效关系图', '分子对接图', '药代动力学图'],
    usage: '药物化学、药物设计',
    category: 'chemistry'
  },
  {
    id: 'environmental-chemistry',
    name: 'Environmental Chemistry',
    journal: 'Environmental Science & Technology',
    description: '环境化学配色方案',
    colors: ['#8FBC8F', '#CD853F', '#DEB887', '#D2B48C', '#BC8F8F', '#F4A460'],
    chartTypes: ['污染物迁移图', '环境修复图', '生态风险图'],
    usage: '环境化学、环境科学',
    category: 'chemistry'
  },
  {
    id: 'computational-chemistry',
    name: 'Computational Chemistry',
    journal: 'Journal of Computational Chemistry',
    description: '计算化学配色方案',
    colors: ['#9370DB', '#8A2BE2', '#9400D3', '#8B008B', '#800080', '#4B0082'],
    chartTypes: ['分子轨道图', '能量面图', '电荷分布图'],
    usage: '计算化学、量子化学',
    category: 'chemistry'
  },
  {
    id: 'surface-chemistry',
    name: 'Surface Chemistry',
    journal: 'Langmuir',
    description: '表面化学配色方案',
    colors: ['#C0C0C0', '#A9A9A9', '#808080', '#696969', '#2F4F4F', '#000000'],
    chartTypes: ['表面吸附图', '接触角图', '表面能图'],
    usage: '表面化学、界面科学',
    category: 'chemistry'
  },
  {
    id: 'photochemistry',
    name: 'Photochemistry',
    journal: 'Journal of Photochemistry and Photobiology',
    description: '光化学配色方案',
    colors: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'],
    chartTypes: ['光谱图', '光反应图', '荧光寿命图'],
    usage: '光化学、光生物学',
    category: 'chemistry'
  },
  {
    id: 'green-chemistry',
    name: 'Green Chemistry',
    journal: 'Green Chemistry',
    description: '绿色化学配色方案',
    colors: ['#00FF00', '#32CD32', '#228B22', '#006400', '#008000', '#00C000'],
    chartTypes: ['环境友好性图', '原子经济性图', '可持续性评价图'],
    usage: '绿色化学、可持续化学',
    category: 'chemistry'
  }
];

export const journalCategories = {
  nature: {
    name: 'Nature系列',
    description: 'Nature、Nature Genetics、Nature Biotechnology等期刊常用配色',
    color: '#E64B35'
  },
  science: {
    name: 'Science系列',
    description: 'Science、Science Advances等期刊配色方案',
    color: '#1F77B4'
  },
  cell: {
    name: 'Cell系列',
    description: 'Cell、Cell Metabolism等期刊专用配色',
    color: '#1B9E77'
  },
  bioinformatics: {
    name: '生物信息学',
    description: '生物信息学、基因组学研究期刊配色',
    color: '#FF6B6B'
  },
  physics: {
    name: '物理学',
    description: '物理学期刊常用配色方案',
    color: '#2E8B57'
  },
  chemistry: {
    name: '化学',
    description: '化学期刊研究配色方案',
    color: '#FF4500'
  }
};