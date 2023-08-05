const colors = {"002": "random", "055": "red", "056": "yellow", "057": "blue", "058": "green", "059": "orange", "060": "purple"}
const coloredCandy = {"002": "random", "018": "pepper_candy", "036": "frog", "045": "striped_horizontal", "046": "striped_vertical", "047": "wrapped", "049":"jellyfish", "051": "key", "052": "lucky", "032": "mystery", "033": "chameleon", "050": "extra_time_and_moves", "091": "jellyfish_striped", "092": "jellyfish_wrapped", "093": "jellyfish_colorbomb"}
const candy = {"044": "bomb", "043": "coconut_wheel", "061": "ufo"}
const sugarCoats = {"134": "sugarcoat_1", "135": "sugarcoat_2", "136": "sugarcoat_3"}
const locks = {"008": "licorice", "025": "marmalade", "038": "mulock1", "039": "mulock2", "040": "mulock3", "041": "mulock4", "042": "mulock5"}
const glass = {"122": "glass_tile_1", "123": "glass_tile_2", "124": "glass_tile_3",}
const blockers = {"007": "block_frosting", "053": "chocolate_frog", "009": "chocolate", "017": "licorice_square", "019": "block_multi_frosting1", "020": "block_multi_frosting2", "021": "block_multi_frosting3", "022": "block_multi_frosting4", "023": "block_multi_frosting5", "024": "chocolate_spawner", "035": "cake_bomb", "054": "shell_1", "062": "magic_mixer", "066": "bobber", "079": "block_waffle1", "080": "block_waffle2", "081": "block_waffle3", "082": "block_waffle4", "083": "block_waffle5", "094": "dark_chocolate_1", "095": "dark_chocolate_2", "096": "dark_chocolate_3", "097": "dark_chocolate_4", "098": "dark_chocolate_5", "129": "chain_layer1_c", "130": "chain_layer2_c", "131": "chain_layer3_c", "132": "chain_layer4_c", "133": "chain_layer5_c", "157": "shell_3", "158": "shell_2", "159": "bubble_pop_1", "160": "bubble_pop_2", "161": "bubble_pop_3", "162": "bubble_pop_4", "163": "bubble_pop_5", "211": "dark_chocolate_spawner_1", "212": "dark_chocolate_spawner_2", "213": "dark_chocolate_spawner_3", "220": "jelly_jar_1", "221": "jelly_jar_2", "037": "toffee_tornado", "070": "pinata", "073": "pinata_crash", "074": "pinata_link1", "075": "pinata_link2", "076": "pinata_link3", "077": "pinata_unbreakable", "078": "pinata_empty", "156": "rainbow_rapid_mold"}
const bonbon = {"182": "bonbon_colorbomb_1", "183": "bonbon_colorbomb_2", "184": "bonbon_colorbomb_3", "185": "bonbon_colorbomb_4", "186": "bonbon_horizontal_1", "187": 'bonbon_horizontal_2', "188": "bonbon_horizontal_3", "189": "bonbon_horizontal_4", "190": "bonbon_vertical_1", "191": "bonbon_vertical_2", "192": "bonbon_vertical_3", "193": "bonbon_vertical_4", "194": "bonbon_fish_1", "195": "bonbon_fish_2", "196": "bonbon_fish_3", "197": "bonbon_fish_4", "198": "bonbon_wrapped_1", "199": "bonbon_wrapped_2", "200": "bonbon_wrapped_3", "201": "bonbon_wrapped_4"}
const tiles = {"empty": "empty", "000": "none", "001": "grid", "003": "jelly", "004": "jelly2", "064": "blue_tile", "065": "black_tile"}
const ingredients = {"125": "cherry", "126": "hazelnut"}
const walldown = {"087": "wall_down", "165": "licorice_wall_down", "110": "destructible_wall_1_down", "114": "destructible_wall_2_down", "118": "destructible_wall_3_down", "169": "destructible_wall_lic_1_down", "173": "destructible_wall_lic_2_down", "177": "destructible_wall_lic_3_down"}
const wallup = {"086": "wall_up", "164": "licorice_wall_up", "109": "destructible_wall_1_up", "113": "destructible_wall_2_up", "117": "destructible_wall_3_up", "168": "destructible_wall_lic_1_up", "172": "destructible_wall_lic_2_up", "176": "destructible_wall_lic_3_up"}
const wallright = {"089": "wall_right", "167": "licorice_wall_right", "112": "destructible_wall_1_right", "116": "destructible_wall_2_right", "120": "destructible_wall_3_right", "171": "destructible_wall_lic_1_right", "175": "destructible_wall_lic_2_right", "179": "destructible_wall_lic_3_right"}
const wallleft = {"088": "wall_left", "166": "licorice_wall_left", "111": "destructible_wall_1_left", "115": "destructible_wall_2_left", "119": "destructible_wall_3_left", "170": "destructible_wall_lic_1_left", "174": "destructible_wall_lic_2_left", "178": "destructible_wall_lic_3_left"}
const rainbowcannontop = {"152":"rainbow_rapid_cannon_top"}
const rainbowcannonbottom = {"153":"rainbow_rapid_cannon_bottom"}
const rainbowcannonleft = {"154":"rainbow_rapid_cannon_left"}
const rainbowcannonright = {"155":"rainbow_rapid_cannon_right"}
const cannons = {"027": "cannon_ingredient", "028": "cannon_licorice", "029": "cannon_bomb", "030": "cannon_mulock_key", "031": "cannon_mystery", "067": "cannon_chameleon", "068": "cannon_lucky", "069": "cannon_extra_time_and_moves", "071": "cannon_striped", "072": "cannon_wrapped_candy", "090": "cannon_block_waffle", "107": "cannon_striped_horizontal", "108": "cannon_striped_vertical", "127": "cannon_colorbomb", "128": "cannon_fish", "137": "cannon_sugar_coat", "214": "cannon_blue", "215": "cannon_green", "216": "cannon_orange", "217": "cannon_purple", "218": "cannon_red", "219": "cannon_yellow"}
const path = {"140": "rainbow_stream_vertical", "141": "rainbow_stream_horizontal", "142": "rainbow_stream_BL", "143": "rainbow_stream_BR", "144": "rainbow_stream_TL", "145": "rainbow_stream_TR", "146": "rainbow_stream_TBL", "147": "rainbow_stream_TBR", "148": "rainbow_stream_TLR", "149": "rainbow_stream_BLR", "150": "rainbow_stream_all_directions", "151": "rainbow_stream_intersection_point"}
const leaflayer = {"063":'leaf'}
const elements_ids = Object.assign({}, rainbowcannontop, rainbowcannonbottom, rainbowcannonleft, rainbowcannonright, leaflayer, colors, cannons, walldown, wallup, bonbon, path, wallright, wallleft, coloredCandy, candy, blockers, tiles, ingredients, sugarCoats, locks, glass, {"010": "ingredients_exit", "026": "candy_entrance", "005": "candy_cannon"})
const elements_names = _.invert(elements_ids)

const stretched = ["009", "019", "020", "021", "022", "023", "025", "122", "123", "124", "134", "135", "136", "054", "157", "158", "024", "211", "212", "213", "220", "221", "159", "160", "161", "162", "163", "062"].concat(Object.keys(bonbon))
const small = [].concat(Object.keys(colors), Object.keys(coloredCandy), ["017", "002", "079", "080", "081", "082", "083", "044", "043", "125", "126"]);

const sugarCoatable = ["044", "017", "079", "080", "081", "082", "083", "125", "126", "043", "061"]

const elementsFolder = "elements/"
var selectedColor = "002"
var selectedElement = "002"
var elementLayer = "normal"

const orderItems = {"1": "red", "2": "blue", "3": "yellow", "4": "orange", "5": "purple", "6": "green", "7": "wrapped", "8": "striped", "9": "colorbomb", "10": "striped + striped", "11": "striped + wrapped", "12": "striped + colorbomb", "13": "colorbomb + colorbomb", "14": "wrapped + colorbomb", "15": "wrapped + wrapped", "16": "chocolate", "17": "frosting", "18": "licorice shell", "19": "licorice", "20": "pepper bomb", "21": "jellyfish", "22": "cake bomb", "23": "mystery candy", "24": "magic mixer", "25": "waffle", "26": "dark chocolate", "27": "candy cane curl", "28": "crystal candy", "29": "rainbow twist", "30": "frog", "31": "sugar coat", "32": "bubblegum", "33": "licorice curl", "34": "sour skull", "35": "bonbon blitz", "36": "jelly jar", "37": "candy cobra", "37": "wonderful wrapper"}

const magicMixerItems = {"0": "All Blockers", "1":"pepper bomb", "2": "licorice", "3":"frosting (1 layer)", "4": "frosting (2 layers)", "5": "frosting (3 layers)", "6": "frosting (4 layers)", "7": "frosting (5 layers)", "8": "chocolate", "9": "licorice lock", "10": "marmalade", "11":"dark chocolate (1 layer)", "12": "dark chocolate (2 layers)", "13": "dark chocolate (3 layers)", "14":"crystal candy (1 layer)", "15":"crystal candy (2 layers)", "16":"crystal candy (3 layers)", "17": "toffee swirl (1 layer)", "18": "toffee swirl (2 layers)", "19": "toffee swirl (3 layers)", "20":"toffee swirl (4 layers)", "21":"toffee swirl (5 layers)", "22":"rainbow twist (1 layer)", "23":"rainbow twist (2 layers)", "24":"rainbow twist (3 layer)","25":"rainbow twist (4 layer)","26":"rainbow twist (5 layer)","27":"sugar coat (1 layer)","28":"sugar coat (2 layers)","29":"sugar coat (3 layers)","30":"bubblegum pop (1 layer)", "31":"bubblegum pop (2 layers)", "32":"bubblegum pop (3 layers)", "33":"bubblegum pop (4 layers)", "34":"bubblegum pop (5 layers)", "35":"color bomb bonbon blitz (one-charged)", "36":"color bomb bonbon blitz (two-charged)", "37":"color bomb bonbon blitz (three-charged)","38":"color bomb bonbon blitz (four-charged)", "39": "horizontal striped candy bonbon blitz (one-charged)", "40":"horizontal striped candy bonbon blitz (two-charged)", "41":"horizontal striped candy bonbon blitz (three-charged)","42":"horizontal striped candy bonbon blitz (four-charged)", "43":"vertical striped candy bonbon blitz (one-charged)", "44":"vertical striped candy bonbon blitz (two-charged)","45":"vertical striped candy bonbon blitz (three-charged)","46":"vertical striped candy bonbon blitz (four-charged)", "47":"jelly fish bonbon blitz (one charged)", "48":"jelly fish bonbon blitz (two charged)", "49":"jelly fish bonbon blitz (three charged)", "50":"jelly fish bonbon blitz (four charged)","51":"wrapped candy bonbon blitz (one-charged)","52":"wrapped candy bonbon blitz (two-charged)","53":"wrapped candy bonbon blitz (three-charged)","54":"wrapped candy bonbon blitz (four-charged)"}

const cannonCodes = [["fallingIcing", "Level"], ["licorice"], ["luckyCandy"], ["mulockCandy"], ["pepperCandy", "ExplosionTurns"], ["stripedCandy"], ["stripedRowCandy"], ["stripedColumnCandy"], ["timeCandy"], ["wrappedCandy"], ["colorBomb"], ["fish"], ["shield", "Level"], ["extraMoves"]]

var currentMode = "Classic moves"

//Order of the layers
const layers = [
    "tile",
    "path",
    "leaf",
    "normal",
    "bonbonoverlay",
    "sugarcoat",
    "lock",
    "glass",
    "wallup",
    "walldown",
    "wallleft",
    "wallright",
    'rainbow_cannon_top',
    "rainbow_cannon_bottom",
    "rainbow_cannon_left",
    "rainbow_cannon_right",
    "ingredients_exit",
    "candy_cannon",
    "candy_entrance",
    "selectimg"
]

const layerElements = {
    "tile": [].concat(Object.keys(tiles)),
    "path": [].concat(Object.keys(path)),
    "leaf":[].concat(Object.keys(leaflayer)),
    "normal": [].concat(Object.keys(colors), Object.keys(coloredCandy), Object.keys(candy), Object.keys(blockers), Object.keys(ingredients), Object.keys(bonbon)),
    "sugarcoat": [].concat(Object.keys(sugarCoats)),
    "lock": [].concat(Object.keys(locks)),
    "glass": [].concat(Object.keys(glass)),
    "wallup": [].concat(Object.keys(wallup)),
    "walldown": [].concat(Object.keys(walldown)),
    "wallleft": [].concat(Object.keys(wallleft)),
    "wallright": [].concat(Object.keys(wallright)),
    "rainbow_cannon_top":[].concat(Object.keys(rainbowcannontop)),
    "rainbow_cannon_bottom":[].concat(Object.keys(rainbowcannonbottom)),
    "rainbow_cannon_left":[].concat(Object.keys(rainbowcannonleft)),
    "rainbow_cannon_right":[].concat(Object.keys(rainbowcannonright)),
    "ingredients_exit": ["010"],
    "candy_entrance": ["026"],
    "candy_cannon": ["005"].concat(Object.keys(cannons))
}

var preferredColors = [0,1,2,3,4]

var isDown = false

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

function getLayerFromId(id){
    let layer = undefined

    keys = Object.keys(layerElements)
    for (var i = 0; i < keys.length; i++){
        key = keys[i]
        if (layerElements[key].includes(id)){
            layer = key
            break
        }
    }
    return layer
}

function switchedRequirement(object){
    document.getElementById("requirementwarning").style.display = "none"
    let requirement = object.value
    let image = object.parentNode.querySelector("img")
    image.src = "ui/hud/" + orderItems[requirement] + ".png"
}

function switchedRequirementIngredient(object){
    document.getElementById("requirementwarning").style.display = "none"
    let requirement = object.value
    let image = object.parentNode.querySelector("img")
    image.src = "ui/hud/" + requirement + ".png"
}

function removeRequirement(object){
    object.parentNode.remove()
    document.getElementById("requirementwarning").style.display = "none"
}

function addRequirement(isIngredient = false, ignoreLimit = false){
    let requirementsObj = document.getElementById("requirements")

    if (!ignoreLimit){
        if (requirementsObj.childNodes.length > 3){
            document.getElementById("requirementwarning").style.display = "block"
            return
        }
        else{
            document.getElementById("requirementwarning").style.display = "none"
        }
    }
    
    section = document.createElement("div")
    section.classList.add("sideoptions")
    let typeText = "Order"
    section.setAttribute("reqtype", "order")
    if (isIngredient){
        typeText = "Ingredient"
        section.setAttribute("reqtype", "ingredient")
    }
    section.innerHTML = '<button style="left: 85%; border-radius: 10px; background-color: rgb(174, 174, 174); width: 30px; height: 30px" onclick="removeRequirement(this)">X</button> <p class="DroidSans break" style="font-weight: bold; color: white; text-align: center;">Requirement:</p> <img src="ui/hud/red.png" style="max-width: 30px; max-height: 30px;"> <p class="DroidSans" style="margin: 10px; display: block; color: white; text-align: center;">' + typeText + ':</p> <select onchange="switchedRequirement(this)"> </select> <div class="break"></div> <img src="ui/btn_quit.png" style="max-width: 30px; max-height: 30px;"> <p class="DroidSans" style="margin: 10px; display: block; color: white; text-align: center;">Amount:</p> <input style="width: 50px; text-align: center;" placeholder="0" type="number">'

    select = section.querySelector("select")
    if (!isIngredient){
        Object.keys(orderItems).forEach(function(key){
            option = document.createElement("option")
            option.value = key
            option.innerHTML = orderItems[key]
            select.appendChild(option)
        })
    }
    else{
        select.setAttribute("onchange", "switchedRequirementIngredient(this)")
        section.querySelector("img").src = "ui/hud/cherry.png"

        let option
        option = document.createElement("option")
        option.value = "cherry"
        option.innerHTML = "cherry"
        select.appendChild(option)

        option = document.createElement("option")
        option.value = "hazelnut"
        option.innerHTML = "hazelnut"
        select.appendChild(option)
    }
    requirementsObj.prepend(section)
}

function switchedMixerOption(object){
    document.getElementById("requirementwarning").style.display = "none"
    let requirement = object.value
    let image = object.parentNode.querySelector("img")
    image.src = "ui/hud/" + magicMixerItems[requirement] + ".png"
}

function addMixerOption(){
    let requirementsObj = document.getElementById("mixeroptions")
    
    section = document.createElement("div")
    section.classList.add("sideoptions")
    section.setAttribute("reqtype", "mixeroption")
    section.innerHTML = '<button style="left: 85%; border-radius: 10px; background-color: rgb(174, 174, 174); width: 30px; height: 30px" onclick="removeRequirement(this)">X</button> <div class="break"></div> <img src="ui/hud/All Blockers.png" style="max-width: 30px; max-height: 30px;"> <p class="DroidSans" style="margin: 10px; display: block; color: white; text-align: center;">Blocker:</p> <select onchange="switchedMixerOption(this)"> </select> <div class="break"></div>'

    select = section.querySelector("select")

    Object.keys(magicMixerItems).forEach(function(key){
        option = document.createElement("option")
        option.value = key
        option.innerHTML = magicMixerItems[key]
        select.appendChild(option)
    })
    
    requirementsObj.prepend(section)
}

function selectMode(){
    mode = document.querySelector('input[name="leveltype"]:checked').value
    if (mode === "Classic" || mode == "Jelly Time"){
        document.getElementById("moves-section").style.display = "none"
        document.getElementById("time-section").style.display = "flex"
    }
    else{
        document.getElementById("moves-section").style.display = "flex"
        document.getElementById("time-section").style.display = "none"
    }

    document.getElementById("requirements-options-section").style.display = "none"

    if (mode.includes('Drop down') || mode.includes('Drop Down')) {
        document.getElementById("requirements-options-section").style.display = "block"
        document.getElementById("addingredient").style.display = "block"
    } else {
        document.getElementById("addingredient").style.display = "none"
        let requirementsContainer = document.getElementById("requirements")
        Array.from(requirementsContainer.children).forEach(function(child){
            if (child.getAttribute("reqtype") == "ingredient"){
                child.remove()
            }
        })
    }

    if (mode.includes('Order')) {
        document.getElementById("requirements-options-section").style.display = "block"
        document.getElementById("addorder").style.display = "block"
    } else {
        document.getElementById("addorder").style.display = "none"
        let requirementsContainer = document.getElementById("requirements")
        Array.from(requirementsContainer.children).forEach(function(child){
            if (child.getAttribute("reqtype") == "order"){
                child.remove()
            }
        })
    }
    /*
    if (mode === "Drop down"){
        document.getElementById("requirements-options-section").style.display = "block"
        document.getElementById("addingredient").style.display = "block"

        let requirementsContainer = document.getElementById("requirements")
        Array.from(requirementsContainer.children).forEach(function(child){
            element = child

            if (element.getAttribute("reqtype") == "order"){
                element.remove()
            }
        })
    }
    else{
        if (mode != "Order"){
            document.getElementById("requirements-options-section").style.display = "none"
        }
        document.getElementById("addingredient").style.display = "none"
    }

    if (mode == "Order"){
        document.getElementById("requirements-options-section").style.display = "block"
        document.getElementById("addorder").style.display = "block"

        let requirementsContainer = document.getElementById("requirements")
        Array.from(requirementsContainer.children).forEach(function(child){
            element = child

            if (element.getAttribute("reqtype") == "ingredient"){
                element.remove()
            }
        })
    }
    else {
        if (mode != "Drop down"){
            document.getElementById("requirements-options-section").style.display = "none"
        }
        document.getElementById("addorder").style.display = "none"
    }
    */
    currentMode = mode
}

function togglePreferred(object){
    color = Number(object.getAttribute("value"))

    if (!preferredColors.includes(color)){
        if (!(object.classList.contains("preferredselected"))){
            object.classList.add("preferredselected")
        }

        preferredColors.push(color)
    }
    else{
        object.classList.remove("preferredselected")

        preferredColors.splice(preferredColors.indexOf(color), 1)
    }
}

function toggleDropdown(object){
    let dropped = document.getElementById(object.getAttribute("associd"))
    let p = object.querySelector(".arrow")
    
    if (dropped.style.display == "none"){
        dropped.style.display = "block"
        p.style.transform = "rotate(" + 0 + "deg)"
    }
    else{
        dropped.style.display = "none"
        p.style.transform = "rotate(" + 90 + "deg)"
    }
}

function updateColor(object, color){
    try{
        document.querySelector(".colorselected").classList.remove("colorselected")
    }
    catch{}
    object.classList.add("colorselected")
    selectedColor = elements_names[color]
}

function removeCake(object){
    let cake = object.getAttribute("cake")
    let tiles = []
    let row = Number(object.getAttribute("pos-row"))
    let column = Number(object.getAttribute("pos-col"))
    let level = document.getElementById("level")

    object.setAttribute("normal", "002")
    object.setAttribute("color", "002")
    object.setAttribute("cake", "")
    object.querySelector(".normal").src = elementsFolder + "random.png"
    object.querySelector(".normal").setAttribute("class", "normal default small")

    if (cake == "1"){
        tiles = [[row, column + 1], [row + 1, column], [row + 1, column + 1]]
    }
    else if (cake == "2"){
        tiles = [[row, column - 1], [row + 1, column - 1], [row + 1, column]]
    }
    else if (cake == "3"){
        tiles = [[row - 1, column], [row - 1, column + 1], [row, column + 1]]
    }
    else if (cake == "4"){
        tiles = [[row - 1, column - 1], [row - 1, column], [row, column - 1]]
    }

    tiles.forEach(function(pos){
        let otherObject = level.children[pos[0]].children[pos[1]]
        otherObject.setAttribute("normal", "002")
        otherObject.setAttribute("color", "002")
        otherObject.setAttribute("cake", "")
        otherObject.querySelector(".normal").src = elementsFolder + "random.png"
        otherObject.querySelector(".normal").setAttribute("class", "normal default small")
    })
}

function updateTile(object){
    if (elementLayer !== "tile" && object.getAttribute("tile") === "000"){
        //Do not update tile if its empty
        return
    }

    let level = document.getElementById("level")

    let row = Number(object.getAttribute("pos-row"))
    let column = Number(object.getAttribute("pos-col"))

    isCake = object.getAttribute("cake")
    if (isCake !== undefined && isCake !== "" && elementLayer === "normal"){
        removeCake(object)
    }

    let image = object.querySelector("." + elementLayer)

    try{
        if (elementLayer == "wallup"){
            let otherObject = level.children[row - 1].children[column]
            let hasWall = otherObject.getAttribute("walldown")
            if (hasWall !== null && hasWall !== ""){
                otherObject.setAttribute("walldown", "")
                otherObject.querySelector("img.walldown").src = ""
            }
        }
        else if (elementLayer == "walldown"){
            let otherObject = level.children[row + 1].children[column]
            let hasWall = otherObject.getAttribute("wallup")
            if (hasWall !== null && hasWall !== ""){
                otherObject.setAttribute("wallup", "")
                otherObject.querySelector("img.wallup").src = ""
            }
        }
        else if (elementLayer == "wallleft"){
            let otherObject = level.children[row].children[column - 1]
            let hasWall = otherObject.getAttribute("wallright")
            if (hasWall !== null && hasWall !== ""){
                otherObject.setAttribute("wallright", "")
                otherObject.querySelector("img.wallright").src = ""
            }
        }
        else if (elementLayer == "wallright"){
            let otherObject = level.children[row].children[column + 1]
            let hasWall = otherObject.getAttribute("wallleft")
            if (hasWall !== null && hasWall !== ""){
                otherObject.setAttribute("wallleft", "")
                otherObject.querySelector("img.wallleft").src = ""
            }
        }
    }catch{}

    if (elementLayer == "tile"){
        if (selectedElement === "empty"){
            if (isCake !== undefined && isCake !== ""){
                removeCake(object)
            }
            //Make space empty if empty selected
            layers.forEach(function(layer){
                if (object.hasAttribute(layer) && layer != "tile"){
                    object.setAttribute(layer, "")
                }
            })
            object.childNodes.forEach(function(node){
                if (!node.classList.contains("selectimg") && !node.classList.contains("tile")){
                    node.src = ""
                }
            })
            object.setAttribute("color", "")
            return
        }
        object.setAttribute("tile", selectedElement)
        image.src = elementsFolder + elements_ids[selectedElement] + ".png"

        //Remove all if empty
        if (selectedElement === "000"){
            if (isCake !== undefined && isCake !== ""){
                removeCake(object)
            }

            layers.forEach(function(layer){
                if (object.hasAttribute(layer)){
                    object.setAttribute(layer, "")
                }
            })
            object.childNodes.forEach(function(node){
                if (!node.classList.contains("selectimg") && !node.classList.contains("tile")){
                    node.src = ""
                }
            })
            object.setAttribute("color", "")
        }
    }
    if (elementLayer == "sugarcoat"){
        if (object.getAttribute("normal") in coloredCandy || sugarCoatable.includes(object.getAttribute("normal"))){
            object.setAttribute(elementLayer, selectedElement)
            image.src = elementsFolder + elements_ids[selectedElement] + ".png"
        }
        else{
            return
        }
    }
    else if (selectedElement == "035"){
        let level = document.getElementById("level")
	
        if (row >= 8 || column >= 8){
            return
        }
	
        //Set this tile as cakebomb
        let isCake = object.getAttribute("cake")
        if (isCake !== undefined && isCake !== ""){
            removeCake(object)
        }
        image.src = elementsFolder + "cake_top_left" + ".png"
        image.setAttribute("class", "normal default stretch")
        object.setAttribute("normal", selectedElement)
        object.setAttribute("color", "")
        object.setAttribute("cake", "1")

        let tileList = [[row, column + 1, "cake_top_right", "2"], [row + 1, column, "cake_bottom_left", "3"], [row + 1, column + 1, "cake_bottom_right", "4"]]

        tileList.forEach(function(info){
            try{
                let otherObject = level.children[info[0]].children[info[1]]
                let otherImage = otherObject.querySelector("img.normal")
		
                isCake = otherObject.getAttribute("cake")
                if (isCake !== undefined && isCake !== ""){
                    removeCake(otherObject)
                }
    		
                otherImage.src = elementsFolder + info[2] + ".png"
                otherImage.setAttribute("class", "normal default stretch")
                otherObject.setAttribute("normal", selectedElement)
                otherObject.setAttribute("sugarcoat", "")
                otherObject.querySelector("img.sugarcoat").src = ""
                otherObject.setAttribute("color", "")
                otherObject.setAttribute("cake", info[3])
                if (otherObject.getAttribute("tile") === "000"){
                    otherObject.setAttribute("tile", "001")
                    otherObject.querySelector("img.tile").src = elementsFolder + "grid.png"
                }
            }catch{}
        })
    }
    else if (selectedElement == "036"){
        try{
            let prevElm = document.querySelector(".frog")
            prevElm.classList.remove("frog")

            if (prevElm.getAttribute("normal") === "036" || prevElm.getAttribute("normal") === "053"){
               prevElm.setAttribute("normal", "002")
               prevElm.setAttribute("color", selectedColor)
               prevElm.querySelector(".normal").src = elementsFolder + "random.png"
               prevElm.querySelector(".normal").setAttribute("class", "normal default small")
            }
        }catch{}

        //Set colored Candy
        let colorName = elements_ids[selectedColor]
        let elementName = ""
        let name = ""
    
        if (selectedColor === "002" && selectedElement === "002"){
            name = "random"
        }
        else if (selectedColor !== "002" && selectedElement === "002"){
            name = colorName
        }
        else{
            elementName = elements_ids[selectedElement] + "_"
            name = elementName + colorName
        }
        
        object.setAttribute(elementLayer, selectedElement)
        object.classList.add("frog")
        image.src = elementsFolder + name + ".png"
    }
    else if (selectedElement == "053"){
        try{
            let prevElm = document.querySelector(".frog")
            console.log(prevElm)
            prevElm.classList.remove("frog")
    
            if (prevElm.getAttribute("normal") === "036" || prevElm.getAttribute("normal") === "053"){
                prevElm.setAttribute("normal", "002")
                prevElm.setAttribute("color", selectedColor)
                prevElm.querySelector(".normal").src = elementsFolder + "random.png"
                prevElm.querySelector(".normal").setAttribute("class", "normal default small")
            }
        }catch{}

        object.classList.add("frog")
        image.src = elementsFolder + elements_ids[selectedElement] + ".png"
        object.setAttribute("normal", selectedElement)
        object.setAttribute("color", "")
    }
    else if (elementLayer == "candy_cannon" && selectedElement != "005"){
        let cannonElements = JSON.parse(object.getAttribute("candy_cannon") || '[]')

        if (!cannonElements.includes(selectedElement)){
            if (!cannonElements.includes("005")){

                cannonElements.push("005")
            }
    
            cannonElements.push(selectedElement)

            object.setAttribute("candy_cannon", JSON.stringify(cannonElements))

            let ammocontainer = object.querySelector(".ammocontainer")

            Array.from(ammocontainer.children).forEach(function(element){
                if (!cannonElements.includes(element.getAttribute("element"))){
                    element.remove()
                }
            })
    
            ammoimage = ammocontainer.appendChild(document.createElement("img"))

            ammoimage.setAttribute("element", selectedElement)

            ammoimage.src = elementsFolder + elements_ids[selectedElement] + ".png"
        }
    }
    else if (selectedElement == "026"){
        let cannonElements = JSON.parse(object.getAttribute("candy_cannon") || '[]')

        if (!cannonElements.includes("005")){

            cannonElements.push("005")
        }

        object.setAttribute("candy_cannon", JSON.stringify(cannonElements))

        object.setAttribute(elementLayer, selectedElement)
        image.src = elementsFolder + elements_ids[selectedElement] + ".png"
    }
    else if (selectedElement == "005"){
        let cannonElements = JSON.parse(object.getAttribute("candy_cannon") || '[]')

        if (!cannonElements.includes("005")){

            cannonElements.push("005")
        }

        let ammocontainer = object.querySelector(".ammocontainer")

        Array.from(ammocontainer.children).forEach(function(element){
            if (!cannonElements.includes(element.getAttribute("element"))){
                element.remove()
            }
        })

        object.setAttribute("candy_cannon", JSON.stringify(cannonElements))
        image.src = elementsFolder + elements_ids[selectedElement] + ".png"
    }
    else if (elementLayer == "normal"){
        image = object.querySelector(".normal")
        if (selectedElement in coloredCandy){
            //Set colored Candy
            let colorName = elements_ids[selectedColor]
            let elementName = ""
            let name = ""
        
            if (selectedColor === "002" && selectedElement === "002"){
                name = "random"
            }
            else if (selectedColor !== "002" && selectedElement === "002"){
                name = colorName
            }
            else{
                elementName = elements_ids[selectedElement] + "_"
                name = elementName + colorName
            }
            
            image.src = elementsFolder + name + ".png"
            object.setAttribute("normal", selectedElement)
            object.setAttribute("color", selectedColor)
        }
        else{
            //Set non colored candy
            image.src = elementsFolder + elements_ids[selectedElement] + ".png"
            object.setAttribute("normal", selectedElement)
            object.setAttribute("color", "")
        }
    }
    else{
        object.setAttribute(elementLayer, selectedElement)
        image.src = elementsFolder + elements_ids[selectedElement] + ".png"
    }

    if (small.includes(selectedElement)){
        if (!image.classList.contains("small")){
            image.classList.add("small")
        }
    }
    else{
        try {
            image.classList.remove("small")
        } catch{}
    }
    
    if (stretched.includes(selectedElement)){
        if (!image.classList.contains("stretched")){
            image.classList.add("stretched")
        }
    }
    else{
        try {
            image.classList.remove("stretched")
        } catch{}
    }

    if (!(object.getAttribute("normal") in coloredCandy) && !(sugarCoatable.includes(object.getAttribute("normal")))){
        object.setAttribute("sugarcoat", "")
        object.querySelector(".sugarcoat").src = elementsFolder + "none.png"
    }
}

function updateSelection(object, element, layer){
    try{
        document.querySelector(".elementselected").classList.remove("elementselected")
    }
    catch{}
    object.classList.add("elementselected")
    selectedElement = elements_names[element]
    elementLayer = layer
}

function updateElmState(object){
    if (object.getAttribute("normal") in coloredCandy){
        colorId = object.getAttribute("color")
        objectId = object.getAttribute("normal")

        if (colorId === "002"){
            colorId = "055"
        }
        else if (colorId === "055"){
            colorId = "056"
        }
        else if (colorId === "056"){
            colorId = "057"
        }
        else if (colorId === "057"){
            colorId = "058"
        }
        else if (colorId === "058"){
            colorId = "059"
        }
        else if (colorId === "059"){
            colorId = "060"
        }
        else if (colorId === "060"){
            colorId = "002"
        }


        object.setAttribute("color", colorId)

        let colorName = elements_ids[colorId]
        let elementName = ""
        let name = ""
    
        if (colorId === "002" && objectId === "002"){
            name = "random"
        }
        else if (colorId !== "002" && objectId === "002"){
            name = colorName
        }
        else{
            elementName = elements_ids[objectId] + "_"
            name = elementName + colorName
        }
        object.querySelector(".normal").src = elementsFolder + name + ".png"
    }
}

function importLevel(levelData){
    let originalLevel = document.getElementById("level")
    let levelParent = originalLevel.parentElement;
    originalLevel.id = "levelold"
    originalLevel.style.display = "none"

    let origColor = selectedColor
    let origLayer = elementLayer
    let origElement = selectedElement

    let newLevel = levelParent.appendChild(document.createElement("table"))
    newLevel.id = "level"
    newLevel.setAttribute("cellspacing", "0")
    createNewTable(true)

    levelArray = levelData['tileMap']

    try{
        let levelObject = newLevel
        let childrenRows = [].slice.call(levelObject.children)

        let blacklistedCake = []

        childrenRows.forEach(function(row, rIndex){
            let objects = [].slice.call(row.children)
            let color = "002"
    
            objects.forEach(function(object, cIndex){
                //Split object into array of parts of 3
                try{
                    textObject = levelArray[rIndex][cIndex].match(/.{1,3}/g)
                }
                catch{
                    throw "This level has a grid bigger than 9x9"
                }

                textObject.forEach(function(objectId, index){
                    if (objectId in colors){
                        color = objectId
                        if (objectId != "002")
                        textObject.splice(index, 1)
                    }
                })
    
                textObject.forEach(function(objectId){
                    if (objectId.length !== 3){
                        throw "An object ID is not 3 characters long."
                    }

                    if (objectId == "002" && object.getAttribute("normal") != undefined){
                        return
                    }

                    if (objectId === "085") objectId="069"
                    if (objectId === '084') objectId='050'

                    if (objectId == "035"){
                        if (blacklistedCake.includes(String(rIndex) + String(cIndex))){
                            return
                        }
                        else{
                            if (cIndex == 8 || rIndex == 8){
                                return
                            }
                            else{
                                blacklistedCake.push(String(rIndex) + String(cIndex + 1))
                                blacklistedCake.push(String(rIndex + 1) + String(cIndex))
                                blacklistedCake.push(String(rIndex + 1) + String(cIndex + 1))
                            }
                        }
                    }
    
                    let layer = getLayerFromId(objectId)
                    selectedColor = color
                    elementLayer = layer
                    selectedElement = objectId
                    
                    try{
                        updateTile(object)
                    }
                    catch{
                        elementLayer = "tile"
                        selectedElement = "none"
                    }
                })
            })
        })
        originalLevel.remove()
        newLevel.style.display = "block"
    }
    catch(err){
        //alert(err.stack)
        console.log(err)
        newLevel.remove()
        originalLevel.id = "level"
        originalLevel.style.display = "block"
        throw(err)
    }
    
    //Set game mode
    let wantedMode = levelData['gameModeName']
    let wantedModeInput = document.getElementById("modeselection").querySelector('input[value="' + String(wantedMode) + '"]')
    if (wantedModeInput != null){
        wantedModeInput.click()
    }

    //Set moves & time
    document.getElementById("moves").value = levelData.moveLimit || ""
    document.getElementById("time").value = levelData.timeLimit || ""

    //Set preferred colors
    let colorspref = document.getElementById("colorspref-section")
    preferredColors = levelData.preferredColors || [0,1,2,3,4]
    for (let i = 0; i < 6; i++){
        let prefbutton = colorspref.querySelector('button[value="' + String(i) + '"]')
        if (preferredColors.includes(i)){
            if (!prefbutton.classList.contains("preferredselected")){
                prefbutton.classList.add("preferredselected")
            }
        }
        else{
            if (prefbutton.classList.contains("preferredselected")){
                prefbutton.classList.remove("preferredselected")
            }
        }
    }

    //Add requirements
    let requirementsContainer = document.getElementById("requirements")

    Array.from(requirementsContainer.children).forEach(function(child){
        child.remove()
    })

    //Set Pre Level Booster
    try{
        document.getElementById("disablebooster").checked = levelData.disablePreLevelBoosters || false
    } 
    catch{
        document.getElementById("disablebooster").checked = false
    }

    //Set score targets
    let scoreTargets = levelData.scoreTargets || []
    document.getElementById("star1").value = scoreTargets[0] || ''
    document.getElementById("star2").value = scoreTargets[1] || ''
    document.getElementById("star3").value = scoreTargets[2] || ''


    let ingredientOrder = {0: "hazelnut", 1: "cherry"}
    if (wantedMode.includes('Drop down') || wantedMode.includes('Drop Down')){
        (levelData.ingredients || []).forEach(function(quantity, index){
            try{
                if (quantity == 0){
                    return
                }
                let item = ingredientOrder[index]

                addRequirement(true, true)

                let requirementNode = requirementsContainer.children[0]
                let selectNode = requirementNode.querySelector("select")
                selectNode.value = item
                switchedRequirementIngredient(selectNode)

                requirementNode.querySelector("input").value = quantity
            }catch{}
        })
    }
    if (wantedMode.includes('Order')){
        (levelData._itemsToOrder || []).forEach(function(itemDict){
            try{
                let item = itemDict['item']
                let quantity = itemDict['quantity']

                addRequirement(false, true)

                let requirementNode = requirementsContainer.children[0]
                let selectNode = requirementNode.querySelector("select")
                selectNode.value = item
                switchedRequirement(selectNode)

                requirementNode.querySelector("input").value = quantity
            }catch{}
        })
    }

    let mixerElementsContainer = document.getElementById("mixeroptions");

    Array.from(mixerElementsContainer.children).forEach(function(child){
        child.remove()
    });

    (levelData.evilSpawnerElements || []).forEach(function(item){
        try{

            addMixerOption()

            let requirementNode = mixerElementsContainer.children[0]
            let selectNode = requirementNode.querySelector("select")
            selectNode.value = item
            switchedMixerOption(selectNode)
        }catch{}
    })

    //Set cannon preferences
    cannonCodes.forEach(function(nameArray){
        let elm = nameArray[0]

        let cannonSettingAddons = ["Max", "Spawn"]

        cannonSettingAddons.push(nameArray[1])

        cannonSettingAddons.forEach(function(setting){
            let inputElement = document.getElementById(elm + setting)
            
            if (inputElement != null){
                inputElement.value = levelData[elm + setting] || ""
            }
        })
    })

    //Set element selection back
    selectedColor = origColor
    elementLayer = origLayer
    selectedElement = origElement
}

function displayImportLevelUI(){
    document.getElementById("importmenu").style.display = "block"
}

function importLevelUI(){
    try{
        let importField = document.getElementById("importfield")
        importLevel(JSON.parse(importField.value))
        document.getElementById("importerror").style.display = "none"
        importField.value = ""
        document.getElementById("importmenu").style.display = "none"
    }
    catch(err) {
        //alert(err.stack)
        let errorPara =  document.getElementById("importerror")
        errorPara.style.display = "block"
        errorPara.innerHTML = err
    }
}

function exportLevel(){
    let levelArray = []
    let levelObject = document.getElementById("level")
    let level = {}
    if (currentMode.includes("Rainbow Rapids")) {
        level.rainbowRapidsTargets = 0
    }
    levelObject.childNodes.forEach(function(row){
        rowArray = []
        for (var i = 0; i < row.childNodes.length; i++){
            let object = row.childNodes[i]

            if (object.getAttribute("tile") == "000"){
                rowArray.push("000")
                continue
            }
            let candyCannon = JSON.parse(object.getAttribute("candy_cannon") || '[]')
            if (currentMode !== "Classic" && currentMode !== "Jelly Time" && candyCannon.includes('069')) {
                let i=0
                for (let cannon of candyCannon) {
                    if (cannon==='069') {
                        candyCannon[i]='085'
                    }
                    i++
                }
            }
            console.log(candyCannon)
            let totalCode = [].concat(candyCannon)

            let toLoopThrough = [].concat(layers, ["color"])

            toLoopThrough.splice(toLoopThrough.indexOf("candy_cannon"), 1)
            
            toLoopThrough.forEach(function(layer){
                let element = ""
                if (object.hasAttribute(layer)){
                    element = object.getAttribute(layer)
                }
                else{
                    return
                }

                if (currentMode.includes("Rainbow Rapids") && element=="156") {
                    level.rainbowRapidsTargets++
                }

                if (currentMode !== "Classic" && currentMode !== "Jelly Time") {
                    if (element==='050') {
                        element='084'
                    }
                }


                if (!totalCode.includes(element) && element != ""){
                    totalCode.push(element)
                }
            })

            if (object.getAttribute("normal") !== "002" && object.getAttribute("color") == "002"){
                totalCode.splice(totalCode.indexOf("002"), 1)
            }
            
            if (totalCode.includes("001") && totalCode.length != 1){
                totalCode.splice(totalCode.indexOf("001"), 1)
            }

            rowArray.push(totalCode.join(""))
        }
        levelArray.push(rowArray)
    })
    level['tileMap'] = levelArray
    level['numberOfColours'] = preferredColors.length
    level['preferredColors'] = preferredColors

    level['disablePreLevelBoosters'] = document.getElementById("disablebooster").checked
    level['colorWeightAdjustments'] = [0]

    let star1 = Number(document.getElementById("star1").value) || 1000
    let star2 = Number(document.getElementById("star2").value) || 2000
    let star3 = Number(document.getElementById("star3").value) || 3000

    level['scoreTargets'] = [star1, star2, star3]

    level['protocolVersion'] = "0.3"
    level['randomSeed'] = 0

    level['portals'] = []
    level['gates'] = []
    level['orlocks'] = []
    level['skulls'] = []

    if (currentMode === "Classic" || currentMode === "Jelly Time"){
        let time = document.getElementById("time").value
        if (time === ''){
            time = 30
        }
        else{
            time = Number(time)
        }
        level['timeLimit'] = time
    }
    else{
        let moves = document.getElementById("moves").value
        if (moves === ''){
            moves = 20
        }
        else{
            moves = Number(moves)
        }

        level['moveLimit'] = moves
    }

    if (currentMode.includes('Drop down') || currentMode.includes('Drop Down')){
        let hazelnuts = 0
        let cherries = 0

        let requirementsContainer = document.getElementById("requirements")
        for (var i = 0; i < requirementsContainer.children.length; i++){
            element = requirementsContainer.children[i]

            if (element.getAttribute("reqtype") !== "ingredient"){
                continue
            }

            let item = element.querySelector("select").value

            let quantity = element.querySelector("input").value
            if (quantity === ''){
                quantity = 0
            }
            else{
                quantity = Number(quantity)
            }

            console.log(item)

            if (item == "cherry"){
                cherries = quantity
            }
            else if (item == "hazelnut"){
                hazelnuts = quantity
            }
        }

        level.numIngredientsOnScreen = 1
        level.maxNumIngredientsOnScreen = parseInt(document.getElementById('maxNumIngredientsOnScreen').value) || 0
        level.ingredientSpawnDensity = parseInt(document.getElementById('ingredientSpawnDensity').value) || 0

        level['ingredients'] = [hazelnuts, cherries]
    }

    if (currentMode.includes('Order')){
        let orders = []
        let requirementsContainer = document.getElementById("requirements")
        for (var i = 0; i < requirementsContainer.children.length; i++){
            element = requirementsContainer.children[i]

            if (element.getAttribute("reqtype") !== "order"){
                continue
            }

            let item = Number(element.querySelector("select").value)

            let quantity = element.querySelector("input").value
            if (quantity === ''){
                quantity = 0
            }
            else{
                quantity = Number(quantity)
            }

            orders.push({"item": item, "quantity": quantity})
        }

        level['_itemsToOrder'] = orders
    }

    level['gameModeName'] = currentMode

    level['episodeId'] = 0

    level["evilSpawnerAmount"] = parseInt(document.getElementById('evilSpawnerAmount').value) || 3

    let magicMixerElements = []
    let mixerElementsContainer = document.getElementById("mixeroptions")
    for (var i = 0; i < mixerElementsContainer.children.length; i++){
        element = mixerElementsContainer.children[i]

        let item = Number(element.querySelector("select").value)

        magicMixerElements.push(item)
    }

    level["evilSpawnerElements"] = magicMixerElements
    level["evilSpawnerInterval"] = parseInt(document.getElementById('evilSpawnerInterval').value) || 3

    //Add cannon preferences
    cannonCodes.forEach(function(nameArray){
        let elm = nameArray[0]

        let cannonSettingAddons = ["Max", "Spawn", ""]

        cannonSettingAddons.push(nameArray[1])

        cannonSettingAddons.forEach(function(setting){
            //console.log(elm + setting)
            let inputElement = document.getElementById(elm + setting)
            if (inputElement != null && inputElement.value != ""){
                level[elm + setting] = Number(inputElement.value) || 0
            }
        })
    })

    return level
}

function exportLevelUI(){
    let level = exportLevel()
    document.getElementById("exportfield").value = JSON.stringify(level)
    document.getElementById("exportmenu").style.display = "block"
}

function resized(){
    let container = document.getElementById("level")
    let width = window.innerWidth * .00078
    let height = window.innerHeight * .00078

    document.documentElement.style.setProperty("--scaleWidth", width)
    document.documentElement.style.setProperty("--scaleHieght", height)
}

window.onresize = function() {
    resized()
}

resized()

function createNewTable(clear = false){
    var levelTable = document.getElementById('level')
    levelTable.innerHTML = ""
    for (let i=0; i < 9; i++) {
            var row = document.createElement("tr")
            levelTable.appendChild(row)
            for (let g=0; g < 9; g++) {
                var object = document.createElement("td")
                object.setAttribute("style", "position: relative; left: 0; top: 0;")

                object.setAttribute("pos-row", i)
                object.setAttribute("pos-col", g)

                object.setAttribute("candy_cannon", '')

                object.addEventListener('contextmenu', function(ev) {
                    ev.preventDefault()
                    let object = ev.target
                    if (object.nodeType != "td"){
                        object = object.parentNode
                    }
                    updateElmState(object)
                }, false)

                object.onmouseover = function(event) {  
                    event.preventDefault();  
                    this.classList.add("selected")
                    if (isDown){
                        updateTile(this)
                    }
                  }  

                  object.onmousedown = function(event){
                    event.preventDefault()
                    if (event.button === 0) {
                        event.preventDefault()
                        isDown = true
                        updateTile(this)

                    }
                  }
                  object.onmouseout = function(event) {  
                    event.preventDefault();  
                    try{
                        this.classList.remove("selected")
                    }
                    catch{}
                  }

                
                if (!clear){
                    object.setAttribute('normal', "002")
                    object.setAttribute('color', "002")
                }
                object.setAttribute('tile', "001")  

                let ammo = object.appendChild(document.createElement("div"))
                ammo.classList.add("ammocontainer")

                layers.forEach(function(layer){
                    let image = document.createElement("img")
                    image.setAttribute('draggable', false)
                    // image.style.display = "block"
                    image.classList.add(layer)
                    image.classList.add("default")
                    object.appendChild(image)
                })

                image = object.querySelector(".tile")
                image.src = 'elements/grid.png'
                image.classList.remove("default")

                if (!clear){
                    if (i === 0){
                        image = object.querySelector(".candy_entrance")
                        image.src = elementsFolder + "candy_entrance.png"
                        object.setAttribute("candy_entrance", "026")
                        object.setAttribute("candy_cannon", '["005"]')
                    }
                    
                    image = object.querySelector(".normal")
                    image.src = elementsFolder + elements_ids["002"] + ".png"
                    image.classList.add("small")
                }

                image = object.querySelector(".selectimg")
                image.src = elementsFolder + "select.png"
                image.style.display = "none"

                row.appendChild(object)
        }
    }
}

createNewTable()

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

//Auto set up left GUI colors
document.querySelectorAll(".selectcolor").forEach(function(element){
    let color = element.getAttribute("color")
    let parent = element.parentElement

    let button = document.createElement('button')
    let image = button.appendChild(document.createElement("img"))
    image.classList.add("selectionimage")
    image.src = elementsFolder + color + ".png"

    button.setAttribute("onclick", "updateColor(this, \"" + color + "\")")

    element.remove()
    parent.appendChild(button)
})

//Auto set up left GUI colored elements
document.querySelectorAll(".selectcoloredelement").forEach(function(element){
    let elementName = element.getAttribute('element')
    let parent = element.parentElement

    let button = document.createElement('button')
    let image = button.appendChild(document.createElement("img"))
    image.classList.add("selectionimage")
    image.src = elementsFolder + elementName + "_random.png"

    button.setAttribute("onclick", "updateSelection(this, '" + elementName + "', 'normal')")

    element.remove()
    parent.appendChild(button)
})

//Auto set up left GUI elements
document.querySelectorAll(".selectelement").forEach(function(element){
    let elementName = element.getAttribute('element')
    let parent = element.parentElement

    let button = document.createElement('button')
    let layer = element.getAttribute("gamelayer")

    if (layer == "candy_cannon" && element.getAttribute('element') != "candy_cannon"){
        let ammoImage = button.appendChild(document.createElement("img"))
        ammoImage.setAttribute("style", "max-width: 40px; position: absolute; height: 40px; pointer-events: none;")
        ammoImage.src = elementsFolder + "/ammo.png"
    }

    let image = button.appendChild(document.createElement("img"))
    image.classList.add("selectionimage")
    image.src = elementsFolder + elementName + ".png"


    button.setAttribute("onclick", "updateSelection(this, \"" + elementName + "\", '" + layer + "')")

    element.remove()
    parent.appendChild(button)
})

//Auto set up cannon preference elements
document.querySelectorAll(".cannonpref").forEach(function(element){
    let elm = element.getAttribute("elm")
    let imageSrc = element.getAttribute("image")
    let tick = element.getAttribute("tick")

    element.innerHTML = '<td> <img class="elmimg" style="max-width: 70%;"> </td> <td> <input class="max" style="width: 50px; text-align: center;" placeholder="0" type="number"> </td> <td> <input class="spawn" style="width: 50px; text-align: center;" placeholder="0" type="number"> </td> <td> <input class="tick" style="width: 50px; text-align: center;" placeholder="0" type="number"> </td>'

    element.querySelector(".elmimg").src = imageSrc
    element.querySelector(".max").id = elm + "Max"
    element.querySelector(".spawn").id = elm + "Spawn"
    if (tick != ""){
        element.querySelector(".tick").id = elm + tick
    }
    else{
        element.querySelector(".tick").style.display = "none"
    }
})