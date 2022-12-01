window.addEventListener('load', ()=>{
    //array met 8 letter woorden
    const woordenLijst = ["absolute","abstract","academic","accepted","accident","accuracy","accurate","achieved","acquired","activity","actually","addition","adequate","adjacent","adjusted",
    "advanced","advisory","advocate","affected","aircraft","alliance","although","aluminum","analysis","announce","anything","anywhere","apparent","appendix","approach","approval","argument",
    "artistic","assembly","assuming","athletic","attached","attitude","attorney","audience","autonomy","aviation","bachelor","bacteria","baseball","bathroom","becoming","benjamin","birthday",
    "boundary","breaking","breeding","building","bulletin","business","calendar","campaign","capacity","casualty","catching","category","Catholic","cautious","cellular","ceremony","chairman",
    "champion","chemical","children","circular","civilian","clearing","clinical","clothing","collapse","colonial","colorful","commence","commerce","complain","complete","composed","compound",
    "comprise","computer","conclude","concrete","conflict","confused","congress","consider","constant","consumer","continue","contract","contrary","contrast","convince","corridor","coverage",
    "covering","creation","creative","criminal","critical","crossing","cultural","currency","customer","database","daughter","daylight","deadline","deciding","decision","decrease","deferred",
    "definite","delicate","delivery","describe","designer","detailed","diabetes","dialogue","diameter","directly","director","disabled","disaster","disclose","discount","discover","disorder",
    "disposal","distance","distinct","district","dividend","division","doctrine","document","domestic","dominant","dominate","doubtful","dramatic","dressing","dropping","duration","dynamics",
    "earnings","economic","educated","efficacy","eighteen","election","electric","eligible","emerging","emphasis","employee","endeavor","engaging","engineer","enormous","entirely","entrance",
    "envelope","equality","equation","estimate","evaluate","eventual","everyday","everyone","evidence","exchange","exciting","exercise","explicit","exposure","extended","external","facility",
    "familiar","featured","feedback","festival","finished","firewall","flagship","flexible","floating","football","foothill","forecast","foremost","formerly","fourteen","fraction","franklin",
    "frequent","friendly","frontier","function","generate","generous","genomics","goodwill","governor","graduate","graphics","grateful","guardian","guidance","handling","hardware","heritage",
    "highland","historic","homeless","homepage","hospital","humanity","identify","identity","ideology","imperial","incident","included","increase","indicate","indirect","industry","informal",
    "informed","inherent","initiate","innocent","inspired","instance","integral","intended","interact","interest","interior","internal","interval","intimate","intranet","invasion","involved",
    "isolated","judgment","judicial","junction","keyboard","landlord","language","laughter","learning","leverage","lifetime","lighting","likewise","limiting","literary","location","magazine",
    "magnetic","maintain","majority","marginal","marriage","material","maturity","maximize","meantime","measured","medicine","medieval","memorial","merchant","midnight","military","minimize",
    "minister","ministry","minority","mobility","modeling","moderate","momentum","monetary","moreover","mortgage","mountain","mounting","movement","multiple","national","negative","nineteen",
    "northern","notebook","numerous","observer","occasion","offering","official","offshore","operator","opponent","opposite","optimism","optional","ordinary","organize","original","overcome",
    "overhead","overseas","overview","painting","parallel","parental","patented","patience","peaceful","periodic","personal","persuade","petition","physical","pipeline","platform","pleasant",
    "pleasure","politics","portable","portrait","position","positive","possible","powerful","practice","precious","pregnant","presence","preserve","pressing","pressure","previous","princess",
    "printing","priority","probable","probably","producer","profound","progress","property","proposal","prospect","protocol","provided","provider","province","publicly","purchase","pursuant",
    "quantity","question","rational","reaction","received","receiver","recovery","regional","register","relation","relative","relevant","reliable","reliance","religion","remember","renowned",
    "repeated","reporter","republic","required","research","reserved","resident","resigned","resource","response","restrict","revision","rigorous","romantic","sampling","scenario","schedule",
    "scrutiny","seasonal","secondly","security","sensible","sentence","separate","sequence","sergeant","shipping","shortage","shoulder","simplify","situated","slightly","software","solution",
    "somebody","somewhat","southern","speaking","specific","spectrum","sporting","standard","standing","standout","sterling","straight","strategy","strength","striking","struggle","stunning",
    "suburban","suitable","superior","supposed","surgical","surprise","survival","sweeping","swimming","symbolic","sympathy","syndrome","tactical","tailored","takeover","tangible","taxation",
    "taxpayer","teaching","tendency","terminal","terrible","thinking","thirteen","thorough","thousand","together","tomorrow","touching","tracking","training","transfer","traveled","treasury",
    "triangle","tropical","turnover","ultimate","umbrella","universe","unlawful","unlikely","valuable","variable","vertical","victoria","violence","volatile","warranty","weakness","weighted",
    "whatever","whenever","wherever","wildlife","wireless","withdraw","woodland","workshop","yourself"];
            
    //array met woordenshufflen bij start programma;
    shuffleArray(woordenLijst);

    /**********************VARIABELEN****************/
    //Variable voor letterCombinaties. Zie Paardensprong-notities document voor patroon. 
    const letterCombinaties = [[0,5,2,3,7,4,1,6],[3,6,1,0,4,5,2,7],[5,2,7,0,4,3,6,1],[6,1,4,3,7,0,5,2],[3,0,5,6,2,1,4,7],[5,0,3,2,6,7,4,1],[1,4,7,6,2,3,0,5],[7,4,1,2,6,5,0,3],[6,3,0,1,5,4,7,2],[1,6,3,4,0,7,2,5],[7,2,5,4,0,1,6,3],[4,1,6,7,3,2,5,0]];
    //overige variabelen
    let woordIndex = 0;
    let woord = woordenLijst[woordIndex];
    let score = 0;
    
    //BUTTONS als variablen opgeslagen
    const startBtn = document.querySelector("#startBtn");
    const startVenster = document.querySelector('#startVenster');
    const outputTxt = document.querySelector("#outputTxt");
    const letterBtn = document.querySelectorAll(".btnBox");
    const scoreOutput = document.querySelector("#score");
    const nextBtn = document.querySelector("#btnNext");
    /**********************FUNCTIES*****************/
    //SHUFFLE FUNCTIE
    function shuffleArray(array){
        array.sort(function () {
            return Math.random() - 0.5;
        });
    }
 //FUNCTIE TOEWIJZING LETTERPOSITIES
function startPositieToewijzing(woord) {
    let i = [1, 2, 3, 4, 5, 6, 7, 8];
    shuffleArray(i);
    //voegt waardes toe voor copycontent
    a1.value = woord[letterCombinaties[i[0]][0]];
    b1.value = woord[letterCombinaties[i[0]][1]];
    c1.value = woord[letterCombinaties[i[0]][2]];
    a2.value = woord[letterCombinaties[i[0]][3]];
    c2.value = woord[letterCombinaties[i[0]][4]];
    a3.value = woord[letterCombinaties[i[0]][5]];
    b3.value = woord[letterCombinaties[i[0]][6]];
    c3.value = woord[letterCombinaties[i[0]][7]];
    //print letters op scherm
    a1.innerHTML = woord[letterCombinaties[i[0]][0]];
    b1.innerHTML = woord[letterCombinaties[i[0]][1]];
    c1.innerHTML = woord[letterCombinaties[i[0]][2]];
    a2.innerHTML = woord[letterCombinaties[i[0]][3]];
    c2.innerHTML = woord[letterCombinaties[i[0]][4]];
    a3.innerHTML = woord[letterCombinaties[i[0]][5]];
    b3.innerHTML = woord[letterCombinaties[i[0]][6]];
    c3.innerHTML = woord[letterCombinaties[i[0]][7]];
}


/*********************************MAIN GAME **********************/
//Als er op start word gedrukt:
    startBtn.addEventListener('click', ()=>{
    //verberg openingvenster:
    startVenster.classList.add('hide');
    //vul spel met de juiste letters:
    startPositieToewijzing(woord);
});


//VOEG CLICK LISTENER TOE EN CONTROLEER DE INPUT
letterBtn.forEach(item => {
    item.addEventListener('click', (e)=>{
        outputTxt.innerHTML += e.target.value;
        e.target.style.background="#39271A";
        e.target.style.color="#FCB1A6";
        //controleert of het woord goed is
        if(outputTxt.innerHTML.length == 8){
            if(outputTxt.innerHTML == woord){
                //update score, print score op scherm en haalt de next knop tevoorschijn
                score++;
                scoreOutput.innerHTML = score ;
                nextBtn.classList.remove('hide');
                return woordIndex++;
            }
        }
    })
})
//reset knop
b2.addEventListener('click',()=>{
    //reset output
    outputTxt.innerHTML = "";
    //reset kleuren
    letterBtn.forEach(item =>{
        item.style.background='#FCB1A6';
        item.style.color="#39271A"
    })
})
//next knop
nextBtn.addEventListener('click', ()=>{
    //verstopt de next knop
    nextBtn.classList.add('hide');
    //update woord
    woord = woordenLijst[woordIndex];
    //vul scherm met nieuwe letters
    startPositieToewijzing(woord);
    //reset kleuren
    letterBtn.forEach(item =>{
        item.style.background='#FCB1A6';
        item.style.color="#39271A"
    })
    outputTxt.innerHTML = "";
})

//Sla score op in localStorage


        //TODO:
//GEEF FOUTMELDING BIJ ILLEGALE STAPPEN
//help knop toevoegen voor uitleg, zelfde overlay als start venster.
})