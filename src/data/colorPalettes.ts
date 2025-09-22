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
    id: 'single-cell-seq',
    name: 'Single Cell Seq',
    journal: 'Nature Biotechnology',
    description: '单细胞测序专用配色方案',
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
    id: 'immunology-palette',
    name: 'Immunology Research',
    journal: 'Nature Immunology',
    description: '免疫学研究专用配色',
    colors: ['#C0392B', '#8E44AD', '#2980B9', '#16A085', '#F39C12', '#D35400'],
    chartTypes: ['流式细胞术图', '免疫荧光图', 'T细胞分化图'],
    usage: '免疫细胞分析、疫苗研究',
    category: 'nature'
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