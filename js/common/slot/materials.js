﻿var materials = [
	{name:'銅', code:'m001', set:40, unit:'組', rarely:true},
	{name:'天青石', code:'m001a', set:10, unit:'組', rarely:false},	// 堆疊數量待確認
	{name:'瑪瑙', code:'m001b', set:10, unit:'組', rarely:false},	// 堆疊數量待確認
	{name:'鐵', code:'m002', set:40, unit:'組', rarely:true},
	{name:'銀', code:'m003', set:40, unit:'組', rarely:true},
	{name:'鋁', code:'m003a', set:40, unit:'組', rarely:true},
	{name:'純銀', code:'m004', set:40, unit:'組', rarely:true},
	{name:'金', code:'m005', set:40, unit:'組', rarely:true},
	{name:'鈦礦石', code:'m005a', set:40, unit:'組', rarely:true},
	{name:'白金', code:'m006', set:40, unit:'組', rarely:true},
	{name:'幻之鋼', code:'m007', set:40, unit:'組', rarely:true},
	{name:'幻之銀', code:'m008', set:40, unit:'組', rarely:true},
	{name:'達馬斯礦', code:'m008a', set:40, unit:'組', rarely:true},
	{name:'永久冰石', code:'m008b', set:40, unit:'組', rarely:false},
	{name:'藍龍之鱗', code:'m008c', set:40, unit:'組', rarely:false},
	{name:'萊姆騎士礦', code:'m008d', set:40, unit:'組', rarely:true},
	{name:'亞爾登礦', code:'m008e', set:40, unit:'組', rarely:true},
	{name:'克德謝爾礦', code:'m008f', set:40, unit:'組', rarely:true},
	{name:'勒格耐席鉧', code:'m009', set:40, unit:'組', rarely:true},
	{name:'謝爾哈特礦', code:'m009a', set:40, unit:'組', rarely:true},
	{name:'奧哈利鋼', code:'m010', set:40, unit:'組', rarely:true},
	{name:'喜馬拉斯礦', code:'m010a', set:40, unit:'組', rarely:true},
	{name:'雅達曼鎝', code:'m010b', set:40, unit:'組', rarely:true},
	{name:'太古的道具', code:'m010c', set:2, unit:'組', rarely:false},
	{name:'石墨', code:'m011', set:40, unit:'組', rarely:true},	// 待確認
	{name:'鉛礦', code:'m012', set:40, unit:'組', rarely:true},	// 待確認
	{name:'珠砂', code:'m013', set:40, unit:'組', rarely:true},	// 待確認
	{name:'螢石', code:'m014', set:40, unit:'組', rarely:true},	// 待確認
	{name:'油頁岩', code:'m015', set:40, unit:'組', rarely:true},	// 待確認
	{name:'銅條', code:'m101', set:40, unit:'組', rarely:false},
	{name:'鐵條', code:'m102', set:40, unit:'組', rarely:false},
	{name:'銀條', code:'m103', set:40, unit:'組', rarely:false},
	{name:'鋁條', code:'m103a', set:40, unit:'組', rarely:false},
	{name:'純銀條', code:'m104', set:40, unit:'組', rarely:false},
	{name:'金條', code:'m105', set:40, unit:'組', rarely:false},
	{name:'白金條', code:'m106', set:40, unit:'組', rarely:false},
	{name:'幻之鋼條', code:'m107', set:40, unit:'組', rarely:false},
	{name:'幻之銀條', code:'m108', set:40, unit:'組', rarely:false},
	{name:'達馬斯礦條', code:'m108a', set:40, unit:'組', rarely:false},
	{name:'萊姆騎士礦條', code:'m108d', set:20, unit:'組', rarely:false},
	{name:'亞爾登礦條', code:'m108e', set:20, unit:'組', rarely:false},
	{name:'克德謝爾礦條', code:'m108f', set:20, unit:'組', rarely:false},
	{name:'勒格耐席鉧條', code:'m109', set:40, unit:'組', rarely:false},
	{name:'謝爾哈特礦條', code:'m109a', set:40, unit:'組', rarely:false},
	{name:'奧利哈鋼條', code:'m110', set:40, unit:'組', rarely:false},
	{name:'喜馬拉斯礦條', code:'m110a', set:40, unit:'組', rarely:false},
	{name:'雅達曼鎝條', code:'m110b', set:40, unit:'組', rarely:false},
	{name:'石墨條', code:'m111', set:40, unit:'組', rarely:false},
	{name:'鉛錠', code:'m112', set:40, unit:'組', rarely:false},
	{name:'珠砂錠', code:'m113', set:40, unit:'組', rarely:false},
	{name:'紫英石', code:'m114', set:40, unit:'組', rarely:false},
	{name:'石油', code:'m115', set:40, unit:'組', rarely:false},
	{name:'印度輕木', code:'w01', set:40, unit:'組', rarely:false},
	{name:'孟宗竹', code:'w01a', set:40, unit:'組', rarely:true},
	{name:'樅', code:'w02', set:40, unit:'組', rarely:false},
	{name:'黃月木', code:'w03', set:40, unit:'組', rarely:false},
	{name:'茱萸木', code:'w03a', set:40, unit:'組', rarely:false},
	{name:'鐵杉', code:'w04', set:40, unit:'組', rarely:false},
	{name:'琵琶木', code:'w05', set:40, unit:'組', rarely:false},
	{name:'赤松', code:'w06', set:40, unit:'組', rarely:false},
	{name:'朴', code:'w07', set:40, unit:'組', rarely:false},
	{name:'杉', code:'w08', set:40, unit:'組', rarely:false},
	{name:'單木', code:'w08a', set:40, unit:'組', rarely:false},
	{name:'魔法紅蘿蔔', code:'w08b', set:40, unit:'組', rarely:false},
	{name:'絲柏', code:'w09', set:40, unit:'組', rarely:false},
	{name:'梣', code:'w10', set:40, unit:'組', rarely:false},
	{name:'月桂木', code:'w10a', set:40, unit:'組', rarely:false},
	{name:'棗木', code:'w11', set:40, unit:'組', rarely:false},
	{name:'藤木', code:'w12', set:40, unit:'組', rarely:false},
	{name:'桃花心木', code:'w13', set:40, unit:'組', rarely:false},	// 待確認
	{name:'檜木', code:'w14', set:40, unit:'組', rarely:false},
	{name:'檀木', code:'w15', set:40, unit:'組', rarely:false},	// 待確認
	{name:'蘋果薄荷', code:'f01', set:40, unit:'組', rarely:false},
	{name:'月桂樹的葉子', code:'f01a', set:40, unit:'組', rarely:true},	// 堆疊數量待確認
	{name:'檸檬草', code:'f02', set:40, unit:'組', rarely:false},
	{name:'德島果蘭', code:'f02a', set:40, unit:'組', rarely:false},	// 堆疊數量待確認
	{name:'德島雛菊', code:'f02b', set:40, unit:'組', rarely:false},	// 堆疊數量待確認
	{name:'薄荷', code:'f02c', set:40, unit:'組', rarely:false},
	{name:'蝴蝶花', code:'f03', set:40, unit:'組', rarely:false},
	{name:'果梨', code:'f04', set:40, unit:'組', rarely:false},
	{name:'桃木', code:'f05', set:40, unit:'組', rarely:false},
	{name:'冰凍愛麗絲', code:'f05a', set:40, unit:'組', rarely:false},
	{name:'含月草', code:'f05b', set:40, unit:'組', rarely:true},
	{name:'番紅花', code:'f06', set:40, unit:'組', rarely:false},
	{name:'百里香', code:'f07', set:40, unit:'組', rarely:false},
	{name:'瞿麥', code:'f08', set:40, unit:'組', rarely:false},
	{name:'香草', code:'f08a', set:40, unit:'組', rarely:false},
	{name:'茴香', code:'f09', set:40, unit:'組', rarely:false},
	{name:'香草', code:'f09a', set:40, unit:'組', rarely:false},	// 堆疊數量待確認
	{name:'七葉樹', code:'f10', set:40, unit:'組', rarely:false},
	{name:'香草', code:'f10a', set:40, unit:'組', rarely:false},	// 堆疊數量待確認
	{name:'紫茉莉', code:'f11', set:40, unit:'組', rarely:false},
	{name:'鳳仙花', code:'f12', set:40, unit:'組', rarely:false},
	{name:'茉莉', code:'f13', set:40, unit:'組', rarely:false},
	{name:'萱草', code:'f14', set:40, unit:'組', rarely:false},
	{name:'梔子花', code:'f15', set:40, unit:'組', rarely:false},
	{name:'麻', code:'c001', set:40, unit:'組', rarely:false},
	{name:'木棉', code:'c002', set:40, unit:'組', rarely:true},
	{name:'羊毛', code:'c003', set:40, unit:'組', rarely:true},
	{name:'棉花', code:'c004', set:40, unit:'組', rarely:true},
	{name:'紗', code:'c005', set:40, unit:'組', rarely:true},
	{name:'蠶絲', code:'c006', set:40, unit:'組', rarely:false},
	{name:'莎蓮娜紗', code:'c007', set:40, unit:'組', rarely:true},
	{name:'傑諾瓦紗', code:'c008', set:40, unit:'組', rarely:true},
	{name:'阿巴尼斯棉', code:'c008a', set:20, unit:'組', rarely:true},
	{name:'芎麻', code:'c009', set:40, unit:'組', rarely:true},
	{name:'開米士羊毛', code:'c010', set:40, unit:'組', rarely:true},
	{name:'鴨毛', code:'c011', set:40, unit:'組', rarely:true},
	{name:'鵝毛', code:'c012', set:40, unit:'組', rarely:true},
	{name:'柞蠶絲', code:'c013', set:40, unit:'組', rarely:false},
	{name:'寧麻', code:'c014', set:40, unit:'組', rarely:true},
	{name:'水鳥羽', code:'c015', set:40, unit:'組', rarely:true},
	{name:'麻布', code:'c101', set:40, unit:'組', rarely:false},
	{name:'木棉布', code:'c102', set:40, unit:'組', rarely:false},
	{name:'毛氈', code:'c103', set:40, unit:'組', rarely:false},
	{name:'棉布', code:'c104', set:40, unit:'組', rarely:false},
	{name:'細線', code:'c105', set:40, unit:'組', rarely:false},
	{name:'絹布', code:'c106', set:40, unit:'組', rarely:false},
	{name:'莎蓮娜線', code:'c107', set:40, unit:'組', rarely:false},
	{name:'傑諾瓦線', code:'c108', set:40, unit:'組', rarely:false},
	{name:'阿巴尼斯製的布', code:'c108a', set:40, unit:'組', rarely:false},
	{name:'阿巴尼斯製的線', code:'c108b', set:40, unit:'組', rarely:false},
	{name:'細麻布', code:'c109', set:40, unit:'組', rarely:false},
	{name:'開米士毛線', code:'c110', set:40, unit:'組', rarely:false},
	{name:'鴨絨', code:'c111', set:40, unit:'組', rarely:false},
	{name:'鵝絨', code:'c112', set:40, unit:'組', rarely:false},
	{name:'硬綢布', code:'c113', set:40, unit:'組', rarely:false},
	{name:'寧麻布', code:'c114', set:40, unit:'組', rarely:false},
	{name:'水鳥羽絨', code:'c115', set:40, unit:'組', rarely:false},
	{name:'鹿皮', code:'g01a', set:40, unit:'組', rarely:false},
	{name:'蕃茄', code:'g01b', set:40, unit:'組', rarely:false},
	{name:'雞蛋', code:'g01c', set:40, unit:'組', rarely:false},
	{name:'小麥粉', code:'g01d', set:40, unit:'組', rarely:false},
	{name:'神聖米', code:'g01e', set:40, unit:'組', rarely:true},
	{name:'蔥', code:'g02a', set:40, unit:'組', rarely:false},
	{name:'牛奶', code:'g02b', set:40, unit:'組', rarely:false},
	{name:'青椒', code:'g02c', set:40, unit:'組', rarely:false},
	{name:'大豆', code:'g02d', set:40, unit:'組', rarely:true},
	{name:'石鯛魚', code:'g02e', set:40, unit:'組', rarely:true},
	{name:'桃連蛇', code:'g02f', set:40, unit:'組', rarely:true},
	{name:'桃茂', code:'g02g', set:40, unit:'組', rarely:true},
	{name:'桃冠', code:'g02h', set:40, unit:'組', rarely:true},
	{name:'鹽', code:'g03a', set:40, unit:'組', rarely:false},
	{name:'醬油', code:'g03b', set:40, unit:'組', rarely:false},
	{name:'白菜', code:'g03c', set:40, unit:'組', rarely:false},
	{name:'芹菜', code:'g04a', set:40, unit:'組', rarely:false},
	{name:'雞肉', code:'g04b', set:40, unit:'組', rarely:false},
	{name:'竹筍', code:'g04c', set:40, unit:'組', rarely:false},
	{name:'海苔', code:'g04d', set:40, unit:'組', rarely:false},
	{name:'竹莢魚', code:'g04e', set:20, unit:'組', rarely:true},	// update 09/04
	{name:'井底蛙', code:'g04f', set:1, unit:'隻', rarely:true},
	{name:'摩斯蜥蝪', code:'g04g', set:1, unit:'隻', rarely:true},
	{name:'惡魔魚', code:'g04h', set:1, unit:'隻', rarely:true},
	{name:'狐皮', code:'g04i', set:40, unit:'組', rarely:true},
	{name:'牛肉', code:'g05a', set:40, unit:'組', rarely:false},
	{name:'星鰻', code:'g05b', set:40, unit:'組', rarely:false},
	{name:'生薑', code:'g05c', set:40, unit:'組', rarely:false},
	{name:'胡椒', code:'g05d', set:40, unit:'組', rarely:false},
	{name:'馬鈴薯', code:'g05e', set:40, unit:'組', rarely:false},
	{name:'豬肉', code:'g05f', set:40, unit:'組', rarely:true},
	{name:'戀愛蘋果', code:'g05g', set:40, unit:'組', rarely:true},
	{name:'鮭魚', code:'g05h', set:40, unit:'組', rarely:false},
	{name:'大黑蝦', code:'g05i', set:40, unit:'組', rarely:true},
	{name:'芝麻娃娃', code:'g05j', set:10, unit:'組', rarely:true},	// update
	{name:'砂糖', code:'g06a', set:20, unit:'組', rarely:false},	// update 09/04
	{name:'米', code:'g06b', set:40, unit:'組', rarely:false},
	{name:'高級奶油', code:'g07a', set:40, unit:'組', rarely:false},
	{name:'辣椒', code:'g07b', set:40, unit:'組', rarely:false},
	{name:'咖哩塊', code:'g07c', set:20, unit:'組', rarely:false},	// update 09/07
	{name:'螃蟹', code:'g08a', set:40, unit:'組', rarely:false},
	{name:'霜降牛肉', code:'g08b', set:40, unit:'組', rarely:false},
	{name:'阿巴尼斯哈蜜瓜', code:'g08c', set:3, unit:'組', rarely:false},
	{name:'濕地毒蛇', code:'g08d', set:40, unit:'組', rarely:false},
	{name:'伊勢蝦', code:'g09a', set:40, unit:'組', rarely:false},
	{name:'海膽', code:'g09b', set:40, unit:'組', rarely:false},
	{name:'魚翅', code:'g10a', set:40, unit:'組', rarely:false},
	{name:'鱉', code:'g10b', set:40, unit:'組', rarely:false},
	{name:'土龍', code:'g10c', set:1, unit:'隻', rarely:false},
	{name:'黃豆', code:'g11a', set:40, unit:'組', rarely:false},
	{name:'芋頭', code:'g12a', set:40, unit:'組', rarely:false},
	{name:'紅豆', code:'g13a', set:40, unit:'組', rarely:false},
	{name:'天然燕窩', code:'g13b', set:40, unit:'組', rarely:false},
	{name:'鹿茸', code:'g14a', set:40, unit:'組', rarely:false},
	{name:'蜂巢', code:'g15a', set:40, unit:'組', rarely:false},
	{name:'地的水晶碎片', code:'s01', set:999, unit:'組', rarely:false},
	{name:'水的水晶碎片', code:'s02', set:999, unit:'組', rarely:false},
	{name:'火的水晶碎片', code:'s03', set:999, unit:'組', rarely:false},
	{name:'風的水晶碎片', code:'s04', set:999, unit:'組', rarely:false},
	{name:'火焰之魂', code:'s05', set:10, unit:'組', rarely:false},
	{name:'魔族的水晶', code:'s06', set:10, unit:'組', rarely:false},
	{name:'鋼騎之礦', code:'s07', set:10, unit:'組', rarely:false},
	{name:'誓言之證', code:'s08', set:10, unit:'組', rarely:false},
	{name:'德特家的布', code:'s09', set:20, unit:'組', rarely:false},
	{name:'蔓陀羅草的皮', code:'s10', set:5, unit:'組', rarely:false},
	{name:'風龍蜥的甲殼', code:'s11', set:5, unit:'組', rarely:false},
	{name:'妖草的血', code:'s12', set:5, unit:'組', rarely:false},
	{name:'神眼', code:'s13', set:5, unit:'組', rarely:false},
	{name:'隕石', code:'s14', set:1, unit:'顆', rarely:false},
	{name:'紅鳳凰羽毛', code:'s15', set:6, unit:'組', rarely:false},
	{name:'藍鳳凰羽毛', code:'s16', set:6, unit:'組', rarely:false},
	{name:'大炸彈的卡片', code:'s17', set:1, unit:'張', rarely:true},
	{name:'惡魔的卡片', code:'s18', set:1, unit:'張', rarely:true},
	{name:'天使之淚', code:'s19', set:1, unit:'組', rarely:true},
	{name:'魔力手環', code:'s20', set:1, unit:'組', rarely:true},
	{name:'法蘭遺跡紀念木刀', code:'s21', set:1, unit:'個', rarely:true},
	{name:'迷你蝙蝠的血', code:'s22', set:1, unit:'個', rarely:true},
	{name:'炎獸皮', code:'s101', set:40, unit:'組', rarely:true},
	{name:'冰龍石', code:'s102', set:40, unit:'組', rarely:true},
	{name:'火山岩石', code:'s103', set:40, unit:'組', rarely:true},
	{name:'鋼鐵斷刃', code:'s104', set:40, unit:'組', rarely:true},
	{name:'魔法之羽', code:'s105', set:40, unit:'組', rarely:true},
	{name:'光輝結晶', code:'s106', set:40, unit:'組', rarely:true},
	{name:'銀絲棉線', code:'s107', set:40, unit:'組', rarely:true},
	{name:'黯淡的獸皮', code:'s108', set:40, unit:'組', rarely:true},
	{name:'瓶子', code:'xf01', set:20, unit:'組', rarely:true},
	{name:'泡菜', code:'xf02', set:3, unit:'組', rarely:false},
	{name:'神聖油', code:'xf03', set:40, unit:'組', rarely:true},
	{name:'神聖醋', code:'xf04', set:3, unit:'組', rarely:true},
	{name:'神聖美奶滋', code:'xf05', set:3, unit:'組', rarely:true},
	{name:'飯碗', code:'xf06', set:5, unit:'組', rarely:true},
	{name:'蕃茄醬', code:'xf07', set:3, unit:'組', rarely:false},
	{name:'炒麵', code:'xf08', set:3, unit:'組', rarely:true},
	{name:'法國麵包', code:'xf09', set:3, unit:'組', rarely:true},
	{name:'白飯', code:'xf10', set:3, unit:'組', rarely:true},
	{name:'必死的劇藥', code:'xf11', set:3, unit:'組', rarely:true},
	{name:'生鏽的劍', code:'wd01', set:99, unit:'組', rarely:true},
	{name:'生鏽的斧', code:'wd02', set:99, unit:'組', rarely:true},
	{name:'生鏽的槍', code:'wd03', set:99, unit:'組', rarely:true},
	{name:'生鏽的弓', code:'wd04', set:99, unit:'組', rarely:true},
	{name:'生鏽的杖', code:'wd05', set:99, unit:'組', rarely:true},
	{name:'生鏽的短劍', code:'wd06', set:99, unit:'組', rarely:true},
	{name:'生鏽的投擲武器', code:'wd07', set:99, unit:'組', rarely:true},
	{name:'生鏽的頭盔', code:'wd08', set:99, unit:'組', rarely:true},
	{name:'破爛的帽子', code:'wd09', set:99, unit:'組', rarely:true},
	{name:'生鏽的鎧', code:'wd10', set:99, unit:'組', rarely:true},
	{name:'破爛的衣服', code:'wd11', set:99, unit:'組', rarely:true},
	{name:'破爛的袍', code:'wd12', set:99, unit:'組', rarely:true},
	{name:'破爛的靴子', code:'wd13', set:99, unit:'組', rarely:true},
	{name:'破損的鞋', code:'wd14', set:99, unit:'組', rarely:true},
	{name:'生鏽的盾', code:'wd15', set:99, unit:'組', rarely:true},
	{name:'水龍的鰭', code:'wd16', set:99, unit:'組', rarely:true},
	{name:'渾濁的水', code:'wd17', set:99, unit:'組', rarely:true},
	{name:'塵封的大劍', code:'wt01', set:1, unit:'個', rarely:true},
	{name:'塵封的手斧', code:'wt02', set:1, unit:'個', rarely:true},
	{name:'塵封的', code:'wt03', set:1, unit:'個', rarely:true},
	{name:'塵封的長弓', code:'wt04', set:1, unit:'個', rarely:true},
	{name:'塵封的手杖', code:'wt05', set:1, unit:'個', rarely:true},
	{name:'塵封的', code:'wt06', set:1, unit:'個', rarely:true},
	{name:'塵封的銀製鏢', code:'wt07', set:1, unit:'個', rarely:true},
	{name:'塵封的頭盔', code:'wt08', set:1, unit:'個', rarely:true},
	{name:'塵封的帽子', code:'wt09', set:1, unit:'個', rarely:true},
	{name:'塵封的鎧', code:'wt10', set:1, unit:'個', rarely:true},
	{name:'塵封的衣服', code:'wt11', set:1, unit:'個', rarely:true},
	{name:'塵封的長袍', code:'wt12', set:1, unit:'個', rarely:true},
	{name:'塵封的鐵靴', code:'wt13', set:1, unit:'個', rarely:true},
	{name:'塵封的鞋子', code:'wt14', set:1, unit:'個', rarely:true},
	{name:'塵封的', code:'wt15', set:1, unit:'個', rarely:true},
	{name:'塵封的', code:'wt16', set:1, unit:'個', rarely:true},
	{name:'塵封的', code:'wt17', set:1, unit:'個', rarely:true},
	{name:'塵封的鐵戒', code:'wt18', set:1, unit:'個', rarely:true}
];
