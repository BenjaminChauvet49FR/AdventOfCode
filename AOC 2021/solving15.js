"use strict";

var rawData =
[
"1762397661132951281872118191829951912248172478339632549455181981251788927258534119468168714528621114",
"8319319112748383315492426133271137584941117782129986515332716159745294224193293175158161499293222148",
"8266728412139799931643116912557929947663988821211944399124893291926199243572783776173611922147331181",
"9768991115438161618229664911612111659721489122113919117417168282889149141331521139589972137335416965",
"3171539222181482245864217884221793163933341199835974591512912153611719383822886874252812189119211692",
"9813861882122513794416142966122147931711931986114712961595314549632318377591159215157316813144934355",
"7249291646824518193378853916825167931368827832213362177131511326161252924118148113122117239516894281",
"7619265123128119111958978123298112151893112118796447627993349181166826971622479558261738365928333993",
"2172119611123667198988912581135762996771929293568381611622194474422232946596921716259957372123899698",
"4352214875122283151191299159125268139125394182223812438129936119129887731491391363987958285611735124",
"9392311228738188112389181962964441553298875142992639762857989199385199119362214956984889116161512973",
"2892785495413127483914947156452441111911711971248471862338463181961152891293748296521551886171944432",
"9771371132754482976691473392179769191511659123186661481992184193199162717851182183975513821945725321",
"9218767829493884196118831313927579911256192463613676192213864258491926157791112198274214181147959154",
"2792193899714181173347298221195589991167789114137161959778141371252115777986241795181919174317949829",
"7619548189922581181859166518531891927419411953133381591936168586775311272448519147149659321171116141",
"3711326392171499975162459323581728293983795119922197923141493849921729498132819921129641917259118864",
"9662821131571632544219456989289467698811981163262144283931368698226797383923219731421621671825257671",
"8926251431913827251411827421261859513843589241938313879248752781892119516839862167961428927931111162",
"9696892328613843521773991428165191277894129912138571399131152313611391251983614926952746144321251911",
"9335234624983873138234757195373269431811641469169819336189911147917583295479638741437112278149159862",
"2111192894139376481161215281139285422974424132138831311924793514959279281114124319742841958641419391",
"7621315589183391171215115441519488669384175731591179229641387112121194738813559138294251112341297538",
"8831271268391495711587992124119994691138611111165198323212973519468749437821131791997859117239181924",
"4811735832189511994318149332378111193361165795554681993992221559549144569162156939979819678945272974",
"1524179911227897316229296744618768288496498312432216265311939361711974311645192215436812821129213365",
"9411237933162299161925557884812745439884925962585979813832329174935225424534918864159991415748622183",
"1969119121165124863159769267319535155153661143981392621984891612819937929929952945517261771543768827",
"8117376273619779538922341789922174281183223161181712439119861966423951811953421121216521561271992999",
"5911336591183894763911894167932995172998223111199119111393119784189332442198132136931181614895719112",
"9144417911989291113272235811667566164454718852785519276832453415115489939413487813914189189111722296",
"3172782697359615397137825146724135259786191794785523156861711576611169978989562291681822797597411471",
"3691317861982226551781149914227481161871796979945154831871894629422677185511681333724141515124763312",
"6152916321893165355934593689222281456739634897387348419961128898831955884712128911284192198313767992",
"2123565322186129768844952156135549396186911811173898116782215672225918152219221191893512531731418343",
"9148448789413415121188812348651634491941741358988162111713948362231472972523456143118935167366114159",
"7215951236798967714143299289482837632184226282821596493275119221115719283519213866698847919639581299",
"1211423833873117249111527243314291155181115773173149818592743169151611135262551161178646584474226217",
"3141441922169621422636811311228221519329196814132217999729948137477929641724452113233326511319525111",
"6353774379142258441594111831969139261677193112616941375776199819687827849195111119561812988217263123",
"5155468118892524167244234498923983312939713497637191178858211851911621151598115952188939151571911411",
"3264971191887918252178185125131132812346323233298941194625423463868531137179151242921171128214116421",
"2192146511349122811114487199149628158792934427223174998915226911885299861741222982117327896189138141",
"3817555391414595191215996912159952814172651289927691484296328451126227654144279475752877198439541351",
"3272311727962111147114985241973956466428912929211888379341615218161714914831994199497611398384573714",
"3276111123319119118182112283823812169388217113736878913512112173157558173223311372394341828193146797",
"9581993771117231862931291845155311586313219171988916823938586755181161698523359212217997922756426139",
"1918622894641131169621888219818617193839128714861122522312135898994175928269569112793476895471213998",
"2271546578513428929848359713361369484681371894466191911128727429149832611914911886812791255753623169",
"2686121559311382749993357595341117532442113911695512432717391181456663681541622198894564758175943318",
"1337167193589499119223489928689264347326914997916799169553341539117192116458582999194574691292429739",
"2987468387842898434761167929526166691242921787821721976164921525555727921546368194597227292929935193",
"9856191999892314431796119592565346416369117282381924278686522198989115828829229499191199899942269826",
"4159119835291241279424919921752929162954245885262298833199324979522119268319649232728271944228715139",
"5247461775789923151611677854751726991193131793119286262144188718119121417814487573868915314322549329",
"7661813574189395262215217212114966839939986162219999286758293567396393524675861592534961528693615891",
"2965317131929913122722181933419595373832972818598892124999196577426993846517981678984881831197982191",
"1972199933158221981388146184292133116193126181146474235137663523168143244565531372633122489398489914",
"7423919964326886514368971251639349937192526679938781331813691661562111363176487262313547792297131577",
"2917722861145329977821111173291529851591981941395919845218123923234989734132462271549997693877195215",
"9221435231914979351891461911284473643411525579889886721158974241328216297819784913121119921737224263",
"3566219395561214162477611543497922131799998149212573699224587793287919966791587986252836637192119133",
"3812171216111466869119115211112153642718392182973562614919722152728182773759846982213314428821264758",
"8991197268386247539851968187713485151115713151193351148119651589416293595167932129989241479124143627",
"9211499872118751526793162988158249348518412163571792637591529327473131996812716991116188843973119581",
"8614137211759975531382622998957411166491897152241192418281984823628591952239215482182387842813361871",
"8251589811136243659161191211583731979325411956771731128239861413269235561218411879942978841232992111",
"3111499818132173935199311225353892127596636149897991831955933243981952575199928241632548277891793291",
"4431785818236512111396943889611445371331396615433746415529736682113689425795525643888133986439531335",
"9995925821921378382129271715156919237821269326578692118275314885169372111849848564112395779671157318",
"1987539366619221915184994848732376216442112332812932859164799863358117281128445782941219181486597613",
"9734932112213977129169618132588418748257997619225111991282361982189931392696335623148599438162964993",
"1268542894811891811752185845917126686731111729151141185841237681314145379626272561327153116697253893",
"7961582572112147851139341243998815131115871353869821241569111211311173743737429841517967133645346968",
"8131131195643613581916973416327251713377286522581727261974749238538719916249467375251549742638713962",
"7977612542191913784424123691995545989898244266289211136997219895141819231944297116814818111569149281",
"8761673393124368197342592244518993981872433593118269136396188269295546121117191592992417627132133951",
"1651978712438629147262911948236819593481188191673533419875699391719179399418159484312979829643125878",
"2848189151727256129221118261999751718212112458891842251928813719141689361121238411237423697529991811",
"8528124345999713421922279887245218255633572311333279811971192723411129973962191825312936729635111535",
"3126599598725196396213972376977781128199369299181973179226838421144294851141754733382394814127389931",
"8323175518498898731893963895816749112329321499182744141129978131811161949947793693914585912629991286",
"9231819122963995515633969921861191116511778131324189152432598462571732129799113218113199629285919395",
"6356352514912132331995294112175921815291563324826718912431311119817931161152817991628441799761119371",
"2968217271711154911627567222991829619422231818535238861182483981925818211613351748667121283417219121",
"2986392289931997914122281314222947267925911961565211934849281836413651936112923131496213298332143158",
"6587271799388817315278422618122269129966213812991115388711725198517419351365461989269599121323694713",
"1116591631891928799281817941339947924114147515129989638958495287291947819549271893749651112813219981",
"1143157968584776191444994384614838194823133446488624243151928321519127891988989917891777379611798118",
"8399291892169518714793192128111192235991541914834914922688165329289884129349482229926121144924115514",
"5668119329997863259888245715692793776372918952839318591392981291144699832866692374222595323233168486",
"1216172119823141749353314274825582984999984484435979229912935228419361471926794973175917614844595886",
"7499725626525512271213984958599416332619526213119268641699133726257851179181134147793412718614975614",
"4288111112156922267983399793396113699811611291414346541972227217218118113671472672112213192111581181",
"9411112131817256595664146121293142298999399429821453921188512943862327573213912219625131825813291399",
"5429441953242814421419835169719152828451133936519178139114667488425944842768762393235891219691624813",
"7199274849564917958467522334719119915121692718981981522289815567155928198869311911982725834726235516",
"4851719158713681489832158231939414111984561313913178292865317239795299169256621724995929214446597981",
"2895141151816231324862721919961491572329591628247151846125129115212222764271248124311117311343989181",
"8573312112116444197131192178856685531315797232771662865695122611599151931945191918296911647973257553"
]

const data = digitPseudoArray_to_digitArray(rawData);
const xLength = data[0].length;
const yLength = data.length;

function conclusion_15_1() {
	var smallestCoors, x, y, xx, yy, dirTo;
	var notFound, coors;
	var minimalDistancesArray = generateDoubleEntryArray(xLength, yLength, -1);
	minimalDistancesArray[0][0] = 0;
	var distanceIfTakenCoors = 0;
	var spacesWithSmallestDistanceFoundDecreasing = [{x : 0, y : 0}];
	while (spacesWithSmallestDistanceFoundDecreasing.length > 0) {
		coors = spacesWithSmallestDistanceFoundDecreasing.pop();
		x = coors.x;
		y = coors.y;
		existingNeighborsCoors(x, y, xLength, yLength).forEach(coors => {
			yy = coors.y;
			xx = coors.x;
			if (minimalDistancesArray[yy][xx] == -1) {
				minimalDistancesArray[yy][xx] = minimalDistancesArray[y][x] + data[yy][xx];
				shiftIntoList(spacesWithSmallestDistanceFoundDecreasing, {x : xx, y : yy}, function(p_newCoors, p_formerCoors) {return minimalDistancesArray[yy][xx] < minimalDistancesArray[p_formerCoors.y][p_formerCoors.x]} );
			}
		});
	}
	return minimalDistancesArray[yLength-1][xLength-1];
}


function conclusion_15_2() {
	var smallestCoors, x, y, xx, yy, dirTo;
	var notFound, coors;
	var minimalDistancesArray = generateDoubleEntryArray(xLength*5, yLength*5, -1);
	minimalDistancesArray[0][0] = 0;
	var distanceIfTakenCoors = 0;
	var spacesWithSmallestDistanceFoundDecreasing = [{x : 0, y : 0}];
	while (spacesWithSmallestDistanceFoundDecreasing.length > 0) {
		coors = spacesWithSmallestDistanceFoundDecreasing.pop();
		x = coors.x;
		y = coors.y;
		existingNeighborsCoors(x, y, xLength*5, yLength*5).forEach(coors => {
			yy = coors.y;
			xx = coors.x;
			if (minimalDistancesArray[yy][xx] == -1) {
				minimalDistancesArray[yy][xx] = minimalDistancesArray[y][x] + realRisk(xx, yy);
				shiftIntoList(spacesWithSmallestDistanceFoundDecreasing, {x : xx, y : yy}, function(p_newCoors, p_formerCoors) {return minimalDistancesArray[yy][xx] < minimalDistancesArray[p_formerCoors.y][p_formerCoors.x]} );
			}
		});
	}
	return minimalDistancesArray[5*yLength-1][5*xLength-1];
}

function realRisk(p_x, p_y) {
	var xOrigin = p_x-Math.floor(p_x/xLength)*xLength;
	var yOrigin = p_y-Math.floor(p_y/yLength)*yLength;
	var answer = data[yOrigin][xOrigin] + Math.floor(p_x/xLength) + Math.floor(p_y/yLength);
	while (answer >= 10) {
		answer -= 9;
	}
	return answer;
}












	// Total failure !
	/*if (data[0][1] > spacesToGoOrdered[0].distanceIfTaken) {
		spacesToGoOrdered.splice(0, 0, {x : 1, y : 0, dirTo : DIRECTION.RIGHT, distanceIfTaken : data[0][1]});
	} else {
		spacesToGoOrdered.splice(1, 0, {x : 1, y : 0, dirTo : DIRECTION.RIGHT, distanceIfTaken : data[0][1]});		
	}*/
	/*while (spacesToGoOrdered.length > 0) {
		smallestCoors = spacesToGoOrdered.pop();
		x = smallestCoors.x;
		y = smallestCoors.y;
		dirTo = smallestCoors.dirTo;
		xx = x + DeltaX[dirTo];
		yy = y + DeltaY[dirTo];
		if (minimalDistancesArray[yy][xx] == -1) {
			minimalDistancesArray[yy][xx] = smallestCoors.distanceIfTaken;
			existingNeighborsCoors(xx, yy, xLength, yLength).forEach(coors => {
				distanceIfTakenCoors = smallestCoors.distanceIfTaken + data[coors.y][coors.x];
				i = 0;
				while (spacesToGoOrdered[i].distanceIfTaken < distanceIfTakenCoors) {
					distanceIfTaken = true;
				}
				
			});
		}
		
		
	}
	// https://stackabuse.com/javascript-how-to-insert-elements-into-a-specific-index-of-an-array/ // First 0/1 : Insert before position 0/1 ; second 0 : delete 0 element
	
	
										{x : 1, y : 0, dirTo : DIRECTION.RIGHT, distanceIfTaken : data[0][1]}];
	var i;
	// 1) First, 0,0 space down : some dist. 0,0 space right : some dist.
	// Rank them.
	// Go to the smallest direction. Repeat with "not already" taken.
	while (spacesWithUnexploredNeighbors.length > 0) {
		smallestCoors = spacesWithUnexploredNeighbors.pop();
		x = smallestCoors.x;
		y = smallestCoors.y;
		console.log(x + "," + y + ", dist. " + minimalDistancesArray[y][x]);
		existingNeighborsCoors(x, y, xLength, yLength).forEach(coors => {
			xx = coors.x;
			yy = coors.y;
			if (data[yy][xx] == -1) {
				minimalDistancesArray[yy][xx] = data[yy][xx] + minimalDistancesArray[y][x];
				// Add xx, yy to its place. Leftmost = biggest distance.
				i = 0;
				notFound = true;
				while (i < spacesWithUnexploredNeighbors.length && notFound) {
					coors = spacesWithUnexploredNeighbors[i];	
					if (minimalDistancesArray[coors.y][coors.x] < minimalDistancesArray[yy][xx]) {
						notFound = i;
					} else {
						i++;
					}
				}
				// Elements before i = distances bigger. Elements at & after i = distances lower.
				splice(data, i, 0, {x : xx, y : yy});
			}
		});
	}		*/