class Paardensprong {
    constructor() {
      this.wordList = ["absolute","abstract","academic","accepted","accident","accuracy","accurate","achieved","acquired","activity","actually","addition","adequate","adjacent","adjusted",
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
      this.possibleSequences = [[1,7,3,4,8,2,6,5],[1,5,6,2,8,4,3,7],[2,6,5,1,7,3,4,8],[2,8,4,3,7,1,5,6],[3,4,8,2,6,5,1,7],[3,7,1,5,6,2,8,4],[4,3,7,1,5,6,2,8],[4,8,2,6,5,1,7,3],[5,1,7,3,4,8,2,6],[5,6,2,8,4,3,7,1],[6,2,8,4,3,7,1,5],[6,5,1,7,3,4,8,2],[7,1,5,6,2,8,4,3],[7,3,4,8,2,6,5,1],[8,2,6,5,1,7,3,4],[8,4,3,7,1,5,6,2]];
      this.score = localStorage.getItem('score') || 0 ;
      this.word = this.wordList[this.score]; // word :  this.word;
      this.gameBox = document.getElementById('gameBox');
      this.guessedWord = '';
    }
    start(){
        //code om game te starten
        this.shuffleArray(this.wordList);
        //this.word = this.wordList[this.score];      randomize het woord
        this.shuffleArray(this.possibleSequences);
        this.renderGame();
        this.fillBoxes();
        this.boxClick();
    }
    renderGame(){
      for(let i = 0; i <= 8; i++){
        if(i == 4){
          this.gameBox.innerHTML += `<div id="middleBox" class="reset"></div>`
        }else if(i > 4){
          this.gameBox.innerHTML += `<div id="box${i}" class="box"></div>`;
        }
        else{
          this.gameBox.innerHTML += `<div id="box${i+1}" class="box"></div>`;
        }
      }
    }
    fillBoxes(){
      let counter = 0;
      for(let i = 0; i < 8; i++){
        document.getElementById(`box${this.possibleSequences[0][i]}`).innerHTML = this.word[i];
        counter++;
      }
    }
    shuffleArray(array){
      array.sort(function () {
          return Math.random() - 0.5;
      });
  }
  printWinScreen(){
    this.gameBox.innerHTML = `<p>${this.word} is correct!!<p> <button>New Word</button>`
  }
    boxClick(){
        this.gameBox.addEventListener('click', (e)=>{
          if(e.target.classList.contains('box')){
            e.target.style.background = '#DCB6D5';
            e.target.style.color = '#873D48';
            this.guessedWord += e.target.textContent;
            console.log(this.guessedWord);
            if(this.guessedWord == this.word){
              this.score++;
              this.printWinScreen();
            }
          }
          else if(e.target.classList.contains('reset')){
            this.gameBox.querySelectorAll('.box').forEach(item =>{
              item.style.background = '#873D48';
              item.style.color = '#DCB6D5';
              this.guessedWord = '';
            })
          }
        })
    }
  }

  const game = new Paardensprong;
  game.start();

  /*oke wat moet ik nog doen?
    als geen paardensprong geef melding dat geen paardensprong is. (animatie met schudden van box)
    als woord geraden is laat nieuw button zien voor nieuw spel.
    als op nieuw spel knop gedrukt is start nieuw spel
    css voor geraden woord maken
    */
  