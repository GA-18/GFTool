var lang_type = 'en'

// inital
function mergeCell(table1, startRow, endRow, col) {
  var tb = document.getElementById(table1)
  if (!tb || !tb.rows || tb.rows.length <= 0) return
  if (col >= tb.rows[0].cells.length || (startRow >= endRow && endRow != 0)) return
  if (endRow == 0) endRow = tb.rows.length - 1
  for (var i = startRow; i < endRow; i++) {
    tb.rows[i + 1].removeChild(tb.rows[i + 1].cells[col])
    tb.rows[startRow].cells[col].rowSpan = (tb.rows[startRow].cells[col].rowSpan) + 1
  }
}
function loadScript(url) {
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url
  document.body.appendChild(script)
}
var lib_language // 语言库
lib_language = {
  main_draw_1: 'position:',
  main_draw_2: '  dmg=',
  main_formatDPS_1: 'time=',
  main_formatDPS_2: 's, dmg=',
  main_makeGraph_1: 'time',
  main_makeGraph_2: 'dmg',
  UI_affect: '  BUFF ',
  UI_num: ' position',
  UI_putsee: 'Place a T-doll to show effect',
  UI_pickblock: '<b>Click a <span style="color: red">block</span> first</b>',
  UI_not_2_python: ' *Unable to place two Python',
  UI_not_2_carcano: ' *Unable to place two CarcanoM1891',
  UI_not_2_ads: ' *Unable to place two ADS',
  UI_not_2_jill: ' *Unable to place two Jill',
  UI_not_2_sei: ' *Unable to place two Sei',
  UI_not_2_stella: ' *Unable to place two Stella',
  UI_fairydmg: '妖精伤害',
  UI_fairyinj: '妖精承伤',

  NAME_1: 'Colt Revolver',
  NAME_4: 'Python',
  NAME_5: 'Nagant Revolver',
  NAME_6: 'Tkokarev',
  NAME_7: 'Stechkin',
  NAME_8: 'Makarov',
  NAME_13: 'Type 92',
  NAME_14: 'Astra Revolver',
  NAME_15: 'Glock 17',
  NAME_16: 'Thompson',
  NAME_27: 'Skorpion',
  NAME_29: 'Sten MkⅡ',
  NAME_31: 'Beretta Model 38',
  NAME_32: 'UZI',
  NAME_34: 'M1 Garand',
  NAME_36: 'Springfield',
  NAME_39: 'Mosin-Nagant',
  NAME_41: 'Simonov',
  NAME_49: 'Type 56',
  NAME_50: 'Lee-Enfield',
  NAME_66: 'Type 56-1',
  NAME_71: 'Galil',
  NAME_89: 'Bren',
  NAME_94: 'Type 64',
  NAME_95: 'Hanyang Type 88',
  NAME_96: 'Grizzly MkV',
  NAME_112: 'Negev',
  NAME_113: 'Serdyukov',
  NAME_114: 'Welrod MkⅡ',
  NAME_115: 'Suomi',
  NAME_127: 'Type 79',
  NAME_129: 'Type 95',
  NAME_130: 'Type 97',
  NAME_132: 'Type 59',
  NAME_133: 'Type 63',
  NAME_150: 'Shipka',
  NAME_161: 'Type 97 Shotgun',
  NAME_171: 'Ribeyrolles',
  NAME_174: 'Type 81 Carbine',
  NAME_183: 'Contender',
  NAME_185: 'Ameli',
  NAME_197: 'Carcano M1891',
  NAME_198: 'Carcano M91/38',
  NAME_199: 'Type 80',
  NAME_201: 'Gepard M1',
  NAME_202: 'Thunder',
  NAME_203: 'Honey Badger',
  NAME_204: 'Ballista',
  NAME_225: 'Cx4 Storm',
  NAME_228: 'Type 100',
  NAME_233: 'Px4 Storm',
  NAME_238: 'Type 88',
  NAME_239: 'Type 03',
  NAME_243: 'Howa Type 64',
  NAME_248: 'Jericho',
  NAME_249: 'Type 62',
  NAME_253: 'Lewis Gun',
  NAME_255: 'Steyr Scout',
  NAME_256: 'Falcon',
  NAME_258: 'Magal',
  NAME_264: 'Chauchat',
  NAME_270: 'Type 4',
  NAME_272: 'Desert Eagle',
  NAME_283: 'Liberator',
  NAME_290: 'Howa type 89',
  NAME_294: 'Webley',
  NAME_302: 'Defender',
  NAME_305: 'Tabuk',
  NAME_316: 'General Liu',
  NAME_317: 'Mondragon',
  NAME_2001: 'Noel',
  NAME_2002: 'Elphelt',
  NAME_2003: 'Kiana',
  NAME_2004: 'Raiden Mei',
  NAME_2005: 'Bronya',
  NAME_2006: 'Theresa',
  NAME_2007: 'Murata Himeko',
  NAME_2008: 'Seele',
  NAME_2009: 'Clear',
  NAME_2010: 'Fail',
  NAME_2011: 'Jill',
  NAME_2012: 'Sei',
  NAME_2013: 'Dorothy',
  NAME_2014: 'Stella',
  NAME_2015: 'Alma',
  NAME_2016: 'Dana',
  NAME_2023: 'Henrietta',
  NAME_2024: 'Rico',
  NAME_2025: 'Triela',
  NAME_2026: 'Claes',
  NAME_2027: 'Angerica',

  skillclaes1: '+shield',
  skillclaes2: '+teamdmg',
  skillclaes3: '+clipsize',

  equipNAME_0: 'No equipment',
  equipNAME_12: 'Telescope Sight',
  equipNAME_14: 'Holographic Sight',
  equipNAME_13: 'Red Dot Sight',
  equipNAME_17: 'APS exclusive buttstock',
  equipNAME_11: 'Silencer',
  equipNAME_41: 'Night Combat Equipment',
  equipNAME_31: ' Exoskeleton',
  equipNAME_33: ' Armor Plate',
  equipNAME_21: 'ILM Hollow Point Ammo',
  equipNAME_23: 'Mk211 High-Explosive AP Ammo',
  equipNAME_22: 'APCR High-Velocity Ammo',
  equipNAME_24: '#000 Buckshot',
  equipNAME_25: 'SABOT Slug',
  equipNAME_34: 'Thermoptic Camouflage Cape',
  equipNAME_35: 'IOP Maximum Ammo Box',
  equipNAME_11001: 'Colt Revolver Long Barrel',
  equipNAME_11005: 'Nagant Revolver Silencer',
  equipNAME_11091: 'MP446C Competition Barrel',
  equipNAME_42009: 'Glory Light',
  equipNAME_42010: 'Black Cat',
  equipNAME_169: 'FÉLIN System Sight',
  equipNAME_4118: 'PKN03M Night Scope',
  equipNAME_11063: 'G3 Improved Barrel Group',
  equipNAME_11064: 'G36 Hybrid Optics',
  equipNAME_354: 'Custom Exoskeletal Armour',
  equipNAME_11056: 'Dinergate-Type RO',
  equipNAME_11057: 'Light Weight Rail System',
  equipNAME_326: 'GSG UX Exoskeleton',
  equipNAME_3103: 'UMP UX Exoskeleton',
  equipNAME_31093: 'Ability Upgrade Cartridge',
  equipNAME_31143: '爱宠挂饰',
  equipNAME_11037: 'M2 Bipod',
  equipNAME_11051: 'Fire Selector',
  equipNAME_1125: 'MG4 Exclusive MGO',
  equipNAME_11089: 'Bren L4 Barrel Group',
  equipNAME_21002: 'XM261 ACP',
  equipNAME_21057: '.300BLK High-Velocity Ammo',
  equipNAME_236: 'National Match-Grade AP Ammo',
  equipNAME_362: 'High-Perf. Tactical Hair Decoration',
  equipNAME_31055: 'Inherited Weapon Arsenal',
  equipNAME_11029: 'Sten Exclusive Silencer',
  equipNAME_11103: 'Additional Process Module',
  equipNAME_11094: 'Type 64 Exclusive Suppressor',
  equipNAME_342: 'Blue Thickened Cape',
  equipNAME_31039: 'Hayha Memory Chip',
  equipNAME_31044: 'Digital Camouflage Cape',
  equipNAME_388: 'Infinite Ammo Box',
  equipNAME_3185: 'Dedicated Tactical Memory',
  equipNAME_31075: 'Titan Fire Control Chip',
  equipNAME_31161: 'Tactical Mobile Shield',
  equipNAME_12023: '古董万花筒',
  equipNAME_32024: '决斗扑克',
  equipNAME_22025: '格斗刀',
  equipNAME_120261: '平光镜',
  equipNAME_120262: '天外陨石',
  equipNAME_120263: '计时腕表',
  equipNAME_32027: '童话绘本',

  skillNAME_39: 'Designated Shot',
  skillNAME_39_2: 'Pure White Reaper',
  skillNAME_55: "Avenger's Mark",
  skillNAME_102: 'Overload',
  skillNAME_180: 'Piercing Shot',
  skillNAME_194: 'Overheat',
  skillNAME_213: 'Whimsical Chain',
  skillNAME_231: 'Prophecy of a False God',
  LAYER_231: 'Victory session',
  skillNAME_238: 'Slothful Rage',
  skillNAME_243: 'Future Warning',
  skillNAME_252: 'Concussive Strike',
  LAYER_302: '距离倍率',
  skillNAME_306: 'Blazar',
  skillNAME_1124: '后发狙击',
  LAYER_1124: '蓄力层数',
  DESCRIBE_1124: '敌人血量低于50%',
  skillNAME_2025: 'Puppet trick',
  DESCRIBE_2025: 'Knife hit!',
  skillNAME_2006: 'Sanctions of Light',
  skillNAME_2026: '沉思者之钥',
  DESCRIBE_2026: ['自动技能', '1层蓄力开火', '2层蓄力开火', '3层蓄力开火', '4层蓄力开火', '5层蓄力开火'],
  DESCRIBE_315: ['每0.1s，1回避转化为2火力1命中', '每0.2s，1火力1命中转化为4回避'],
  DESCRIBE_316: ['普通模式(-10%射速,+20%火力)', '自动模式(-10%火力,+20%射速)'],
  DESCRIBE_39_1: 'Each',
  DESCRIBE_39_2: 'attacks kill',
  DESCRIBE_39_3: 'Disabled',
  DESCRIBE_39_4: 'Skill killing',
  DESCRIBE_55: 'Shelling',
  DESCRIBE_102_1: 'Default',
  DESCRIBE_102_2: 'Overload',
  DESCRIBE_180: 'Pierce all enemy',
  DESCRIBE_194_0: 'Active status',
  DESCRIBE_194_1: 'Auto',
  DESCRIBE_194_2: 'Always Fever(3 shot)',
  DESCRIBE_194_3: 'Always Note(1 shot)',
  DESCRIBE_213_0: 'Load status',
  DESCRIBE_213_1: 'Subsonic rounds(eva+65%)',
  DESCRIBE_213_2: 'Spoon point tip(dmg+85%)',
  DESCRIBE_213_3: 'Standard rounds(acu+200%)',
  DESCRIBE_236: 'Ratio',
  DESCRIBE_238: 'LMG mode',
  DESCRIBE_243_0: 'After 3s',
  DESCRIBE_243_1: 'Dmg+55%',
  DESCRIBE_243_2: 'Sheild 25',
  DESCRIBE_251: 'Lock of Flowers',
  DESCRIBE_252: 'Sputter all enemies',
  DESCRIBE_306: 'Attack direct standing enemy',
  DESCRIBE_318: ['吸取火力(max=45%)', '吸取射速(max=40%)', '吸取命中(max=80%)'],
  LAYER_1053: '蓄力层数',
  DESCRIBE_1053: ['狙击击杀敌人', '敌人血量高于50%'],
  DESCRIBE_2006: 'Enemy enter area',

  fairy_0: 'No fairy',
  talent_0: 'No talent',

  enemy_normal: 'Normal',
  enemy_elite: 'Elite',

  INPUT_PI: 'Input integer',

  hp: 'hp',
  cs: 'clipsize',
  cs_0: '<span style="color:red">CANNOT shoot</span>',
  cs_302: '8(<span style="color:blue">one-shot</span>)',
  dmg: 'dmg',
  rof: 'rof',
  acu: 'acu',
  eva: 'eva',
  crit: 'crit',
  critdmg: 'critdmg',
  arm: 'arm',
  ap: 'ap',
  cld: 'cld',
  night: 'Night',
  daytime: 'Daytime',
  skillNAME_256: 'Sunset Falcon',
  DESCRIBE_256: 'Do not use special bullets',

  // new
  fairyNAME_1: 'WarriorFairy',
  fairyNAME_2: 'FuryFairy',
  fairyNAME_3: 'ArmorFairy',
  fairyNAME_4: 'ShieldFairy',
  fairyNAME_5: 'DefenceFairy',
  fairyNAME_6: 'ProvocationFairy',
  fairyNAME_7: 'SniperFairy',
  fairyNAME_8: 'BombardmentFairy',
  fairyNAME_9: 'AirstrikeFairy',
  fairyNAME_10: 'ReinforcementFairy',
  fairyNAME_11: 'AirborneFairy',
  fairyNAME_12: 'LandmineFairy',
  fairyNAME_13: 'RocketFairy',
  fairyNAME_14: 'ConstructionFairy',
  fairyNAME_15: 'CommandFairy',
  fairyNAME_16: 'RescueFairy',
  fairyNAME_17: 'IlluminationFairy',
  fairyNAME_18: 'GoldenFairy',
  fairyNAME_19: 'KitchenFairy',
  fairyDESCRIBE_19: 'Feast! Which one?',
  fairyDESCRIBE_19_0: 'Casual(random)',
  fairyDESCRIBE_19_1: 'Numb-spicy(dmg+20%)',
  fairyDESCRIBE_19_2: 'Sour-spicy(rof+20%)',
  fairyDESCRIBE_19_3: 'Sweet(acu+30%)',
  fairyDESCRIBE_19_4: 'Salty(eva+25%)',
  fairyDESCRIBE_19_5: 'Overcooked(dmg-0%)',
  fairyNAME_20: 'FireworkFairy',
  fairyNAME_21: 'NianFairy',
  fairyskillstr: 'Skill ',
  fairy_skillNAME_0: 'No skill',
  fairy_skillNAME_1: 'Combat Efficiency',
  fairy_skillNAME_2: 'Unlimited Rage',
  fairy_skillNAME_3: 'Riot Control',
  fairy_skillNAME_4: 'Energy Shield',
  fairy_skillNAME_5: 'Temporary Armor',
  fairy_skillNAME_6: 'Taunt Target',
  fairy_skillNAME_7: 'Sniper Command',
  fairy_skillNAME_8: 'Bombard Command',
  fairy_skillNAME_9: 'Fatal Air Raid',
  fairy_skillNAME_10: 'T-Doll Reinforcement',
  fairy_skillNAME_11: 'Landing Zone Liberation',
  fairy_skillNAME_12: 'Mine Front',
  fairy_skillNAME_13: 'Front Reaper',
  fairy_skillNAME_14: 'Emergency Bunker',
  fairy_skillNAME_15: 'EXP Overload',
  fairy_skillNAME_16: 'High Efficiency Rescue',
  fairy_skillNAME_17: 'Night Illumination',
  fairy_skillNAME_18: 'Golden Law',
  fairy_skillNAME_19: 'Emergency Feast!',
  fairy_skillNAME_20: 'Translation Required',
  fairy_skillNAME_21: 'Firecracker',
  fairy_skillNAME_22: 'Tide of Sloth',
  fairy_skillNAME_23: 'Ultimate Combo',
  fairy_skillNAME_24: 'Armor Fortification',

  hfNAME_0: 'BGM-71',
  hfNAME_1: 'AGS-30',
  hfNAME_2: '2B-14',
  hfNAME_3: 'M2',
  hfNAME_4: 'AT4',

  special_info_unique: '<span style="color:blue">Unique</span> ',
  special_info_common: '<span style="color:red">Special</span>',
  special_info_2011_0: 'Sugar Rush',
  special_info_2011_1: '<span style="color:#ff9900">∎</span><span style="color:#33cc00">∎</span><span style="color:#99ccff">∎</span>Big Beer',
  special_info_2011_2: '<span style="color:#ff3333">∎</span><span style="color:#ff3333">∎</span><span style="color:#6600ff">∎</span>Brandtini',
  special_info_2011_3: '<span style="color:#ff3333">∎</span><span style="color:#ff9900">∎</span><span style="color:#99ccff">∎</span>Piano Woman',
  special_info_2011_4: '<span style="color:#ff3333">∎</span><span style="color:#ff3333">∎</span><span style="color:#99ccff">∎</span>Moonblast',
  special_info_2011_5: '<span style="color:#ff9900">∎</span><span style="color:#6600ff">∎</span><span style="color:#33cc00">∎</span>Bleeding Jane',
  special_info_2011_6: '<span style="color:#99ccff">∎</span><span style="color:#99ccff">∎</span><span style="color:#99ccff">∎</span>Fringe Weaver'
}

window.onload = function () {
  loadScript('../js/Echelon_main.js')
  loadScript('../js/Echelon_sub.js')
  loadScript('../js/Echelon_property.js')
  loadScript('../js/Echelon_skill.js')
  loadScript('../js/Echelon_UI.js')
  loadScript('../js/Echelon_graph.js')
  loadScript('../js/Echelon_select.js')
  loadScript('../js/Echelon_special.js')
  mergeCell('table_property', 0, 2, 0)
  mergeCell('table_affect', 0, 2, 3)
  mergeCell('table_envi', 0, 1, 0)
  mergeCell('table_envi', 0, 1, 2)
}
