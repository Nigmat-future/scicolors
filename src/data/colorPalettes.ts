// SCI Paper Color Palette Data
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
  // Nature Series (20 palettes)
  {
    id: 'nature-classic',
    name: 'Nature Classic',
    journal: 'Nature',
    description: 'Classic Nature journal color scheme, suitable for biomedical papers',
    colors: ['#E64B35', '#4DBBD5', '#00A087', '#3C5488', '#F39B7F'],
    chartTypes: ['Bar Chart', 'Line Chart', 'Scatter Plot'],
    usage: 'Biomedical research, gene expression analysis',
    category: 'nature'
  },
  {
    id: 'nature-extended',
    name: 'Nature Extended',
    journal: 'Nature',
    description: 'Nature journal extended palette, suitable for multi-group data comparison',
    colors: ['#E64B35', '#4DBBD5', '#00A087', '#3C5488', '#F39B7F', '#8491B4', '#91D1C2', '#DC0000', '#7E6148'],
    chartTypes: ['Heatmap', 'Multi-series Line Chart', 'Grouped Bar Chart'],
    usage: 'Multi-group comparison, time series data',
    category: 'nature'
  },
  {
    id: 'nature-genetics-main',
    name: 'Nature Genetics Main',
    journal: 'Nature Genetics',
    description: 'Nature Genetics primary color scheme',
    colors: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E', '#E6AB02', '#A6761D'],
    chartTypes: ['Genomic Plot', 'GWAS Plot', 'Pedigree Chart'],
    usage: 'Genetics research, gene mapping',
    category: 'nature'
  },
  {
    id: 'nature-neuroscience',
    name: 'Nature Neuroscience',
    journal: 'Nature Neuroscience',
    description: 'Specialized color scheme for neuroscience research',
    colors: ['#FF6B35', '#004E89', '#1A659E', '#F7931E', '#FFD23F', '#06FFA5'],
    chartTypes: ['Brain Activation Map', 'Neuron Firing Plot', 'Behavioral Data Chart'],
    usage: 'Neuroscience, brain imaging research',
    category: 'nature'
  },
  {
    id: 'nature-medicine',
    name: 'Nature Medicine',
    journal: 'Nature Medicine',
    description: 'Medical research color scheme',
    colors: ['#C7302A', '#4266F6', '#269040', '#F4A100', '#9C2AA0'],
    chartTypes: ['Clinical Trial Chart', 'Survival Curve', 'Diagnostic Performance Plot'],
    usage: 'Clinical medicine, translational medicine research',
    category: 'nature'
  },
  {
    id: 'nature-biotechnology',
    name: 'Nature Biotechnology',
    journal: 'Nature Biotechnology',
    description: 'Biotechnology research color scheme',
    colors: ['#E31A1C', '#FF7F00', '#1F78B4', '#33A02C', '#6A3D9A', '#FB9A99'],
    chartTypes: ['Gene Editing Efficiency Chart', 'Protein Expression Plot', 'Cell Culture Chart'],
    usage: 'Biotechnology, genetic engineering',
    category: 'nature'
  },
  {
    id: 'nature-immunology',
    name: 'Nature Immunology',
    journal: 'Nature Immunology',
    description: 'Specialized color scheme for immunology research',
    colors: ['#C0392B', '#8E44AD', '#2980B9', '#16A085', '#F39C12', '#D35400'],
    chartTypes: ['Flow Cytometry Plot', 'Immunofluorescence Chart', 'T Cell Differentiation Plot'],
    usage: 'Immune cell analysis, vaccine research',
    category: 'nature'
  },
  {
    id: 'nature-cancer',
    name: 'Nature Cancer',
    journal: 'Nature Cancer',
    description: 'Specialized color scheme for cancer research',
    colors: ['#8B0000', '#FF4500', '#FFD700', '#32CD32', '#1E90FF', '#9370DB'],
    chartTypes: ['Tumor Staging Chart', 'Survival Analysis Plot', 'Drug Sensitivity Chart'],
    usage: 'Cancer biology, tumor treatment',
    category: 'nature'
  },
  {
    id: 'nature-aging',
    name: 'Nature Aging',
    journal: 'Nature Aging',
    description: 'Aging research color scheme',
    colors: ['#8B4513', '#DAA520', '#CD853F', '#D2691E', '#BC8F8F', '#F4A460'],
    chartTypes: ['Age-related Change Chart', 'Lifespan Analysis Plot', 'Aging Biomarker Chart'],
    usage: 'Aging biology, longevity research',
    category: 'nature'
  },
  {
    id: 'nature-metabolism',
    name: 'Nature Metabolism',
    journal: 'Nature Metabolism',
    description: 'Metabolism research color scheme',
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F'],
    chartTypes: ['Metabolic Pathway Chart', 'Energy Flow Diagram', 'Nutrient Analysis Chart'],
    usage: 'Metabolic biology, nutrition research',
    category: 'nature'
  },
  {
    id: 'nature-materials',
    name: 'Nature Materials',
    journal: 'Nature Materials',
    description: 'Materials science color scheme',
    colors: ['#377EB8', '#E41A1C', '#4DAF4A', '#984EA3', '#FF7F00', '#A65628'],
    chartTypes: ['Material Property Chart', 'Microstructure Analysis Plot', 'Stress-Strain Curve'],
    usage: 'Materials science, nanotechnology',
    category: 'nature'
  },
  {
    id: 'nature-climate-change',
    name: 'Nature Climate Change',
    journal: 'Nature Climate Change',
    description: 'Climate change research color scheme',
    colors: ['#2166AC', '#67A9CF', '#D1E5F0', '#F7F7F7', '#FDDBC7', '#D6604D', '#B2182B'],
    chartTypes: ['Climate Model Chart', 'Temperature Anomaly Plot', 'Sea Level Rise Chart'],
    usage: 'Climate science, environmental science',
    category: 'nature'
  },
  {
    id: 'nature-energy',
    name: 'Nature Energy',
    journal: 'Nature Energy',
    description: 'Energy research color scheme',
    colors: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E', '#E6AB02'],
    chartTypes: ['Energy Efficiency Chart', 'Renewable Energy Production Plot', 'Fossil Fuel Consumption Chart'],
    usage: 'Energy science, sustainable development',
    category: 'nature'
  },
  {
    id: 'nature-sustainability',
    name: 'Nature Sustainability',
    journal: 'Nature Sustainability',
    description: 'Sustainability research color scheme',
    colors: ['#33A02C', '#1F78B4', '#E31A1C', '#FF7F00', '#6A3D9A', '#B15928'],
    chartTypes: ['Sustainable Development Goal Chart', 'Environmental Impact Assessment Plot', 'Resource Depletion Chart'],
    usage: 'Sustainability science, environmental policy',
    category: 'nature'
  },
  {
    id: 'nature-food',
    name: 'Nature Food',
    journal: 'Nature Food',
    description: 'Food science and nutrition research color scheme',
    colors: ['#A6CEE3', '#1F78B4', '#B2DF8A', '#33A02C', '#FB9A99', '#E31A1C'],
    chartTypes: ['Nutrient Composition Chart', 'Food Production Plot', 'Dietary Intake Chart'],
    usage: 'Food science, nutrition research',
    category: 'nature'
  },
  {
    id: 'nature-human-behaviour',
    name: 'Nature Human Behaviour',
    journal: 'Nature Human Behaviour',
    description: 'Human behavior research color scheme',
    colors: ['#E41A1C', '#377EB8', '#4DAF4A', '#984EA3', '#FF7F00', '#FFFF33'],
    chartTypes: ['Behavioral Pattern Chart', 'Social Interaction Plot', 'Cognitive Process Chart'],
    usage: 'Behavioral science, social psychology',
    category: 'nature'
  },
  {
    id: 'nature-reviews-genetics',
    name: 'Nature Reviews Genetics',
    journal: 'Nature Reviews Genetics',
    description: 'Genetics review color scheme',
    colors: ['#66C2A5', '#FC8D62', '#8DA0CB', '#E78AC3', '#A6D854', '#FFD92F'],
    chartTypes: ['Gene Regulatory Network', 'Epigenetic Modification Chart', 'Genome-wide Association Study Plot'],
    usage: 'Genetics review, genomic analysis',
    category: 'nature'
  },
  {
    id: 'nature-catalysis',
    name: 'Nature Catalysis',
    journal: 'Nature Catalysis',
    description: 'Catalysis research color scheme',
    colors: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E', '#E6AB02'],
    chartTypes: ['Catalytic Reaction Pathway', 'Reaction Rate Plot', 'Catalyst Performance Chart'],
    usage: 'Catalysis research, chemical kinetics',
    category: 'nature'
  },
  {
    id: 'nature-electronics',
    name: 'Nature Electronics',
    journal: 'Nature Electronics',
    description: 'Electronics research color scheme',
    colors: ['#377EB8', '#E41A1C', '#4DAF4A', '#984EA3', '#FF7F00', '#A65628'],
    chartTypes: ['Circuit Diagram', 'Signal Processing Chart', 'Electronic Device Performance Plot'],
    usage: 'Electronics research, semiconductor physics',
    category: 'nature'
  },
  {
    id: 'nature-nanotechnology',
    name: 'Nature Nanotechnology',
    journal: 'Nature Nanotechnology',
    description: 'Nanotechnology research color scheme',
    colors: ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462'],
    chartTypes: ['Nanomaterial Characterization Chart', 'Quantum Dot Emission Spectrum', 'Nanodevice Performance Plot'],
    usage: 'Nanotechnology, materials science',
    category: 'nature'
  },

  // Science Series (15 palettes)
  {
    id: 'science-primary',
    name: 'Science Primary',
    journal: 'Science',
    description: 'Science journal primary color scheme',
    colors: ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD'],
    chartTypes: ['Scientific Charts', 'Experimental Data Visualization'],
    usage: 'Physics experiments, chemical analysis',
    category: 'science'
  },
  {
    id: 'science-advances',
    name: 'Science Advances',
    journal: 'Science Advances',
    description: 'Science Advances modern color scheme',
    colors: ['#E31A1C', '#1F78B4', '#33A02C', '#FF7F00', '#6A3D9A', '#FB9A99'],
    chartTypes: ['Advanced Technology Chart', 'Innovation Method Plot', 'Cutting-edge Research Chart'],
    usage: 'Frontier science, technological innovation',
    category: 'science'
  },
  {
    id: 'science-robotics',
    name: 'Science Robotics',
    journal: 'Science Robotics',
    description: 'Robotics research color scheme',
    colors: ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462'],
    chartTypes: ['Robot Performance Chart', 'Control System Diagram', 'Sensor Data Plot'],
    usage: 'Robotics, automation',
    category: 'science'
  },
  {
    id: 'science-immunology',
    name: 'Science Immunology',
    journal: 'Science Immunology',
    description: 'Immunology research color scheme',
    colors: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E', '#E6AB02'],
    chartTypes: ['Immune Cell Interaction Chart', 'Antibody Response Plot', 'Vaccine Efficacy Chart'],
    usage: 'Immunology, vaccine development',
    category: 'science'
  },
  {
    id: 'science-translational-medicine',
    name: 'Science Translational Medicine',
    journal: 'Science Translational Medicine',
    description: 'Translational medicine color scheme',
    colors: ['#377EB8', '#E41A1C', '#4DAF4A', '#984EA3', '#FF7F00', '#A65628'],
    chartTypes: ['Clinical Trial Outcome Chart', 'Biomarker Analysis Plot', 'Drug Response Curve'],
    usage: 'Translational medicine, clinical research',
    category: 'science'
  },
  {
    id: 'science-signaling',
    name: 'Science Signaling',
    journal: 'Science Signaling',
    description: 'Cell signaling research color scheme',
    colors: ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462'],
    chartTypes: ['Cell Signaling Pathway', 'Receptor Activation Plot', 'Signal Transduction Chart'],
    usage: 'Cell signaling, molecular biology',
    category: 'science'
  },
  {
    id: 'science-robotics-2',
    name: 'Science Robotics II',
    journal: 'Science Robotics',
    description: 'Advanced robotics research color scheme',
    colors: ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD', '#8C564B'],
    chartTypes: ['AI Robot Chart', 'Machine Learning Plot', 'Automation System Chart'],
    usage: 'Robotics, artificial intelligence',
    category: 'science'
  },
  {
    id: 'science-energy',
    name: 'Science Energy',
    journal: 'Science',
    description: 'Energy research color scheme',
    colors: ['#E41A1C', '#377EB8', '#4DAF4A', '#984EA3', '#FF7F00', '#FFFF33'],
    chartTypes: ['Energy Efficiency Chart', 'Renewable Energy Production Plot', 'Fossil Fuel Consumption Chart'],
    usage: 'Energy science, sustainable development',
    category: 'science'
  },
  {
    id: 'science-climate',
    name: 'Science Climate',
    journal: 'Science',
    description: 'Climate research color scheme',
    colors: ['#2166AC', '#67A9CF', '#D1E5F0', '#F7F7F7', '#FDDBC7', '#D6604D', '#B2182B'],
    chartTypes: ['Climate Model Chart', 'Temperature Anomaly Plot', 'Sea Level Rise Chart'],
    usage: 'Climate science, environmental science',
    category: 'science'
  },
  {
    id: 'science-materials',
    name: 'Science Materials',
    journal: 'Science',
    description: 'Materials science color scheme',
    colors: ['#377EB8', '#E41A1C', '#4DAF4A', '#984EA3', '#FF7F00', '#A65628'],
    chartTypes: ['Material Property Chart', 'Microstructure Analysis Plot', 'Stress-Strain Curve'],
    usage: 'Materials science, nanotechnology',
    category: 'science'
  },
  {
    id: 'science-neuroscience',
    name: 'Science Neuroscience',
    journal: 'Science',
    description: 'Neuroscience research color scheme',
    colors: ['#FF6B35', '#004E89', '#1A659E', '#F7931E', '#FFD23F', '#06FFA5'],
    chartTypes: ['Brain Activation Map', 'Neuron Firing Plot', 'Behavioral Data Chart'],
    usage: 'Neuroscience, brain imaging research',
    category: 'science'
  },
  {
    id: 'science-genetics',
    name: 'Science Genetics',
    journal: 'Science',
    description: 'Genetics research color scheme',
    colors: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E', '#E6AB02'],
    chartTypes: ['Genomic Plot', 'GWAS Plot', 'Pedigree Chart'],
    usage: 'Genetics research, gene mapping',
    category: 'science'
  },
  {
    id: 'science-ecology',
    name: 'Science Ecology',
    journal: 'Science',
    description: 'Ecology research color scheme',
    colors: ['#33A02C', '#1F78B4', '#E31A1C', '#FF7F00', '#6A3D9A', '#B15928'],
    chartTypes: ['Ecosystem Chart', 'Biodiversity Plot', 'Environmental Impact Assessment Plot'],
    usage: 'Ecology, environmental science',
    category: 'science'
  },
  {
    id: 'science-medicine',
    name: 'Science Medicine',
    journal: 'Science',
    description: 'Medical research color scheme',
    colors: ['#C7302A', '#4266F6', '#269040', '#F4A100', '#9C2AA0', '#0072B2'],
    chartTypes: ['Clinical Trial Chart', 'Survival Curve', 'Diagnostic Performance Plot'],
    usage: 'Clinical medicine, translational medicine research',
    category: 'science'
  },
  {
    id: 'science-chemistry',
    name: 'Science Chemistry',
    journal: 'Science',
    description: 'Chemistry research color scheme',
    colors: ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD', '#8C564B'],
    chartTypes: ['Chemical Reaction Chart', 'Molecular Structure Plot', 'Spectroscopy Chart'],
    usage: 'Chemistry, chemical engineering',
    category: 'science'
  },

  // Cell Series (15 palettes)
  {
    id: 'cell-metabolic',
    name: 'Cell Metabolic',
    journal: 'Cell',
    description: 'Cell journal metabolism research color scheme',
    colors: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E'],
    chartTypes: ['Metabolic Pathway Chart', 'Protein Interaction Network'],
    usage: 'Cell biology, metabolomics',
    category: 'cell'
  },
  {
    id: 'cell-stem-cell',
    name: 'Cell Stem Cell',
    journal: 'Cell Stem Cell',
    description: 'Stem cell research color scheme',
    colors: ['#E31A1C', '#FF7F00', '#1F78B4', '#33A02C', '#6A3D9A', '#FB9A99'],
    chartTypes: ['Differentiation Trajectory Plot', 'Stem Cell Marker Chart', 'Regenerative Medicine Plot'],
    usage: 'Stem cell biology, regenerative medicine',
    category: 'cell'
  },
  {
    id: 'cell-host-microbe',
    name: 'Cell Host & Microbe',
    journal: 'Cell Host & Microbe',
    description: 'Host-microbe interaction research color scheme',
    colors: ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462'],
    chartTypes: ['Microbial Growth Curve', 'Immune Response Plot', 'Infection Dynamics Chart'],
    usage: 'Microbiology, immunology',
    category: 'cell'
  },
  {
    id: 'cell-chemical-biology',
    name: 'Cell Chemical Biology',
    journal: 'Cell Chemical Biology',
    description: 'Chemical biology research color scheme',
    colors: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E', '#E6AB02'],
    chartTypes: ['Chemical Reaction Pathway', 'Drug Binding Plot', 'Enzyme Activity Chart'],
    usage: 'Chemical biology, drug discovery',
    category: 'cell'
  },
  {
    id: 'cell-reports',
    name: 'Cell Reports',
    journal: 'Cell Reports',
    description: 'General cell biology research color scheme',
    colors: ['#377EB8', '#E41A1C', '#4DAF4A', '#984EA3', '#FF7F00', '#A65628'],
    chartTypes: ['Cellular Process Chart', 'Gene Expression Plot', 'Protein Interaction Network'],
    usage: 'Cell biology, molecular biology',
    category: 'cell'
  },
  {
    id: 'cell-systems',
    name: 'Cell Systems',
    journal: 'Cell Systems',
    description: 'Systems biology research color scheme',
    colors: ['#8DD3C7', '#FFFFB3', '#BEBADA', '#FB8072', '#80B1D3', '#FDB462'],
    chartTypes: ['Network Analysis Chart', 'Pathway Diagram', 'Systems Model Chart'],
    usage: 'Systems biology, bioinformatics',
    category: 'cell'
  },
  {
    id: 'cell-metabolism-2',
    name: 'Cell Metabolism II',
    journal: 'Cell',
    description: 'Advanced metabolism research color scheme',
    colors: ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD', '#8C564B'],
    chartTypes: ['Metabolic Flux Chart', 'Energy Balance Plot', 'Nutrient Utilization Chart'],
    usage: 'Metabolism, nutrition',
    category: 'cell'
  },
  {
    id: 'cell-genetics',
    name: 'Cell Genetics',
    journal: 'Cell',
    description: 'Genetics research color scheme',
    colors: ['#E41A1C', '#377EB8', '#4DAF4A', '#984EA3', '#FF7F00', '#FFFF33'],
    chartTypes: ['Genomic Plot', 'GWAS Plot', 'Pedigree Chart'],
    usage: 'Genetics research, gene mapping',
    category: 'cell'
  },
  {
    id: 'cell-immunology',
    name: 'Cell Immunology',
    journal: 'Cell',
    description: 'Immunology research color scheme',
    colors: ['#2166AC', '#67A9CF', '#D1E5F0', '#F7F7F7', '#FDDBC7', '#D6604D', '#B2182B'],
    chartTypes: ['Immune Cell Interaction Chart', 'Antibody Response Plot', 'Vaccine Efficacy Chart'],
    usage: 'Immunology, vaccine development',
    category: 'cell'
  },
  {
    id: 'cell-cancer',
    name: 'Cell Cancer',
    journal: 'Cell',
    description: 'Cancer research color scheme',
    colors: ['#377EB8', '#E41A1C', '#4DAF4A', '#984EA3', '#FF7F00', '#A65628'],
    chartTypes: ['Tumor Staging Chart', 'Survival Analysis Plot', 'Drug Sensitivity Chart'],
    usage: 'Cancer biology, tumor treatment',
    category: 'cell'
  },
  {
    id: 'cell-neuroscience',
    name: 'Cell Neuroscience',
    journal: 'Cell',
    description: 'Neuroscience research color scheme',
    colors: ['#FF6B35', '#004E89', '#1A659E', '#F7931E', '#FFD23F', '#06FFA5'],
    chartTypes: ['Brain Activation Map', 'Neuron Firing Plot', 'Behavioral Data Chart'],
    usage: 'Neuroscience, brain imaging research',
    category: 'cell'
  },
  {
    id: 'cell-molecular-biology',
    name: 'Cell Molecular Biology',
    journal: 'Cell',
    description: 'Molecular biology research color scheme',
    colors: ['#1B9E77', '#D95F02', '#7570B3', '#E7298A', '#66A61E', '#E6AB02'],
    chartTypes: ['Gene Expression Plot', 'Protein Interaction Network', 'DNA Structure Chart'],
    usage: 'Molecular biology, genetics',
    category: 'cell'
  },
  {
    id: 'cell-biophysics',
    name: 'Cell Biophysics',
    journal: 'Cell',
    description: 'Biophysics research color scheme',
    colors: ['#33A02C', '#1F78B4', '#E31A1C', '#FF7F00', '#6A3D9A', '#B15928'],
    chartTypes: ['Molecular Dynamics Simulation', 'Protein Folding Chart', 'Membrane Structure Plot'],
    usage: 'Biophysics, structural biology',
    category: 'cell'
  },
  {
    id: 'cell-developmental-biology',
    name: 'Cell Developmental Biology',
    journal: 'Cell',
    description: 'Developmental biology research color scheme',
    colors: ['#C7302A', '#4266F6', '#269040', '#F4A100', '#9C2AA0', '#0072B2'],
    chartTypes: ['Embryonic Development Chart', 'Cell Differentiation Plot', 'Morphogenesis Chart'],
    usage: 'Developmental biology, embryology',
    category: 'cell'
  },
  {
    id: 'cell-microbiology',
    name: 'Cell Microbiology',
    journal: 'Cell',
    description: 'Microbiology research color scheme',
    colors: ['#1F77B4', '#FF7F0E', '#2CA02C', '#D62728', '#9467BD', '#8C564B'],
    chartTypes: ['Microbial Growth Curve', 'Bacterial Colony Chart', 'Viral Replication Plot'],
    usage: 'Microbiology, virology',
    category: 'cell'
  },
];

// Journal categories
export const journalCategories = {
  nature: {
    name: 'Nature',
    description: 'Nature series journals',
    count: 20
  },
  science: {
    name: 'Science',
    description: 'Science series journals',
    count: 15
  },
  cell: {
    name: 'Cell',
    description: 'Cell series journals',
    count: 15
  },
  bioinformatics: {
    name: 'Bioinformatics',
    description: 'Bioinformatics journals',
    count: 10
  },
  physics: {
    name: 'Physics',
    description: 'Physics journals',
    count: 25
  },
  chemistry: {
    name: 'Chemistry',
    description: 'Chemistry journals',
    count: 25
  }
};
