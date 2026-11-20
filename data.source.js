/* MOONBALL answer bank — SOURCE OF TRUTH. Edit this file, then run:  node scramble.js
   That regenerates data.js, which is what the game actually loads. Never edit data.js by hand:
   its answers are encoded, and the next run of scramble.js overwrites it. */

const BANK_NAME = "MOONBALL";

/* The day each game went live. Day N of the rotation = this date + N. */
const DEEPBALL_LAUNCH = "2026-11-18";

/* Scoring tiers, rarest last. pts is what an answer in that tier is worth. */
const TIERS = [
  {"key":"chalk","label":"Checkdown","pts":3,"blurb":"Dumped it off. Everybody threw that one."},
  {"key":"bandwagon","label":"Quick Slant","pts":8,"blurb":"Easy completion. Moves the chains, barely."},
  {"key":"starter","label":"Out Route","pts":15,"blurb":"A real football answer. Toe-tap on the sideline."},
  {"key":"film","label":"Seam Route","pts":30,"blurb":"Split the safeties. Now you're digging."},
  {"key":"deep","label":"Deep Post","pts":45,"blurb":"Hit him in stride. Who hurt you? Beautiful."},
  {"key":"hail","label":"The Bomb","pts":60,"blurb":"Moonball, 60 in the air. One in a krillion."}
];

/* The prompts. tiers holds the accepted answers, grouped by how rare each one is.
   An answer missing from every tier is simply not accepted. */
const PROMPTS = [
  {
    id: "teams", cat: "franchise", diff: "easy",
    prompt: "Name an NFL team.",
    note: "All 32 count. Saying the obvious one costs you.",
    tiers: {
      chalk: ["Dallas Cowboys|cowboys|dallas","Kansas City Chiefs|chiefs|kansas city|kc","Philadelphia Eagles|eagles|philly|philadelphia","San Francisco 49ers|49ers|niners|san francisco|forty niners","New England Patriots|patriots|pats|new england","Green Bay Packers|packers|green bay","Pittsburgh Steelers|steelers|pittsburgh","Buffalo Bills|bills|buffalo"],
      bandwagon: ["Baltimore Ravens|ravens|baltimore","Detroit Lions|lions|detroit","Cincinnati Bengals|bengals|cincinnati|cincy","Los Angeles Rams|rams|la rams","Miami Dolphins|dolphins|miami|fins","Chicago Bears|bears|chicago","New York Giants|giants|ny giants","New York Jets|jets|ny jets","Seattle Seahawks|seahawks|seattle|hawks"],
      starter: ["Denver Broncos|broncos|denver","Minnesota Vikings|vikings|minnesota|vikes","Houston Texans|texans|houston","Las Vegas Raiders|raiders|las vegas|oakland raiders","Cleveland Browns|browns|cleveland","Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa","Atlanta Falcons|falcons|atlanta","Washington Commanders|commanders|washington"],
      film: ["New Orleans Saints|saints|new orleans","Indianapolis Colts|colts|indianapolis|indy","Los Angeles Chargers|chargers|la chargers|san diego chargers","Arizona Cardinals|cardinals|arizona|cards","Tennessee Titans|titans|tennessee"],
      deep: ["Carolina Panthers|panthers|carolina"],
      hail: ["Jacksonville Jaguars|jaguars|jacksonville|jags"]
    }
  },
  {
    id: "sb-qb", cat: "superbowl", diff: "hard",
    prompt: "Name a quarterback who has started a Super Bowl.",
    note: "Starter, either team, through Super Bowl LX. Winning not required.",
    tiers: {
      chalk: ["Tom Brady|brady|tb12","Patrick Mahomes|mahomes","Peyton Manning","Joe Montana|montana","John Elway|elway","Aaron Rodgers|rodgers","Brett Favre|favre"],
      bandwagon: ["Eli Manning","Russell Wilson|russ wilson","Ben Roethlisberger|roethlisberger|big ben","Drew Brees|brees","Troy Aikman|aikman","Kurt Warner|warner","Jalen Hurts|hurts","Joe Burrow|burrow","Matthew Stafford|stafford","Dan Marino|marino","Terry Bradshaw|bradshaw","Cam Newton|newton","Jared Goff|goff","Nick Foles|foles","Sam Darnold","Drake Maye"],
      starter: ["Steve Young","Jim Kelly|kelly","Roger Staubach|staubach","Joe Flacco|flacco","Colin Kaepernick|kaepernick|kap","Matt Ryan|matty ice","Donovan McNabb|mcnabb","Joe Theismann|theismann","Phil Simms|simms","Brock Purdy|purdy","Jimmy Garoppolo|garoppolo|jimmy g","Matt Hasselbeck|hasselbeck","Bart Starr|starr","Joe Namath|namath|broadway joe","Drew Bledsoe|bledsoe","Jim McMahon|mcmahon","Ken Stabler|stabler|snake","Fran Tarkenton|tarkenton","Bob Griese|griese"],
      film: ["Rex Grossman|grossman","Trent Dilfer|dilfer","Brad Johnson","Jake Delhomme|delhomme","Doug Williams","Jim Plunkett|plunkett","Mark Rypien|rypien","Jeff Hostetler|hostetler","Boomer Esiason|esiason|boomer","Rich Gannon|gannon","Steve McNair|mcnair|air mcnair","Kerry Collins","Johnny Unitas|unitas|johnny u"],
      deep: ["Stan Humphries|humphries","Tony Eason|eason","Billy Kilmer|kilmer","Ron Jaworski|jaworski|jaws","Ken Anderson","Craig Morton|morton","Chris Chandler|chandler","Neil O'Donnell|odonnell|neil odonnell"],
      hail: ["Joe Kapp|kapp","Vince Ferragamo|ferragamo","David Woodley|woodley","Earl Morrall|morrall"]
    }
  },
  {
    id: "mvp", cat: "awards", diff: "hard",
    prompt: "Name an NFL Most Valuable Player.",
    note: "AP MVP, any year since 1957.",
    tiers: {
      chalk: ["Tom Brady|brady","Patrick Mahomes|mahomes","Peyton Manning","Aaron Rodgers|rodgers","Lamar Jackson|lamar","Josh Allen|allen","Brett Favre|favre"],
      bandwagon: ["Joe Montana|montana","John Elway|elway","Barry Sanders","Emmitt Smith|emmitt","Dan Marino|marino","Steve Young","Walter Payton|payton|sweetness","Kurt Warner|warner","Cam Newton|newton","Adrian Peterson|ap|all day","Matthew Stafford"],
      starter: ["Marshall Faulk|faulk","Lawrence Taylor|lt|l t","LaDainian Tomlinson|tomlinson|ldt","Matt Ryan","Terrell Davis|td|terrell davis","Jim Brown","Terry Bradshaw|bradshaw","Earl Campbell|campbell","Marcus Allen","Fran Tarkenton|tarkenton","Shaun Alexander|shaun alexander","Steve McNair|mcnair","Bart Starr|starr","Johnny Unitas|unitas"],
      film: ["Rich Gannon|gannon","Boomer Esiason|esiason|boomer","Thurman Thomas|thurman","Joe Theismann|theismann","Ken Anderson","O.J. Simpson|oj simpson|simpson|o j simpson","Ken Stabler|stabler","Y.A. Tittle|tittle|ya tittle","Roman Gabriel|gabriel"],
      deep: ["Brian Sipe|sipe","Bert Jones","John Brodie|brodie","Larry Brown","Earl Morrall|morrall","Paul Hornung|hornung"],
      hail: ["Mark Moseley|moseley","Alan Page|page","Jim Taylor","Norm Van Brocklin|van brocklin"]
    }
  },
  {
    id: "sb-mvp", cat: "superbowl", diff: "easy",
    prompt: "Name a Super Bowl MVP.",
    note: "One per game since Super Bowl I. Two were named in XII.",
    tiers: {
      chalk: ["Tom Brady|brady","Patrick Mahomes|mahomes","Joe Montana|montana","Peyton Manning","Eli Manning"],
      bandwagon: ["Aaron Rodgers|rodgers","Terry Bradshaw|bradshaw","Troy Aikman|aikman","Kurt Warner|warner","Drew Brees|brees","Von Miller|miller","Cooper Kupp|kupp","Nick Foles|foles","Julian Edelman|edelman","Steve Young","John Elway|elway","Emmitt Smith|emmitt","Jalen Hurts|hurts"],
      starter: ["Jerry Rice|rice","Marcus Allen","Deion Branch|branch","Hines Ward|ward","Santonio Holmes|holmes","Ray Lewis","Desmond Howard","Franco Harris|franco","Lynn Swann|swann","Larry Csonka|csonka","Joe Namath|namath","Bart Starr|starr","Richard Dent|dent","Doug Williams","Phil Simms|simms","Terrell Davis","Joe Flacco|flacco","Malcolm Smith","Kenneth Walker III|kenneth walker"],
      film: ["Mark Rypien|rypien","Ottis Anderson|ottis|o j anderson","John Riggins|riggins|riggo","Fred Biletnikoff|biletnikoff","Jim Plunkett|plunkett","Roger Staubach|staubach","Len Dawson|dawson"],
      deep: ["Larry Brown","Jake Scott","Harvey Martin","Randy White"],
      hail: ["Chuck Howley|howley","Dexter Jackson"]
    }
  },
  {
    id: "sb-coach", cat: "superbowl", diff: "easy",
    prompt: "Name a head coach who has won a Super Bowl.",
    note: "Head coach of the winning team, any year.",
    tiers: {
      chalk: ["Bill Belichick|belichick","Andy Reid|reid|big red","Vince Lombardi|lombardi","Mike Tomlin|tomlin","Bill Walsh|walsh"],
      bandwagon: ["Tom Landry|landry","Don Shula|shula","Chuck Noll|noll","Bill Parcells|parcells|tuna","Jimmy Johnson","Mike McCarthy|mccarthy","John Harbaugh","Pete Carroll|carroll","Sean McVay|mcvay","Sean Payton|payton","Nick Sirianni|sirianni","Mike Shanahan","Joe Gibbs|gibbs","Mike Ditka|ditka|da coach","Mike Macdonald|mike mcdonald"],
      starter: ["Tony Dungy|dungy","Bill Cowher|cowher","Tom Coughlin|coughlin","Jon Gruden|gruden|chucky","Mike Holmgren|holmgren","George Seifert|seifert","Dick Vermeil|vermeil","Doug Pederson|pederson","Bruce Arians|arians","John Madden|madden"],
      film: ["Brian Billick|billick","Gary Kubiak|kubiak","Hank Stram|stram","Tom Flores|flores"],
      deep: ["Weeb Ewbank|ewbank","Barry Switzer|switzer"],
      hail: ["Don McCafferty|mccafferty"]
    }
  },
  {
    id: "two-k", cat: "records", diff: "easy",
    prompt: "Name a running back with a 2,000-yard rushing season.",
    note: "Regular season only. Nine men have ever done it.",
    tiers: {
      chalk: ["Derrick Henry|henry|king henry","Barry Sanders","Saquon Barkley|barkley|saquon"],
      bandwagon: ["Adrian Peterson|peterson|ap","Eric Dickerson|dickerson"],
      starter: ["O.J. Simpson|oj simpson|simpson|o j simpson|the juice"],
      film: ["Terrell Davis|davis|td"],
      deep: ["Chris Johnson|cj2k|cj 2k"],
      hail: ["Jamal Lewis|lewis"]
    }
  },
  {
    id: "sb-host", cat: "superbowl", diff: "easy",
    prompt: "Name a place that has hosted a Super Bowl.",
    note: "City or metro area. 1967 through today.",
    tiers: {
      chalk: ["New Orleans|nola|new orleans louisiana","Miami|miami gardens|miami florida","Las Vegas|vegas","Los Angeles|la|inglewood|los angeles california"],
      bandwagon: ["Tampa|tampa bay|tampa florida","Atlanta|atlanta georgia","Glendale|phoenix|glendale arizona|phoenix arizona","Houston|houston texas"],
      starter: ["Arlington|dallas|arlington texas|dfw","Minneapolis|minnesota|minneapolis minnesota","Detroit|detroit michigan","San Diego|san diego california","Santa Clara|san francisco|santa clara california"],
      film: ["Indianapolis|indy|indianapolis indiana","Pasadena|pasadena california|rose bowl","East Rutherford|new jersey|meadowlands|north jersey"],
      deep: ["Jacksonville|jacksonville florida","Pontiac|pontiac michigan|silverdome"],
      hail: ["Stanford|palo alto|stanford california","Tempe|tempe arizona"]
    }
  },
  {
    id: "first-overall", cat: "draft", diff: "hard",
    prompt: "Name a No. 1 overall NFL draft pick (like Peyton Manning).",
    note: "Any draft, any year.",
    tiers: {
      chalk: ["Peyton Manning","John Elway|elway","Trevor Lawrence|lawrence","Caleb Williams","Joe Burrow|burrow","Cam Newton|newton","Andrew Luck|luck"],
      bandwagon: ["Troy Aikman|aikman","Eli Manning","Michael Vick|vick","Baker Mayfield|mayfield","Kyler Murray|kyler","Bryce Young","Myles Garrett|garrett","Jared Goff|goff","Matthew Stafford|stafford","Alex Smith","Jadeveon Clowney|clowney","Bo Jackson","O.J. Simpson|oj simpson|o j simpson","Terry Bradshaw|bradshaw","Cam Ward|ward","Jameis Winston|winston|famous jameis"],
      starter: ["Carson Palmer|palmer","Mario Williams","Sam Bradford|bradford","JaMarcus Russell|jamarcus|russell","Tim Couch|couch","David Carr","Drew Bledsoe|bledsoe","Keyshawn Johnson|keyshawn","Orlando Pace|pace","Travon Walker|walker","Earl Campbell|campbell","Jim Plunkett|plunkett","Ki-Jana Carter|ki jana carter|kijana carter","Russell Maryland|maryland","Jeff George","Vinny Testaverde|testaverde|vinny","Bruce Smith","Courtney Brown","Jake Long","Eric Fisher|fisher"],
      film: ["Dan Wilkinson|big daddy wilkinson|wilkinson","Irving Fryar|fryar","George Rogers|rogers","Billy Sims|sims","Lee Roy Selmon|selmon","Ricky Bell|bell","Steve Bartkowski|bartkowski","Ron Yary|yary","Bubba Smith","John Matuszak|matuszak|tooz","Paul Hornung|hornung","Chuck Bednarik|bednarik","Ernie Davis","Billy Cannon|cannon","Charley Trippi|trippi","Tom Harmon|harmon"],
      deep: ["Steve Emtman|emtman","Kenneth Sims","Ed Jones|too tall jones|ed too tall jones","Tommy Nobis|nobis","Kyle Rote|rote","Leon Hart","Bill Dudley|dudley","Frank Sinkwich|sinkwich","Angelo Bertelli|bertelli","Jay Berwanger|berwanger","Tucker Frederickson|frederickson","Terry Baker"],
      hail: ["Aundray Bruce|bruce","Walt Patulski|patulski","Tom Cousineau|cousineau","Dave Parks|parks","Tommy Mason","Randy Duncan|duncan","King Hill","Gary Glick|glick","George Shaw","Bobby Garrett","Harry Babcock|babcock","Bill Wade","Harry Gilmer|gilmer","Bob Fenimore|fenimore","Frank Dancewicz|dancewicz","George Cafego|cafego","Ki Aldrich|aldrich","Corbett Davis","Sam Francis"]
    }
  },
  {
    id: "nicknames", cat: "culture", diff: "easy",
    prompt: "Name a nickname given to an NFL offense or defense.",
    note: "Unit nicknames, any era.",
    tiers: {
      chalk: ["Steel Curtain|the steel curtain","Legion of Boom|lob|the legion of boom"],
      bandwagon: ["Purple People Eaters|the purple people eaters","Monsters of the Midway|the monsters of the midway","Greatest Show on Turf|the greatest show on turf","The Triplets|triplets","The Hogs|hogs"],
      starter: ["Orange Crush|the orange crush","Fearsome Foursome|the fearsome foursome","No-Name Defense|no name defense|the no names","Doomsday Defense|doomsday|the doomsday defense","Big Blue Wrecking Crew","No Fly Zone","Marks Brothers|the marks brothers","Fun Bunch|the fun bunch"],
      film: ["New York Sack Exchange|sack exchange|the sack exchange","Dome Patrol|the dome patrol","Gang Green","Killer Bees|the killer bees","Air Coryell","K-Gun|k gun|kgun","Three Amigos|the three amigos"],
      deep: ["Over the Hill Gang|the over the hill gang","Gritz Blitz|the gritz blitz","The Smurfs|smurfs"],
      hail: ["Electric Company|the electric company","Bermuda Triangle|the bermuda triangle"]
    }
  },
  {
    id: "hof-wr", cat: "hof", diff: "easy",
    prompt: "Name a wide receiver in the Pro Football Hall of Fame.",
    note: "Enshrined in Canton, primary position receiver or end.",
    tiers: {
      chalk: ["Jerry Rice|rice","Randy Moss|moss","Terrell Owens|owens|to","Calvin Johnson|megatron"],
      bandwagon: ["Michael Irvin|irvin|the playmaker","Cris Carter|carter","Marvin Harrison|harrison","Tim Brown","Steve Largent|largent","Lynn Swann|swann"],
      starter: ["Andre Reed|reed","Isaac Bruce|bruce","James Lofton|lofton","Art Monk|monk","John Stallworth|stallworth","Paul Warfield|warfield","Lance Alworth|alworth|bambi","Don Hutson|hutson","Raymond Berry|berry","Don Maynard|maynard","Harold Carmichael|carmichael","Cliff Branch|branch","Andre Johnson"],
      film: ["Fred Biletnikoff|biletnikoff","Charlie Joiner|joiner","Charley Taylor|charley taylor","Bobby Mitchell|mitchell","Tommy McDonald|mcdonald","Bob Hayes|bullet bob hayes|hayes","Drew Pearson|pearson","Sterling Sharpe|sharpe"],
      deep: ["Pete Pihos|pihos","Elroy Hirsch|hirsch|crazylegs|crazy legs|crazylegs hirsch|crazy legs hirsch|elroy crazylegs hirsch"],
      hail: ["Dante Lavelli|lavelli","Tom Fears|fears","Mac Speedie|speedie","Bill Hewitt|hewitt"]
    }
  },
  {
    id: "heisman", cat: "draft", diff: "hard",
    prompt: "Name a Heisman Trophy winner who played in the NFL (like Bo Jackson).",
    note: "Won the Heisman, then appeared on an NFL or AFL roster.",
    tiers: {
      chalk: ["Bo Jackson","Barry Sanders","Cam Newton|newton","Lamar Jackson|lamar","Baker Mayfield|mayfield","Kyler Murray|kyler","Marcus Allen","Reggie Bush|bush","Tim Tebow|tebow","Caleb Williams","Johnny Manziel|manziel|johnny football","Robert Griffin III|rg3|robert griffin"],
      bandwagon: ["Earl Campbell|campbell","Tony Dorsett|dorsett","O.J. Simpson|oj simpson|o j simpson","Herschel Walker|herschel","Eddie George","Ricky Williams","Carson Palmer|palmer","Sam Bradford|bradford","Mark Ingram|ingram","Derrick Henry|henry","Joe Burrow|burrow","Bryce Young","Jameis Winston|winston","Matt Leinart|leinart","DeVonta Smith|devonta","Travis Hunter|hunter","Jayden Daniels|daniels","Marcus Mariota|mariota","Ron Dayne|dayne"],
      starter: ["Doug Flutie|flutie|doug flutie","Charles Woodson|woodson","Desmond Howard","Troy Smith","Billy Sims|sims","Mike Rozier|rozier","Vinny Testaverde|testaverde","Roger Staubach|staubach","Jim Plunkett|plunkett","Archie Griffin|griffin","Paul Hornung|hornung","Tim Brown","Steve Spurrier|spurrier","George Rogers","Charles White","Mike Garrett","Doak Walker","Glenn Davis"],
      film: ["Andre Ware|ware","Ty Detmer|detmer","Gino Torretta|torretta","Rashaan Salaam|salaam","Danny Wuerffel|wuerffel","Chris Weinke|weinke","Steve Owens|owens","John Cappelletti|cappelletti","Johnny Rodgers","Billy Cannon|cannon","Alan Ameche|ameche","Hopalong Cassady|howard cassady|cassady","Johnny Lujack|lujack","Tom Harmon|harmon","Leon Hart"],
      deep: ["Terry Baker|baker","Pat Sullivan|sullivan","John David Crow","Joe Bellino|bellino","Johnny Lattner|lattner","Billy Vessels|vessels","Vic Janowicz|janowicz","Les Horvath|horvath","Frank Sinkwich|sinkwich"],
      hail: ["John Huarte|huarte","Gary Beban|beban","Davey O'Brien|davey obrien","Bruce Smith"]
    }
  },
  {
    id: "dpoy", cat: "awards", diff: "hard",
    prompt: "Name an AP Defensive Player of the Year (like Lawrence Taylor).",
    note: "Any year since the award began in 1971.",
    tiers: {
      chalk: ["Lawrence Taylor|lt|l t","Reggie White|white","Ray Lewis","J.J. Watt|jj watt|watt","Aaron Donald|donald"],
      bandwagon: ["T.J. Watt|tj watt","Nick Bosa|bosa","Myles Garrett|garrett","Khalil Mack|mack","Deion Sanders|deion|prime time","Luke Kuechly|kuechly","Troy Polamalu|polamalu","Charles Woodson|woodson","Patrick Surtain II|surtain|patrick surtain"],
      starter: ["Michael Strahan|strahan","Warren Sapp|sapp","Ed Reed|reed","Bruce Smith","Mike Singletary|singletary","Brian Urlacher|urlacher","Derrick Brooks|brooks","James Harrison|harrison","Rod Woodson","Joe Greene|mean joe greene|greene","Alan Page|page","Jack Lambert|lambert","Mel Blount|blount","Stephon Gilmore|gilmore","Jason Taylor"],
      film: ["Lester Hayes|hayes","Kenny Easley|easley","Pat Swilling|swilling","Cortez Kennedy|kennedy","Keith Millard|millard","Bryce Paup|paup","Harvey Martin|martin","Lee Roy Selmon|selmon","Randy Gradishar|gradishar"],
      deep: ["Dana Stubblefield|stubblefield","Bob Sanders|bob sanders"],
      hail: ["Doug Betters|betters","Dick Anderson|anderson"]
    }
  },
  {
    id: "five-k", cat: "records", diff: "easy",
    prompt: "Name a QB with a 5,000-yard passing season.",
    note: "Regular season, through the 2024 season.",
    tiers: {
      chalk: ["Tom Brady|brady","Patrick Mahomes|mahomes","Peyton Manning"],
      bandwagon: ["Drew Brees|brees","Dan Marino|marino"],
      starter: ["Matthew Stafford|stafford","Justin Herbert|herbert"],
      film: ["Ben Roethlisberger|roethlisberger|big ben"],
      deep: [],
      hail: ["Jameis Winston|winston|famous jameis"]
    }
  },
  {
    id: "fifteen-k-rush", cat: "records", diff: "easy",
    prompt: "Name a player with 15,000+ career rushing yards.",
    note: "Regular season. Only four men have done it.",
    tiers: {
      chalk: ["Emmitt Smith|emmitt"],
      bandwagon: ["Barry Sanders"],
      starter: ["Walter Payton|payton|sweetness"],
      film: [],
      deep: [],
      hail: ["Frank Gore|gore"]
    }
  },
  {
    id: "fifteen-k-rec", cat: "records", diff: "easy",
    prompt: "Name a player with 15,000+ career receiving yards.",
    note: "Regular season, any position.",
    tiers: {
      chalk: ["Jerry Rice|rice"],
      bandwagon: ["Randy Moss|moss","Larry Fitzgerald|fitzgerald|fitz"],
      starter: ["Terrell Owens|owens|to"],
      film: [],
      deep: ["Tony Gonzalez|gonzalez"],
      hail: ["Isaac Bruce|bruce"]
    }
  },
  {
    id: "sb-never-won", cat: "franchise", diff: "easy",
    prompt: "Name a franchise that has played in a Super Bowl but never won one.",
    note: "Lost every Super Bowl they reached, through Super Bowl LX.",
    tiers: {
      chalk: ["Buffalo Bills|bills|buffalo","Minnesota Vikings|vikings|minnesota|vikes"],
      bandwagon: ["Cincinnati Bengals|bengals|cincinnati","Atlanta Falcons|falcons|atlanta"],
      starter: ["Carolina Panthers|panthers|carolina"],
      film: ["Los Angeles Chargers|chargers|san diego chargers"],
      deep: ["Tennessee Titans|titans|tennessee|houston oilers|oilers"],
      hail: ["Arizona Cardinals|cardinals|arizona|cards"]
    }
  },
  {
    id: "kickers", cat: "positions", diff: "hard",
    prompt: "Name an NFL kicker or punter.",
    note: "Any era. Yes, they count.",
    tiers: {
      chalk: ["Justin Tucker|tucker","Adam Vinatieri|vinatieri","Harrison Butker|butker"],
      bandwagon: ["Brandon Aubrey|aubrey","Matt Prater|prater","Sebastian Janikowski|janikowski|seabass","Morten Andersen","Evan McPherson|mcpherson|money mac","Younghoe Koo|koo","Jake Elliott|elliott","Pat McAfee|mcafee","Jake Bates|bates","Cameron Dicker|dicker","Chris Boswell|boswell","Tyler Bass|bass","Scott Norwood|norwood"],
      starter: ["Mason Crosby|crosby","Robbie Gould|gould","Stephen Gostkowski|gostkowski|gost","Jason Elam|elam","Gary Anderson","Phil Dawson|dawson","David Akers|akers","Jason Hanson|hanson","Ray Guy|guy","Tom Dempsey|dempsey","Michael Dickson|dickson","Tress Way","Ka'imi Fairbairn|kaimi fairbairn|fairbairn","Daniel Carlson|carlson","Greg Zuerlein|zuerlein|greg the leg","Jason Myers|myers","Graham Gano|gano","Wil Lutz|lutz","Matt Gay","Brandon McManus|mcmanus","Cody Parkey|parkey","Blair Walsh"],
      film: ["Jan Stenerud|stenerud","Lou Groza|groza|the toe","George Blanda|blanda","Nick Lowery|lowery","Mike Vanderjagt|vanderjagt","Matt Stover|stover","John Carney|carney","Ryan Longwell|longwell","Jay Feely|feely","Shane Lechler|lechler","Sam Koch|koch","Johnny Hekker|hekker","Dustin Hopkins","Cairo Santos|santos","Joey Slye|slye","Nick Folk|folk","Dan Bailey","Lawrence Tynes|tynes","Billy Cundiff|cundiff","Nate Kaeding|kaeding","Thomas Morstead|morstead","AJ Cole|a j cole","Bryan Anger","Andy Lee","Jeff Feagles|feagles","Sean Landeta|landeta","Chris Kluwe|kluwe"],
      deep: ["Garo Yepremian|yepremian","Pat Leahy|leahy","Eddie Murray","Norm Johnson","Steve Christie|christie","Olindo Mare|mare","Neil Rackers|rackers","Jeff Wilkins|wilkins","Mark Moseley|moseley","Rob Bironas|bironas","Shayne Graham","Mike Nugent|nugent","Josh Brown","Reggie Roby|roby","Darren Bennett","Steve Weatherford|weatherford"],
      hail: ["Ben Agajanian|agajanian","Pete Gogolak|gogolak","Fred Cox","Uwe von Schamann|von schamann|uwe","Rolf Benirschke|benirschke"]
    }
  },
  {
    id: "famous-plays", cat: "culture", diff: "easy",
    prompt: "Name a famous NFL play or game with a nickname.",
    note: "The name, not the description.",
    tiers: {
      chalk: ["Immaculate Reception|the immaculate reception","The Catch|catch","Philly Special|the philly special","Butt Fumble|the butt fumble","28-3|28 3|the 28-3 comeback"],
      bandwagon: ["Helmet Catch|the helmet catch|david tyree catch","Music City Miracle|the music city miracle","Minneapolis Miracle|the minneapolis miracle","Tuck Rule|the tuck rule|tuck rule game","Hail Mary|the hail mary|staubach hail mary","Tush Push|the tush push|brotherly shove","Greatest Game Ever Played|the greatest game ever played"],
      starter: ["The Drive|drive","The Fumble|fumble","Wide Right|wide right","Double Doink|the double doink","Beast Quake|beastquake|the beast quake","Ice Bowl|the ice bowl","13 Seconds|thirteen seconds|13 seconds game","The Comeback|comeback","Monday Night Miracle|the monday night miracle","Mile High Miracle|the mile high miracle","Miracle in Miami|the miracle in miami"],
      film: ["Holy Roller|the holy roller","Miracle at the Meadowlands|the miracle at the meadowlands","Fail Mary|the fail mary","Hail Murray|the hail murray","Sea of Hands|the sea of hands","The Catch II|catch 2|catch ii|the catch 2","Fake Spike|the fake spike","Red Right 88","Freezer Bowl|the freezer bowl","Fog Bowl|the fog bowl"],
      deep: ["Heidi Game|the heidi game","River City Relay|the river city relay","Epic in Miami|the epic in miami","Snow Plow Game|the snowplow game|snowplow game","Mud Bowl|the mud bowl","Bounty Bowl|the bounty bowl"],
      hail: ["Ghost to the Post|the ghost to the post","Miracle at the New Meadowlands|the miracle at the new meadowlands|new meadowlands miracle"]
    }
  },
  {
    id: "hof-qb", cat: "hof", diff: "easy",
    prompt: "Name a quarterback in the Pro Football Hall of Fame.",
    note: "Enshrined in Canton through the Class of 2025.",
    tiers: {
      chalk: ["Joe Montana|montana","Peyton Manning","Dan Marino|marino","John Elway|elway","Brett Favre|favre"],
      bandwagon: ["Terry Bradshaw|bradshaw","Troy Aikman|aikman","Steve Young","Johnny Unitas|unitas","Joe Namath|namath","Jim Kelly|kelly","Roger Staubach|staubach","Kurt Warner|warner"],
      starter: ["Bart Starr|starr","Fran Tarkenton|tarkenton","Warren Moon|moon","Ken Stabler|stabler","Bob Griese|griese","Len Dawson|dawson","Sonny Jurgensen|jurgensen","Otto Graham|graham","Dan Fouts|fouts","Y.A. Tittle|tittle|ya tittle"],
      film: ["Sammy Baugh|baugh|slingin sammy","Bobby Layne|layne","Norm Van Brocklin|van brocklin","Bob Waterfield|waterfield","Sid Luckman|luckman","George Blanda|blanda"],
      deep: ["Arnie Herber|herber"],
      hail: ["Benny Friedman|friedman"]
    }
  },
  {
    id: "hof-rb", cat: "hof", diff: "hard",
    prompt: "Name a running back in the Pro Football Hall of Fame.",
    note: "Enshrined in Canton, primary position running back or fullback.",
    tiers: {
      chalk: ["Barry Sanders","Walter Payton|payton","Emmitt Smith|emmitt","Jim Brown"],
      bandwagon: ["Eric Dickerson|dickerson","LaDainian Tomlinson|tomlinson|ldt","Marshall Faulk|faulk","Jerome Bettis|bettis|the bus","Earl Campbell|campbell","O.J. Simpson|oj simpson|o j simpson","Marcus Allen","Gale Sayers|sayers"],
      starter: ["Curtis Martin","Edgerrin James|edge","Thurman Thomas","Franco Harris|franco","Tony Dorsett|dorsett","John Riggins|riggins","Terrell Davis","Larry Csonka|csonka","Paul Hornung|hornung"],
      film: ["Jim Taylor","Floyd Little|little","Leroy Kelly","Lenny Moore","Red Grange|grange|galloping ghost","Bronko Nagurski|nagurski","Jim Thorpe|thorpe","Marion Motley|motley","Frank Gifford|gifford","Doak Walker","Charley Trippi|trippi"],
      deep: ["John Henry Johnson","Hugh McElhenny|mcelhenny","Joe Perry","Ollie Matson|matson","Steve Van Buren|van buren"],
      hail: ["Ernie Nevers|nevers","Fritz Pollard|pollard","Tony Canadeo|canadeo","Clarke Hinkle|hinkle"]
    }
  },
  {
    id: "hof-te", cat: "hof", diff: "easy",
    prompt: "Name a tight end in the Pro Football Hall of Fame (like Tony Gonzalez).",
    note: "Enshrined in Canton through the Class of 2025.",
    tiers: {
      chalk: ["Tony Gonzalez|gonzalez","Mike Ditka|ditka"],
      bandwagon: ["Shannon Sharpe|sharpe","Antonio Gates|gates"],
      starter: ["Kellen Winslow|winslow","Ozzie Newsome|newsome"],
      film: ["John Mackey|mackey","Dave Casper|casper|the ghost"],
      deep: ["Charlie Sanders"],
      hail: ["Jackie Smith"]
    }
  },
  {
    id: "hof-dl", cat: "hof", diff: "hard",
    prompt: "Name a defensive lineman in the Pro Football Hall of Fame (like Reggie White).",
    note: "Enshrined in Canton, primary position DT or DE.",
    tiers: {
      chalk: ["Reggie White|white","Bruce Smith","Michael Strahan|strahan"],
      bandwagon: ["Deacon Jones","Joe Greene|mean joe greene|greene","Warren Sapp|sapp","Howie Long|long","Julius Peppers|peppers","Jason Taylor","Dwight Freeney|freeney"],
      starter: ["Merlin Olsen|olsen","Alan Page|page","Randy White","John Randle|randle","Bob Lilly|lilly","Jack Youngblood|youngblood","Lee Roy Selmon|selmon","Cortez Kennedy|kennedy","Richard Dent|dent","Jared Allen"],
      film: ["Chris Doleman|doleman","Dan Hampton|hampton","Charles Haley|haley","Richard Seymour|seymour","Carl Eller|eller","Gino Marchetti|marchetti","Art Donovan|donovan","Fred Dean","Steve McMichael|mcmichael|mongo","Joe Klecko|klecko","Curley Culp|culp"],
      deep: ["Elvin Bethea|bethea","Claude Humphrey|humphrey","Buck Buchanan|buchanan","Willie Davis","Doug Atkins|atkins","Andy Robustelli|robustelli"],
      hail: ["Leo Nomellini|nomellini","Ernie Stautner|stautner","Henry Jordan"]
    }
  },
  {
    id: "hof-lb", cat: "hof", diff: "easy",
    prompt: "Name a linebacker in the Pro Football Hall of Fame (like Lawrence Taylor).",
    note: "Enshrined in Canton through the Class of 2025.",
    tiers: {
      chalk: ["Lawrence Taylor|lt|l t","Ray Lewis","Dick Butkus|butkus"],
      bandwagon: ["Junior Seau|seau","Brian Urlacher|urlacher","Mike Singletary|singletary","Derrick Brooks|brooks","Jack Lambert|lambert","Derrick Thomas","DeMarcus Ware|ware"],
      starter: ["Ray Nitschke|nitschke","Jack Ham|ham","Patrick Willis|willis","Zach Thomas","Kevin Greene|greene","Andre Tippett|tippett","Rickey Jackson","Ted Hendricks|hendricks|mad stork"],
      film: ["Chuck Bednarik|bednarik","Sam Huff|huff","Willie Lanier|lanier","Bobby Bell|bell","Randy Gradishar|gradishar","Sam Mills|mills","Harry Carson|carson","Nick Buoniconti|buoniconti"],
      deep: ["Joe Schmidt|schmidt","Dave Robinson","Chris Hanburger|hanburger","Dave Wilcox|wilcox","Chuck Howley|howley"],
      hail: ["Bill George","Les Richter|richter"]
    }
  },
  {
    id: "oroy", cat: "awards", diff: "easy",
    prompt: "Name an AP Offensive Rookie of the Year.",
    note: "Any year through 2024.",
    tiers: {
      chalk: ["Randy Moss|moss","Barry Sanders","Saquon Barkley|barkley","Justin Herbert|herbert","Cam Newton|newton","C.J. Stroud|cj stroud|stroud","Jayden Daniels|daniels","Ja'Marr Chase|jamarr chase|chase"],
      bandwagon: ["Emmitt Smith|emmitt","Eric Dickerson|dickerson","Adrian Peterson|peterson","Odell Beckham Jr.|odell beckham|obj|beckham","Dak Prescott|dak|prescott","Kyler Murray|kyler","Matt Ryan","Ben Roethlisberger|roethlisberger|big ben","Robert Griffin III|rg3|robert griffin","Marshall Faulk|faulk","Alvin Kamara|kamara","Garrett Wilson","Franco Harris|franco","Tony Dorsett|dorsett","Earl Campbell|campbell","Marcus Allen"],
      starter: ["Todd Gurley|gurley","Edgerrin James|edge","Eddie George","Jerome Bettis|bettis","Curtis Martin","Anquan Boldin|boldin","Vince Young","Percy Harvin|harvin","Sam Bradford|bradford","Clinton Portis|portis","Eddie Lacy|lacy","Ottis Anderson|ottis","Billy Sims|sims","George Rogers","Calvin Hill"],
      film: ["Warrick Dunn|dunn","Cadillac Williams|carnell williams|cadillac","Mike Anderson","Carl Pickens|pickens","Louis Lipps|lipps","Chuck Foreman|foreman","John Brockington|brockington","Mel Farr|farr"],
      deep: ["Anthony Thomas|a train","Rueben Mayes|mayes","Eddie Brown","Leonard Russell|russell","Sammy White","Mike Thomas","Don Woods"],
      hail: ["John Stephens|stephens","Troy Stradford|stradford","Earl McCullouch|mccullouch","Dennis Shaw"]
    }
  },
  {
    id: "nicknames-players", cat: "culture", diff: "easy",
    prompt: "Name a famous NFL player nickname.",
    note: "The nickname itself, not the player.",
    tiers: {
      chalk: ["Megatron","Beast Mode|beastmode","Prime Time|primetime|neon deion","Sweetness","The Bus|bus"],
      bandwagon: ["Broadway Joe","The Fridge|refrigerator|the refrigerator|fridge","Mean Joe","Matty Ice","Big Ben","Gronk","TB12","The Sheriff|sheriff","Minister of Defense|the minister of defense","Big Yeti","Cheetah","King Henry","Run CMC|cmc","Zeke","OBJ","Johnny Football","Famous Jameis","Captain Kirk","Mr. Irrelevant|mister irrelevant","Joe Cool","Tom Terrific","Coach Prime","JSN","Ochocinco|ocho cinco|chad ochocinco"],
      starter: ["Night Train|night train lane","The Playmaker|playmaker","Bullet Bob","The Snake|snake","Galloping Ghost|the galloping ghost","The Juice|juice","All Day","Jaws","Revis Island","Captain Comeback","Iron Mike","Sauce","Shady","Pacman|pac man","Fitzmagic|fitz magic","Sanchize|the sanchize","Minshew Mania","Joe Brrr|joe burrr","Joe Shiesty","Joey B","Action Jackson","Big Snack","The Freak|freak","Edge","Golden Arm|the golden arm","Mr. Big Chest|mister big chest","Captain Checkdown"],
      film: ["Crazylegs|crazy legs","Golden Boy|the golden boy","Too Tall","Hacksaw","The Diesel|diesel","Air McNair","Mr. Cowboy|mister cowboy","Snacks","The Red Rifle|red rifle","Sexy Rexy","Boz|the boz","Ironhead","Hollywood","The Assassin|assassin"],
      deep: ["Bambi","Slingin' Sammy|slinging sammy|slingin sammy","The Mad Stork|mad stork","White Shoes","Deacon"],
      hail: ["The Kansas Comet|kansas comet","The Mad Bomber|mad bomber","The Throwin' Samoan|throwin samoan|throwing samoan","Emerald City Route Artist|the emerald city route artist"]
    }
  },
  {
    id: "lost-team", cat: "franchise", diff: "easy",
    prompt: "Name a city that lost its NFL team to relocation.",
    note: "The team moved away. AFL counts. Some cities got one back.",
    tiers: {
      chalk: ["Oakland","St. Louis|st louis|saint louis","San Diego"],
      bandwagon: ["Baltimore","Houston","Los Angeles|la"],
      starter: ["Cleveland"],
      film: ["Chicago","Boston"],
      deep: ["Dallas"],
      hail: ["Portsmouth|portsmouth ohio"]
    }
  },
  {
    id: "old-names", cat: "franchise", diff: "easy",
    prompt: "Name a former name of a current NFL franchise.",
    note: "City or nickname changes both count. Full name, please.",
    tiers: {
      chalk: ["Washington Redskins|redskins","Oakland Raiders","St. Louis Rams|st louis rams","San Diego Chargers","Houston Oilers|oilers"],
      bandwagon: ["Baltimore Colts","St. Louis Cardinals|st louis cardinals","Washington Football Team|wft|football team","Los Angeles Raiders|la raiders","Boston Patriots"],
      starter: ["Phoenix Cardinals","Tennessee Oilers","New York Titans|titans of new york","Dallas Texans"],
      film: ["Cleveland Rams","Chicago Cardinals","Boston Redskins","Decatur Staleys|staleys","Chicago Staleys"],
      deep: ["Steagles|phil pitt steagles|phil-pitt","Portsmouth Spartans|spartans","Boston Braves"],
      hail: ["Card-Pitt|card pitt|carpets","Pittsburgh Pirates"]
    }
  },
  {
    id: "browns-qbs", cat: "rosters", diff: "easy",
    prompt: "Name a QB who started a game for the Browns since 1999.",
    note: "The famous jersey. Through the 2024 season.",
    tiers: {
      chalk: ["Baker Mayfield|mayfield|baker","Johnny Manziel|manziel|johnny football","Deshaun Watson|watson"],
      bandwagon: ["Tim Couch|couch","Joe Flacco|flacco","Jameis Winston|winston","Brady Quinn|quinn","Colt McCoy|mccoy","Brian Hoyer|hoyer","Jacoby Brissett|brissett","Robert Griffin III|rg3|robert griffin","Tyrod Taylor"],
      starter: ["Derek Anderson","Brandon Weeden|weeden","Josh McCown","Case Keenum|keenum","DeShone Kizer|kizer","Jeff Garcia|garcia","Trent Dilfer|dilfer","Jake Delhomme|delhomme","Charlie Frye|frye","Kelly Holcomb|holcomb","Jason Campbell","Cody Kessler|kessler","Dorian Thompson-Robinson|dorian thompson robinson|dtr","P.J. Walker|pj walker"],
      film: ["Seneca Wallace|wallace","Luke McCown","Ken Dorsey|dorsey","Bruce Gradkowski|gradkowski","Kevin Hogan|hogan","Austin Davis","Thad Lewis"],
      deep: ["Doug Pederson|pederson","Ty Detmer|detmer","Connor Shaw|shaw"],
      hail: ["Spergon Wynn|wynn"]
    }
  },
  {
    id: "sb48-seahawks", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2013 Seahawks (Russell Wilson's team).",
    note: "Anyone on the 2013 roster that won Super Bowl XLVIII.",
    tiers: {
      chalk: ["Russell Wilson|wilson|russ","Marshawn Lynch|lynch|beast mode","Richard Sherman|sherman"],
      bandwagon: ["Earl Thomas","Kam Chancellor|chancellor|kam","Bobby Wagner|wagner","Doug Baldwin|baldwin","Golden Tate|tate","Percy Harvin|harvin","Malcolm Smith","Michael Bennett"],
      starter: ["Cliff Avril|avril","Jermaine Kearse|kearse","K.J. Wright|kj wright","Bruce Irvin|irvin","Byron Maxwell|maxwell","Zach Miller","Max Unger|unger","Russell Okung|okung","Steven Hauschka|hauschka","Red Bryant","Brandon Mebane|mebane","Chris Clemons|clemons"],
      film: ["Luke Willson|willson","Walter Thurmond|thurmond","Jeremy Lane|lane","Jon Ryan","Robert Turbin|turbin","Michael Robinson","Derrick Coleman","Christine Michael","Tarvaris Jackson","Ricardo Lockette|lockette","J.R. Sweezy|jr sweezy|sweezy","James Carpenter|carpenter","Breno Giacomini|giacomini","Clinton McDonald","Tony McDaniel|mcdaniel"],
      deep: ["O'Brien Schofield|obrien schofield|schofield","DeShawn Shead|shead","Heath Farwell|farwell","Chris Maragos|maragos","Paul McQuistan|mcquistan","Mike Morgan","Clint Gresham|gresham","Michael Bowie|bowie"],
      hail: ["Lemuel Jeanpierre|jeanpierre","Jordan Hill","Alvin Bailey"]
    }
  },
  {
    id: "mahomes-td", cat: "connections", diff: "easy",
    prompt: "Name a player who caught a TD pass from Patrick Mahomes.",
    note: "Regular season or playoffs, through the 2024 season.",
    tiers: {
      chalk: ["Travis Kelce|kelce","Tyreek Hill|hill|cheetah"],
      bandwagon: ["Rashee Rice|rice","Xavier Worthy|worthy","JuJu Smith-Schuster|juju|smith schuster","Mecole Hardman|hardman","Sammy Watkins|watkins","DeAndre Hopkins|hopkins|nuk"],
      starter: ["Marquez Valdes-Scantling|mvs|valdes scantling","Clyde Edwards-Helaire|ceh|edwards helaire","Kareem Hunt|hunt","Demarcus Robinson","Byron Pringle|pringle","Jerick McKinnon|mckinnon","Noah Gray","Justin Watson","Kadarius Toney|toney","Skyy Moore"],
      film: ["Damien Williams","Darrel Williams","Josh Gordon|gordon","Chris Conley|conley","Demetrius Harris"],
      deep: ["Blake Bell"],
      hail: ["Jody Fortson|fortson"]
    }
  },
  {
    id: "85-bears", cat: "rosters", diff: "easy",
    prompt: "Name a player on the 1985 Chicago Bears (Walter Payton's team).",
    note: "The Super Bowl XX champions. Players only.",
    tiers: {
      chalk: ["Walter Payton|payton|sweetness","Jim McMahon|mcmahon","William Perry|the fridge|refrigerator|fridge"],
      bandwagon: ["Mike Singletary|singletary","Richard Dent|dent","Dan Hampton|hampton","Steve McMichael|mcmichael|mongo"],
      starter: ["Otis Wilson","Wilber Marshall|marshall","Gary Fencik|fencik","Dave Duerson|duerson","Willie Gault|gault","Matt Suhey|suhey","Jim Covert|covert"],
      film: ["Leslie Frazier|frazier","Mike Richardson","Dennis McKinnon|mckinnon","Jay Hilgenberg|hilgenberg","Kevin Butler|butler","Steve Fuller|fuller","Emery Moorehead|moorehead"],
      deep: ["Keith Van Horne|van horne","Tom Thayer|thayer","Mark Bortz|bortz","Ken Taylor","Maury Buford|buford","Tim Wrightman|wrightman"],
      hail: ["Calvin Thomas","Shaun Gayle|gayle","Mike Tomczak|tomczak"]
    }
  },
  {
    id: "07-patriots", cat: "rosters", diff: "hard",
    prompt: "Name a player on the 16–0 2007 Patriots (Tom Brady's team).",
    note: "Anyone on the 2007 roster.",
    tiers: {
      chalk: ["Tom Brady|brady","Randy Moss|moss","Wes Welker|welker"],
      bandwagon: ["Vince Wilfork|wilfork","Richard Seymour|seymour","Tedy Bruschi|bruschi","Junior Seau|seau","Rodney Harrison|harrison","Asante Samuel|asante","Kevin Faulk|faulk","Laurence Maroney|maroney","Mike Vrabel|vrabel","Troy Brown"],
      starter: ["Matt Light","Logan Mankins|mankins","Dan Koppen|koppen","Ty Warren","Adalius Thomas","Ellis Hobbs|hobbs","Donte' Stallworth|donte stallworth|stallworth","Ben Watson","Stephen Gostkowski|gostkowski","Matt Cassel|cassel","Brandon Meriweather|meriweather","Sammy Morris"],
      film: ["Jabar Gaffney|gaffney","Heath Evans","Kyle Brady","Jarvis Green","Rosevelt Colvin|colvin","James Sanders","Randall Gay","Stephen Neal","Nick Kaczur|kaczur","Chris Hanson"],
      deep: ["Pierre Woods","Kelley Washington","Eric Alexander","Russ Hochstein|hochstein","Mike Wright"],
      hail: ["Le Kevin Smith|lekevin smith","Larry Izzo|izzo"]
    }
  },
  {
    id: "17-eagles", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2017 Eagles (Nick Foles's team).",
    note: "Anyone on the 2017 roster, injured reserve included.",
    tiers: {
      chalk: ["Nick Foles|foles","Carson Wentz|wentz","Jason Kelce|kelce","Zach Ertz|ertz"],
      bandwagon: ["Alshon Jeffery|alshon|jeffery","Nelson Agholor|agholor","LeGarrette Blount|blount","Jay Ajayi|ajayi","Fletcher Cox|cox","Brandon Graham","Malcolm Jenkins|jenkins","Lane Johnson","Corey Clement|clement","Trey Burton|burton","Jake Elliott|elliott","Chris Long"],
      starter: ["Torrey Smith","Rodney McLeod|mcleod","Jalen Mills|mills","Ronald Darby|darby","Patrick Robinson","Nigel Bradham|bradham","Mychal Kendricks|kendricks","Derek Barnett|barnett","Vinny Curry|curry","Tim Jernigan|jernigan","Brandon Brooks","Jason Peters|peters","Darren Sproles|sproles","Brent Celek|celek"],
      film: ["Halapoulivaati Vaitai|big v|vaitai","Stefen Wisniewski|wisniewski","Beau Allen","Mack Hollins|hollins","Kenjon Barner|barner","Wendell Smallwood|smallwood","Donnie Jones","Nate Sudfeld|sudfeld","Jordan Hicks|hicks","Rasul Douglas","Corey Graham"],
      deep: ["Chance Warmack|warmack","Isaac Seumalo|seumalo","Destiny Vaeao|vaeao","Najee Goode|goode","Kamu Grugier-Hill|grugier hill"],
      hail: ["Rick Lovato|lovato","Bryan Braman|braman"]
    }
  },
  {
    id: "madden-cover", cat: "culture", diff: "easy",
    prompt: "Name a player who has been on the cover of Madden.",
    note: "Any edition, including special editions.",
    tiers: {
      chalk: ["Patrick Mahomes|mahomes","Tom Brady|brady","Lamar Jackson|lamar","Josh Allen","Caleb Williams|caleb"],
      bandwagon: ["Michael Vick|vick","Calvin Johnson|megatron","Odell Beckham Jr.|obj|odell beckham|beckham","Rob Gronkowski|gronk|gronkowski","Christian McCaffrey|cmc|mccaffrey","Saquon Barkley|barkley|saquon","Drew Brees|brees","Brett Favre|favre","Ray Lewis","Richard Sherman|sherman"],
      starter: ["Barry Sanders","Antonio Brown|ab","Marshall Faulk|faulk","Shaun Alexander","Vince Young","Larry Fitzgerald|fitzgerald","Troy Polamalu|polamalu","Donovan McNabb|mcnabb","Eddie George"],
      film: ["Terrell Owens|to|owens"],
      deep: ["Daunte Culpepper|culpepper"],
      hail: ["Peyton Hillis|hillis"]
    }
  },
  {
    id: "two-sport", cat: "culture", diff: "easy",
    prompt: "Name someone who played in both the NFL and MLB (like Bo Jackson).",
    note: "Appeared in regular-season games in both leagues.",
    tiers: {
      chalk: ["Bo Jackson","Deion Sanders|deion|prime time"],
      bandwagon: ["Brian Jordan|jordan"],
      starter: ["Drew Henson|henson","Jim Thorpe|thorpe"],
      film: ["Chad Hutchinson|hutchinson","D.J. Dozier|dj dozier|dozier"],
      deep: ["George Halas|halas|papa bear","Ernie Nevers|nevers"],
      hail: ["Tom Brown"]
    }
  },
  {
    id: "mascots", cat: "franchise", diff: "easy",
    prompt: "Name an NFL team mascot.",
    note: "Costumed or live. The mascot's name.",
    tiers: {
      chalk: ["Swoop","Blitz","K.C. Wolf|kc wolf","Sir Purr"],
      bandwagon: ["Rowdy","Pat Patriot","Toro","Poe","Billy Buffalo","Staley Da Bear|staley the bear|staley","Freddie Falcon","Captain Fear"],
      starter: ["Miles","Rampage","Chomps","Roary","Viktor the Viking|viktor","Jaxson de Ville|jaxson de ville|jaxson","Gumbo","Sir Saint","T.D.|td","Steely McBeam","Big Red","Blue"],
      film: ["Sourdough Sam","Who Dey","T-Rac|trac","Major Tuddy","Raider Rusher","Brownie the Elf|brownie"],
      deep: ["Thunder","Taima|taima the hawk","Boom","Trapper"],
      hail: ["Swagger","Ragnar","Rise and Conquer","Warpaint"]
    }
  },
  {
    id: "jets-qbs", cat: "rosters", diff: "easy",
    prompt: "Name a QB who started a game for the Jets since 2000.",
    note: "The other famous carousel. Through the 2024 season.",
    tiers: {
      chalk: ["Aaron Rodgers|rodgers","Brett Favre|favre","Mark Sanchez|sanchez|sanchize","Zach Wilson"],
      bandwagon: ["Chad Pennington|pennington","Sam Darnold|darnold","Geno Smith|geno","Ryan Fitzpatrick|fitzpatrick|fitzmagic","Joe Flacco|flacco","Michael Vick|vick","Vinny Testaverde|testaverde","Josh McCown|mccown"],
      starter: ["Mike White","Kellen Clemens|clemens","Bryce Petty|petty","Trevor Siemian|siemian","Tim Boyle|boyle"],
      film: ["Brooks Bollinger|bollinger","Greg McElroy|mcelroy"],
      deep: ["Luke Falk|falk"],
      hail: ["Quincy Carter|carter"]
    }
  },
  {
    id: "brady-sb-wins", cat: "superbowl", diff: "easy",
    prompt: "Name a team Tom Brady beat in a Super Bowl.",
    note: "Seven wins, six different opponents.",
    tiers: {
      chalk: ["Kansas City Chiefs|chiefs|kansas city|kc","Atlanta Falcons|falcons|atlanta"],
      bandwagon: ["Seattle Seahawks|seahawks|seattle","Philadelphia Eagles|eagles|philadelphia"],
      starter: ["Los Angeles Rams|rams|st louis rams"],
      film: [],
      deep: [],
      hail: ["Carolina Panthers|panthers|carolina"]
    }
  },
  {
    id: "sb51-scorers", cat: "superbowl", diff: "hard",
    prompt: "Name a player who scored a TD in Super Bowl LI (28–3).",
    note: "Patriots or Falcons. Touchdowns only.",
    tiers: {
      chalk: ["James White|white"],
      bandwagon: ["Danny Amendola|amendola","Devonta Freeman|freeman"],
      starter: ["Robert Alford|alford"],
      film: ["Austin Hooper|hooper"],
      deep: [],
      hail: ["Tevin Coleman|coleman"]
    }
  },
  {
    id: "sb-return-td", cat: "superbowl", diff: "hard",
    prompt: "Name a player with a kick or punt return TD in a Super Bowl.",
    note: "Kickoff or punt return touchdowns only.",
    tiers: {
      chalk: ["Desmond Howard|howard","Devin Hester|hester"],
      bandwagon: ["Jacoby Jones","Percy Harvin|harvin"],
      starter: ["Tim Dwight|dwight","Jermaine Lewis"],
      film: ["Ron Dixon|dixon","Andre Coleman"],
      deep: ["Stanford Jennings|jennings"],
      hail: ["Fulton Walker|walker"]
    }
  },
  {
    id: "coaches-cowboys", cat: "coaches", diff: "easy",
    prompt: "Name a head coach of the Dallas Cowboys since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Mike McCarthy|mccarthy","Jason Garrett|garrett"],
      bandwagon: ["Bill Parcells|parcells|tuna","Brian Schottenheimer|schottenheimer"],
      starter: ["Wade Phillips|phillips"],
      film: [],
      deep: [],
      hail: ["Dave Campo|campo"]
    }
  },
  {
    id: "coaches-raiders", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Raiders since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Jon Gruden|gruden|chucky","Josh McDaniels|mcdaniels","Pete Carroll|carroll"],
      bandwagon: ["Antonio Pierce|pierce","Jack Del Rio|del rio","Lane Kiffin|kiffin"],
      starter: ["Dennis Allen","Hue Jackson","Tom Cable|cable","Art Shell|shell"],
      film: ["Norv Turner","Bill Callahan|callahan"],
      deep: ["Rich Bisaccia|bisaccia"],
      hail: ["Tony Sparano|sparano"]
    }
  },
  {
    id: "coaches-browns", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Cleveland Browns since 1999.",
    note: "Full-time or interim, 1999 through the 2025 season.",
    tiers: {
      chalk: ["Kevin Stefanski|stefanski","Hue Jackson"],
      bandwagon: ["Freddie Kitchens|kitchens","Eric Mangini|mangini","Romeo Crennel|crennel"],
      starter: ["Butch Davis","Mike Pettine|pettine","Pat Shurmur|shurmur","Rob Chudzinski|chudzinski|chud"],
      film: ["Chris Palmer","Gregg Williams"],
      deep: [],
      hail: ["Terry Robiskie|robiskie"]
    }
  },
  {
    id: "coaches-jets", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the New York Jets since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Rex Ryan|ryan","Robert Saleh|saleh","Aaron Glenn|glenn"],
      bandwagon: ["Todd Bowles|bowles","Adam Gase|gase","Herm Edwards|edwards","Eric Mangini|mangini"],
      starter: ["Jeff Ulbrich|ulbrich"],
      film: [],
      deep: [],
      hail: ["Al Groh|groh"]
    }
  },
  {
    id: "coaches-bears", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Chicago Bears since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Matt Nagy|nagy","Ben Johnson","Lovie Smith|lovie"],
      bandwagon: ["Matt Eberflus|eberflus","John Fox|fox","Marc Trestman|trestman"],
      starter: ["Dick Jauron|jauron"],
      film: [],
      deep: [],
      hail: ["Thomas Brown"]
    }
  },
  {
    id: "coaches-dolphins", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Miami Dolphins since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Mike McDaniel|mcdaniel","Nick Saban|saban"],
      bandwagon: ["Brian Flores|flores","Adam Gase|gase","Tony Sparano|sparano","Joe Philbin|philbin"],
      starter: ["Cam Cameron","Dave Wannstedt|wannstedt"],
      film: ["Dan Campbell","Todd Bowles|bowles"],
      deep: [],
      hail: ["Jim Bates"]
    }
  },
  {
    id: "coaches-giants", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the New York Giants since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Brian Daboll|daboll","Tom Coughlin|coughlin"],
      bandwagon: ["Joe Judge|judge","Ben McAdoo|mcadoo","Pat Shurmur|shurmur"],
      starter: ["Jim Fassel|fassel","Mike Kafka|kafka"],
      film: [],
      deep: [],
      hail: ["Steve Spagnuolo|spagnuolo|spags"]
    }
  },
  {
    id: "coaches-washington", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Washington franchise since 2000.",
    note: "Redskins, Football Team or Commanders. Full-time or interim, through 2025.",
    tiers: {
      chalk: ["Ron Rivera|rivera","Dan Quinn|quinn","Joe Gibbs|gibbs"],
      bandwagon: ["Jay Gruden","Mike Shanahan|shanahan","Steve Spurrier|spurrier"],
      starter: ["Jim Zorn|zorn","Marty Schottenheimer"],
      film: ["Norv Turner"],
      deep: ["Bill Callahan|callahan"],
      hail: ["Terry Robiskie|robiskie"]
    }
  },
  {
    id: "bears-qbs", cat: "rosters", diff: "easy",
    prompt: "Name a QB who started a game for the Bears since 2000.",
    note: "Chicago's quarterback carousel, through the 2024 season.",
    tiers: {
      chalk: ["Caleb Williams|caleb","Justin Fields|fields","Jay Cutler|cutler","Mitchell Trubisky|trubisky|mitch trubisky"],
      bandwagon: ["Kyle Orton|orton","Rex Grossman|grossman","Nick Foles|foles","Andy Dalton|dalton","Josh McCown"],
      starter: ["Brian Hoyer|hoyer","Jason Campbell","Jimmy Clausen|clausen","Matt Barkley","Mike Glennon|glennon","Chase Daniel","Brian Griese|griese","Kordell Stewart|kordell|slash","Tyson Bagent|bagent","Trevor Siemian|siemian"],
      film: ["Jim Miller","Cade McNown|mcnown","Shane Matthews","Chris Chandler|chandler","Caleb Hanie|hanie","Jonathan Quinn"],
      deep: ["Craig Krenzel|krenzel","Chad Hutchinson|hutchinson"],
      hail: ["Henry Burris|burris"]
    }
  },
  {
    id: "twelve-sb-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who won a Super Bowl wearing No. 12.",
    note: "The starting quarterback, wearing 12, in a Super Bowl win.",
    tiers: {
      chalk: ["Tom Brady|brady","Aaron Rodgers|rodgers"],
      bandwagon: ["Terry Bradshaw|bradshaw","Joe Namath|namath","Roger Staubach|staubach"],
      starter: ["Ken Stabler|stabler|snake"],
      film: [],
      deep: [],
      hail: ["Bob Griese|griese"]
    }
  },
  {
    id: "bird-teams", cat: "franchise", diff: "easy",
    prompt: "Name an NFL team named after a bird.",
    note: "Five of them.",
    tiers: {
      chalk: ["Philadelphia Eagles|eagles"],
      bandwagon: ["Baltimore Ravens|ravens","Atlanta Falcons|falcons"],
      starter: ["Seattle Seahawks|seahawks"],
      film: [],
      deep: [],
      hail: ["Arizona Cardinals|cardinals"]
    }
  },
  {
    id: "animal-teams", cat: "franchise", diff: "easy",
    prompt: "Name an NFL team named after an animal.",
    note: "Birds count. People and ships don't.",
    tiers: {
      chalk: ["Chicago Bears|bears","Detroit Lions|lions","Philadelphia Eagles|eagles","Miami Dolphins|dolphins"],
      bandwagon: ["Carolina Panthers|panthers","Jacksonville Jaguars|jaguars|jags","Cincinnati Bengals|bengals","Baltimore Ravens|ravens","Atlanta Falcons|falcons","Denver Broncos|broncos","Los Angeles Rams|rams"],
      starter: ["Indianapolis Colts|colts","Seattle Seahawks|seahawks"],
      film: [],
      deep: [],
      hail: ["Arizona Cardinals|cardinals"]
    }
  },
  {
    id: "all-decade-2010s", cat: "awards", diff: "easy",
    prompt: "Name a QB, RB, WR or TE on the NFL's 2010s All-Decade Team.",
    note: "The official first team, offensive skill positions.",
    tiers: {
      chalk: ["Tom Brady|brady","Aaron Rodgers|rodgers","Rob Gronkowski|gronk|gronkowski"],
      bandwagon: ["Calvin Johnson|megatron","Antonio Brown|ab","Julio Jones|julio","Marshawn Lynch|lynch|beast mode","Adrian Peterson|peterson|ap","Travis Kelce|kelce"],
      starter: ["Larry Fitzgerald|fitzgerald","LeSean McCoy|mccoy|shady"],
      film: [],
      deep: [],
      hail: ["Frank Gore|gore"]
    }
  },
  {
    id: "trick-plays", cat: "culture", diff: "easy",
    prompt: "Name a football trick play.",
    note: "The play's name. Any level of football.",
    tiers: {
      chalk: ["Flea Flicker|flea-flicker","Hail Mary","Philly Special"],
      bandwagon: ["Hook and Lateral|hook and ladder|hook & lateral","Statue of Liberty","Fake Punt","Wildcat"],
      starter: ["Fumblerooski","Halfback Pass|halfback option|rb pass","Double Reverse","Fake Field Goal|fake fg"],
      film: ["Fake Spike","Swinging Gate"],
      deep: [],
      hail: ["Annexation of Puerto Rico","Hidden Ball Trick|hidden ball"]
    }
  },
  {
    id: "nfc-north", cat: "franchise", diff: "easy",
    prompt: "Name a team that has played in the NFC North or NFC Central.",
    note: "The Black and Blue division, any era.",
    tiers: {
      chalk: ["Green Bay Packers|packers","Chicago Bears|bears"],
      bandwagon: ["Detroit Lions|lions","Minnesota Vikings|vikings"],
      starter: [],
      film: [],
      deep: [],
      hail: ["Tampa Bay Buccaneers|buccaneers|bucs"]
    }
  },
  {
    id: "sb-2020s", cat: "superbowl", diff: "easy",
    prompt: "Name a team that played in a Super Bowl in the 2020s.",
    note: "Super Bowls LIV through LX (Feb 2020 to Feb 2026).",
    tiers: {
      chalk: ["Kansas City Chiefs|chiefs"],
      bandwagon: ["Philadelphia Eagles|eagles","San Francisco 49ers|49ers|niners","Seattle Seahawks|seahawks|seattle"],
      starter: ["Cincinnati Bengals|bengals","Los Angeles Rams|rams","New England Patriots|patriots|pats|new england"],
      film: [],
      deep: [],
      hail: ["Tampa Bay Buccaneers|buccaneers|bucs"]
    }
  },
  {
    id: "qb-2020", cat: "draft", diff: "easy",
    prompt: "Name a QB taken in the first round of the 2020 draft.",
    note: "Four went in round one.",
    tiers: {
      chalk: ["Joe Burrow|burrow"],
      bandwagon: ["Justin Herbert|herbert","Tua Tagovailoa|tua|tagovailoa"],
      starter: [],
      film: [],
      deep: [],
      hail: ["Jordan Love|love"]
    }
  },
  {
    id: "qb-2023", cat: "draft", diff: "hard",
    prompt: "Name a QB taken in the first round of the 2023 draft.",
    note: "Three went in round one.",
    tiers: {
      chalk: ["C.J. Stroud|cj stroud|stroud"],
      bandwagon: ["Bryce Young"],
      starter: [],
      film: [],
      deep: [],
      hail: ["Anthony Richardson|richardson"]
    }
  },
  {
    id: "sb-never-won-qb", cat: "superbowl", diff: "hard",
    prompt: "Name a QB who started a Super Bowl but never won one (like Dan Marino).",
    note: "Never won one as a starter, through Super Bowl LX.",
    tiers: {
      chalk: ["Dan Marino|marino","Jim Kelly|kelly","Cam Newton|newton","Matt Ryan"],
      bandwagon: ["Colin Kaepernick|kaepernick|kap","Donovan McNabb|mcnabb","Joe Burrow|burrow","Jared Goff|goff","Brock Purdy|purdy","Fran Tarkenton|tarkenton","Jimmy Garoppolo|garoppolo|jimmy g"],
      starter: ["Rex Grossman|grossman","Jake Delhomme|delhomme","Matt Hasselbeck|hasselbeck","Steve McNair|mcnair","Rich Gannon|gannon","Boomer Esiason|esiason|boomer","Drake Maye"],
      film: ["Kerry Collins","Chris Chandler|chandler","Stan Humphries|humphries","Neil O'Donnell|neil odonnell|odonnell","Ron Jaworski|jaworski|jaws","Ken Anderson"],
      deep: ["Tony Eason|eason","Craig Morton|morton","Billy Kilmer|kilmer","Vince Ferragamo|ferragamo"],
      hail: ["David Woodley|woodley","Joe Kapp|kapp"]
    }
  },
  {
    id: "coaches-bills", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Buffalo Bills since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Sean McDermott|mcdermott","Rex Ryan|ryan"],
      bandwagon: ["Doug Marrone|marrone","Chan Gailey|gailey","Dick Jauron|jauron"],
      starter: ["Wade Phillips|phillips","Mike Mularkey|mularkey","Gregg Williams"],
      film: ["Perry Fewell|fewell"],
      deep: [],
      hail: ["Anthony Lynn|lynn"]
    }
  },
  {
    id: "coaches-patriots", cat: "coaches", diff: "easy",
    prompt: "Name a head coach of the New England Patriots since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Bill Belichick|belichick|hoodie"],
      bandwagon: ["Mike Vrabel|vrabel"],
      starter: [],
      film: [],
      deep: [],
      hail: ["Jerod Mayo|mayo"]
    }
  },
  {
    id: "coaches-ravens", cat: "coaches", diff: "easy",
    prompt: "Name a head coach of the Baltimore Ravens since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["John Harbaugh"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: [],
      hail: ["Brian Billick|billick"]
    }
  },
  {
    id: "coaches-bengals", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Cincinnati Bengals since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Zac Taylor|taylor","Marvin Lewis|lewis"],
      bandwagon: [],
      starter: [],
      film: ["Dick LeBeau|lebeau"],
      deep: [],
      hail: ["Bruce Coslet|coslet"]
    }
  },
  {
    id: "coaches-steelers", cat: "coaches", diff: "easy",
    prompt: "Name a head coach of the Pittsburgh Steelers since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season. Short list.",
    tiers: {
      chalk: ["Mike Tomlin|tomlin"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: [],
      hail: ["Bill Cowher|cowher"]
    }
  },
  {
    id: "coaches-texans", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Houston Texans.",
    note: "Every coach since the franchise began in 2002, interims included, through 2025.",
    tiers: {
      chalk: ["DeMeco Ryans|ryans","Bill O'Brien|bill obrien|obrien"],
      bandwagon: ["Gary Kubiak|kubiak","Lovie Smith|lovie"],
      starter: ["David Culley|culley","Dom Capers|capers"],
      film: ["Romeo Crennel|crennel"],
      deep: [],
      hail: ["Wade Phillips|phillips"]
    }
  },
  {
    id: "coaches-colts", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Indianapolis Colts since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Tony Dungy|dungy","Shane Steichen|steichen","Jeff Saturday|saturday"],
      bandwagon: ["Frank Reich|reich","Chuck Pagano|pagano","Jim Caldwell|caldwell"],
      starter: ["Jim Mora|mora"],
      film: [],
      deep: [],
      hail: ["Bruce Arians|arians"]
    }
  },
  {
    id: "coaches-jaguars", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Jacksonville Jaguars since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Urban Meyer|urban","Doug Pederson|pederson","Liam Coen|coen"],
      bandwagon: ["Jack Del Rio|del rio","Tom Coughlin|coughlin","Doug Marrone|marrone"],
      starter: ["Gus Bradley|bradley"],
      film: ["Mike Mularkey|mularkey"],
      deep: ["Darrell Bevell|bevell"],
      hail: ["Mel Tucker|tucker"]
    }
  },
  {
    id: "coaches-titans", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Tennessee Titans since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Mike Vrabel|vrabel","Jeff Fisher|fisher"],
      bandwagon: ["Brian Callahan|callahan"],
      starter: ["Mike Munchak|munchak","Ken Whisenhunt|whisenhunt"],
      film: ["Mike McCoy|mccoy"],
      deep: [],
      hail: ["Mike Mularkey|mularkey"]
    }
  },
  {
    id: "coaches-broncos", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Denver Broncos since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Sean Payton|payton","Mike Shanahan|shanahan"],
      bandwagon: ["Josh McDaniels|mcdaniels","Nathaniel Hackett|hackett","Gary Kubiak|kubiak","John Fox|fox"],
      starter: ["Vic Fangio|fangio","Vance Joseph"],
      film: [],
      deep: ["Jerry Rosburg|rosburg"],
      hail: ["Eric Studesville|studesville"]
    }
  },
  {
    id: "coaches-chiefs", cat: "coaches", diff: "easy",
    prompt: "Name a head coach of the Kansas City Chiefs since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Andy Reid|reid|big red"],
      bandwagon: ["Dick Vermeil|vermeil","Herm Edwards|edwards"],
      starter: ["Todd Haley|haley","Romeo Crennel|crennel"],
      film: [],
      deep: [],
      hail: ["Gunther Cunningham|cunningham"]
    }
  },
  {
    id: "coaches-chargers", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Chargers since 2000.",
    note: "San Diego or Los Angeles. Full-time or interim, through 2025.",
    tiers: {
      chalk: ["Jim Harbaugh","Brandon Staley|staley"],
      bandwagon: ["Norv Turner|turner","Marty Schottenheimer|schottenheimer","Anthony Lynn|lynn"],
      starter: ["Mike McCoy|mccoy"],
      film: ["Mike Riley|riley"],
      deep: [],
      hail: ["Giff Smith"]
    }
  },
  {
    id: "coaches-eagles", cat: "coaches", diff: "easy",
    prompt: "Name a head coach of the Philadelphia Eagles since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Andy Reid|reid","Nick Sirianni|sirianni"],
      bandwagon: ["Doug Pederson|pederson","Chip Kelly|kelly"],
      starter: [],
      film: [],
      deep: [],
      hail: ["Pat Shurmur|shurmur"]
    }
  },
  {
    id: "coaches-lions", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Detroit Lions since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Dan Campbell|campbell","Matt Patricia|patricia"],
      bandwagon: ["Jim Schwartz|schwartz","Jim Caldwell|caldwell","Rod Marinelli|marinelli"],
      starter: ["Steve Mariucci|mariucci","Marty Mornhinweg|mornhinweg"],
      film: ["Bobby Ross","Darrell Bevell|bevell"],
      deep: ["Dick Jauron|jauron"],
      hail: ["Gary Moeller|moeller"]
    }
  },
  {
    id: "coaches-packers", cat: "coaches", diff: "easy",
    prompt: "Name a head coach of the Green Bay Packers since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Matt LaFleur|lafleur","Mike McCarthy|mccarthy"],
      bandwagon: [],
      starter: ["Mike Sherman|sherman"],
      film: [],
      deep: [],
      hail: ["Joe Philbin|philbin"]
    }
  },
  {
    id: "coaches-vikings", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Minnesota Vikings since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Kevin O'Connell|kevin oconnell|oconnell|koc","Mike Zimmer|zimmer"],
      bandwagon: ["Brad Childress|childress","Dennis Green|denny green"],
      starter: ["Leslie Frazier|frazier"],
      film: [],
      deep: [],
      hail: ["Mike Tice|tice"]
    }
  },
  {
    id: "coaches-falcons", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Atlanta Falcons since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Raheem Morris|morris","Arthur Smith","Dan Quinn|quinn"],
      bandwagon: ["Mike Smith","Bobby Petrino|petrino"],
      starter: ["Jim Mora|mora","Dan Reeves|reeves"],
      film: [],
      deep: ["Emmitt Thomas"],
      hail: ["Wade Phillips|phillips"]
    }
  },
  {
    id: "coaches-panthers", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Carolina Panthers since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Ron Rivera|rivera","Matt Rhule|rhule","Dave Canales|canales"],
      bandwagon: ["John Fox|fox","Frank Reich|reich"],
      starter: ["George Seifert|seifert","Steve Wilks|wilks"],
      film: ["Perry Fewell|fewell"],
      deep: [],
      hail: ["Chris Tabor|tabor"]
    }
  },
  {
    id: "coaches-saints", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the New Orleans Saints since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Sean Payton|payton"],
      bandwagon: ["Dennis Allen","Kellen Moore"],
      starter: ["Jim Haslett|haslett"],
      film: ["Joe Vitt|vitt","Darren Rizzi|rizzi"],
      deep: [],
      hail: ["Aaron Kromer|kromer"]
    }
  },
  {
    id: "coaches-bucs", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Tampa Bay Buccaneers since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Bruce Arians|arians","Jon Gruden|gruden|chucky","Todd Bowles|bowles"],
      bandwagon: ["Tony Dungy|dungy","Lovie Smith|lovie","Greg Schiano|schiano"],
      starter: ["Raheem Morris|morris"],
      film: [],
      deep: [],
      hail: ["Dirk Koetter|koetter"]
    }
  },
  {
    id: "coaches-cardinals", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Arizona Cardinals since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Kliff Kingsbury|kingsbury","Bruce Arians|arians","Jonathan Gannon|gannon"],
      bandwagon: ["Ken Whisenhunt|whisenhunt","Dennis Green|denny green","Steve Wilks|wilks"],
      starter: [],
      film: ["Dave McGinnis|mcginnis"],
      deep: [],
      hail: ["Vince Tobin|tobin"]
    }
  },
  {
    id: "coaches-rams", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Rams since 2000.",
    note: "St. Louis or Los Angeles. Full-time or interim, through 2025.",
    tiers: {
      chalk: ["Sean McVay|mcvay","Jeff Fisher|fisher"],
      bandwagon: ["Mike Martz|martz","Steve Spagnuolo|spagnuolo|spags"],
      starter: ["Scott Linehan|linehan"],
      film: ["Jim Haslett|haslett","Joe Vitt|vitt"],
      deep: [],
      hail: ["John Fassel|bones fassel"]
    }
  },
  {
    id: "coaches-49ers", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the San Francisco 49ers since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Kyle Shanahan|shanahan","Jim Harbaugh"],
      bandwagon: ["Mike Singletary|singletary","Chip Kelly|kelly","Steve Mariucci|mariucci"],
      starter: ["Mike Nolan|nolan","Jim Tomsula|tomsula"],
      film: [],
      deep: [],
      hail: ["Dennis Erickson|erickson"]
    }
  },
  {
    id: "coaches-seahawks", cat: "coaches", diff: "hard",
    prompt: "Name a head coach of the Seattle Seahawks since 2000.",
    note: "Full-time or interim, 2000 through the 2025 season.",
    tiers: {
      chalk: ["Pete Carroll|carroll","Mike Macdonald|macdonald"],
      bandwagon: ["Mike Holmgren|holmgren"],
      starter: [],
      film: [],
      deep: [],
      hail: ["Jim Mora|mora"]
    }
  },
  {
    id: "raiders-qbs", cat: "rosters", diff: "easy",
    prompt: "Name a QB who started a game for the Raiders since 2000.",
    note: "Oakland or Las Vegas, through the 2024 season.",
    tiers: {
      chalk: ["Derek Carr|carr","Rich Gannon|gannon","Jimmy Garoppolo|garoppolo|jimmy g","JaMarcus Russell|jamarcus|russell"],
      bandwagon: ["Carson Palmer|palmer","Gardner Minshew|minshew","Aidan O'Connell|aidan oconnell|oconnell","Kerry Collins","Daunte Culpepper|culpepper","Terrelle Pryor|pryor"],
      starter: ["Jason Campbell","Josh McCown","Matt Flynn|flynn","Matt McGloin|mcgloin","Bruce Gradkowski|gradkowski","Aaron Brooks","Desmond Ridder|ridder","Brian Hoyer|hoyer","Jarrett Stidham|stidham"],
      film: ["Andrew Walter","Charlie Frye|frye","Connor Cook","Kyle Boller|boller","Rick Mirer|mirer"],
      deep: ["EJ Manuel|e j manuel"],
      hail: ["Marques Tuiasosopo|tuiasosopo"]
    }
  },
  {
    id: "dolphins-qbs", cat: "rosters", diff: "easy",
    prompt: "Name a QB who started a game for the Dolphins since 2000.",
    note: "Life after Marino, through the 2024 season.",
    tiers: {
      chalk: ["Tua Tagovailoa|tua|tagovailoa","Ryan Tannehill|tannehill","Chad Pennington|pennington","Daunte Culpepper|culpepper"],
      bandwagon: ["Jay Cutler|cutler","Ryan Fitzpatrick|fitzpatrick|fitzmagic","Jay Fiedler|fiedler","Chad Henne|henne","Matt Moore","Josh Rosen|rosen","Teddy Bridgewater|bridgewater","Jacoby Brissett|brissett","Trent Green","Brock Osweiler|osweiler"],
      starter: ["Joey Harrington|harrington","A.J. Feeley|aj feeley|feeley","Gus Frerotte|frerotte","Cleo Lemon|lemon","John Beck","Brian Griese|griese","Skylar Thompson","Tyler Huntley|huntley"],
      film: [],
      deep: [],
      hail: ["Ray Lucas"]
    }
  },
  {
    id: "washington-qbs", cat: "rosters", diff: "easy",
    prompt: "Name a QB who started a game for Washington since 2000.",
    note: "Redskins, Football Team or Commanders, through the 2024 season.",
    tiers: {
      chalk: ["Jayden Daniels|daniels","Robert Griffin III|rg3|robert griffin","Kirk Cousins|cousins","Alex Smith"],
      bandwagon: ["Donovan McNabb|mcnabb","Mark Brunell|brunell","Jason Campbell","Rex Grossman|grossman","Carson Wentz|wentz","Taylor Heinicke|heinicke","Colt McCoy|mccoy","Dwayne Haskins|haskins","Sam Howell|howell"],
      starter: ["Patrick Ramsey|ramsey","Brad Johnson","Jeff George","Tony Banks","Todd Collins","John Beck","Kyle Allen","Case Keenum|keenum","Mark Sanchez|sanchez","Marcus Mariota|mariota","Josh Johnson"],
      film: ["Shane Matthews","Danny Wuerffel|wuerffel"],
      deep: [],
      hail: ["Tim Hasselbeck"]
    }
  },
  {
    id: "lions-qbs", cat: "rosters", diff: "easy",
    prompt: "Name a QB who started a game for the Lions since 2000.",
    note: "Through the 2024 season.",
    tiers: {
      chalk: ["Jared Goff|goff","Matthew Stafford|stafford"],
      bandwagon: ["Joey Harrington|harrington","Jon Kitna|kitna","Daunte Culpepper|culpepper","Jeff Garcia|garcia","Charlie Batch|batch","Shaun Hill"],
      starter: ["Dan Orlovsky|orlovsky","Drew Stanton|stanton","Mike McMahon|mcmahon","Chase Daniel","Tim Boyle|boyle","David Blough|blough","Ty Detmer|detmer","Jeff Driskel|driskel"],
      film: [],
      deep: [],
      hail: ["Stoney Case"]
    }
  },
  {
    id: "15-broncos", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2015 Broncos (Peyton Manning's team).",
    note: "Anyone on the 2015 roster, injured reserve included.",
    tiers: {
      chalk: ["Peyton Manning","Von Miller|miller"],
      bandwagon: ["Demaryius Thomas","Emmanuel Sanders|sanders","DeMarcus Ware|ware","Aqib Talib|talib","Chris Harris Jr.|chris harris","Brock Osweiler|osweiler","C.J. Anderson|cj anderson"],
      starter: ["T.J. Ward|tj ward","Ronnie Hillman|hillman","Owen Daniels","Brandon McManus|mcmanus","Derek Wolfe|wolfe","Malik Jackson","Danny Trevathan|trevathan","Brandon Marshall","Vernon Davis","Bradley Roby|roby"],
      film: ["Darian Stewart","Shane Ray","Sylvester Williams","Virgil Green","Jordan Norwood|norwood","Bennie Fowler|fowler","Cody Latimer|latimer","Evan Mathis|mathis","Matt Paradis|paradis","Louis Vasquez|vasquez","Ryan Harris"],
      deep: ["Britton Colquitt|colquitt","Kayvon Webster","Omar Bolden|bolden","David Bruton|bruton","Antonio Smith","Vance Walker","Shaquil Barrett|barrett","Michael Schofield","Andre Caldwell"],
      hail: ["Juwan Thompson","Lerentee McCray|mccray"]
    }
  },
  {
    id: "20-bucs", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2020 Buccaneers (Tom Brady's team).",
    note: "Anyone on the 2020 roster, injured reserve included.",
    tiers: {
      chalk: ["Tom Brady|brady","Rob Gronkowski|gronk|gronkowski","Mike Evans|evans"],
      bandwagon: ["Chris Godwin|godwin","Antonio Brown|ab","Leonard Fournette|fournette|playoff lenny","Lavonte David","Devin White","Shaquil Barrett|barrett","Jason Pierre-Paul|jpp|pierre paul","Vita Vea|vea","Ndamukong Suh|suh","Tristan Wirfs|wirfs"],
      starter: ["Ronald Jones|rojo","Antoine Winfield Jr.|antoine winfield","Carlton Davis","Sean Murphy-Bunting|murphy bunting","Jamel Dean","Jordan Whitehead|whitehead","Ryan Jensen|jensen","Ali Marpet|marpet","Cameron Brate|brate","O.J. Howard|oj howard","Scotty Miller","Ryan Succop|succop","LeSean McCoy|shady","Blaine Gabbert|gabbert"],
      film: ["Donovan Smith","Alex Cappa|cappa","Mike Edwards","Tyler Johnson","Bradley Pinion|pinion","Ke'Shawn Vaughn|keshawn vaughn","William Gholston|gholston","Kevin Minter|minter"],
      deep: ["Anthony Nelson","Ross Cockrell|cockrell"],
      hail: ["Steve McLendon|mclendon"]
    }
  },
  {
    id: "21-rams", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2021 Rams (Matthew Stafford's team).",
    note: "Anyone on the 2021 roster, injured reserve included.",
    tiers: {
      chalk: ["Matthew Stafford|stafford","Cooper Kupp|kupp","Aaron Donald|donald"],
      bandwagon: ["Jalen Ramsey|ramsey","Von Miller|miller","Odell Beckham Jr.|obj|odell beckham|beckham","Robert Woods","Andrew Whitworth|whitworth","Sony Michel|sony","Cam Akers|akers"],
      starter: ["Van Jefferson","Tyler Higbee|higbee","Darrell Henderson|henderson","Leonard Floyd|floyd","Rob Havenstein|havenstein","Ernest Jones","Taylor Rapp|rapp","Eric Weddle|weddle","Matt Gay","Johnny Hekker|hekker","A'Shawn Robinson|ashawn robinson","Greg Gaines","Darious Williams"],
      film: ["Nick Scott","Troy Reeder|reeder","Brian Allen","Austin Corbett|corbett","David Edwards","David Long","Sebastian Joseph-Day|joseph day","Ben Skowronek|skowronek","John Wolford|wolford","Jordan Fuller"],
      deep: ["Kendall Blanton|blanton","Brandon Powell","Terrell Lewis","Justin Hollins|hollins"],
      hail: ["Dont'e Deayon|donte deayon|deayon"]
    }
  },
  {
    id: "24-eagles", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2024 Eagles (Jalen Hurts's team).",
    note: "Anyone on the 2024 roster, injured reserve included.",
    tiers: {
      chalk: ["Jalen Hurts|hurts","Saquon Barkley|barkley|saquon","A.J. Brown|aj brown"],
      bandwagon: ["DeVonta Smith|devonta","Dallas Goedert|goedert","Lane Johnson","Jordan Mailata|mailata","Jalen Carter","Cooper DeJean|dejean","Quinyon Mitchell","Darius Slay|slay|big play slay","Zack Baun|baun","Jake Elliott|elliott"],
      starter: ["Landon Dickerson","Cam Jurgens|jurgens","Mekhi Becton|becton","Josh Sweat|sweat","Nakobe Dean","Reed Blankenship|blankenship","C.J. Gardner-Johnson|cj gardner johnson|cjgj","Jordan Davis","Milton Williams","Brandon Graham","Nolan Smith","Kenny Pickett|pickett"],
      film: ["Bryce Huff|huff","Kenneth Gainwell|gainwell","Jahan Dotson|dotson","Grant Calcaterra|calcaterra","Will Shipley|shipley","Oren Burks|burks","Isaiah Rodgers","Avonte Maddox|maddox","Tanner McKee|mckee","Braden Mann"],
      deep: ["Moro Ojomo|ojomo","Britain Covey|covey","Johnny Wilson"],
      hail: ["Kelee Ringo|ringo"]
    }
  },
  {
    id: "nfl-twins", cat: "culture", diff: "hard",
    prompt: "Name an NFL player whose twin brother also played in the NFL.",
    note: "Either twin counts.",
    tiers: {
      chalk: ["Tiki Barber","Ronde Barber"],
      bandwagon: ["Devin McCourty","Jason McCourty"],
      starter: ["Maurkice Pouncey","Mike Pouncey"],
      film: [],
      deep: [],
      hail: ["Shaquem Griffin","Shaquill Griffin"]
    }
  },
  {
    id: "qb-brothers", cat: "culture", diff: "easy",
    prompt: "Name a family with two brothers who both played QB in the NFL.",
    note: "The last name is enough.",
    tiers: {
      chalk: ["Manning|mannings|peyton and eli"],
      bandwagon: ["McCown|mccowns"],
      starter: ["Hasselbeck|hasselbecks"],
      film: ["Detmer|detmers"],
      deep: [],
      hail: ["Huard|huards"]
    }
  },
  {
    id: "father-son", cat: "culture", diff: "easy",
    prompt: "Name a family where a father and son both played in the NFL.",
    note: "The last name is enough.",
    tiers: {
      chalk: ["Manning|mannings"],
      bandwagon: ["Bosa|bosas","Matthews|matthews family","McCaffrey|mccaffreys","Sanders|deion and shedeur","Harrison|marvin harrison"],
      starter: ["Long|howie long","Griese|grieses","Winslow|winslows","Simms|simmses"],
      film: [],
      deep: [],
      hail: ["Hasselbeck|hasselbecks"]
    }
  },
  {
    id: "double-mvp", cat: "awards", diff: "easy",
    prompt: "Name a player who won NFL MVP and Super Bowl MVP in the same season.",
    note: "Eight players have done it.",
    tiers: {
      chalk: ["Patrick Mahomes|mahomes"],
      bandwagon: ["Joe Montana|montana","Emmitt Smith|emmitt","Steve Young"],
      starter: ["Kurt Warner|warner","Terry Bradshaw|bradshaw"],
      film: ["Terrell Davis|davis|td"],
      deep: [],
      hail: ["Bart Starr|starr"]
    }
  },
  {
    id: "coy-2000s", cat: "awards", diff: "hard",
    prompt: "Name an AP Coach of the Year since 2000.",
    note: "2000 through 2024.",
    tiers: {
      chalk: ["Bill Belichick|belichick","Andy Reid|reid","Sean McVay|mcvay"],
      bandwagon: ["Kevin Stefanski|stefanski","Brian Daboll|daboll","John Harbaugh","Jim Harbaugh","Sean Payton|payton","Kevin O'Connell|kevin oconnell|oconnell","Mike Vrabel|vrabel"],
      starter: ["Bruce Arians|arians","Ron Rivera|rivera","Matt Nagy|nagy","Jason Garrett|garrett","Lovie Smith|lovie","Marvin Lewis"],
      film: ["Marty Schottenheimer|schottenheimer","Mike Smith"],
      deep: ["Dick Jauron|jauron"],
      hail: ["Jim Haslett|haslett"]
    }
  },
  {
    id: "droy-2010s", cat: "awards", diff: "hard",
    prompt: "Name an AP Defensive Rookie of the Year since 2010.",
    note: "2010 through 2024.",
    tiers: {
      chalk: ["Aaron Donald|donald","Micah Parsons|parsons","Nick Bosa","Von Miller|miller"],
      bandwagon: ["Luke Kuechly|kuechly","Chase Young","Sauce Gardner|ahmad gardner|sauce","Joey Bosa","Will Anderson Jr.|will anderson","Ndamukong Suh|suh"],
      starter: ["Marcus Peters|peters","Marshon Lattimore|lattimore","Darius Leonard|shaquille leonard|leonard","Jared Verse|verse"],
      film: [],
      deep: [],
      hail: ["Sheldon Richardson|richardson"]
    }
  },
  {
    id: "stadiums-now", cat: "venues", diff: "easy",
    prompt: "Name a current NFL stadium.",
    note: "Any of the 30 stadiums teams call home in 2026. Older names of the same stadium count.",
    tiers: {
      chalk: ["Lambeau Field|lambeau","AT&T Stadium|att stadium|at and t stadium|at t stadium|jerry world|cowboys stadium","SoFi Stadium|sofi","MetLife Stadium|metlife|new meadowlands stadium","Arrowhead Stadium|arrowhead|geha field|geha field at arrowhead","Soldier Field"],
      bandwagon: ["Gillette Stadium|gillette","Allegiant Stadium|allegiant|the death star","Lincoln Financial Field|the linc|linc|lincoln financial","Levi's Stadium|levis stadium|levis","Caesars Superdome|superdome|louisiana superdome|mercedes benz superdome|the dome","Lumen Field|centurylink field|qwest field|lumen","Mercedes-Benz Stadium|mercedes benz stadium"],
      starter: ["Hard Rock Stadium|hard rock|sun life stadium|dolphin stadium|joe robbie stadium|pro player stadium","Ford Field","M&T Bank Stadium|m and t bank stadium|mt bank stadium|m t bank stadium|psinet stadium|ravens stadium","U.S. Bank Stadium|us bank stadium","Raymond James Stadium|raymond james|ray jay","Lucas Oil Stadium|lucas oil","Highmark Stadium|highmark|new era field|ralph wilson stadium|the ralph|bills stadium","NRG Stadium|reliant stadium|nrg"],
      film: ["Bank of America Stadium|ericsson stadium","State Farm Stadium|university of phoenix stadium|cardinals stadium","Empower Field at Mile High|empower field|sports authority field|invesco field|broncos stadium at mile high","Acrisure Stadium|heinz field|acrisure","Paycor Stadium|paul brown stadium|paycor"],
      deep: ["Nissan Stadium|lp field|the coliseum|adelphia coliseum|nissan","Northwest Stadium|fedexfield|fedex field|jack kent cooke stadium|commanders field","EverBank Stadium|everbank field|tiaa bank field|alltel stadium|jacksonville municipal stadium|everbank"],
      hail: ["Huntington Bank Field|firstenergy stadium|cleveland browns stadium|huntington bank"]
    }
  },
  {
    id: "stadiums-old", cat: "venues", diff: "hard",
    prompt: "Name a stadium an NFL team used to call home.",
    note: "Retired NFL homes from any era. The stadium no longer hosts an NFL team.",
    tiers: {
      chalk: ["Candlestick Park|candlestick|3com park|monster park","Texas Stadium","Giants Stadium","Oakland Coliseum|oakland alameda county coliseum|network associates coliseum|mcafee coliseum|o co coliseum|ringcentral coliseum|the coliseum oakland","Qualcomm Stadium|qualcomm|jack murphy stadium|san diego stadium|sdccu stadium|the q","Metrodome|hubert h humphrey metrodome|humphrey metrodome|the dome minneapolis"],
      bandwagon: ["Three Rivers Stadium|three rivers","RFK Stadium|robert f kennedy stadium|robert f kennedy memorial stadium|rfk","Veterans Stadium|the vet|vet stadium","Edward Jones Dome|trans world dome|dome at americas center|the dome at americas center","Georgia Dome","Pontiac Silverdome|silverdome","Astrodome|houston astrodome","Los Angeles Memorial Coliseum|la coliseum|los angeles coliseum|memorial coliseum"],
      starter: ["Riverfront Stadium|cinergy field|riverfront","Cleveland Municipal Stadium|municipal stadium|cleveland stadium","Mile High Stadium|mile high","Kingdome|the kingdome","Foxboro Stadium|schaefer stadium|sullivan stadium","Shea Stadium|shea","Orange Bowl|miami orange bowl","Tampa Stadium|houlihans stadium|the big sombrero|big sombrero","RCA Dome|hoosier dome"],
      film: ["Memorial Stadium|baltimore memorial stadium","Tulane Stadium","Sun Devil Stadium","Wrigley Field|wrigley","Polo Grounds|the polo grounds","Yankee Stadium|old yankee stadium","War Memorial Stadium|the rockpile|rockpile|buffalo war memorial stadium","Anaheim Stadium|angel stadium|the big a|big a","Busch Memorial Stadium|busch stadium|busch"],
      deep: ["Tiger Stadium|briggs stadium|navin field","Comiskey Park","Fenway Park|fenway","Kezar Stadium|kezar","Metropolitan Stadium|the met|met stadium","Cotton Bowl","Liberty Bowl Memorial Stadium|liberty bowl","Husky Stadium","Dignity Health Sports Park|stubhub center","Vanderbilt Stadium|dudley field","Clemson Memorial Stadium|memorial stadium clemson|death valley"],
      hail: ["Griffith Stadium","Forbes Field","Connie Mack Stadium|shibe park","Franklin Field","Braves Field","Rice Stadium","Jeppesen Stadium|robertson stadium","Balboa Stadium","Nippert Stadium","Spartan Municipal Stadium|universal stadium portsmouth","League Park"]
    }
  },
  {
    id: "intl-countries", cat: "venues", diff: "easy",
    prompt: "Name a country outside the U.S. that has hosted an NFL regular-season game.",
    note: "Through the 2026 international slate.",
    tiers: {
      chalk: ["England|united kingdom|uk|great britain|britain|london|wembley","Mexico|mexico city"],
      bandwagon: ["Germany|munich|berlin|frankfurt","Brazil|sao paulo|rio|rio de janeiro"],
      starter: ["Ireland|republic of ireland|dublin","Spain|madrid"],
      film: ["Canada|toronto"],
      deep: ["Australia|melbourne"],
      hail: ["France|paris"]
    }
  },
  {
    id: "draft-hosts", cat: "venues", diff: "easy",
    prompt: "Name a city that has hosted the NFL Draft.",
    note: "Any year from 1936, plus the announced 2027 host.",
    tiers: {
      chalk: ["Detroit","Green Bay","Las Vegas|vegas","New York City|new york|nyc|manhattan"],
      bandwagon: ["Kansas City|kc","Nashville","Pittsburgh","Chicago"],
      starter: ["Philadelphia|philly","Cleveland","Arlington|dallas|arlington texas"],
      film: ["Washington|washington dc|dc|washington d c|national mall"],
      deep: ["Milwaukee"],
      hail: ["Los Angeles|la"]
    }
  },
  {
    id: "def-sb-mvp", cat: "superbowl", diff: "hard",
    prompt: "Name a defensive player who won Super Bowl MVP (like Ray Lewis).",
    note: "Ten defenders through Super Bowl LX, including one pair of co-MVPs.",
    tiers: {
      chalk: ["Ray Lewis","Von Miller"],
      bandwagon: ["Malcolm Smith","Richard Dent"],
      starter: ["Larry Brown","Dexter Jackson"],
      film: ["Randy White","Harvey Martin"],
      deep: ["Chuck Howley"],
      hail: ["Jake Scott"]
    }
  },
  {
    id: "sb-player-coach", cat: "superbowl", diff: "hard",
    prompt: "Name someone who won a Super Bowl as a player AND as a head coach.",
    note: "Only four people have done it.",
    tiers: {
      chalk: ["Mike Ditka"],
      bandwagon: ["Tony Dungy"],
      starter: ["Doug Pederson"],
      film: [],
      deep: ["Tom Flores"],
      hail: []
    }
  },
  {
    id: "wildcard-champs", cat: "superbowl", diff: "hard",
    prompt: "Name a team that won the Super Bowl as a wild card.",
    note: "Didn't win its division that year. Seven champions through Super Bowl LX.",
    tiers: {
      chalk: ["New York Giants|giants|ny giants|nyg","Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa"],
      bandwagon: ["Green Bay Packers|packers|green bay"],
      starter: ["Baltimore Ravens|ravens|baltimore"],
      film: ["Pittsburgh Steelers|steelers|pittsburgh"],
      deep: ["Denver Broncos|broncos|denver"],
      hail: ["Oakland Raiders|raiders|oakland|los angeles raiders|las vegas raiders"]
    }
  },
  {
    id: "back-to-back", cat: "superbowl", diff: "easy",
    prompt: "Name a team that won back-to-back Super Bowls.",
    note: "Two straight titles. Through Super Bowl LX.",
    tiers: {
      chalk: ["Kansas City Chiefs|chiefs|kansas city|kc","New England Patriots|patriots|pats|new england"],
      bandwagon: ["Pittsburgh Steelers|steelers|pittsburgh","Dallas Cowboys|cowboys|dallas"],
      starter: ["Denver Broncos|broncos|denver"],
      film: ["San Francisco 49ers|49ers|niners|san francisco|sf"],
      deep: ["Miami Dolphins|dolphins|miami"],
      hail: ["Green Bay Packers|packers|green bay"]
    }
  },
  {
    id: "never-sb", cat: "franchise", diff: "easy",
    prompt: "Name a franchise that has never played in a Super Bowl.",
    note: "Never even reached the game, through Super Bowl LX.",
    tiers: {
      chalk: ["Detroit Lions|lions|detroit"],
      bandwagon: ["Cleveland Browns|browns|cleveland"],
      starter: ["Houston Texans|texans|houston"],
      film: ["Jacksonville Jaguars|jaguars|jags|jacksonville"],
      deep: [],
      hail: []
    }
  },
  {
    id: "seven-td", cat: "records", diff: "hard",
    prompt: "Name a QB who threw 7 touchdown passes in one game.",
    note: "The NFL record. Eight QBs share it.",
    tiers: {
      chalk: ["Peyton Manning","Drew Brees"],
      bandwagon: ["Nick Foles"],
      starter: ["George Blanda"],
      film: ["Y.A. Tittle|ya tittle|y a tittle|yelberton abraham tittle","Sid Luckman"],
      deep: ["Joe Kapp"],
      hail: ["Adrian Burk"]
    }
  },
  {
    id: "halftime", cat: "culture", diff: "easy",
    prompt: "Name a performer from a Super Bowl halftime show.",
    note: "Headliners and featured performers, 1991 through Super Bowl LX.",
    tiers: {
      chalk: ["Beyoncé|beyonce","Rihanna","Usher","Kendrick Lamar","Bad Bunny","Michael Jackson|mj","The Weeknd|weeknd","Lady Gaga","Shakira","Jennifer Lopez|jlo|j lo"],
      bandwagon: ["Katy Perry","Bruno Mars","Justin Timberlake","Coldplay","Prince","Dr. Dre|dr dre","Snoop Dogg|snoop","Eminem","Madonna","Maroon 5|maroon five","Janet Jackson"],
      starter: ["The Rolling Stones|rolling stones","Paul McCartney","Bruce Springsteen|springsteen","U2","The Black Eyed Peas|black eyed peas","Mary J. Blige|mary j blige","Red Hot Chili Peppers|rhcp","Travis Scott","SZA","50 Cent|fifty cent","Missy Elliott","Lenny Kravitz","Destiny's Child|destinys child"],
      film: ["Diana Ross","Gloria Estefan","NSYNC|n sync","Aerosmith","Britney Spears","Nelly","Sting","Shania Twain","No Doubt","Tom Petty|tom petty and the heartbreakers","The Who","Alicia Keys","Ludacris","Lil Jon","Nicki Minaj","Stevie Wonder","Phil Collins","Christina Aguilera","J Balvin","Kid Rock","P. Diddy|diddy|puff daddy|sean combs|p diddy"],
      deep: ["New Kids on the Block|nkotb","Boyz II Men|boyz 2 men","James Brown","ZZ Top","The Blues Brothers|blues brothers","Smokey Robinson","Queen Latifah","Enrique Iglesias","Toni Braxton","Jessica Simpson","LMFAO","M.I.A.|mia","CeeLo Green|cee lo green|cee lo","Slash","Anderson .Paak|anderson paak","H.E.R.|her","Big Boi","will.i.am|william|will i am","Jermaine Dupri","Clint Black","Patti LaBelle","Tony Bennett"],
      hail: ["Tanya Tucker","Travis Tritt","The Judds|wynonna judd|naomi judd|judds","Arturo Sandoval","Miami Sound Machine","Brian Boitano","Dorothy Hamill","Savion Glover","Big Bad Voodoo Daddy","Martha Reeves","The Temptations|temptations"]
    }
  },
  {
    id: "hard-knocks", cat: "culture", diff: "easy",
    prompt: "Name a team that's been featured on HBO's Hard Knocks.",
    note: "Training camp, in-season or offseason editions, 2001 through 2026.",
    tiers: {
      chalk: ["Dallas Cowboys|cowboys|dallas","New York Jets|jets|ny jets"],
      bandwagon: ["Detroit Lions|lions|detroit","Chicago Bears|bears|chicago","Cleveland Browns|browns|cleveland","Miami Dolphins|dolphins|miami"],
      starter: ["Buffalo Bills|bills|buffalo","Cincinnati Bengals|bengals|cincinnati","Los Angeles Rams|rams|la rams","Las Vegas Raiders|raiders|oakland raiders|las vegas|oakland","Seattle Seahawks|seahawks|seattle"],
      film: ["Baltimore Ravens|ravens|baltimore","Tampa Bay Buccaneers|buccaneers|bucs|tampa bay","Houston Texans|texans|houston","Atlanta Falcons|falcons|atlanta","Kansas City Chiefs|chiefs|kansas city","New York Giants|giants|ny giants"],
      deep: ["Indianapolis Colts|colts|indianapolis|indy","Arizona Cardinals|cardinals|arizona","Los Angeles Chargers|chargers|la chargers"],
      hail: ["Pittsburgh Steelers|steelers|pittsburgh","Philadelphia Eagles|eagles|philadelphia|philly","Washington Commanders|commanders|washington"]
    }
  },
  {
    id: "man-of-year", cat: "awards", diff: "hard",
    prompt: "Name a winner of the Walter Payton NFL Man of the Year award.",
    note: "Any year, 1970 through the 2025 award.",
    tiers: {
      chalk: ["Walter Payton","Peyton Manning","Drew Brees","J.J. Watt|jj watt|j j watt","Russell Wilson","Dak Prescott","Eli Manning","Larry Fitzgerald"],
      bandwagon: ["John Elway","Dan Marino","Troy Aikman","Kurt Warner","Jason Witten","Bobby Wagner","LaDainian Tomlinson|ladainian tomlinson|lt","Jerome Bettis","Johnny Unitas","Roger Staubach","Franco Harris","Lynn Swann","Joe Greene|mean joe greene"],
      starter: ["Warren Moon","Junior Seau","Derrick Thomas","Cris Carter","Steve Largent","Mike Singletary","Anthony Munoz","Darrell Green","Boomer Esiason","Derrick Brooks","Warrick Dunn","Jason Taylor","Anquan Boldin","Chris Long","Calais Campbell","Andrew Whitworth","Cameron Heyward|cam heyward","Arik Armstead","Charles Tillman|peanut tillman","Thomas Davis","Len Dawson","George Blanda"],
      film: ["Joe Theismann","Harold Carmichael","Will Shields","Troy Vincent","Matt Birk","Brian Waters","Dwight Stephenson","Willie Lanier","Ken Anderson","John Hadl","Dave Duerson"],
      deep: ["Rolf Benirschke","Marty Lyons","Reggie Williams"],
      hail: ["Madieu Williams","Jim Flanigan"]
    }
  },
  {
    id: "wr-sb-mvp", cat: "superbowl", diff: "easy",
    prompt: "Name a wide receiver who won Super Bowl MVP.",
    note: "Through Super Bowl LX. Desmond Howard won it as a kick returner, and he counts.",
    tiers: {
      chalk: ["Jerry Rice","Julian Edelman"],
      bandwagon: ["Cooper Kupp","Hines Ward"],
      starter: ["Lynn Swann","Santonio Holmes"],
      film: ["Deion Branch","Desmond Howard"],
      deep: ["Fred Biletnikoff"],
      hail: []
    }
  },
  {
    id: "rb-sb-mvp", cat: "superbowl", diff: "easy",
    prompt: "Name a running back who won Super Bowl MVP.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Emmitt Smith","Terrell Davis"],
      bandwagon: ["Marcus Allen","Franco Harris"],
      starter: ["John Riggins","Larry Csonka"],
      film: ["Kenneth Walker III|kenneth walker"],
      deep: ["Ottis Anderson|oj anderson|o j anderson"],
      hail: []
    }
  },
  {
    id: "sb-four-losses", cat: "superbowl", diff: "hard",
    prompt: "Name a head coach who lost four Super Bowls.",
    note: "The record for Super Bowl losses by a head coach. Four men share it.",
    tiers: {
      chalk: ["Marv Levy"],
      bandwagon: ["Bud Grant"],
      starter: ["Dan Reeves"],
      film: [],
      deep: ["Don Shula"],
      hail: []
    }
  },
  {
    id: "sb-three-wins", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who won 3 or more Super Bowls as the starter.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Tom Brady","Patrick Mahomes"],
      bandwagon: ["Joe Montana"],
      starter: ["Terry Bradshaw"],
      film: ["Troy Aikman"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-1990s", cat: "superbowl", diff: "easy",
    prompt: "Name a team that played in a Super Bowl held in the 1990s.",
    note: "Super Bowls XXIV (Jan. 1990) through XXXIII (Jan. 1999).",
    tiers: {
      chalk: ["Dallas Cowboys|cowboys|dallas","Buffalo Bills|bills|buffalo","San Francisco 49ers|49ers|niners|san francisco"],
      bandwagon: ["Denver Broncos|broncos|denver","Green Bay Packers|packers|green bay"],
      starter: ["New England Patriots|patriots|pats|new england","Pittsburgh Steelers|steelers|pittsburgh","Washington Redskins|washington|redskins|washington commanders|commanders"],
      film: ["New York Giants|giants|ny giants","Atlanta Falcons|falcons|atlanta"],
      deep: ["San Diego Chargers|chargers|san diego|los angeles chargers"],
      hail: []
    }
  },
  {
    id: "sb-late-qb", cat: "superbowl", diff: "easy",
    prompt: "Name a Super Bowl–winning starting QB who was NOT a first-round pick.",
    note: "Later-round picks and undrafted QBs, through Super Bowl LX.",
    tiers: {
      chalk: ["Tom Brady","Joe Montana","Kurt Warner"],
      bandwagon: ["Russell Wilson","Drew Brees","Brett Favre","Nick Foles","Jalen Hurts"],
      starter: ["Roger Staubach","Bart Starr"],
      film: ["Ken Stabler|kenny stabler|snake","Brad Johnson","Joe Theismann"],
      deep: ["Mark Rypien","Jeff Hostetler"],
      hail: ["Johnny Unitas"]
    }
  },
  {
    id: "sb-clutch-fg", cat: "superbowl", diff: "easy",
    prompt: "Name a kicker who made a go-ahead field goal in the final minute of a Super Bowl.",
    note: "Only three kickers have done it.",
    tiers: {
      chalk: ["Adam Vinatieri"],
      bandwagon: ["Harrison Butker"],
      starter: [],
      film: [],
      deep: ["Jim O'Brien|jim obrien"],
      hail: []
    }
  },
  {
    id: "sb-2010s-losers", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who lost a Super Bowl played in the 2010s.",
    note: "Super Bowls XLIV (Feb. 2010) through LIII (Feb. 2019).",
    tiers: {
      chalk: ["Tom Brady","Peyton Manning"],
      bandwagon: ["Cam Newton","Matt Ryan","Russell Wilson"],
      starter: ["Colin Kaepernick","Jared Goff"],
      film: ["Ben Roethlisberger|big ben"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-repeat-loss", cat: "superbowl", diff: "easy",
    prompt: "Name a team that lost the Super Bowl the season after winning one.",
    note: "Won it, then got back and lost the next year. Through Super Bowl LX.",
    tiers: {
      chalk: ["Kansas City Chiefs|chiefs|kansas city|kc"],
      bandwagon: ["New England Patriots|patriots|pats|new england","Seattle Seahawks|seahawks|seattle"],
      starter: ["Green Bay Packers|packers|green bay"],
      film: ["Dallas Cowboys|cowboys|dallas"],
      deep: ["Washington Redskins|washington|redskins|washington commanders|commanders"],
      hail: []
    }
  },
  {
    id: "sb-four-td", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who threw 4 or more TD passes in one Super Bowl.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Tom Brady","Joe Montana"],
      bandwagon: ["Steve Young"],
      starter: ["Troy Aikman"],
      film: ["Terry Bradshaw"],
      deep: ["Doug Williams"],
      hail: []
    }
  },
  {
    id: "sb-three-td", cat: "superbowl", diff: "hard",
    prompt: "Name a player who scored 3 touchdowns in one Super Bowl.",
    note: "Rushing plus receiving. Through Super Bowl LX.",
    tiers: {
      chalk: ["Jerry Rice"],
      bandwagon: ["Jalen Hurts","Terrell Davis"],
      starter: ["James White"],
      film: ["Roger Craig"],
      deep: ["Ricky Watters"],
      hail: []
    }
  },
  {
    id: "brady-sb-tds", cat: "connections", diff: "easy",
    prompt: "Name a player who caught a TD pass from Tom Brady in a Super Bowl.",
    note: "Ten Super Bowls, Patriots and Buccaneers.",
    tiers: {
      chalk: ["Rob Gronkowski|gronk","Julian Edelman","Randy Moss"],
      bandwagon: ["Danny Amendola","James White","Antonio Brown"],
      starter: ["Deion Branch","Chris Hogan","Danny Woodhead"],
      film: ["Mike Vrabel","Brandon LaFell","Aaron Hernandez"],
      deep: ["David Givens"],
      hail: ["David Patten"]
    }
  },
  {
    id: "brady-backups", cat: "connections", diff: "easy",
    prompt: "Name a QB who was Tom Brady's backup.",
    note: "Patriots or Buccaneers, 2001 to 2022. Drew Bledsoe backed him up after Brady took his job in 2001.",
    tiers: {
      chalk: ["Jimmy Garoppolo|jimmy g","Matt Cassel","Drew Bledsoe"],
      bandwagon: ["Jacoby Brissett","Brian Hoyer","Blaine Gabbert"],
      starter: ["Ryan Mallett","Jarrett Stidham","Kyle Trask"],
      film: ["Vinny Testaverde","Damon Huard"],
      deep: ["Rohan Davey","Matt Gutierrez"],
      hail: []
    }
  },
  {
    id: "lefty-qbs", cat: "positions", diff: "easy",
    prompt: "Name a left-handed NFL quarterback (like Steve Young).",
    note: "Any era. Starters and backups count.",
    tiers: {
      chalk: ["Steve Young","Michael Vick","Tua Tagovailoa|tua"],
      bandwagon: ["Ken Stabler|kenny stabler|snake","Tim Tebow","Boomer Esiason","Mark Brunell","Michael Penix Jr.|michael penix"],
      starter: ["Kellen Moore","Matt Leinart"],
      film: ["Jim Zorn","Scott Mitchell","Cade McNown","Chris Simms"],
      deep: ["Bobby Douglass"],
      hail: ["Frankie Albert"]
    }
  },
  {
    id: "qb-no7", cat: "positions", diff: "easy",
    prompt: "Name a quarterback who wore No. 7 in the NFL.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["John Elway","Ben Roethlisberger|big ben","Michael Vick"],
      bandwagon: ["Colin Kaepernick","C.J. Stroud|cj stroud","Boomer Esiason"],
      starter: ["Joe Theismann","Ron Jaworski|jaws","Case Keenum"],
      film: ["Bert Jones","Byron Leftwich","Christian Ponder"],
      deep: ["Dan Pastorini"],
      hail: []
    }
  },
  {
    id: "qb-to-wr", cat: "positions", diff: "hard",
    prompt: "Name an NFL receiver who played quarterback in college.",
    note: "Started out at QB in college, then caught passes in the NFL.",
    tiers: {
      chalk: ["Julian Edelman","Hines Ward"],
      bandwagon: ["Antwaan Randle El|randle el","Terrelle Pryor"],
      starter: ["Josh Cribbs","Brad Smith","Matt Jones"],
      film: ["Braxton Miller"],
      deep: ["Ronald Curry"],
      hail: ["Freddie Solomon"]
    }
  },
  {
    id: "five-hundred-td", cat: "records", diff: "easy",
    prompt: "Name a QB with 500 or more career TD passes.",
    note: "Through the 2025 season. Five QBs have done it.",
    tiers: {
      chalk: ["Tom Brady","Peyton Manning","Drew Brees"],
      bandwagon: ["Aaron Rodgers"],
      starter: ["Brett Favre"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "fifty-td", cat: "records", diff: "easy",
    prompt: "Name a QB who threw 50 or more TD passes in one season.",
    note: "Only three QBs have done it.",
    tiers: {
      chalk: ["Peyton Manning"],
      bandwagon: ["Tom Brady"],
      starter: ["Patrick Mahomes"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "hundred-rec-td", cat: "records", diff: "easy",
    prompt: "Name a player with 100 or more career receiving TDs.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["Jerry Rice","Randy Moss"],
      bandwagon: ["Terrell Owens|t o|to","Larry Fitzgerald|fitz"],
      starter: ["Cris Carter","Marvin Harrison","Tony Gonzalez","Davante Adams","Mike Evans"],
      film: ["Antonio Gates"],
      deep: ["Tim Brown","Steve Largent"],
      hail: []
    }
  },
  {
    id: "one-fifty-sacks", cat: "records", diff: "easy",
    prompt: "Name a player with 150 or more career sacks.",
    note: "Official sack stat (since 1982), through the 2025 season.",
    tiers: {
      chalk: ["Reggie White","Bruce Smith"],
      bandwagon: ["Julius Peppers"],
      starter: ["Kevin Greene"],
      film: ["Chris Doleman"],
      deep: [],
      hail: []
    }
  },
  {
    id: "te-10k", cat: "records", diff: "easy",
    prompt: "Name a tight end with 10,000 or more career receiving yards.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["Travis Kelce","Tony Gonzalez"],
      bandwagon: ["Jason Witten"],
      starter: ["Antonio Gates"],
      film: ["Shannon Sharpe"],
      deep: [],
      hail: []
    }
  },
  {
    id: "twenty-seasons", cat: "records", diff: "easy",
    prompt: "Name a QB who played 20 or more NFL seasons.",
    note: "Through the 2025 season. AFL seasons count.",
    tiers: {
      chalk: ["Tom Brady","Brett Favre"],
      bandwagon: ["Aaron Rodgers","Drew Brees"],
      starter: ["Vinny Testaverde","George Blanda"],
      film: [],
      deep: ["Earl Morrall"],
      hail: []
    }
  },
  {
    id: "sixty-ints", cat: "records", diff: "hard",
    prompt: "Name a player with 60 or more career interceptions.",
    note: "Only ten players have reached 60.",
    tiers: {
      chalk: ["Ed Reed","Rod Woodson","Charles Woodson"],
      bandwagon: ["Ronnie Lott","Paul Krause"],
      starter: ["Night Train Lane|dick lane|dick night train lane|night train","Emlen Tunnell"],
      film: ["Ken Riley"],
      deep: ["Dick LeBeau","Dave Brown"],
      hail: []
    }
  },
  {
    id: "ninety-nine-run", cat: "records", diff: "hard",
    prompt: "Name a player who ran for a 99-yard touchdown.",
    note: "The longest possible run. It's happened only twice.",
    tiers: {
      chalk: ["Derrick Henry"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: ["Tony Dorsett"],
      hail: []
    }
  },
  {
    id: "four-sb-losses-team", cat: "records", diff: "easy",
    prompt: "Name a team that has lost 4 or more Super Bowls.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Buffalo Bills|bills|buffalo","Minnesota Vikings|vikings|minnesota"],
      bandwagon: ["Denver Broncos|broncos|denver"],
      starter: ["New England Patriots|patriots|pats|new england"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "oroy-mvp", cat: "awards", diff: "hard",
    prompt: "Name a player who won AP Offensive Rookie of the Year and later won NFL MVP.",
    note: "AP awards. Jim Brown's 1957 Rookie of the Year counts.",
    tiers: {
      chalk: ["Adrian Peterson","Cam Newton"],
      bandwagon: ["Barry Sanders","Matt Ryan"],
      starter: ["Marshall Faulk","Earl Campbell"],
      film: ["Jim Brown"],
      deep: [],
      hail: []
    }
  },
  {
    id: "opoy-2010s", cat: "awards", diff: "easy",
    prompt: "Name an AP Offensive Player of the Year since 2010 (like Patrick Mahomes).",
    note: "The 2010 through 2025 seasons.",
    tiers: {
      chalk: ["Patrick Mahomes","Tom Brady","Christian McCaffrey|cmc"],
      bandwagon: ["Saquon Barkley","Derrick Henry","Justin Jefferson","Cooper Kupp","Adrian Peterson"],
      starter: ["Peyton Manning","Drew Brees","Cam Newton","Matt Ryan","Jaxon Smith-Njigba|jsn|smith njigba"],
      film: ["Todd Gurley","Michael Thomas"],
      deep: ["DeMarco Murray"],
      hail: []
    }
  },
  {
    id: "hof-cb", cat: "hof", diff: "easy",
    prompt: "Name a cornerback in the Pro Football Hall of Fame (like Deion Sanders).",
    note: "Through the Class of 2026.",
    tiers: {
      chalk: ["Deion Sanders|prime time|neon deion","Charles Woodson","Champ Bailey"],
      bandwagon: ["Rod Woodson","Darrelle Revis","Ty Law","Darrell Green"],
      starter: ["Mel Blount","Ronde Barber","Night Train Lane|dick lane|dick night train lane|night train","Mike Haynes","Aeneas Williams"],
      film: ["Herb Adderley","Willie Brown","Lem Barney","Mel Renfro","Eric Allen"],
      deep: ["Jimmy Johnson","Roger Wehrli","Ken Riley","Emmitt Thomas","Dick LeBeau"],
      hail: ["Jack Butler"]
    }
  },
  {
    id: "expansion", cat: "franchise", diff: "easy",
    prompt: "Name a team that joined the NFL or AFL as an expansion team in 1960 or later.",
    note: "The eight original AFL teams don't count. The 1999 Browns do.",
    tiers: {
      chalk: ["Houston Texans|texans|houston","Carolina Panthers|panthers|carolina","Jacksonville Jaguars|jaguars|jags|jacksonville"],
      bandwagon: ["Dallas Cowboys|cowboys|dallas","Seattle Seahawks|seahawks|seattle","Tampa Bay Buccaneers|buccaneers|bucs|tampa bay"],
      starter: ["Minnesota Vikings|vikings|minnesota","New Orleans Saints|saints|new orleans","Atlanta Falcons|falcons|atlanta"],
      film: ["Cleveland Browns|browns|cleveland","Miami Dolphins|dolphins|miami"],
      deep: ["Cincinnati Bengals|bengals|cincinnati"],
      hail: []
    }
  },
  {
    id: "pre-sb-champs", cat: "franchise", diff: "hard",
    prompt: "Name a franchise that won an NFL championship before the Super Bowl era.",
    note: "NFL titles from 1920 to 1965, including teams that no longer exist.",
    tiers: {
      chalk: ["Green Bay Packers|packers|green bay","Chicago Bears|bears|chicago|chicago staleys"],
      bandwagon: ["Cleveland Browns|browns|cleveland","Detroit Lions|lions|detroit","New York Giants|giants|ny giants"],
      starter: ["Philadelphia Eagles|eagles|philadelphia","Baltimore Colts|colts|indianapolis colts|baltimore","Washington Redskins|washington|redskins|washington commanders|commanders"],
      film: ["Chicago Cardinals|cardinals|arizona cardinals|st louis cardinals","Cleveland Rams|rams|los angeles rams|la rams|st louis rams"],
      deep: ["Canton Bulldogs|canton","Akron Pros|akron"],
      hail: ["Providence Steam Roller|providence","Frankford Yellow Jackets|frankford","Cleveland Bulldogs"]
    }
  },
  {
    id: "afc-west", cat: "franchise", diff: "easy",
    prompt: "Name a team that has played in the AFC West, past or present.",
    note: "Since the division formed in 1970.",
    tiers: {
      chalk: ["Kansas City Chiefs|chiefs|kansas city|kc","Las Vegas Raiders|raiders|oakland raiders|los angeles raiders|las vegas","Denver Broncos|broncos|denver","Los Angeles Chargers|chargers|san diego chargers|san diego"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: [],
      hail: ["Seattle Seahawks|seahawks|seattle"]
    }
  },
  {
    id: "nfc-west", cat: "franchise", diff: "easy",
    prompt: "Name a team that has played in the NFC West, past or present.",
    note: "Since the division formed in 1970.",
    tiers: {
      chalk: ["San Francisco 49ers|49ers|niners|san francisco","Seattle Seahawks|seahawks|seattle","Los Angeles Rams|rams|st louis rams|la rams","Arizona Cardinals|cardinals|arizona"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: ["Atlanta Falcons|falcons|atlanta","New Orleans Saints|saints|new orleans"],
      hail: ["Carolina Panthers|panthers|carolina"]
    }
  },
  {
    id: "owners", cat: "franchise", diff: "hard",
    prompt: "Name an NFL team owner, past or present (like Jerry Jones).",
    note: "Principal owners and controlling family members. The Packers are fan-owned, so no one there counts.",
    tiers: {
      chalk: ["Jerry Jones","Robert Kraft","Al Davis"],
      bandwagon: ["Mark Davis","Dan Snyder","Jim Irsay","Art Rooney","Dan Rooney"],
      starter: ["Stephen Ross","Arthur Blank","Shad Khan","David Tepper","Jimmy Haslam","Woody Johnson","Stan Kroenke","Jed York","Josh Harris"],
      film: ["Clark Hunt","Lamar Hunt","Jeffrey Lurie","George Halas","Virginia McCaskey|virginia halas mccaskey","Steve Bisciotti","Art Modell","Paul Allen","Jerry Richardson","Terry Pegula","Ralph Wilson","John Mara","Wellington Mara","Pat Bowlen","Edward DeBartolo Jr.|eddie debartolo|ed debartolo|edward debartolo"],
      deep: ["Zygi Wilf","Mike Brown","Paul Brown","Bob McNair","Cal McNair","Jody Allen","Steve Tisch","Bill Bidwill","Michael Bidwill","Dean Spanos","Alex Spanos","Tom Benson","Gayle Benson","Malcolm Glazer","Joel Glazer","Bryan Glazer","Rob Walton","Sheila Ford Hamp","William Clay Ford","Georgia Frontiere","Bud Adams","Amy Adams Strunk","Dee Haslam","Kim Pegula","Carroll Rosenbloom","Robert Irsay","Joe Robbie","Tim Mara","Bert Bell"],
      hail: ["Wayne Weaver","Hugh Culverhouse","Max Winter","Leon Hess"]
    }
  },
  {
    id: "roofed-stadiums", cat: "venues", diff: "easy",
    prompt: "Name a current NFL stadium with a roof (fixed or retractable).",
    note: "2026 home stadiums. SoFi Stadium's canopy roof counts.",
    tiers: {
      chalk: ["AT&T Stadium|att stadium|at and t stadium|at t stadium|jerry world|cowboys stadium","Caesars Superdome|superdome|louisiana superdome|mercedes benz superdome","Mercedes-Benz Stadium|mercedes benz stadium"],
      bandwagon: ["U.S. Bank Stadium|us bank stadium","Allegiant Stadium|allegiant|the death star","SoFi Stadium|sofi","Ford Field"],
      starter: ["Lucas Oil Stadium|lucas oil","NRG Stadium|reliant stadium|nrg"],
      film: ["State Farm Stadium|university of phoenix stadium|cardinals stadium"],
      deep: [],
      hail: []
    }
  },
  {
    id: "suburb-teams", cat: "venues", diff: "easy",
    prompt: "Name an NFL team whose home stadium is outside the city in its name.",
    note: "2026 homes. Example: the Patriots play in Foxborough. Teams named for a state or region don't count.",
    tiers: {
      chalk: ["New York Giants|giants|ny giants","New York Jets|jets|ny jets","Dallas Cowboys|cowboys|dallas"],
      bandwagon: ["New England Patriots|patriots|pats|new england","San Francisco 49ers|49ers|niners|san francisco","Las Vegas Raiders|raiders|las vegas"],
      starter: ["Washington Commanders|commanders|washington","Buffalo Bills|bills|buffalo","Miami Dolphins|dolphins|miami"],
      film: ["Los Angeles Rams|rams|la rams","Los Angeles Chargers|chargers|la chargers"],
      deep: [],
      hail: []
    }
  },
  {
    id: "dwts", cat: "culture", diff: "easy",
    prompt: "Name an NFL player who competed on Dancing with the Stars (like Emmitt Smith).",
    note: "Any season. Four of them won the Mirrorball.",
    tiers: {
      chalk: ["Emmitt Smith","Jerry Rice"],
      bandwagon: ["Hines Ward","Donald Driver","Rashad Jennings","Michael Irvin","Terrell Owens|t o|to"],
      starter: ["Warren Sapp","Jason Taylor","Kurt Warner","Chad Johnson|ochocinco|chad ochocinco","Von Miller","Calvin Johnson|megatron"],
      film: ["Lawrence Taylor","Antonio Brown","Ray Lewis","Doug Flutie"],
      deep: ["Jacoby Jones","Keyshawn Johnson"],
      hail: []
    }
  },
  {
    id: "football-movies", cat: "culture", diff: "easy",
    prompt: "Name a football movie.",
    note: "Pro, college or high school football. Documentaries don't count.",
    tiers: {
      chalk: ["Remember the Titans","The Blind Side|blind side","Friday Night Lights","Rudy","The Waterboy|waterboy","The Longest Yard|longest yard"],
      bandwagon: ["Any Given Sunday","Jerry Maguire","Varsity Blues","The Replacements|replacements","Little Giants","Invincible","Draft Day"],
      starter: ["Brian's Song|brians song","We Are Marshall","Radio","Concussion","Gridiron Gang","Necessary Roughness","American Underdog","Leatherheads"],
      film: ["North Dallas Forty","Heaven Can Wait","The Program","Wildcats","Facing the Giants","The Express","Woodlawn","Big Fan"],
      deep: ["Semi-Tough|semi tough","Paper Lion","Knute Rockne, All American|knute rockne all american|knute rockne","Johnny Be Good","Everybody's All-American|everybodys all american"],
      hail: ["The Freshman","Horse Feathers","Black Sunday"]
    }
  },
  {
    id: "football-tv", cat: "culture", diff: "easy",
    prompt: "Name a TV series about football.",
    note: "Scripted shows and docuseries both count.",
    tiers: {
      chalk: ["Friday Night Lights","Ballers","Hard Knocks"],
      bandwagon: ["The League","Coach","Last Chance U","Blue Mountain State","All American"],
      starter: ["Quarterback","Playmakers","The Game","Receiver"],
      film: ["1st & Ten|first and ten|1st and ten","Necessary Roughness","A Football Life","QB1: Beyond the Lights|qb1|qb1 beyond the lights"],
      deep: ["Two-A-Days|two a days"],
      hail: []
    }
  },
  {
    id: "broadcasters", cat: "culture", diff: "hard",
    prompt: "Name an NFL TV announcer or analyst, past or present (like John Madden).",
    note: "Play-by-play, color, sideline or studio.",
    tiers: {
      chalk: ["John Madden","Tony Romo","Jim Nantz","Al Michaels","Troy Aikman","Joe Buck","Tom Brady"],
      bandwagon: ["Cris Collinsworth","Kirk Herbstreit","Greg Olsen","Kevin Burkhardt","Mike Tirico","Pat Summerall","Howard Cosell","Terry Bradshaw","Michael Strahan","Howie Long"],
      starter: ["Frank Gifford","Don Meredith|dandy don","Phil Simms","Boomer Esiason","Dan Fouts","Jon Gruden","Jason Witten","Erin Andrews","Ian Eagle","Kevin Harlan","Chris Berman","Rich Eisen","Peyton Manning","Eli Manning","Shannon Sharpe","Michael Irvin","Joe Theismann","Dan Dierdorf","Dick Enberg","Bob Costas","James Brown","Curt Menefee","Jimmy Johnson","Bill Cowher","Tony Dungy","Rodney Harrison"],
      film: ["Michele Tafoya","Andrea Kremer","Booger McFarland","Tony Siragusa","Ron Jaworski|jaws","Steve Young","Trent Dilfer","Ray Lewis","Randy Moss","Matt Ryan","Charles Davis","Daryl Johnston|moose johnston","Brian Baldinger","Dick Vermeil","Merlin Olsen","Mike Ditka","Tom Jackson","Keyshawn Johnson","Lisa Salters","Pam Oliver","Kurt Warner","Nate Burleson","Charissa Thompson","Mark Schlereth","Chris Myers"],
      deep: ["Curt Gowdy","Don Criqui","Verne Lundquist","Gus Johnson","Brent Musburger","Marv Albert","Spero Dedes","Andrew Catalon","Adam Amin","Kenny Albert","Paul Maguire","Charlie Jones","Sterling Sharpe"],
      hail: []
    }
  },
  {
    id: "wrestlers", cat: "culture", diff: "easy",
    prompt: "Name a pro wrestler who played in the NFL (like Bill Goldberg).",
    note: "Regular season, preseason or practice squad all count.",
    tiers: {
      chalk: ["Bill Goldberg|goldberg","Brock Lesnar"],
      bandwagon: ["Roman Reigns|joe anoai","Lawrence Taylor","Ron Simmons|faarooq"],
      starter: ["Steve McMichael|mongo","Kevin Greene","Brian Pillman","Baron Corbin","Ernie Ladd"],
      film: ["Wahoo McDaniel","Darren Drozdov|droz"],
      deep: ["Dick the Bruiser|dick afflis"],
      hail: ["Bronko Nagurski"]
    }
  },
  {
    id: "celebrations", cat: "culture", diff: "easy",
    prompt: "Name a famous NFL touchdown celebration.",
    note: "Name the move. Example: the Lambeau Leap.",
    tiers: {
      chalk: ["Lambeau Leap","Griddy|the griddy","Ickey Shuffle"],
      bandwagon: ["Dirty Bird","Mile High Salute","Gronk Spike","Discount Double Check|discount double-check","Tebowing"],
      starter: ["Salsa (Victor Cruz)|salsa|salsa dance","Sharpie (Terrell Owens)|sharpie","Superman (Cam Newton)|superman","Dab|the dab","Fun Bunch"],
      film: ["Funky Chicken|white shoes","Popcorn (Terrell Owens)|popcorn","Salvation Army Kettle (Ezekiel Elliott)|salvation army kettle|kettle jump","Riverdance (Chad Johnson)|riverdance"],
      deep: ["Sack Dance (Mark Gastineau)|sack dance"],
      hail: []
    }
  },
  {
    id: "fan-cries", cat: "culture", diff: "easy",
    prompt: "Name an NFL fan base nickname or rallying cry.",
    note: "Like Cheeseheads or Bills Mafia.",
    tiers: {
      chalk: ["Cheeseheads","Raider Nation","Bills Mafia","Dawg Pound","12th Man|12s|twelfth man|12th man"],
      bandwagon: ["Who Dat|who dat nation","Fly Eagles Fly","Skol","Steelers Nation|terrible towel","Chiefs Kingdom"],
      starter: ["Who Dey","Rise Up","Broncos Country","Duuuval|duval","Go Pack Go","Bear Down","Gang Green","Faithful|49ers faithful|niner faithful"],
      film: ["Keep Pounding","Fins Up","Bolt Up","Hogettes","Titan Up","One Pride"],
      deep: ["J-E-T-S|jets jets jets"],
      hail: []
    }
  },
  {
    id: "video-games", cat: "culture", diff: "easy",
    prompt: "Name a football video game.",
    note: "Any console, PC or phone.",
    tiers: {
      chalk: ["Madden NFL|madden","NCAA Football","Retro Bowl","Tecmo Bowl"],
      bandwagon: ["NFL Blitz|blitz","ESPN NFL 2K5|nfl 2k5|nfl 2k","Backyard Football","College Football 25|ea college football|cfb 25|college football 26|cfb 26","NFL Street","Tecmo Super Bowl"],
      starter: ["Mutant League Football","Joe Montana Football","John Madden Football","Blitz: The League|blitz the league","NFL GameDay|gameday","NFL Quarterback Club|qb club"],
      film: ["NFL Fever","Axis Football","Front Office Football","Retro Bowl College","Legend Bowl","Mutant Football League"],
      deep: ["10-Yard Fight|10 yard fight|ten yard fight","Doug Flutie's Maximum Football|maximum football"],
      hail: []
    }
  },
  {
    id: "99-rams", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 1999 Rams (Kurt Warner's team).",
    note: "\"The Greatest Show on Turf.\" Anyone on the 1999 roster counts, injured players included.",
    tiers: {
      chalk: ["Kurt Warner","Marshall Faulk","Isaac Bruce","Torry Holt"],
      bandwagon: ["Orlando Pace","Az-Zahir Hakim","Ricky Proehl","Mike Jones","Kevin Carter","London Fletcher","Grant Wistrom"],
      starter: ["Trent Green","D'Marco Farr|dmarco farr","Todd Lyght","Dexter McCleon","Jeff Wilkins","Adam Timmerman","Ernie Conwell","Roland Williams","Tony Horne","Ray Agnew"],
      film: ["Billy Jenkins","Keith Lyle","Todd Collins","Fred Miller","Tom Nutten","Mike Gruttadauria","Robert Holcombe","Justin Watson","Paul Justin","Joe Germaine","Leonard Little"],
      deep: ["Ryan Tucker","Amp Lee","Devin Bush","Taje Allen","Jeff Robinson","Lorenzo Styles"],
      hail: []
    }
  },
  {
    id: "00-ravens", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2000 Ravens (Ray Lewis's team).",
    note: "Anyone on the 2000 roster counts, injured players included.",
    tiers: {
      chalk: ["Ray Lewis","Trent Dilfer","Jamal Lewis","Shannon Sharpe"],
      bandwagon: ["Rod Woodson","Jonathan Ogden","Tony Siragusa|goose","Peter Boulware","Sam Adams","Chris McAlister","Duane Starks","Jermaine Lewis","Qadry Ismail","Brandon Stokley","Matt Stover","Tony Banks","Priest Holmes"],
      starter: ["Michael McCrary","Rob Burnett","Jamie Sharper","Kim Herring","Travis Taylor","Patrick Johnson","Edwin Mulitalo","Jeff Mitchell","Mike Flynn","Harry Swayne","Kyle Richardson","Ben Coates","Obafemi Ayanbadejo"],
      film: ["Chris Redman","Corey Harris","Anthony Mitchell","Spencer Folau","Keith Washington","Lional Dalton","Larry Webster","Cornell Brown","Robert Bailey","Billy Davis","Sam Gash","Adalius Thomas"],
      deep: [],
      hail: []
    }
  },
  {
    id: "10-packers", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2010 Packers (Aaron Rodgers's team).",
    note: "Anyone on the 2010 roster counts, injured players included.",
    tiers: {
      chalk: ["Aaron Rodgers","Clay Matthews","Charles Woodson","Greg Jennings","Donald Driver","Jordy Nelson"],
      bandwagon: ["B.J. Raji|bj raji","A.J. Hawk|aj hawk","James Jones","Tramon Williams","Nick Collins","Jermichael Finley","Mason Crosby","Ryan Grant","James Starks","John Kuhn","Matt Flynn"],
      starter: ["Sam Shields","Desmond Bishop","Josh Sitton","Chad Clifton","Bryan Bulaga","Scott Wells","Daryn Colledge","T.J. Lang|tj lang","Cullen Jenkins","Ryan Pickett","Erik Walden","Tim Masthay","Andrew Quarless","Brandon Jackson","Nick Barnett","Morgan Burnett","Charlie Peprah","Jarrett Bush"],
      film: ["Howard Green","Frank Zombo","Brad Jones","Mike Neal","Atari Bigby","Pat Lee","Donald Lee","Tom Crabtree","Korey Hall","Brett Swain","Brady Poppinga","C.J. Wilson|cj wilson","Mark Tauscher","Evan Dietrich-Smith|evan dietrich smith","Quinn Johnson","Dimitri Nance","Robert Francois","Brett Goode"],
      deep: [],
      hail: []
    }
  },
  {
    id: "19-chiefs", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2019 Chiefs (Patrick Mahomes's team).",
    note: "Anyone on the 2019 roster counts, injured players included.",
    tiers: {
      chalk: ["Patrick Mahomes","Travis Kelce","Tyreek Hill"],
      bandwagon: ["Chris Jones","Tyrann Mathieu|honey badger","Sammy Watkins","Damien Williams","Mecole Hardman","Harrison Butker","Frank Clark","LeSean McCoy|shady mccoy"],
      starter: ["Demarcus Robinson","Byron Pringle","Matt Moore","Chad Henne","Mitchell Schwartz","Eric Fisher","Laurent Duvernay-Tardif|duvernay tardif","Anthony Hitchens","Damien Wilson","Charvarius Ward","Bashaud Breeland","Kendall Fuller","Daniel Sorensen","Juan Thornhill","Terrell Suggs","Darwin Thompson","Anthony Sherman","Blake Bell","Dustin Colquitt"],
      film: ["Andrew Wylie","Austin Reiter","Stefen Wisniewski","Cameron Erving|cam erving","Derrick Nnadi","Mike Pennel","Tanoh Kpassagnon","Ben Niemann","Reggie Ragland","Rashad Fenton","Emmanuel Ogbah","Alex Okafor","Xavier Williams","Khalen Saunders","Armani Watts","Jordan Lucas","Spencer Ware","James Winchester","Darrel Williams","Morris Claiborne"],
      deep: [],
      hail: []
    }
  },
  {
    id: "afc-teams", cat: "franchise", diff: "easy",
    prompt: "Name a team in the AFC.",
    note: "All 16 current AFC teams count.",
    tiers: {
      chalk: ["Kansas City Chiefs|chiefs|kansas city|kc","New England Patriots|patriots|pats|new england","Pittsburgh Steelers|steelers|pittsburgh","Buffalo Bills|bills|buffalo"],
      bandwagon: ["Baltimore Ravens|ravens|baltimore","Denver Broncos|broncos|denver","Miami Dolphins|dolphins|miami","Las Vegas Raiders|raiders|oakland raiders|los angeles raiders|las vegas|oakland","Cincinnati Bengals|bengals|cincinnati|cincy"],
      starter: ["Los Angeles Chargers|chargers|san diego chargers|san diego|la chargers","New York Jets|jets|ny jets","Cleveland Browns|browns|cleveland","Indianapolis Colts|colts|indianapolis|indy|baltimore colts"],
      film: ["Houston Texans|texans|houston","Tennessee Titans|titans|tennessee|houston oilers|oilers|tennessee oilers"],
      deep: ["Jacksonville Jaguars|jaguars|jags|jacksonville"],
      hail: []
    }
  },
  {
    id: "nfc-teams", cat: "franchise", diff: "easy",
    prompt: "Name a team in the NFC.",
    note: "All 16 current NFC teams count.",
    tiers: {
      chalk: ["Dallas Cowboys|cowboys|dallas","Green Bay Packers|packers|green bay","Philadelphia Eagles|eagles|philadelphia|philly","San Francisco 49ers|49ers|niners|san francisco"],
      bandwagon: ["New York Giants|giants|ny giants","Chicago Bears|bears|chicago","Seattle Seahawks|seahawks|seattle","Detroit Lions|lions|detroit","Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa"],
      starter: ["New Orleans Saints|saints|new orleans","Minnesota Vikings|vikings|minnesota","Los Angeles Rams|rams|st louis rams|la rams","Washington Commanders|commanders|washington|redskins|washington redskins|washington football team"],
      film: ["Atlanta Falcons|falcons|atlanta","Arizona Cardinals|cardinals|arizona|st louis cardinals|chicago cardinals"],
      deep: ["Carolina Panthers|panthers|carolina"],
      hail: []
    }
  },
  {
    id: "sb-champ-teams", cat: "franchise", diff: "easy",
    prompt: "Name a team that has won a Super Bowl.",
    note: "Through Super Bowl LX. Twenty franchises have won one.",
    tiers: {
      chalk: ["New England Patriots|patriots|pats|new england","Pittsburgh Steelers|steelers|pittsburgh","Dallas Cowboys|cowboys|dallas","San Francisco 49ers|49ers|niners|san francisco","Kansas City Chiefs|chiefs|kansas city|kc"],
      bandwagon: ["Green Bay Packers|packers|green bay","New York Giants|giants|ny giants","Denver Broncos|broncos|denver","Philadelphia Eagles|eagles|philadelphia|philly"],
      starter: ["Las Vegas Raiders|raiders|oakland raiders|los angeles raiders|las vegas|oakland","Washington Commanders|commanders|washington|redskins|washington redskins|washington football team","Baltimore Ravens|ravens|baltimore","Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa","Seattle Seahawks|seahawks|seattle"],
      film: ["Los Angeles Rams|rams|st louis rams|la rams","Miami Dolphins|dolphins|miami","New Orleans Saints|saints|new orleans","Indianapolis Colts|colts|indianapolis|indy|baltimore colts"],
      deep: ["Chicago Bears|bears|chicago","New York Jets|jets|ny jets"],
      hail: []
    }
  },
  {
    id: "sb-loser-teams", cat: "franchise", diff: "easy",
    prompt: "Name a team that has lost a Super Bowl.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Buffalo Bills|bills|buffalo","New England Patriots|patriots|pats|new england","Denver Broncos|broncos|denver","Minnesota Vikings|vikings|minnesota"],
      bandwagon: ["Philadelphia Eagles|eagles|philadelphia|philly","Kansas City Chiefs|chiefs|kansas city|kc","San Francisco 49ers|49ers|niners|san francisco","Los Angeles Rams|rams|st louis rams|la rams","Cincinnati Bengals|bengals|cincinnati|cincy","Atlanta Falcons|falcons|atlanta","Carolina Panthers|panthers|carolina"],
      starter: ["Seattle Seahawks|seahawks|seattle","Miami Dolphins|dolphins|miami","Dallas Cowboys|cowboys|dallas","Pittsburgh Steelers|steelers|pittsburgh","New York Giants|giants|ny giants","Las Vegas Raiders|raiders|oakland raiders|los angeles raiders|las vegas|oakland"],
      film: ["Arizona Cardinals|cardinals|arizona|st louis cardinals|chicago cardinals","Tennessee Titans|titans|tennessee|houston oilers|oilers|tennessee oilers","Los Angeles Chargers|chargers|san diego chargers|san diego|la chargers","Washington Commanders|commanders|washington|redskins|washington redskins|washington football team","Indianapolis Colts|colts|indianapolis|indy|baltimore colts"],
      deep: ["Green Bay Packers|packers|green bay","Chicago Bears|bears|chicago"],
      hail: []
    }
  },
  {
    id: "state-teams", cat: "franchise", diff: "easy",
    prompt: "Name an NFL team based in California, Texas or Florida.",
    note: "Where the team plays home games today.",
    tiers: {
      chalk: ["Dallas Cowboys|cowboys|dallas","San Francisco 49ers|49ers|niners|san francisco","Miami Dolphins|dolphins|miami"],
      bandwagon: ["Los Angeles Rams|rams|st louis rams|la rams","Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa","Houston Texans|texans|houston"],
      starter: ["Los Angeles Chargers|chargers|san diego chargers|san diego|la chargers","Jacksonville Jaguars|jaguars|jags|jacksonville"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "east-divs", cat: "franchise", diff: "easy",
    prompt: "Name a team in the AFC East or NFC East.",
    note: "Current division members.",
    tiers: {
      chalk: ["Dallas Cowboys|cowboys|dallas","New England Patriots|patriots|pats|new england","Philadelphia Eagles|eagles|philadelphia|philly","New York Giants|giants|ny giants"],
      bandwagon: ["Buffalo Bills|bills|buffalo","New York Jets|jets|ny jets","Miami Dolphins|dolphins|miami"],
      starter: ["Washington Commanders|commanders|washington|redskins|washington redskins|washington football team"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "south-divs", cat: "franchise", diff: "easy",
    prompt: "Name a team in the AFC South or NFC South.",
    note: "Current division members.",
    tiers: {
      chalk: ["New Orleans Saints|saints|new orleans","Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa","Indianapolis Colts|colts|indianapolis|indy|baltimore colts"],
      bandwagon: ["Atlanta Falcons|falcons|atlanta","Houston Texans|texans|houston","Carolina Panthers|panthers|carolina"],
      starter: ["Tennessee Titans|titans|tennessee|houston oilers|oilers|tennessee oilers","Jacksonville Jaguars|jaguars|jags|jacksonville"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "cat-teams", cat: "franchise", diff: "easy",
    prompt: "Name an NFL team named after a big cat.",
    note: "Lions, tigers and the like.",
    tiers: {
      chalk: ["Detroit Lions|lions|detroit","Jacksonville Jaguars|jaguars|jags|jacksonville"],
      bandwagon: ["Cincinnati Bengals|bengals|cincinnati|cincy"],
      starter: ["Carolina Panthers|panthers|carolina"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "region-teams", cat: "franchise", diff: "easy",
    prompt: "Name an NFL team named for a state or region instead of a city.",
    note: "Like the Minnesota Vikings.",
    tiers: {
      chalk: ["New England Patriots|patriots|pats|new england","Minnesota Vikings|vikings|minnesota"],
      bandwagon: ["Arizona Cardinals|cardinals|arizona|st louis cardinals|chicago cardinals","Carolina Panthers|panthers|carolina"],
      starter: ["Tennessee Titans|titans|tennessee|houston oilers|oilers|tennessee oilers"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "five-sb-teams", cat: "franchise", diff: "easy",
    prompt: "Name a franchise with 5 or more Super Bowl wins.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["New England Patriots|patriots|pats|new england","Pittsburgh Steelers|steelers|pittsburgh"],
      bandwagon: ["Dallas Cowboys|cowboys|dallas"],
      starter: ["San Francisco 49ers|49ers|niners|san francisco"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-2000s-champs", cat: "superbowl", diff: "easy",
    prompt: "Name a team that won a Super Bowl in the 2000s.",
    note: "The 2000 through 2009 seasons (Super Bowls XXXV–XLIV).",
    tiers: {
      chalk: ["New England Patriots|patriots|pats|new england","Pittsburgh Steelers|steelers|pittsburgh"],
      bandwagon: ["New York Giants|giants|ny giants","Indianapolis Colts|colts|indianapolis|indy|baltimore colts","New Orleans Saints|saints|new orleans"],
      starter: ["Baltimore Ravens|ravens|baltimore","Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-2010s-champs", cat: "superbowl", diff: "easy",
    prompt: "Name a team that won a Super Bowl in the 2010s.",
    note: "The 2010 through 2019 seasons (Super Bowls XLV–LIV).",
    tiers: {
      chalk: ["New England Patriots|patriots|pats|new england","Kansas City Chiefs|chiefs|kansas city|kc"],
      bandwagon: ["Seattle Seahawks|seahawks|seattle","Philadelphia Eagles|eagles|philadelphia|philly","Denver Broncos|broncos|denver"],
      starter: ["Green Bay Packers|packers|green bay","New York Giants|giants|ny giants","Baltimore Ravens|ravens|baltimore"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-recent-champs", cat: "superbowl", diff: "easy",
    prompt: "Name a team that won a Super Bowl from the 2015 season on.",
    note: "Super Bowls 50 through LX.",
    tiers: {
      chalk: ["Kansas City Chiefs|chiefs|kansas city|kc","Philadelphia Eagles|eagles|philadelphia|philly","New England Patriots|patriots|pats|new england"],
      bandwagon: ["Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa","Los Angeles Rams|rams|st louis rams|la rams","Seattle Seahawks|seahawks|seattle"],
      starter: ["Denver Broncos|broncos|denver"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-early-teams", cat: "superbowl", diff: "easy",
    prompt: "Name a team that played in one of the first ten Super Bowls.",
    note: "Super Bowls I through X (1966–1975 seasons).",
    tiers: {
      chalk: ["Green Bay Packers|packers|green bay","Dallas Cowboys|cowboys|dallas","Pittsburgh Steelers|steelers|pittsburgh"],
      bandwagon: ["Kansas City Chiefs|chiefs|kansas city|kc","New York Jets|jets|ny jets","Miami Dolphins|dolphins|miami","Las Vegas Raiders|raiders|oakland raiders|los angeles raiders|las vegas|oakland"],
      starter: ["Minnesota Vikings|vikings|minnesota","Indianapolis Colts|colts|indianapolis|indy|baltimore colts"],
      film: ["Washington Commanders|commanders|washington|redskins|washington redskins|washington football team"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-qbs-2000", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who won a Super Bowl as the starter from the 2000 season on.",
    note: "Super Bowls XXXV through LX.",
    tiers: {
      chalk: ["Tom Brady","Patrick Mahomes","Peyton Manning"],
      bandwagon: ["Eli Manning","Ben Roethlisberger|big ben","Drew Brees","Aaron Rodgers"],
      starter: ["Russell Wilson","Joe Flacco","Matthew Stafford","Jalen Hurts","Nick Foles"],
      film: ["Sam Darnold"],
      deep: ["Brad Johnson","Trent Dilfer"],
      hail: []
    }
  },
  {
    id: "sb-qbs-2015", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who started a Super Bowl from the 2015 season on.",
    note: "Winners and losers, Super Bowls 50 through LX.",
    tiers: {
      chalk: ["Tom Brady","Patrick Mahomes"],
      bandwagon: ["Peyton Manning","Cam Newton","Jalen Hurts","Brock Purdy","Matthew Stafford"],
      starter: ["Matt Ryan","Nick Foles","Jared Goff","Joe Burrow","Jimmy Garoppolo|jimmy g"],
      film: ["Sam Darnold","Drake Maye"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-first-pick-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a Super Bowl–winning QB who was the No. 1 overall draft pick.",
    note: "NFL Draft No. 1 picks only.",
    tiers: {
      chalk: ["Peyton Manning","Eli Manning"],
      bandwagon: ["John Elway","Troy Aikman","Matthew Stafford"],
      starter: ["Terry Bradshaw"],
      film: [],
      deep: ["Jim Plunkett"],
      hail: []
    }
  },
  {
    id: "chiefs-sb-opps", cat: "superbowl", diff: "easy",
    prompt: "Name a team the Chiefs beat in a Super Bowl.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["San Francisco 49ers|49ers|niners|san francisco","Philadelphia Eagles|eagles|philadelphia|philly"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: ["Minnesota Vikings|vikings|minnesota"],
      hail: []
    }
  },
  {
    id: "steelers-sb-opps", cat: "superbowl", diff: "easy",
    prompt: "Name a team the Steelers beat in a Super Bowl.",
    note: "Six wins, five different opponents.",
    tiers: {
      chalk: ["Dallas Cowboys|cowboys|dallas","Seattle Seahawks|seahawks|seattle"],
      bandwagon: ["Arizona Cardinals|cardinals|arizona|st louis cardinals|chicago cardinals"],
      starter: ["Los Angeles Rams|rams|st louis rams|la rams"],
      film: ["Minnesota Vikings|vikings|minnesota"],
      deep: [],
      hail: []
    }
  },
  {
    id: "niners-sb-opps", cat: "superbowl", diff: "easy",
    prompt: "Name a team the 49ers beat in a Super Bowl.",
    note: "Five wins, four different opponents.",
    tiers: {
      chalk: ["Cincinnati Bengals|bengals|cincinnati|cincy"],
      bandwagon: ["Denver Broncos|broncos|denver","Los Angeles Chargers|chargers|san diego chargers|san diego|la chargers"],
      starter: ["Miami Dolphins|dolphins|miami"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "cowboys-sb-opps", cat: "superbowl", diff: "easy",
    prompt: "Name a team the Cowboys beat in a Super Bowl.",
    note: "Five wins, four different opponents.",
    tiers: {
      chalk: ["Buffalo Bills|bills|buffalo","Pittsburgh Steelers|steelers|pittsburgh"],
      bandwagon: ["Denver Broncos|broncos|denver"],
      starter: ["Miami Dolphins|dolphins|miami"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "packers-sb-opps", cat: "superbowl", diff: "easy",
    prompt: "Name a team the Packers beat in a Super Bowl.",
    note: "Four wins, four different opponents.",
    tiers: {
      chalk: ["Pittsburgh Steelers|steelers|pittsburgh","Kansas City Chiefs|chiefs|kansas city|kc"],
      bandwagon: ["New England Patriots|patriots|pats|new england"],
      starter: ["Las Vegas Raiders|raiders|oakland raiders|los angeles raiders|las vegas|oakland"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "giants-sb-opps", cat: "superbowl", diff: "easy",
    prompt: "Name a team the Giants beat in a Super Bowl.",
    note: "Four wins, three different opponents.",
    tiers: {
      chalk: ["New England Patriots|patriots|pats|new england"],
      bandwagon: ["Buffalo Bills|bills|buffalo"],
      starter: ["Denver Broncos|broncos|denver"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "pats-sb-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who started a Super Bowl for the Patriots.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Tom Brady"],
      bandwagon: ["Drew Bledsoe","Drake Maye"],
      starter: [],
      film: [],
      deep: ["Tony Eason"],
      hail: []
    }
  },
  {
    id: "niners-sb-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who started a Super Bowl for the 49ers.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Joe Montana","Steve Young"],
      bandwagon: ["Colin Kaepernick","Brock Purdy"],
      starter: ["Jimmy Garoppolo|jimmy g"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "eagles-sb-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who started a Super Bowl for the Eagles.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Jalen Hurts","Nick Foles"],
      bandwagon: ["Donovan McNabb"],
      starter: [],
      film: [],
      deep: ["Ron Jaworski|jaws"],
      hail: []
    }
  },
  {
    id: "broncos-sb-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who started a Super Bowl for the Broncos.",
    note: "Eight trips, three different starters.",
    tiers: {
      chalk: ["John Elway","Peyton Manning"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: ["Craig Morton"],
      hail: []
    }
  },
  {
    id: "sixty-k-pass", cat: "records", diff: "easy",
    prompt: "Name a QB with 60,000 or more career passing yards.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["Tom Brady","Drew Brees","Peyton Manning"],
      bandwagon: ["Brett Favre","Aaron Rodgers"],
      starter: ["Philip Rivers","Ben Roethlisberger|big ben","Dan Marino","Matthew Stafford"],
      film: ["Matt Ryan"],
      deep: [],
      hail: []
    }
  },
  {
    id: "four-hundred-td", cat: "records", diff: "easy",
    prompt: "Name a QB with 400 or more career TD passes.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["Tom Brady","Drew Brees","Peyton Manning"],
      bandwagon: ["Aaron Rodgers","Brett Favre"],
      starter: ["Philip Rivers","Dan Marino","Ben Roethlisberger|big ben","Matthew Stafford"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "hundred-rush-td", cat: "records", diff: "easy",
    prompt: "Name a player with 100 or more career rushing TDs.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["Emmitt Smith","LaDainian Tomlinson|lt","Adrian Peterson"],
      bandwagon: ["Walter Payton","Derrick Henry","Jim Brown"],
      starter: ["Marcus Allen","Marshall Faulk"],
      film: ["Shaun Alexander","John Riggins"],
      deep: [],
      hail: []
    }
  },
  {
    id: "twelve-k-rush", cat: "records", diff: "easy",
    prompt: "Name a player with 12,000 or more career rushing yards.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["Emmitt Smith","Walter Payton","Barry Sanders"],
      bandwagon: ["Adrian Peterson","Frank Gore","LaDainian Tomlinson|lt","Derrick Henry"],
      starter: ["Jerome Bettis|the bus","Eric Dickerson","Curtis Martin","Jim Brown","Marshall Faulk","Tony Dorsett"],
      film: ["Edgerrin James","Marcus Allen"],
      deep: ["Franco Harris","Thurman Thomas"],
      hail: []
    }
  },
  {
    id: "twenty-sacks", cat: "records", diff: "easy",
    prompt: "Name a player with 20 or more sacks in one season.",
    note: "Official sacks (since 1982), through the 2025 season.",
    tiers: {
      chalk: ["Michael Strahan","T.J. Watt|tj watt","J.J. Watt|jj watt","Myles Garrett"],
      bandwagon: ["Aaron Donald","Reggie White","Lawrence Taylor|lt"],
      starter: ["Jared Allen","Justin Houston","DeMarcus Ware","Derrick Thomas"],
      film: ["Mark Gastineau","Chris Doleman"],
      deep: [],
      hail: []
    }
  },
  {
    id: "winless", cat: "records", diff: "easy",
    prompt: "Name a team that went winless in a full season.",
    note: "Since 1970: no wins all year (ties allowed).",
    tiers: {
      chalk: ["Detroit Lions|lions|detroit","Cleveland Browns|browns|cleveland"],
      bandwagon: [],
      starter: [],
      film: ["Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa"],
      deep: ["Indianapolis Colts|colts|indianapolis|indy|baltimore colts"],
      hail: []
    }
  },
  {
    id: "perfect-regular", cat: "records", diff: "easy",
    prompt: "Name a team that went undefeated in an NFL regular season.",
    note: "No losses or ties, any era.",
    tiers: {
      chalk: ["Miami Dolphins|dolphins|miami","New England Patriots|patriots|pats|new england"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: ["Chicago Bears|bears|chicago"],
      hail: []
    }
  },
  {
    id: "multi-mvp-qbs", cat: "awards", diff: "easy",
    prompt: "Name a quarterback who won NFL MVP two or more times.",
    note: "AP MVP, through the 2025 season.",
    tiers: {
      chalk: ["Peyton Manning","Aaron Rodgers","Tom Brady","Patrick Mahomes","Lamar Jackson"],
      bandwagon: ["Brett Favre","Joe Montana","Steve Young"],
      starter: ["Kurt Warner"],
      film: ["Johnny Unitas"],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-coaches", cat: "hof", diff: "easy",
    prompt: "Name a head coach in the Pro Football Hall of Fame (like Vince Lombardi).",
    note: "Inducted as a coach, through the Class of 2025.",
    tiers: {
      chalk: ["Vince Lombardi","Bill Walsh","John Madden","Don Shula","Tom Landry"],
      bandwagon: ["Chuck Noll","Joe Gibbs","Bill Parcells","Tony Dungy","Jimmy Johnson","Bill Cowher"],
      starter: ["Marv Levy","Bud Grant","Paul Brown","George Halas","Dick Vermeil","Tom Flores"],
      film: ["Hank Stram","Weeb Ewbank","Don Coryell","Sid Gillman","George Allen"],
      deep: ["Curly Lambeau","Steve Owen","Greasy Neale|earle neale"],
      hail: ["Guy Chamberlin","Jimmy Conzelman","Ray Flaherty"]
    }
  },
  {
    id: "hof-safeties", cat: "hof", diff: "easy",
    prompt: "Name a safety in the Pro Football Hall of Fame (like Ed Reed).",
    note: "Through the Class of 2025.",
    tiers: {
      chalk: ["Ed Reed","Troy Polamalu","Ronnie Lott"],
      bandwagon: ["Brian Dawkins","John Lynch","Steve Atwater"],
      starter: ["Paul Krause","Ken Houston","LeRoy Butler|leroy butler","Kenny Easley"],
      film: ["Cliff Harris","Donnie Shell","Larry Wilson","Willie Wood","Emlen Tunnell"],
      deep: ["Johnny Robinson","Yale Lary","Jack Christiansen"],
      hail: ["Rod Woodson","Charles Woodson"]
    }
  },
  {
    id: "sponsor-stadiums", cat: "venues", diff: "easy",
    prompt: "Name a current NFL stadium named after a company.",
    note: "2026 names. Lambeau and Soldier Field don't count.",
    tiers: {
      chalk: ["AT&T Stadium|att stadium|at and t stadium|at t stadium","SoFi Stadium|sofi","MetLife Stadium|metlife","Gillette Stadium|gillette","Mercedes-Benz Stadium|mercedes benz stadium"],
      bandwagon: ["Levi's Stadium|levis stadium|levis","Allegiant Stadium|allegiant","Lincoln Financial Field|the linc|linc","Hard Rock Stadium|hard rock","Lumen Field|lumen","Raymond James Stadium|raymond james"],
      starter: ["U.S. Bank Stadium|us bank stadium","NRG Stadium|nrg","State Farm Stadium|state farm","Lucas Oil Stadium|lucas oil","Ford Field","Bank of America Stadium|bank of america","Caesars Superdome|caesars"],
      film: ["M&T Bank Stadium|m and t bank stadium|mt bank stadium","Acrisure Stadium|acrisure","Empower Field at Mile High|empower field|empower","Nissan Stadium|nissan","Highmark Stadium|highmark","GEHA Field at Arrowhead Stadium|geha field|geha"],
      deep: ["Huntington Bank Field|huntington","Northwest Stadium","EverBank Stadium|everbank","Paycor Stadium|paycor"],
      hail: []
    }
  },
  {
    id: "field-stadiums", cat: "venues", diff: "easy",
    prompt: "Name an NFL team whose home stadium has \"Field\" in its name.",
    note: "2026 stadium names.",
    tiers: {
      chalk: ["Green Bay Packers|packers|green bay","Chicago Bears|bears|chicago","Detroit Lions|lions|detroit"],
      bandwagon: ["Philadelphia Eagles|eagles|philadelphia|philly","Seattle Seahawks|seahawks|seattle","Denver Broncos|broncos|denver"],
      starter: ["Cleveland Browns|browns|cleveland"],
      film: ["Kansas City Chiefs|chiefs|kansas city|kc"],
      deep: [],
      hail: []
    }
  },
  {
    id: "intl-cities", cat: "venues", diff: "easy",
    prompt: "Name a city outside the U.S. that has hosted an NFL regular-season game.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["London","Mexico City"],
      bandwagon: ["Munich","Frankfurt","Toronto"],
      starter: ["Sao Paulo|são paulo","Madrid","Berlin"],
      film: ["Dublin"],
      deep: [],
      hail: []
    }
  },
  {
    id: "snl-hosts", cat: "culture", diff: "easy",
    prompt: "Name an NFL player who has hosted Saturday Night Live (like Peyton Manning).",
    note: "Players who hosted the show, any year.",
    tiers: {
      chalk: ["Peyton Manning","Tom Brady","Travis Kelce"],
      bandwagon: ["Joe Montana"],
      starter: ["Walter Payton","John Madden"],
      film: ["Fran Tarkenton"],
      deep: ["O.J. Simpson|oj simpson"],
      hail: []
    }
  },
  {
    id: "nfl-actors", cat: "culture", diff: "easy",
    prompt: "Name an NFL player who became a movie or TV actor (like Terry Crews).",
    note: "Real NFL players with real acting careers.",
    tiers: {
      chalk: ["Terry Crews","Carl Weathers"],
      bandwagon: ["Jim Brown","Michael Strahan","Brian Bosworth"],
      starter: ["Bubba Smith","Fred Williamson","Alex Karras","Merlin Olsen"],
      film: ["Ed Marinaro","Rosey Grier|roosevelt grier","Bernie Casey"],
      deep: ["Joe Namath"],
      hail: []
    }
  },
  {
    id: "formations", cat: "culture", diff: "easy",
    prompt: "Name an offensive formation.",
    note: "Football formations, any level.",
    tiers: {
      chalk: ["Shotgun","I-Formation|i formation|i form"],
      bandwagon: ["Pistol","Wildcat","Spread"],
      starter: ["Wishbone","Single Wing|single-wing","T-Formation|t formation","Empty|empty backfield","Singleback|ace"],
      film: ["Wing-T|wing t","Pro Set|pro-set","Power I|power-i","Run and Shoot|run-and-shoot","Trips","Bunch"],
      deep: ["Split Back|split backs","Jumbo|goal line"],
      hail: []
    }
  },
  {
    id: "positions", cat: "culture", diff: "easy",
    prompt: "Name a position on a football team.",
    note: "Offense, defense or special teams.",
    tiers: {
      chalk: ["Quarterback|qb","Running Back|rb|halfback","Wide Receiver|wr|receiver"],
      bandwagon: ["Tight End|te","Linebacker|lb","Cornerback|cb|corner","Safety"],
      starter: ["Kicker","Center","Defensive End|de","Defensive Tackle|dt|nose tackle"],
      film: ["Offensive Tackle|ot|tackle|left tackle","Guard|og|offensive guard","Punter","Fullback|fb"],
      deep: ["Long Snapper","Nickelback|nickel corner|slot corner","Kick Returner|returner","Holder"],
      hail: []
    }
  },
  {
    id: "penalties", cat: "culture", diff: "easy",
    prompt: "Name a penalty in football.",
    note: "Any NFL penalty.",
    tiers: {
      chalk: ["Holding","Pass Interference|pi|dpi|opi","False Start","Offside|offsides"],
      bandwagon: ["Roughing the Passer","Face Mask|facemask","Delay of Game","Unnecessary Roughness","Unsportsmanlike Conduct"],
      starter: ["Encroachment","Neutral Zone Infraction","Intentional Grounding","Illegal Formation","Too Many Men on the Field|too many men"],
      film: ["Horse-Collar Tackle|horse collar","Clipping","Chop Block","Roughing the Kicker","Running into the Kicker","Taunting","Illegal Contact"],
      deep: ["Illegal Shift","Illegal Motion","Ineligible Receiver Downfield|ineligible man downfield","Illegal Block in the Back|block in the back","Tripping","Illegal Use of Hands","Kick Catch Interference"],
      hail: []
    }
  },
  {
    id: "scoring", cat: "culture", diff: "easy",
    prompt: "Name a way to score points in football.",
    note: "Any scoring play in an NFL game.",
    tiers: {
      chalk: ["Touchdown|td","Field Goal|fg"],
      bandwagon: ["Extra Point|pat|point after"],
      starter: ["Safety","Two-Point Conversion|2 point conversion|two point conversion"],
      film: [],
      deep: ["Fair Catch Kick|fair-catch kick","Defensive Two-Point Return"],
      hail: []
    }
  },
  {
    id: "qb-no9", cat: "positions", diff: "easy",
    prompt: "Name a quarterback who wore No. 9 in the NFL.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Drew Brees","Matthew Stafford","Joe Burrow","Tony Romo"],
      bandwagon: ["Steve McNair","Jim McMahon","Bryce Young"],
      starter: ["Sonny Jurgensen","J.J. McCarthy|jj mccarthy"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "fullbacks", cat: "positions", diff: "easy",
    prompt: "Name a famous NFL fullback.",
    note: "Players known mainly as fullbacks.",
    tiers: {
      chalk: ["Mike Alstott|a train","Kyle Juszczyk|juice","Larry Csonka"],
      bandwagon: ["Daryl Johnston|moose","Lorenzo Neal","John Kuhn","Jim Taylor"],
      starter: ["Tom Rathman","Marion Motley","Mack Strong","Tony Richardson","Vonta Leach"],
      film: ["Craig Heyward|ironhead","Le'Ron McClain|leron mcclain","Patrick DiMarco","Mike Tolbert"],
      deep: ["Sam Gash","Matt Suhey"],
      hail: []
    }
  },
  {
    id: "qb-2020s-r1", cat: "draft", diff: "easy",
    prompt: "Name a QB taken in the first round from 2020 to 2025.",
    note: "First-round QBs in the 2020–2025 drafts.",
    tiers: {
      chalk: ["Joe Burrow","Justin Herbert","Trevor Lawrence","C.J. Stroud|cj stroud","Caleb Williams"],
      bandwagon: ["Tua Tagovailoa|tua","Jordan Love","Jayden Daniels","Drake Maye","Bryce Young","Bo Nix"],
      starter: ["Justin Fields","Mac Jones","Anthony Richardson","J.J. McCarthy|jj mccarthy","Cam Ward","Michael Penix Jr.|michael penix"],
      film: ["Zach Wilson","Trey Lance","Kenny Pickett","Jaxson Dart"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-mvp-2010s", cat: "superbowl", diff: "easy",
    prompt: "Name a Super Bowl MVP from the 2010s.",
    note: "Super Bowls XLV–LIV (2010–2019 seasons).",
    tiers: {
      chalk: ["Tom Brady","Patrick Mahomes","Aaron Rodgers"],
      bandwagon: ["Eli Manning","Von Miller","Nick Foles"],
      starter: ["Joe Flacco","Julian Edelman"],
      film: [],
      deep: ["Malcolm Smith"],
      hail: []
    }
  },
  {
    id: "sb-mvp-2020s", cat: "superbowl", diff: "easy",
    prompt: "Name a Super Bowl MVP from the 2020–2024 seasons.",
    note: "Super Bowls LV–LIX.",
    tiers: {
      chalk: ["Patrick Mahomes","Tom Brady"],
      bandwagon: ["Jalen Hurts"],
      starter: ["Cooper Kupp"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-mvp-multi", cat: "superbowl", diff: "easy",
    prompt: "Name a player with two or more Super Bowl MVP awards.",
    note: "Through Super Bowl LIX.",
    tiers: {
      chalk: ["Tom Brady","Patrick Mahomes"],
      bandwagon: ["Joe Montana","Eli Manning"],
      starter: ["Terry Bradshaw"],
      film: [],
      deep: ["Bart Starr"],
      hail: []
    }
  },
  {
    id: "mvp-2000s", cat: "awards", diff: "easy",
    prompt: "Name an NFL MVP from the 2000s.",
    note: "AP MVP, 2000–2009 seasons.",
    tiers: {
      chalk: ["Peyton Manning","Tom Brady"],
      bandwagon: ["LaDainian Tomlinson|lt","Kurt Warner","Marshall Faulk"],
      starter: ["Shaun Alexander","Steve McNair"],
      film: [],
      deep: ["Rich Gannon"],
      hail: []
    }
  },
  {
    id: "mvp-2010s", cat: "awards", diff: "easy",
    prompt: "Name an NFL MVP from the 2010s.",
    note: "AP MVP, 2010–2019 seasons.",
    tiers: {
      chalk: ["Tom Brady","Aaron Rodgers","Patrick Mahomes","Lamar Jackson"],
      bandwagon: ["Peyton Manning","Cam Newton","Adrian Peterson"],
      starter: [],
      film: [],
      deep: ["Matt Ryan"],
      hail: []
    }
  },
  {
    id: "coaches-2-sb", cat: "coaches", diff: "easy",
    prompt: "Name a head coach who won two or more Super Bowls.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Bill Belichick","Andy Reid","Vince Lombardi"],
      bandwagon: ["Bill Walsh","Chuck Noll","Joe Gibbs","Tom Coughlin","Bill Parcells","Jimmy Johnson"],
      starter: ["Don Shula","Tom Landry","Mike Shanahan"],
      film: ["Tom Flores","George Seifert"],
      deep: [],
      hail: []
    }
  },
  {
    id: "moved-teams", cat: "franchise", diff: "easy",
    prompt: "Name a franchise that has moved to a new city.",
    note: "Current franchises that relocated at some point.",
    tiers: {
      chalk: ["Las Vegas Raiders|raiders|oakland raiders|los angeles raiders|las vegas|oakland","Los Angeles Rams|rams|st louis rams|la rams","Indianapolis Colts|colts|indianapolis|indy|baltimore colts"],
      bandwagon: ["Los Angeles Chargers|chargers|san diego chargers|san diego|la chargers","Arizona Cardinals|cardinals|arizona|st louis cardinals|chicago cardinals","Tennessee Titans|titans|tennessee|houston oilers|oilers|tennessee oilers"],
      starter: ["Baltimore Ravens|ravens|baltimore","Kansas City Chiefs|chiefs|kansas city|kc"],
      film: ["Washington Commanders|commanders|washington|redskins|washington redskins|washington football team"],
      deep: ["Detroit Lions|lions|detroit"],
      hail: []
    }
  },
  {
    id: "afc-north", cat: "franchise", diff: "easy",
    prompt: "Name a team in the AFC North.",
    note: "Current division members.",
    tiers: {
      chalk: ["Pittsburgh Steelers|steelers|pittsburgh","Baltimore Ravens|ravens|baltimore"],
      bandwagon: ["Cleveland Browns|browns|cleveland"],
      starter: ["Cincinnati Bengals|bengals|cincinnati|cincy"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "packers-sb-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who started a Super Bowl for the Packers.",
    note: "Five trips, three starters.",
    tiers: {
      chalk: ["Aaron Rodgers","Brett Favre"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: ["Bart Starr"],
      hail: []
    }
  },
  {
    id: "seahawks-sb-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who started a Super Bowl for the Seahawks.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Russell Wilson"],
      bandwagon: ["Sam Darnold"],
      starter: [],
      film: [],
      deep: ["Matt Hasselbeck"],
      hail: []
    }
  },
  {
    id: "chiefs-sb-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who started a Super Bowl for the Chiefs.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Patrick Mahomes"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: ["Len Dawson"],
      hail: []
    }
  },
  {
    id: "commissioners", cat: "culture", diff: "easy",
    prompt: "Name an NFL commissioner (or league president).",
    note: "Every leader of the league since 1920.",
    tiers: {
      chalk: ["Roger Goodell"],
      bandwagon: ["Pete Rozelle"],
      starter: ["Paul Tagliabue"],
      film: ["Bert Bell"],
      deep: ["Jim Thorpe","Elmer Layden"],
      hail: ["Joe Carr","Carl Storck","Austin Gunsel"]
    }
  },
  {
    id: "trophies", cat: "culture", diff: "easy",
    prompt: "Name an NFL trophy or named award.",
    note: "Named trophies and awards the NFL hands out.",
    tiers: {
      chalk: ["Vince Lombardi Trophy|lombardi trophy|lombardi"],
      bandwagon: ["Walter Payton Man of the Year|walter payton award|man of the year"],
      starter: ["Pete Rozelle Trophy|rozelle trophy","George Halas Trophy|halas trophy","Lamar Hunt Trophy|lamar hunt"],
      film: ["Bert Bell Award","Art Rooney Sportsmanship Award|art rooney award"],
      deep: ["Salute to Service Award","Deacon Jones Award"],
      hail: []
    }
  },
  {
    id: "sb-overtime", cat: "superbowl", diff: "easy",
    prompt: "Name a team that played in an overtime Super Bowl.",
    note: "Only two Super Bowls have gone to OT.",
    tiers: {
      chalk: ["New England Patriots|patriots|pats|new england","Kansas City Chiefs|chiefs|kansas city|kc"],
      bandwagon: ["Atlanta Falcons|falcons|atlanta","San Francisco 49ers|49ers|niners|san francisco"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-home-field", cat: "superbowl", diff: "easy",
    prompt: "Name a team that played a Super Bowl in its own home stadium.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa"],
      bandwagon: ["Los Angeles Rams|rams|st louis rams|la rams"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "rush-champs-2020s", cat: "records", diff: "easy",
    prompt: "Name an NFL rushing-yards leader from 2020 to 2024.",
    note: "The season's rushing leader, 2020–2024.",
    tiers: {
      chalk: ["Derrick Henry","Saquon Barkley"],
      bandwagon: ["Christian McCaffrey|cmc"],
      starter: ["Jonathan Taylor","Josh Jacobs"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "rec-champs-2020s", cat: "records", diff: "easy",
    prompt: "Name an NFL receiving-yards leader from 2020 to 2024.",
    note: "The season's receiving-yards leader, 2020–2024.",
    tiers: {
      chalk: ["Justin Jefferson","Tyreek Hill","Ja'Marr Chase|jamarr chase"],
      bandwagon: ["Cooper Kupp"],
      starter: ["Stefon Diggs"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "mannings", cat: "culture", diff: "easy",
    prompt: "Name a member of the Manning football family.",
    note: "Archie and the family that followed.",
    tiers: {
      chalk: ["Peyton Manning","Eli Manning"],
      bandwagon: ["Archie Manning"],
      starter: ["Arch Manning"],
      film: ["Cooper Manning"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ny-la-teams", cat: "franchise", diff: "easy",
    prompt: "Name an NFL team that plays in the New York or Los Angeles area.",
    note: "Home stadium in either metro today.",
    tiers: {
      chalk: ["New York Giants|giants|ny giants","Los Angeles Rams|rams|st louis rams|la rams"],
      bandwagon: ["New York Jets|jets|ny jets"],
      starter: ["Los Angeles Chargers|chargers|san diego chargers|san diego|la chargers"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "pa-ohio-teams", cat: "franchise", diff: "easy",
    prompt: "Name an NFL team from Pennsylvania or Ohio.",
    note: "Current teams.",
    tiers: {
      chalk: ["Pittsburgh Steelers|steelers|pittsburgh","Philadelphia Eagles|eagles|philadelphia|philly"],
      bandwagon: ["Cleveland Browns|browns|cleveland"],
      starter: ["Cincinnati Bengals|bengals|cincinnati|cincy"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "no1-qbs-recent", cat: "draft", diff: "easy",
    prompt: "Name a QB taken No. 1 overall since 2010.",
    note: "2010–2025 drafts.",
    tiers: {
      chalk: ["Joe Burrow","Trevor Lawrence","Caleb Williams","Andrew Luck"],
      bandwagon: ["Cam Newton","Baker Mayfield","Kyler Murray","Jared Goff"],
      starter: ["Bryce Young","Jameis Winston","Cam Ward"],
      film: ["Sam Bradford"],
      deep: [],
      hail: []
    }
  },
  {
    id: "afc-champs-tens", cat: "superbowl", diff: "easy",
    prompt: "Name an AFC champion from the 2010s.",
    note: "AFC's Super Bowl team, 2010–2019 seasons.",
    tiers: {
      chalk: ["New England Patriots|patriots|pats|new england","Kansas City Chiefs|chiefs|kansas city|kc"],
      bandwagon: ["Denver Broncos|broncos|denver","Pittsburgh Steelers|steelers|pittsburgh"],
      starter: ["Baltimore Ravens|ravens|baltimore"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "nfc-champs-tens", cat: "superbowl", diff: "easy",
    prompt: "Name an NFC champion from the 2010s.",
    note: "NFC's Super Bowl team, 2010–2019 seasons.",
    tiers: {
      chalk: ["Philadelphia Eagles|eagles|philadelphia|philly","Seattle Seahawks|seahawks|seattle","San Francisco 49ers|49ers|niners|san francisco"],
      bandwagon: ["Green Bay Packers|packers|green bay","New York Giants|giants|ny giants","Los Angeles Rams|rams|st louis rams|la rams"],
      starter: ["Atlanta Falcons|falcons|atlanta","Carolina Panthers|panthers|carolina"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "afc-champs-aughts", cat: "superbowl", diff: "easy",
    prompt: "Name an AFC champion from the 2000s.",
    note: "AFC's Super Bowl team, 2000–2009 seasons.",
    tiers: {
      chalk: ["New England Patriots|patriots|pats|new england","Pittsburgh Steelers|steelers|pittsburgh"],
      bandwagon: ["Indianapolis Colts|colts|indianapolis|indy|baltimore colts"],
      starter: ["Baltimore Ravens|ravens|baltimore","Las Vegas Raiders|raiders|oakland raiders|los angeles raiders|las vegas|oakland"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "nfc-champs-aughts", cat: "superbowl", diff: "easy",
    prompt: "Name an NFC champion from the 2000s.",
    note: "NFC's Super Bowl team, 2000–2009 seasons.",
    tiers: {
      chalk: ["New York Giants|giants|ny giants","New Orleans Saints|saints|new orleans"],
      bandwagon: ["Philadelphia Eagles|eagles|philadelphia|philly","Seattle Seahawks|seahawks|seattle","Chicago Bears|bears|chicago"],
      starter: ["Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa","Los Angeles Rams|rams|st louis rams|la rams","Carolina Panthers|panthers|carolina"],
      film: ["Arizona Cardinals|cardinals|arizona|st louis cardinals|chicago cardinals"],
      deep: [],
      hail: []
    }
  },
  {
    id: "conf-champs-2020s", cat: "superbowl", diff: "easy",
    prompt: "Name a conference champion from the 2020s.",
    note: "Either conference's Super Bowl team, 2020–2025 seasons.",
    tiers: {
      chalk: ["Kansas City Chiefs|chiefs|kansas city|kc","Philadelphia Eagles|eagles|philadelphia|philly"],
      bandwagon: ["San Francisco 49ers|49ers|niners|san francisco","Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa","Los Angeles Rams|rams|st louis rams|la rams"],
      starter: ["Cincinnati Bengals|bengals|cincinnati|cincy","Seattle Seahawks|seahawks|seattle","New England Patriots|patriots|pats|new england"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "west-coast", cat: "franchise", diff: "easy",
    prompt: "Name an NFL team in the Pacific time zone.",
    note: "Home stadium in Pacific time today.",
    tiers: {
      chalk: ["San Francisco 49ers|49ers|niners|san francisco","Seattle Seahawks|seahawks|seattle"],
      bandwagon: ["Los Angeles Rams|rams|st louis rams|la rams","Las Vegas Raiders|raiders|oakland raiders|los angeles raiders|las vegas|oakland"],
      starter: ["Los Angeles Chargers|chargers|san diego chargers|san diego|la chargers"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "nfl-tv", cat: "culture", diff: "easy",
    prompt: "Name a network or streamer that aired an NFL game in the 2025 season.",
    note: "National TV and streaming partners.",
    tiers: {
      chalk: ["CBS","FOX","NBC","ESPN"],
      bandwagon: ["Amazon Prime Video|prime video|amazon|prime","ABC","Netflix"],
      starter: ["NFL Network"],
      film: ["YouTube|youtube tv"],
      deep: ["Peacock","ESPN2"],
      hail: []
    }
  },
  {
    id: "goat-qb-teams", cat: "franchise", diff: "easy",
    prompt: "Name a team Tom Brady, Peyton Manning or Aaron Rodgers played for.",
    note: "Regular-season NFL teams.",
    tiers: {
      chalk: ["New England Patriots|patriots|pats|new england","Indianapolis Colts|colts|indianapolis|indy|baltimore colts","Green Bay Packers|packers|green bay"],
      bandwagon: ["Tampa Bay Buccaneers|buccaneers|bucs|tampa bay|tampa","Denver Broncos|broncos|denver","New York Jets|jets|ny jets"],
      starter: ["Pittsburgh Steelers|steelers|pittsburgh"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-champs-90s", cat: "superbowl", diff: "easy",
    prompt: "Name a team that won a Super Bowl in the 1990s.",
    note: "1990–1999 seasons.",
    tiers: {
      chalk: ["Dallas Cowboys|cowboys|dallas","San Francisco 49ers|49ers|niners|san francisco"],
      bandwagon: ["Green Bay Packers|packers|green bay","Denver Broncos|broncos|denver","New York Giants|giants|ny giants"],
      starter: ["Washington Commanders|commanders|washington|redskins|washington redskins|washington football team","Los Angeles Rams|rams|st louis rams|la rams"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-champs-80s", cat: "superbowl", diff: "easy",
    prompt: "Name a team that won a Super Bowl in the 1980s.",
    note: "1980–1989 seasons.",
    tiers: {
      chalk: ["San Francisco 49ers|49ers|niners|san francisco","Chicago Bears|bears|chicago"],
      bandwagon: ["New York Giants|giants|ny giants","Washington Commanders|commanders|washington|redskins|washington redskins|washington football team"],
      starter: ["Las Vegas Raiders|raiders|oakland raiders|los angeles raiders|las vegas|oakland"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-champs-70s", cat: "superbowl", diff: "easy",
    prompt: "Name a team that won a Super Bowl in the 1970s.",
    note: "1970–1979 seasons.",
    tiers: {
      chalk: ["Pittsburgh Steelers|steelers|pittsburgh","Dallas Cowboys|cowboys|dallas"],
      bandwagon: ["Miami Dolphins|dolphins|miami","Las Vegas Raiders|raiders|oakland raiders|los angeles raiders|las vegas|oakland"],
      starter: [],
      film: [],
      deep: ["Indianapolis Colts|colts|indianapolis|indy|baltimore colts"],
      hail: []
    }
  },
  {
    id: "pre-1940-teams", cat: "franchise", diff: "easy",
    prompt: "Name a current franchise founded before 1940.",
    note: "Founding year of the current franchise.",
    tiers: {
      chalk: ["Chicago Bears|bears|chicago","Green Bay Packers|packers|green bay"],
      bandwagon: ["New York Giants|giants|ny giants","Pittsburgh Steelers|steelers|pittsburgh","Philadelphia Eagles|eagles|philadelphia|philly"],
      starter: ["Detroit Lions|lions|detroit","Arizona Cardinals|cardinals|arizona|st louis cardinals|chicago cardinals","Washington Commanders|commanders|washington|redskins|washington redskins|washington football team"],
      film: ["Los Angeles Rams|rams|st louis rams|la rams"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-mvp-70s", cat: "superbowl", diff: "hard",
    prompt: "Name a Super Bowl MVP from the 1970s.",
    note: "Super Bowls V–XIV (1970–1979 seasons).",
    tiers: {
      chalk: ["Terry Bradshaw","Roger Staubach"],
      bandwagon: ["Franco Harris","Lynn Swann","Larry Csonka"],
      starter: ["Fred Biletnikoff"],
      film: ["Randy White","Harvey Martin","Chuck Howley"],
      deep: ["Jake Scott"],
      hail: []
    }
  },
  {
    id: "sb-mvp-80s", cat: "superbowl", diff: "hard",
    prompt: "Name a Super Bowl MVP from the 1980s.",
    note: "Super Bowls XV–XXIV (1980–1989 seasons).",
    tiers: {
      chalk: ["Joe Montana","Jerry Rice"],
      bandwagon: ["Marcus Allen","John Riggins","Phil Simms"],
      starter: ["Richard Dent","Doug Williams"],
      film: ["Jim Plunkett"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-mvp-90s", cat: "superbowl", diff: "hard",
    prompt: "Name a Super Bowl MVP from the 1990s.",
    note: "Super Bowls XXV–XXXIV (1990–1999 seasons).",
    tiers: {
      chalk: ["Troy Aikman","Emmitt Smith","John Elway"],
      bandwagon: ["Steve Young","Terrell Davis","Kurt Warner"],
      starter: ["Desmond Howard"],
      film: ["Mark Rypien","Ottis Anderson"],
      deep: ["Larry Brown"],
      hail: []
    }
  },
  {
    id: "sb-mvp-aughts", cat: "superbowl", diff: "easy",
    prompt: "Name a Super Bowl MVP from the 2000s.",
    note: "Super Bowls XXXV–XLIV (2000–2009 seasons).",
    tiers: {
      chalk: ["Tom Brady","Peyton Manning","Eli Manning"],
      bandwagon: ["Ray Lewis","Drew Brees"],
      starter: ["Hines Ward","Santonio Holmes"],
      film: ["Deion Branch"],
      deep: ["Dexter Jackson"],
      hail: []
    }
  },
  {
    id: "mvp-non-qb", cat: "awards", diff: "hard",
    prompt: "Name a non-quarterback who won NFL MVP (like Adrian Peterson).",
    note: "AP MVP, 1957 through 2025.",
    tiers: {
      chalk: ["Adrian Peterson","LaDainian Tomlinson","Barry Sanders"],
      bandwagon: ["Lawrence Taylor","Walter Payton","Jim Brown","Marshall Faulk"],
      starter: ["Terrell Davis","Shaun Alexander","Marcus Allen"],
      film: ["O.J. Simpson|oj simpson","Earl Campbell"],
      deep: ["Alan Page","Jim Taylor","Paul Hornung"],
      hail: ["Mark Moseley"]
    }
  },
  {
    id: "rush-champs-aughts", cat: "records", diff: "hard",
    prompt: "Name an NFL rushing-yards leader from the 2000s.",
    note: "The season's rushing leader, 2000–2009.",
    tiers: {
      chalk: ["LaDainian Tomlinson|lt","Adrian Peterson"],
      bandwagon: ["Chris Johnson|cj2k","Shaun Alexander","Curtis Martin"],
      starter: ["Edgerrin James","Ricky Williams","Jamal Lewis"],
      film: ["Priest Holmes"],
      deep: [],
      hail: []
    }
  },
  {
    id: "rush-champs-tens", cat: "records", diff: "hard",
    prompt: "Name an NFL rushing-yards leader from the 2010s.",
    note: "The season's rushing leader, 2010–2019.",
    tiers: {
      chalk: ["Adrian Peterson","Derrick Henry","Ezekiel Elliott|zeke"],
      bandwagon: ["DeMarco Murray","LeSean McCoy|shady"],
      starter: ["Arian Foster","Maurice Jones-Drew|mjd|maurice jones drew"],
      film: ["Kareem Hunt"],
      deep: [],
      hail: []
    }
  },
  {
    id: "rec-champs-aughts", cat: "records", diff: "hard",
    prompt: "Name an NFL receiving-yards leader from the 2000s.",
    note: "The season's receiving-yards leader, 2000–2009.",
    tiers: {
      chalk: ["Marvin Harrison","Andre Johnson","Steve Smith|steve smith sr"],
      bandwagon: ["Torry Holt","Reggie Wayne","Chad Johnson|ochocinco|chad ochocinco"],
      starter: [],
      film: ["Muhsin Muhammad"],
      deep: ["David Boston"],
      hail: []
    }
  },
  {
    id: "rec-champs-tens", cat: "records", diff: "hard",
    prompt: "Name an NFL receiving-yards leader from the 2010s.",
    note: "The season's receiving-yards leader, 2010–2019.",
    tiers: {
      chalk: ["Calvin Johnson|megatron","Antonio Brown","Julio Jones"],
      bandwagon: ["Michael Thomas","T.Y. Hilton|ty hilton"],
      starter: ["Josh Gordon"],
      film: [],
      deep: ["Brandon Lloyd"],
      hail: []
    }
  },
  {
    id: "pass-champs-aughts", cat: "records", diff: "hard",
    prompt: "Name an NFL passing-yards leader from the 2000s.",
    note: "The season's passing leader, 2000–2009.",
    tiers: {
      chalk: ["Peyton Manning","Tom Brady","Drew Brees"],
      bandwagon: ["Kurt Warner"],
      starter: ["Daunte Culpepper","Rich Gannon"],
      film: ["Matt Schaub"],
      deep: [],
      hail: []
    }
  },
  {
    id: "pass-champs-tens", cat: "records", diff: "hard",
    prompt: "Name an NFL passing-yards leader from the 2010s.",
    note: "The season's passing leader, 2010–2019 (ties count).",
    tiers: {
      chalk: ["Drew Brees","Tom Brady","Peyton Manning"],
      bandwagon: ["Ben Roethlisberger|big ben","Philip Rivers"],
      starter: ["Jameis Winston"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "pass-champs-2020s", cat: "records", diff: "hard",
    prompt: "Name an NFL passing-yards leader from 2020 to 2024.",
    note: "The season's passing leader, 2020–2024.",
    tiers: {
      chalk: ["Patrick Mahomes","Tom Brady","Joe Burrow"],
      bandwagon: ["Tua Tagovailoa|tua"],
      starter: ["Deshaun Watson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sack-champs-aughts", cat: "records", diff: "hard",
    prompt: "Name an NFL sack leader from the 2000s.",
    note: "The season's sack leader, 2000–2009.",
    tiers: {
      chalk: ["Michael Strahan","DeMarcus Ware","Jared Allen"],
      bandwagon: ["Jason Taylor","Dwight Freeney","Shawne Merriman"],
      starter: ["Elvis Dumervil"],
      film: ["La'Roi Glover|laroi glover","Derrick Burgess"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sack-champs-tens", cat: "records", diff: "hard",
    prompt: "Name an NFL sack leader from the 2010s.",
    note: "The season's sack leader, 2010–2019.",
    tiers: {
      chalk: ["J.J. Watt|jj watt","Aaron Donald"],
      bandwagon: ["Jared Allen","DeMarcus Ware","Justin Houston","Chandler Jones"],
      starter: ["Robert Mathis","Shaquil Barrett"],
      film: ["Vic Beasley"],
      deep: [],
      hail: []
    }
  },
  {
    id: "coach-sb-2-teams", cat: "coaches", diff: "hard",
    prompt: "Name a head coach who took two different teams to the Super Bowl.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Andy Reid","Bill Parcells"],
      bandwagon: ["Don Shula","Mike Holmgren","Dick Vermeil"],
      starter: ["Dan Reeves","John Fox"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "coach-sb-0-4", cat: "coaches", diff: "hard",
    prompt: "Name a head coach who lost two or more Super Bowls without ever winning one.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Marv Levy"],
      bandwagon: ["Bud Grant","Dan Reeves"],
      starter: ["Kyle Shanahan"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "qb-1k-rush", cat: "records", diff: "hard",
    prompt: "Name a QB with a 1,000-yard rushing season.",
    note: "Through the 2024 season.",
    tiers: {
      chalk: ["Lamar Jackson"],
      bandwagon: ["Michael Vick"],
      starter: ["Justin Fields"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "rams-sb-qbs", cat: "superbowl", diff: "hard",
    prompt: "Name a QB who started a Super Bowl for the Rams.",
    note: "Five trips, four starters.",
    tiers: {
      chalk: ["Kurt Warner","Matthew Stafford"],
      bandwagon: ["Jared Goff"],
      starter: [],
      film: [],
      deep: ["Vince Ferragamo"],
      hail: []
    }
  },
  {
    id: "giants-sb-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who started a Super Bowl for the Giants.",
    note: "Five trips, four starters.",
    tiers: {
      chalk: ["Eli Manning"],
      bandwagon: ["Phil Simms"],
      starter: ["Jeff Hostetler"],
      film: ["Kerry Collins"],
      deep: [],
      hail: []
    }
  },
  {
    id: "cowboys-sb-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who started a Super Bowl for the Cowboys.",
    note: "Eight trips, three starters.",
    tiers: {
      chalk: ["Troy Aikman","Roger Staubach"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: ["Craig Morton"],
      hail: []
    }
  },
  {
    id: "steelers-sb-qbs", cat: "superbowl", diff: "easy",
    prompt: "Name a QB who started a Super Bowl for the Steelers.",
    note: "Eight trips, three starters.",
    tiers: {
      chalk: ["Ben Roethlisberger|big ben","Terry Bradshaw"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: ["Neil O'Donnell|neil odonnell"],
      hail: []
    }
  },
  {
    id: "raiders-sb-qbs", cat: "superbowl", diff: "hard",
    prompt: "Name a QB who started a Super Bowl for the Raiders.",
    note: "Five trips, four starters.",
    tiers: {
      chalk: ["Jim Plunkett"],
      bandwagon: ["Ken Stabler|the snake","Rich Gannon"],
      starter: [],
      film: [],
      deep: ["Daryle Lamonica"],
      hail: []
    }
  },
  {
    id: "dolphins-sb-qbs", cat: "superbowl", diff: "hard",
    prompt: "Name a QB who started a Super Bowl for the Dolphins.",
    note: "Five trips, three starters.",
    tiers: {
      chalk: ["Dan Marino"],
      bandwagon: ["Bob Griese"],
      starter: [],
      film: [],
      deep: ["David Woodley"],
      hail: []
    }
  },
  {
    id: "washington-sb-qbs", cat: "superbowl", diff: "hard",
    prompt: "Name a QB who started a Super Bowl for Washington.",
    note: "Five trips, four starters.",
    tiers: {
      chalk: ["Joe Theismann","Doug Williams"],
      bandwagon: ["Mark Rypien"],
      starter: [],
      film: [],
      deep: ["Billy Kilmer"],
      hail: []
    }
  },
  {
    id: "colts-sb-qbs", cat: "superbowl", diff: "hard",
    prompt: "Name a QB who started a Super Bowl for the Colts.",
    note: "Baltimore and Indianapolis.",
    tiers: {
      chalk: ["Peyton Manning"],
      bandwagon: ["Johnny Unitas"],
      starter: [],
      film: [],
      deep: ["Earl Morrall"],
      hail: []
    }
  },
  {
    id: "bengals-sb-qbs", cat: "superbowl", diff: "hard",
    prompt: "Name a QB who started a Super Bowl for the Bengals.",
    note: "Three trips, three starters.",
    tiers: {
      chalk: ["Joe Burrow"],
      bandwagon: ["Boomer Esiason"],
      starter: ["Ken Anderson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "vikings-sb-qbs", cat: "superbowl", diff: "hard",
    prompt: "Name a QB who started a Super Bowl for the Vikings.",
    note: "Four trips, two starters.",
    tiers: {
      chalk: ["Fran Tarkenton"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: ["Joe Kapp"],
      hail: []
    }
  },
  {
    id: "rec-td-18", cat: "records", diff: "hard",
    prompt: "Name a player with 18 or more receiving TDs in one season.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["Randy Moss","Jerry Rice"],
      bandwagon: ["Davante Adams"],
      starter: ["Sterling Sharpe"],
      film: ["Mark Clayton"],
      deep: [],
      hail: []
    }
  },
  {
    id: "rush-td-25", cat: "records", diff: "hard",
    prompt: "Name a player with 25 or more rushing TDs in one season.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["LaDainian Tomlinson|lt","Emmitt Smith"],
      bandwagon: ["Shaun Alexander"],
      starter: ["Priest Holmes"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-kickers", cat: "hof", diff: "hard",
    prompt: "Name a kicker or punter in the Pro Football Hall of Fame.",
    note: "Players enshrined mainly for kicking, through the Class of 2025.",
    tiers: {
      chalk: ["Morten Andersen"],
      bandwagon: ["Ray Guy"],
      starter: ["Jan Stenerud"],
      film: ["Lou Groza"],
      deep: ["George Blanda"],
      hail: []
    }
  },
  {
    id: "sb-lose-qbs-90s", cat: "superbowl", diff: "hard",
    prompt: "Name a QB who started and lost a Super Bowl in the 1990s.",
    note: "Super Bowls XXV–XXXIV.",
    tiers: {
      chalk: ["Jim Kelly","Brett Favre","Drew Bledsoe"],
      bandwagon: ["Steve McNair"],
      starter: ["Neil O'Donnell|neil odonnell","Stan Humphries"],
      film: ["Chris Chandler"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-lose-qbs-aughts", cat: "superbowl", diff: "hard",
    prompt: "Name a QB who started and lost a Super Bowl in the 2000s.",
    note: "Super Bowls XXXV–XLIV.",
    tiers: {
      chalk: ["Tom Brady","Peyton Manning","Kurt Warner"],
      bandwagon: ["Donovan McNabb","Rex Grossman"],
      starter: ["Matt Hasselbeck","Jake Delhomme"],
      film: ["Rich Gannon","Kerry Collins"],
      deep: [],
      hail: []
    }
  },
  {
    id: "dpoy-aughts", cat: "awards", diff: "hard",
    prompt: "Name an AP Defensive Player of the Year from the 2000s.",
    note: "2000–2009 seasons.",
    tiers: {
      chalk: ["Ray Lewis","Ed Reed","Michael Strahan"],
      bandwagon: ["Brian Urlacher","Charles Woodson","Derrick Brooks"],
      starter: ["James Harrison","Jason Taylor"],
      film: ["Bob Sanders"],
      deep: [],
      hail: []
    }
  },
  {
    id: "dpoy-tens", cat: "awards", diff: "hard",
    prompt: "Name an AP Defensive Player of the Year from the 2010s.",
    note: "2010–2019 seasons.",
    tiers: {
      chalk: ["Aaron Donald","J.J. Watt|jj watt"],
      bandwagon: ["Khalil Mack","Luke Kuechly","Troy Polamalu"],
      starter: ["Stephon Gilmore","Terrell Suggs"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "oroy-aughts", cat: "awards", diff: "hard",
    prompt: "Name an AP Offensive Rookie of the Year from the 2000s.",
    note: "2000–2009 seasons.",
    tiers: {
      chalk: ["Adrian Peterson","Ben Roethlisberger|big ben","Matt Ryan"],
      bandwagon: ["Vince Young","Percy Harvin","Anquan Boldin"],
      starter: ["Clinton Portis","Cadillac Williams|carnell williams"],
      film: ["Mike Anderson","Anthony Thomas"],
      deep: [],
      hail: []
    }
  },
  {
    id: "oroy-tens", cat: "awards", diff: "hard",
    prompt: "Name an AP Offensive Rookie of the Year from the 2010s (like Cam Newton).",
    note: "2010–2019 seasons.",
    tiers: {
      chalk: ["Cam Newton","Saquon Barkley","Odell Beckham Jr.|odell beckham|obj"],
      bandwagon: ["Dak Prescott","Kyler Murray","Alvin Kamara","Robert Griffin III|rg3|rgiii"],
      starter: ["Todd Gurley","Sam Bradford"],
      film: ["Eddie Lacy"],
      deep: [],
      hail: []
    }
  },
  {
    id: "cpoy-tens", cat: "awards", diff: "hard",
    prompt: "Name an AP Comeback Player of the Year from the 2010s.",
    note: "2010–2019 seasons.",
    tiers: {
      chalk: ["Peyton Manning","Andrew Luck","Rob Gronkowski|gronk"],
      bandwagon: ["Michael Vick","Matthew Stafford","Eric Berry"],
      starter: ["Philip Rivers","Ryan Tannehill","Keenan Allen"],
      film: ["Jordy Nelson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "qb-sb-two-teams", cat: "superbowl", diff: "hard",
    prompt: "Name a QB who started a Super Bowl for two different teams.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Tom Brady","Peyton Manning"],
      bandwagon: ["Kurt Warner"],
      starter: [],
      film: [],
      deep: ["Craig Morton"],
      hail: []
    }
  },
  {
    id: "no1-non-qbs", cat: "draft", diff: "hard",
    prompt: "Name a non-QB taken No. 1 overall since 2000.",
    note: "2000–2025 drafts.",
    tiers: {
      chalk: ["Myles Garrett"],
      bandwagon: ["Jadeveon Clowney","Mario Williams"],
      starter: ["Travon Walker","Jake Long"],
      film: ["Eric Fisher","Courtney Brown"],
      deep: [],
      hail: []
    }
  },
  {
    id: "rookie-1400-rec", cat: "records", diff: "hard",
    prompt: "Name a rookie with 1,400 or more receiving yards.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["Ja'Marr Chase|jamarr chase","Justin Jefferson"],
      bandwagon: ["Puka Nacua"],
      starter: [],
      film: [],
      deep: ["Bill Groman"],
      hail: []
    }
  },
  {
    id: "cpoy-aughts", cat: "awards", diff: "hard",
    prompt: "Name an AP Comeback Player of the Year from the 2000s.",
    note: "2000–2009 seasons (2005 had co-winners).",
    tiers: {
      chalk: ["Tom Brady","Drew Brees"],
      bandwagon: ["Chad Pennington","Steve Smith|steve smith sr","Tedy Bruschi"],
      starter: ["Tommy Maddox","Jon Kitna"],
      film: ["Garrison Hearst","Greg Ellis"],
      deep: ["Joe Johnson"],
      hail: []
    }
  },
  {
    id: "opoy-aughts", cat: "awards", diff: "hard",
    prompt: "Name an AP Offensive Player of the Year from the 2000s.",
    note: "2000–2009 seasons.",
    tiers: {
      chalk: ["Tom Brady","Peyton Manning","Drew Brees","LaDainian Tomlinson|lt"],
      bandwagon: ["Marshall Faulk","Shaun Alexander","Chris Johnson|cj2k"],
      starter: ["Priest Holmes","Jamal Lewis"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "droy-aughts", cat: "awards", diff: "hard",
    prompt: "Name an AP Defensive Rookie of the Year from the 2000s.",
    note: "2000–2009 seasons.",
    tiers: {
      chalk: ["Brian Urlacher","Julius Peppers","Patrick Willis"],
      bandwagon: ["Terrell Suggs","Shawne Merriman"],
      starter: ["Jonathan Vilma","DeMeco Ryans","Jerod Mayo","Brian Cushing"],
      film: ["Kendrell Bell"],
      deep: [],
      hail: []
    }
  },
  {
    id: "pass-td-champs-tens", cat: "records", diff: "hard",
    prompt: "Name a QB who led the NFL in TD passes in the 2010s.",
    note: "Season TD-pass leader, 2010–2019.",
    tiers: {
      chalk: ["Tom Brady","Patrick Mahomes","Peyton Manning","Drew Brees"],
      bandwagon: ["Aaron Rodgers","Lamar Jackson","Russell Wilson"],
      starter: ["Andrew Luck"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "rec-champs-90s", cat: "records", diff: "hard",
    prompt: "Name an NFL receiving-yards leader from the 1990s.",
    note: "The season's receiving-yards leader, 1990–1999.",
    tiers: {
      chalk: ["Jerry Rice","Michael Irvin"],
      bandwagon: ["Marvin Harrison","Isaac Bruce","Sterling Sharpe"],
      starter: ["Antonio Freeman"],
      film: ["Rob Moore"],
      deep: [],
      hail: []
    }
  },
  {
    id: "rush-champs-90s", cat: "records", diff: "hard",
    prompt: "Name an NFL rushing-yards leader from the 1990s.",
    note: "The season's rushing leader, 1990–1999.",
    tiers: {
      chalk: ["Barry Sanders","Emmitt Smith"],
      bandwagon: ["Terrell Davis"],
      starter: ["Edgerrin James"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sack-champs-90s", cat: "records", diff: "hard",
    prompt: "Name an NFL sack leader from the 1990s.",
    note: "The season's sack leader, 1990–1999.",
    tiers: {
      chalk: ["Derrick Thomas","Kevin Greene"],
      bandwagon: ["John Randle","Neil Smith"],
      starter: ["Pat Swilling","Bryce Paup"],
      film: ["Clyde Simmons","Kevin Carter"],
      deep: ["Michael Sinclair"],
      hail: []
    }
  },
  {
    id: "pass-champs-90s", cat: "records", diff: "hard",
    prompt: "Name an NFL passing-yards leader from the 1990s.",
    note: "The season's passing leader, 1990–1999.",
    tiers: {
      chalk: ["Brett Favre","Dan Marino","John Elway"],
      bandwagon: ["Warren Moon","Drew Bledsoe"],
      starter: ["Mark Brunell"],
      film: ["Jeff George","Steve Beuerlein"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ap-qb-rb", cat: "allpro", diff: "easy",
    prompt: "Name a QB or RB who was a first-team All-Pro in the 2020s.",
    note: "AP first-team All-Pro, 2020–2025 seasons.",
    tiers: {
      chalk: ["Patrick Mahomes","Lamar Jackson","Aaron Rodgers","Derrick Henry"],
      bandwagon: ["Saquon Barkley","Christian McCaffrey|cmc","Jonathan Taylor"],
      starter: ["Matthew Stafford","Josh Jacobs","Bijan Robinson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "ap-wr", cat: "allpro", diff: "easy",
    prompt: "Name a wide receiver who was a first-team All-Pro in the 2020s.",
    note: "AP first-team All-Pro, 2020–2025 seasons.",
    tiers: {
      chalk: ["Justin Jefferson","Tyreek Hill","Ja'Marr Chase|jamarr chase","Davante Adams"],
      bandwagon: ["Cooper Kupp","CeeDee Lamb","Amon-Ra St. Brown|amon ra st brown|st brown","Puka Nacua"],
      starter: ["Stefon Diggs","Deebo Samuel","Jaxon Smith-Njigba|jsn|jaxon smith njigba"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "ap-te", cat: "allpro", diff: "easy",
    prompt: "Name a tight end who was a first-team All-Pro in the 2020s.",
    note: "AP first-team All-Pro, 2020–2025 seasons.",
    tiers: {
      chalk: ["Travis Kelce"],
      bandwagon: ["George Kittle","Mark Andrews"],
      starter: ["Brock Bowers","Trey McBride"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "ap-edge", cat: "allpro", diff: "easy",
    prompt: "Name an edge rusher who was a first-team All-Pro in the 2020s.",
    note: "AP first-team All-Pro, 2020–2025 seasons.",
    tiers: {
      chalk: ["T.J. Watt|tj watt","Myles Garrett","Micah Parsons"],
      bandwagon: ["Nick Bosa"],
      starter: ["Trey Hendrickson","Will Anderson Jr.|will anderson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "ap-dt", cat: "allpro", diff: "hard",
    prompt: "Name an interior defensive lineman who was a first-team All-Pro in the 2020s.",
    note: "AP first-team All-Pro, 2020–2025 seasons.",
    tiers: {
      chalk: ["Aaron Donald","Chris Jones"],
      bandwagon: ["Cameron Heyward|cam heyward","Quinnen Williams"],
      starter: ["DeForest Buckner","Jeffery Simmons"],
      film: ["Zach Allen"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ap-lb", cat: "allpro", diff: "hard",
    prompt: "Name a linebacker who was a first-team All-Pro in the 2020s.",
    note: "AP first-team All-Pro, 2020–2025 seasons.",
    tiers: {
      chalk: ["Fred Warner","Micah Parsons","Roquan Smith"],
      bandwagon: ["Bobby Wagner","Darius Leonard|shaquille leonard"],
      starter: ["Zack Baun","Matt Milano","De'Vondre Campbell|devondre campbell"],
      film: ["Quincy Williams","Jack Campbell","Jordyn Brooks"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ap-cb", cat: "allpro", diff: "hard",
    prompt: "Name a cornerback who was a first-team All-Pro in the 2020s.",
    note: "Outside or slot corner. AP first-team All-Pro, 2020–2025 seasons.",
    tiers: {
      chalk: ["Sauce Gardner|ahmad gardner","Jalen Ramsey","Patrick Surtain II|patrick surtain"],
      bandwagon: ["Trevon Diggs","Derek Stingley Jr.|derek stingley","Cooper DeJean"],
      starter: ["Xavien Howard","DaRon Bland","Trent McDuffie","Marlon Humphrey"],
      film: ["Quinyon Mitchell"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ap-s", cat: "allpro", diff: "hard",
    prompt: "Name a safety who was a first-team All-Pro in the 2020s.",
    note: "AP first-team All-Pro, 2020–2025 seasons.",
    tiers: {
      chalk: ["Minkah Fitzpatrick","Kyle Hamilton","Tyrann Mathieu|honey badger"],
      bandwagon: ["Budda Baker","Kevin Byard","Xavier McKinney","Antoine Winfield Jr.|antoine winfield"],
      starter: ["Jordan Poyer","Talanoa Hufanga","Kerby Joseph"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "ap-ol", cat: "allpro", diff: "hard",
    prompt: "Name an offensive lineman who was a first-team All-Pro in the 2020s.",
    note: "AP first-team All-Pro, 2020–2025 seasons.",
    tiers: {
      chalk: ["Jason Kelce","Trent Williams","Zack Martin","Quenton Nelson"],
      bandwagon: ["Penei Sewell","Tristan Wirfs","Lane Johnson","Joe Thuney","Creed Humphrey"],
      starter: ["David Bakhtiari","Joel Bitonio","Brandon Scherff","Corey Linsley"],
      film: ["Quinn Meinerz","Jack Conklin","Garett Bolles"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ap-kp", cat: "allpro", diff: "hard",
    prompt: "Name a kicker or punter who was a first-team All-Pro in the 2020s.",
    note: "AP first-team All-Pro, 2020–2025 seasons.",
    tiers: {
      chalk: ["Justin Tucker","Brandon Aubrey"],
      bandwagon: ["Chris Boswell","Daniel Carlson","Jason Sanders"],
      starter: ["A.J. Cole|aj cole","Jack Fox","Will Reichard"],
      film: ["Tommy Townsend","Jake Bailey","Jordan Stout"],
      deep: [],
      hail: []
    }
  },
  {
    id: "ap-unanimous", cat: "allpro", diff: "hard",
    prompt: "Name a player who was a UNANIMOUS first-team All-Pro in the 2020s.",
    note: "Every first-place vote at his position, 2020–2025 AP teams.",
    tiers: {
      chalk: ["Justin Jefferson","Travis Kelce","Aaron Donald","Christian McCaffrey|cmc"],
      bandwagon: ["Tyreek Hill","Cooper Kupp","Ja'Marr Chase|jamarr chase","Myles Garrett","T.J. Watt|tj watt"],
      starter: ["Davante Adams","Jonathan Taylor","Puka Nacua","Fred Warner"],
      film: ["Jaxon Smith-Njigba|jsn|jaxon smith njigba"],
      deep: [],
      hail: []
    }
  },
  {
    id: "gronk-qbs", cat: "connections", diff: "easy",
    prompt: "Name a QB who started a game for the Patriots while Rob Gronkowski was on the team.",
    note: "Regular-season starters, 2010–2018.",
    tiers: {
      chalk: ["Tom Brady"],
      bandwagon: ["Jimmy Garoppolo|jimmy g"],
      starter: ["Jacoby Brissett"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "gates-qbs", cat: "connections", diff: "easy",
    prompt: "Name a QB who started a game for the Chargers while Antonio Gates was on the team.",
    note: "Regular-season starters, 2003–2018.",
    tiers: {
      chalk: ["Philip Rivers"],
      bandwagon: ["Drew Brees"],
      starter: [],
      film: ["Doug Flutie"],
      deep: [],
      hail: []
    }
  },
  {
    id: "wayne-qbs", cat: "connections", diff: "hard",
    prompt: "Name a QB who started a game for the Colts while Reggie Wayne was on the team.",
    note: "Regular-season starters, 2001–2014.",
    tiers: {
      chalk: ["Peyton Manning","Andrew Luck"],
      bandwagon: ["Kerry Collins"],
      starter: ["Curtis Painter"],
      film: ["Dan Orlovsky"],
      deep: [],
      hail: []
    }
  },
  {
    id: "calvin-qbs", cat: "connections", diff: "hard",
    prompt: "Name a QB who started a game for the Lions while Calvin Johnson was on the team.",
    note: "Regular-season starters, 2007–2015.",
    tiers: {
      chalk: ["Matthew Stafford"],
      bandwagon: ["Jon Kitna","Daunte Culpepper"],
      starter: ["Shaun Hill","Drew Stanton"],
      film: ["Dan Orlovsky"],
      deep: [],
      hail: []
    }
  },
  {
    id: "fitz-qbs", cat: "connections", diff: "hard",
    prompt: "Name a QB who started a game for the Cardinals while Larry Fitzgerald was on the team.",
    note: "Regular-season starters, 2004–2020.",
    tiers: {
      chalk: ["Kurt Warner","Carson Palmer","Kyler Murray"],
      bandwagon: ["Matt Leinart","Sam Bradford","Josh Rosen","Kevin Kolb"],
      starter: ["Josh McCown","Derek Anderson","Brian Hoyer","Drew Stanton","Blaine Gabbert"],
      film: ["John Skelton","Ryan Lindley","Max Hall"],
      deep: ["Shaun King"],
      hail: ["John Navarre"]
    }
  },
  {
    id: "ap-vikings-qbs", cat: "connections", diff: "hard",
    prompt: "Name a QB who started a game for the Vikings while Adrian Peterson was on the team.",
    note: "Regular-season starters, 2007–2016.",
    tiers: {
      chalk: ["Brett Favre","Teddy Bridgewater","Sam Bradford"],
      bandwagon: ["Donovan McNabb","Christian Ponder","Tarvaris Jackson","Matt Cassel"],
      starter: ["Josh Freeman","Shaun Hill","Joe Webb"],
      film: ["Gus Frerotte"],
      deep: ["Kelly Holcomb","Brooks Bollinger"],
      hail: []
    }
  },
  {
    id: "andre-qbs", cat: "connections", diff: "hard",
    prompt: "Name a QB who started a game for the Texans while Andre Johnson was on the team.",
    note: "Regular-season starters, 2003–2014.",
    tiers: {
      chalk: ["Matt Schaub","David Carr"],
      bandwagon: ["Ryan Fitzpatrick","Case Keenum","T.J. Yates|tj yates","Matt Leinart"],
      starter: ["Sage Rosenfels","Ryan Mallett","Tony Banks"],
      film: [],
      deep: ["Dave Ragone"],
      hail: []
    }
  },
  {
    id: "witten-qbs", cat: "connections", diff: "hard",
    prompt: "Name a QB who started a game for the Cowboys while Jason Witten was on the team.",
    note: "Regular-season starters, 2003–2017 and 2019.",
    tiers: {
      chalk: ["Tony Romo","Dak Prescott"],
      bandwagon: ["Drew Bledsoe","Vinny Testaverde","Brandon Weeden","Matt Cassel"],
      starter: ["Jon Kitna","Kyle Orton","Brad Johnson","Kellen Moore","Quincy Carter"],
      film: ["Drew Henson","Stephen McGee"],
      deep: [],
      hail: []
    }
  },
  {
    id: "urlacher-qbs", cat: "connections", diff: "hard",
    prompt: "Name a QB who started a game for the Bears while Brian Urlacher was on the team.",
    note: "Regular-season starters, 2000–2012.",
    tiers: {
      chalk: ["Jay Cutler","Rex Grossman"],
      bandwagon: ["Kyle Orton","Kordell Stewart","Josh McCown","Jason Campbell"],
      starter: ["Jim Miller","Cade McNown","Brian Griese","Chris Chandler","Caleb Hanie","Todd Collins"],
      film: ["Shane Matthews","Jonathan Quinn","Craig Krenzel","Chad Hutchinson"],
      deep: ["Henry Burris"],
      hail: []
    }
  },
  {
    id: "mahomes-sb-td", cat: "connections", diff: "hard",
    prompt: "Name a player who caught a Super Bowl TD pass from Patrick Mahomes.",
    note: "Super Bowls LIV–LIX.",
    tiers: {
      chalk: ["Travis Kelce"],
      bandwagon: ["Mecole Hardman","Xavier Worthy","DeAndre Hopkins|nuk"],
      starter: ["Kadarius Toney","Skyy Moore"],
      film: ["Marquez Valdes-Scantling|mvs|marquez valdes scantling","Damien Williams"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-mahomes", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Patrick Mahomes.",
    note: "Played on the same team in the same season (Chiefs, 2017–2025), through 2025.",
    tiers: {
      chalk: ["Travis Kelce","Tyreek Hill|cheetah","Chris Jones","Isiah Pacheco"],
      bandwagon: ["Mecole Hardman","Clyde Edwards-Helaire|ceh","Rashee Rice","Xavier Worthy","Harrison Butker","Tyrann Mathieu|honey badger","JuJu Smith-Schuster|juju","DeAndre Hopkins|nuk","Kareem Hunt","Sammy Watkins","Le'Veon Bell|leveon bell","Hollywood Brown|marquise brown","Alex Smith","Frank Clark","L'Jarius Sneed|ljarius sneed"],
      starter: ["Nick Bolton","Trent McDuffie","Creed Humphrey","Joe Thuney","Trey Smith","Orlando Brown Jr.|orlando brown","Justin Reid","George Karlaftis","Jerick McKinnon","Damien Williams","Marquez Valdes-Scantling|mvs","Kadarius Toney","Skyy Moore","Demarcus Robinson","Mitchell Schwartz","Eric Fisher","Laurent Duvernay-Tardif","Eric Berry","Justin Houston","Dee Ford","Marcus Peters","Melvin Ingram","Kendall Fuller","Bashaud Breeland","Charvarius Ward","Juan Thornhill","LeSean McCoy|shady","Chad Henne","Blaine Gabbert","Carson Wentz","Samaje Perine","Jawaan Taylor"],
      film: ["Spencer Ware","Anthony Hitchens","Daniel Sorensen","Willie Gay","Leo Chenal","Drue Tranquill","Bryan Cook","Jaylen Watson","Joshua Williams","Mike Danna","Charles Omenihu","Derrick Nnadi","Noah Gray","Byron Pringle","Darrel Williams","Dustin Colquitt","Tommy Townsend","Austin Reiter","Andrew Wylie","Nick Allegretti","Mike Remmers","Jarran Reed","Carlos Dunlap","Terrell Suggs","Emmanuel Ogbah","Steven Nelson","Ron Parker","Reggie Ragland","Ben Niemann","Damien Wilson","Albert Wilson","Tershawn Wharton","Khalen Saunders","Felix Anudike-Uzomah","Justin Watson","Richie James","Blake Bell","Jody Fortson","Donovan Smith","Wanya Morris","Kingsley Suamataia","Chamarri Conner","Mike Edwards","Deon Bush","Rashad Fenton","Ronald Jones","Tyquan Thornton","Matt Araiza","Jaylon Moore","Josh Simmons","Brashard Smith","Darwin Thompson"],
      deep: ["Charcandrick West","Gehrig Dieter","Marcus Kemp","Cole Christiansen","Jack Cochrane","Nazeeh Johnson","Ekow Boye-Doe","Keondre Coburn","BJ Thompson","Matt Dickerson","Neil Farrell","Malik Herring","James Winchester","Prince Tega Wanogho","Lucas Niang","Darian Kinnard","Matthew Wright","Matt Ammendola","Shane Buechele","Michael Burton","Ugo Amadi","Dicaprio Bootle","Taylor Stallworth","Elijah Lee","Joshua Kaindoh","Brandon Williams","Armani Watts","Alex Okafor","Chris Lammons","Montrell Washington","Mike Pennel","Cam Jones","Nic Jones","Mike Caliendo","La'Mical Perine|lamical perine","Justyn Ross","Carson Steele","Jared Wiley","Peyton Hendershot","Mike Hughes","DJ Humphries"],
      hail: []
    }
  },
  {
    id: "tm-allen", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Josh Allen.",
    note: "Played on the same team in the same season (Bills, 2018–2025), through 2025.",
    tiers: {
      chalk: ["Stefon Diggs","Von Miller","Dawson Knox","James Cook"],
      bandwagon: ["Gabe Davis|gabriel davis","Cole Beasley","Dalton Kincaid","Khalil Shakir","Tre'Davious White|tredavious white","Micah Hyde","Jordan Poyer","Matt Milano","Tyler Bass","Devin Singletary","Amari Cooper","Emmanuel Sanders","Frank Gore","LeSean McCoy|shady","Joey Bosa"],
      starter: ["John Brown","Zack Moss","Isaiah McKenzie","Keon Coleman","Curtis Samuel","Mack Hollins","Ray Davis","Tremaine Edmunds","Ed Oliver","Jerry Hughes","Dion Dawkins","Mitch Morse","Spencer Brown","Greg Rousseau|gregory rousseau","Taron Johnson","Christian Benford","Damar Hamlin","Terrel Bernard","Leonard Floyd","Mitchell Trubisky","Case Keenum","Kelvin Benjamin","Zay Jones","Nyheim Hines","Latavius Murray","Matt Breida","Jamison Crowder","Joshua Palmer|josh palmer","Elijah Moore","Kyle Williams","Lorenzo Alexander","Josh Norman"],
      film: ["Robert Foster","Charles Clay","Chris Ivory","Andre Roberts","Ty Johnson","Star Lotulelei","Mario Addison","Shaq Lawson","Trent Murphy","A.J. Epenesa|aj epenesa","Boogie Basham","Kaiir Elam","DaQuan Jones","Tim Settle","Harrison Phillips","Rodger Saffold","Daryl Williams","Connor McGovern","O'Cyrus Torrence|ocyrus torrence","Ryan Bates","Cody Ford","Jon Feliciano","Quinton Spain","Stephen Hauschka","Corey Bojorquez","Sam Martin","Matt Haack","Reid Ferguson","Rasul Douglas","Dane Jackson","Levi Wallace","Siran Neal","Taylor Rapp","Cole Bishop","Dorian Williams","Larry Ogunjobi","Michael Hoecht","Kyle Allen","Matt Barkley","Derek Anderson","Nathan Peterman","Trent Sherfield","Deonte Harty"],
      deep: ["Tommy Sweeney","Lee Smith","Tyler Kroft","Jason Croom","Reggie Gilliam","Patrick DiMarco","Jake Kumerow","Tyrell Shavers","E.J. Gaines|ej gaines","Phillip Gaines"],
      hail: []
    }
  },
  {
    id: "tm-lamar", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Lamar Jackson.",
    note: "Played on the same team in the same season (Ravens, 2018–2025), through 2025.",
    tiers: {
      chalk: ["Mark Andrews","Derrick Henry","Zay Flowers","Justin Tucker"],
      bandwagon: ["Marlon Humphrey","Hollywood Brown|marquise brown","Rashod Bateman","J.K. Dobbins|jk dobbins","Gus Edwards","Mark Ingram","Odell Beckham Jr.|odell beckham|obj","DeAndre Hopkins|nuk","Joe Flacco","Robert Griffin III|rg3|rgiii","Kyle Hamilton","Roquan Smith","Earl Thomas","Terrell Suggs","Marcus Peters"],
      starter: ["Patrick Queen","Isaiah Likely","Patrick Ricard","Justice Hill","Nelson Agholor","Sammy Watkins","Michael Crabtree","John Brown","Willie Snead","Devin Duvernay","Tyler Huntley","Ronnie Stanley","Orlando Brown Jr.|orlando brown","Marshal Yanda","Kevin Zeitler","Tyler Linderbaum","Morgan Moses","Calais Campbell","Matthew Judon","Za'Darius Smith|zadarius smith","Justin Madubuike","Odafe Oweh|jayson oweh","Kyle Van Noy","Jadeveon Clowney","C.J. Mosley|cj mosley","Eric Weddle","Jimmy Smith","Chuck Clark","Marcus Williams","Brandon Williams","Michael Pierce","Hayden Hurst","Nick Boyle","Kenyan Drake","Keaton Mitchell","Demarcus Robinson","Diontae Johnson","Jaire Alexander","Eddie Jackson"],
      film: ["Tony Jefferson","Miles Boykin","Seth Roberts","Chris Moore","Tylan Wallace","Bradley Bozeman","Patrick Mekari","Ben Powers","John Simpson","Daniel Faalele","Tyus Bowser","Jaylon Ferguson","Broderick Washington","Travis Jones","Josh Bynes","L.J. Fort|lj fort","Malik Harrison","Trenton Simpson","Brandon Stephens","Arthur Maulet","Geno Stone","Nate Wiggins","Ar'Darius Washington|ardarius washington","Sam Koch","Jordan Stout","Morgan Cox","Nick Moore","Josh Johnson","Cooper Rush","Trace McSorley","Anthony Brown"],
      deep: ["Jalyn Armour-Davis","Tavius Robinson","Andrew Vorhees","Devontez Walker","Malaki Starks","Tyler Loop"],
      hail: []
    }
  },
  {
    id: "tm-burrow", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Joe Burrow.",
    note: "Played on the same team in the same season (Bengals, 2020–2025), through 2025.",
    tiers: {
      chalk: ["Ja'Marr Chase|jamarr chase","Tee Higgins","Joe Mixon","Tyler Boyd"],
      bandwagon: ["A.J. Green|aj green","Trey Hendrickson","Chase Brown","Evan McPherson","Jessie Bates","Sam Hubbard","Mike Gesicki","Hayden Hurst","Samaje Perine","Zack Moss","Joe Flacco"],
      starter: ["C.J. Uzomah|cj uzomah","Irv Smith Jr.|irv smith","Drew Sample","Giovani Bernard|gio bernard","Andrei Iosivas","D.J. Reader|dj reader","B.J. Hill|bj hill","Larry Ogunjobi","Carlos Dunlap","Geno Atkins","Logan Wilson","Germaine Pratt","Vonn Bell","Mike Hilton","Eli Apple","Chidobe Awuzie","Cam Taylor-Britt","Dax Hill|daxton hill","Jonah Williams","Orlando Brown Jr.|orlando brown","Ted Karras","Alex Cappa","La'el Collins|lael collins","Trent Brown","Jake Browning","Brandon Allen","Sheldon Rankins","Geno Stone","Noah Fant"],
      film: ["Trayveon Williams","Trenton Irwin","Mike Thomas","Auden Tate","Stanley Morgan","Joseph Ossai","Myles Murphy","Akeem Davis-Gaither","Jordan Battle","D.J. Turner II|dj turner","Tre Flowers","Mackensie Alexander","William Jackson III|william jackson","Darius Phillips","Josh Bynes","Mike Daniels","Kevin Huber","Brad Robbins","Riley Reiff","Quinton Spain","Hakeem Adeniji","Trey Hopkins","Jackson Carman","Cordell Volson","Amarius Mims","Ryan Finley","Shemar Stewart"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-hurts", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Jalen Hurts.",
    note: "Played on the same team in the same season (Eagles, 2020–2025), through 2025.",
    tiers: {
      chalk: ["A.J. Brown|aj brown","DeVonta Smith","Saquon Barkley","Jason Kelce"],
      bandwagon: ["Dallas Goedert","Lane Johnson","Jalen Carter","Jordan Mailata","Fletcher Cox","Brandon Graham","Darius Slay","Haason Reddick","Miles Sanders","D'Andre Swift|dandre swift","Carson Wentz","Zach Ertz","Cooper DeJean","Quinyon Mitchell","Jake Elliott","C.J. Gardner-Johnson|cjgj|chauncey gardner-johnson"],
      starter: ["Landon Dickerson","Cam Jurgens","Javon Hargrave","James Bradberry","Josh Sweat","Nolan Smith","Jordan Davis","Zack Baun","Reed Blankenship","Kevin Byard","Avonte Maddox","Kenneth Gainwell","Boston Scott","Gardner Minshew","Marcus Mariota","Kenny Pickett","Tanner McKee","Alshon Jeffery","DeSean Jackson","Jalen Reagor","Julio Jones","Jahan Dotson","Isaac Seumalo","Brandon Brooks","Mekhi Becton","Ndamukong Suh","Shaquille Leonard","T.J. Edwards|tj edwards","Nakobe Dean","Rodney McLeod","Milton Williams"],
      film: ["Greg Ward","Quez Watkins","Zach Pascal","Olamide Zaccheaus","Parris Campbell","Britain Covey","Jack Stoll","Grant Calcaterra","Tyler Steen","Arryn Siposs","Braden Mann","Rick Lovato","Anthony Harris","Marcus Epps","Sydney Brown","Kyzir White","Alex Singleton","Nicholas Morrow","Bryce Huff","Derek Barnett","Josh Jobe","Isaiah Rodgers","Moro Ojomo","Kelee Ringo","Andre Dillard","Matt Pryor","Jack Driscoll","Hassan Ridgeway","Genard Avery","Linval Joseph","Jordan Howard","Will Shipley","Jihaad Campbell","Andrew Mukuba","Adoree' Jackson|adoree jackson","Azeez Ojulari","Tank Bigsby"],
      deep: ["Eli Ricks"],
      hail: []
    }
  },
  {
    id: "tm-jefferson", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Justin Jefferson.",
    note: "Played on the same team in the same season (Vikings, 2020–2025), through 2025.",
    tiers: {
      chalk: ["Kirk Cousins","Adam Thielen","Dalvin Cook","T.J. Hockenson|tj hockenson"],
      bandwagon: ["Jordan Addison","Sam Darnold","Aaron Jones","J.J. McCarthy|jj mccarthy","Kyle Rudolph","Harrison Smith","Danielle Hunter","Za'Darius Smith|zadarius smith","Eric Kendricks","Patrick Peterson","Stephon Gilmore","Jonathan Greenard","Carson Wentz"],
      starter: ["Irv Smith Jr.|irv smith","K.J. Osborn|kj osborn","Alexander Mattison","Joshua Dobbs|josh dobbs","Nick Mullens","C.J. Ham|cj ham","Ty Chandler","Cam Akers","Jalen Nailor","Josh Oliver","Anthony Barr","Byron Murphy Jr.|byron murphy","Camryn Bynum","Josh Metellus","Andrew Van Ginkel","Blake Cashman","Ivan Pace Jr.|ivan pace","Harrison Phillips","Dalvin Tomlinson","Christian Darrisaw","Brian O'Neill|brian oneill","Garrett Bradbury","Ezra Cleveland","Javon Hargrave","Jonathan Allen","Ryan Kelly","Will Reichard","Greg Joseph","Dallas Turner","Shaquill Griffin","Xavier Woods","Jordan Hicks"],
      film: ["Johnny Mundt","Brandon Powell","Chad Beebe","Ihmir Smith-Marsette","Sean Mannion","Kellen Mond","Jaren Hall","Cameron Dantzler","Kris Boyd","Akayleb Evans","Mekhi Blackmon","Andrew Booth Jr.|andrew booth","Brian Asamoah","Michael Pierce","Sheldon Richardson","Everson Griffen","Jerry Tillery","D.J. Wonnum|dj wonnum","Pat Jones II|pat jones","Ed Ingram","Blake Brandel","Dalton Risner","Riley Reiff","Will Fries","Donovan Jackson","Dan Bailey","Ryan Wright","Britton Colquitt","Jordan Berry","Andrew DePaola","Tyler Conklin","Ameer Abdullah","Trent Sherfield"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-brady", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Tom Brady.",
    note: "Played on the same team in the same season (Patriots 2000–2019 and Buccaneers 2020–2022), through 2025.",
    tiers: {
      chalk: ["Rob Gronkowski|gronk","Julian Edelman","Randy Moss","Wes Welker"],
      bandwagon: ["Mike Evans","Chris Godwin","Antonio Brown","Deion Branch","Troy Brown","Danny Amendola","Corey Dillon","Ty Law","Richard Seymour","Tedy Bruschi","Rodney Harrison","Vince Wilfork","Darrelle Revis","Adam Vinatieri","Stephen Gostkowski","Leonard Fournette","Jimmy Garoppolo|jimmy g","Drew Bledsoe","Aaron Hernandez","Tristan Wirfs","Lavonte David","Devin McCourty","Stephon Gilmore","Malcolm Butler","Willie McGinest","Mike Vrabel"],
      starter: ["LeGarrette Blount","James White","Dion Lewis","Sony Michel","Kevin Faulk","Chandler Jones","Dont'a Hightower|donta hightower","Jason McCourty","Jacoby Brissett","Matt Cassel","Brian Hoyer","Patrick Chung","Brandon Browner","Shane Vereen","Stevan Ridley","BenJarvus Green-Ellis|law firm","Laurence Maroney","Antowain Smith","David Patten","Brandon LaFell","Chris Hogan","Josh Gordon","Mohamed Sanu","Cordarrelle Patterson","Benjamin Watson|ben watson","Martellus Bennett","Logan Mankins","Matt Light","Nate Solder","Lawyer Milloy","Asante Samuel","Junior Seau","Jerod Mayo","Kyle Van Noy","Trey Flowers","Jamie Collins","Rob Ninkovich","Akiem Hicks","Shaquil Barrett","Devin White","Vita Vea","Ndamukong Suh","Jason Pierre-Paul|jpp","Antoine Winfield Jr.|antoine winfield","Julio Jones","Ryan Succop","Doug Flutie","Ronald Jones II|ronald jones","Giovani Bernard|gio bernard","Rachaad White","Russell Gage","Logan Ryan","Joe Thuney","Shaq Mason","David Andrews","Trent Brown"],
      film: ["Kyle Arrington","Jabar Gaffney","Reche Caldwell","Phillip Dorsett","N'Keal Harry|nkeal harry","Daniel Graham","Christian Fauria","Dwayne Allen","Dan Koppen","Sebastian Vollmer","Marcus Cannon","Roosevelt Colvin","Eugene Wilson","Ted Johnson","Adalius Thomas","Brandon Spikes","Alan Branch","Lawrence Guy","Ty Warren","Jarvis Green","Ryan Mallett","Ryan Jensen","Ali Marpet","Carlton Davis","Sean Murphy-Bunting","Jamel Dean","Mike Edwards","Jordan Whitehead","O.J. Howard|oj howard","Cameron Brate","Scotty Miller","Tyler Johnson","Blaine Gabbert","Kyle Trask","Keanu Neal","Ty Montgomery","Rex Burkhead","Tim Dwight","Bethel Johnson","Doug Gabriel","Joey Galloway","Sam Aiken","Brandon Tate","Kenbrell Thompkins","Aaron Dobson","Malcolm Mitchell"],
      deep: ["Larry Izzo","Matt Chatham","Je'Rod Cherry|jerod cherry","Bobby Hamilton","Anthony Pleasant","Ken Walter","Josh Miller","Zoltan Mesko","Ryan Allen","Jake Bailey","Matthew Slater","Nate Ebner"],
      hail: []
    }
  },
  {
    id: "tm-rodgers", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Aaron Rodgers.",
    note: "Played on the same team in the same season (Packers 2005–2022, Jets 2023–2024, Steelers 2025), through 2025.",
    tiers: {
      chalk: ["Davante Adams","Jordy Nelson","Brett Favre","Clay Matthews"],
      bandwagon: ["Greg Jennings","Donald Driver","Randall Cobb","Charles Woodson","Aaron Jones","Jermichael Finley","Eddie Lacy","Jordan Love","Garrett Wilson","Breece Hall","Sauce Gardner","T.J. Watt|tj watt","DK Metcalf|d.k. metcalf","Julius Peppers","Jimmy Graham","Mason Crosby"],
      starter: ["James Jones","Ryan Grant","Ahman Green","Martellus Bennett","Robert Tonyan|bobby tonyan","Marcedes Lewis","Allen Lazard","Marquez Valdes-Scantling|mvs","Christian Watson","Romeo Doubs","AJ Dillon|a.j. dillon","Ty Montgomery","James Starks","John Kuhn","Matt Flynn","B.J. Raji|bj raji","Nick Collins","Tramon Williams","Sam Shields","Al Harris","A.J. Hawk|aj hawk","Za'Darius Smith|zadarius smith","Preston Smith","Rashan Gary","Kenny Clark","Jaire Alexander","Darnell Savage","Adrian Amos","Ha Ha Clinton-Dix|haha clinton-dix","Morgan Burnett","David Bakhtiari","Josh Sitton","T.J. Lang|tj lang","Bryan Bulaga","Corey Linsley","Elgton Jenkins","Quinnen Williams","C.J. Mosley|cj mosley","Mike Williams","Tyler Conklin","Zach Wilson","Haason Reddick","Cameron Heyward|cam heyward","Jaylen Warren","Pat Freiermuth","Jonnu Smith","Jalen Ramsey","Chris Boswell","Alex Highsmith","Patrick Queen"],
      film: ["Geronimo Allison","Equanimeous St. Brown","Brett Hundley","Tim Masthay","Desmond Bishop","Nick Perry","Mike Daniels","Kevin King","Chad Clifton","Scott Wells","Daryn Colledge","Cullen Jenkins","Ryan Pickett","Brandon Jackson","DuJuan Harris","Andrew Quarless","Richard Rodgers","Jared Cook","Tyrod Taylor","D.J. Reed|dj reed","Jermaine Johnson","Alijah Vera-Tucker","Olu Fashanu","Morgan Moses","Tyron Smith","John Franklin-Myers","Greg Zuerlein","Quincy Williams","Will McDonald","Michael Carter II","Braelon Allen","Calvin Austin III|calvin austin","Kenneth Gainwell","Robert Woods","Mason Rudolph","Joey Porter Jr.|joey porter","Darius Slay","DeShon Elliott","Isaac Seumalo","Broderick Jones","Zach Frazier","Nick Herbig","Keeanu Benton","Payton Wilson","Darnell Washington"],
      deep: ["Korey Hall","Jarrett Bush","Brad Jones","Josh Jackson","Dean Lowry","Montravius Adams","Will Howard","Kaleb Johnson","Derrick Harmon","Troy Fautanu"],
      hail: []
    }
  },
  {
    id: "tm-peyton", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Peyton Manning.",
    note: "Played on the same team in the same season (Colts 1998–2010 and Broncos 2012–2015), through 2025.",
    tiers: {
      chalk: ["Marvin Harrison","Reggie Wayne","Edgerrin James","Dwight Freeney"],
      bandwagon: ["Robert Mathis","Dallas Clark","Bob Sanders","Jeff Saturday","Adam Vinatieri","Demaryius Thomas","Von Miller","Wes Welker","Eric Decker","Emmanuel Sanders","Julius Thomas","DeMarcus Ware","Champ Bailey","Marshall Faulk","Brock Osweiler"],
      starter: ["Joseph Addai","Dominic Rhodes","Pierre Garcon|pierre garçon","Austin Collie","Brandon Stokley","Marcus Pollard","Ken Dilger","Tarik Glenn","Mike Vanderjagt","Antoine Bethea","Gary Brackett","Cato June","Kelvin Hayden","Knowshon Moreno","C.J. Anderson|cj anderson","Ronnie Hillman","Montee Ball","Willis McGahee","Owen Daniels","Vernon Davis","Jacob Tamme","Aqib Talib","Chris Harris Jr.|chris harris","T.J. Ward|tj ward","Elvis Dumervil","Derek Wolfe","Malik Jackson","Danny Trevathan","Wesley Woodyard","Brandon Marshall","Ryan Clady","Matt Prater","Brandon McManus","Pat McAfee","Hunter Smith","Dominique Rodgers-Cromartie|drc","Terrance Knighton|pot roast","Shaun Phillips"],
      film: ["Donald Brown","Anthony Gonzalez","Jerome Pathon","E.G. Green|eg green","Terrence Wilkins","Raheem Brock","Montae Reagor","Mike Doss","Nick Harper","Jason David","Marlin Jackson","Rob Morris","David Thornton","Ryan Diem","Ryan Lilja","Jake Scott","Ben Utecht","Booger McFarland","Corey Simon","Jim Sorgi","Curtis Painter","Bradley Roby","Darian Stewart","Rahim Moore","Sylvester Williams","Shane Ray","Louis Vasquez","Orlando Franklin","Britton Colquitt","Trindon Holliday","Andre Caldwell","Cody Latimer","Virgil Green","Joel Dreessen","Juwan Thompson","Evan Mathis","Kevin Vickerson","Mitch Unrein"],
      deep: ["Hank Baskett","Blair White","Kenton Keith","Ty Sambrailo","Michael Schofield"],
      hail: []
    }
  },
  {
    id: "tm-saquon", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Saquon Barkley.",
    note: "Played on the same team in the same season (Giants 2018–2023 and Eagles 2024–2025), through 2025.",
    tiers: {
      chalk: ["Eli Manning","Daniel Jones","Odell Beckham Jr.|odell beckham|obj","Jalen Hurts"],
      bandwagon: ["Sterling Shepard","Evan Engram","Golden Tate","Darius Slayton","Kenny Golladay","Dexter Lawrence","Leonard Williams","A.J. Brown|aj brown","DeVonta Smith","Lane Johnson","Jalen Carter","Cooper DeJean","Darren Waller","Landon Collins","Kayvon Thibodeaux"],
      starter: ["Kadarius Toney","Wan'Dale Robinson|wandale robinson","Andrew Thomas","Evan Neal","Will Hernandez","Nate Solder","Kevin Zeitler","Dalvin Tomlinson","B.J. Hill|bj hill","Jabrill Peppers","Xavier McKinney","Julian Love","Logan Ryan","James Bradberry","Adoree' Jackson|adoree jackson","Janoris Jenkins","Azeez Ojulari","Bobby Okereke","Blake Martinez","Alec Ogletree","Olivier Vernon","Markus Golden","Graham Gano","Aldrick Rosas","Tyrod Taylor","Tommy DeVito","Colt McCoy","Dallas Goedert","Jordan Mailata","Landon Dickerson","Cam Jurgens","Zack Baun","Quinyon Mitchell","Reed Blankenship","C.J. Gardner-Johnson|cjgj","Darius Slay","Josh Sweat","Brandon Graham","Jake Elliott","Kenny Pickett","Jahan Dotson","Nolan Smith","Jordan Davis","Milton Williams"],
      film: ["Wayne Gallman","Devonta Freeman","Matt Breida","Richie James","Isaiah Hodgins","Daniel Bellinger","Riley Dixon","Jamie Gillan","Mike Glennon","Jake Fromm","Parris Campbell","Jalin Hyatt","Deonte Banks","Cordale Flott","Micah McFadden","Tae Crowder","Darnay Holmes","Jihad Ward","Lorenzo Carter","Deandre Baker","Tanner McKee","Kenneth Gainwell","Will Shipley","Mekhi Becton","Bryce Huff","Nakobe Dean","Oren Burks","Isaiah Rodgers","Avonte Maddox","Grant Calcaterra","Britain Covey","Moro Ojomo","Jihaad Campbell","Andrew Mukuba","Tank Bigsby"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-cmc", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Christian McCaffrey.",
    note: "Played on the same team in the same season (Panthers 2017–2022 and 49ers 2022–2025), through 2025.",
    tiers: {
      chalk: ["Cam Newton","George Kittle","Deebo Samuel","Brock Purdy"],
      bandwagon: ["Luke Kuechly","Greg Olsen","D.J. Moore|dj moore","Brandon Aiyuk","Nick Bosa","Fred Warner","Trent Williams","Kyle Juszczyk|juice","Sam Darnold","Teddy Bridgewater","Baker Mayfield","Jimmy Garoppolo|jimmy g","Brian Burns","Julius Peppers"],
      starter: ["Curtis Samuel","Robby Anderson|robbie chosen","Devin Funchess","Kelvin Benjamin","Torrey Smith","Ian Thomas","Jonathan Stewart","Mike Davis","Chuba Hubbard","Thomas Davis","Shaq Thompson","Kawann Short","Derrick Brown","Jeremy Chinn","Donte Jackson","James Bradberry","Jaycee Horn","Stephon Gilmore","Haason Reddick","Graham Gano","Ryan Kalil","Trai Turner","Taylor Moton","Eric Reid","Kyle Allen","P.J. Walker|pj walker","Trey Lance","Mac Jones","Jauan Jennings","Elijah Mitchell","Jordan Mason","Ricky Pearsall","Arik Armstead","Javon Hargrave","Chase Young","Dre Greenlaw","Talanoa Hufanga","Charvarius Ward","Deommodore Lenoir","Jake Moody","Gerald McCoy","Dontari Poe"],
      film: ["Mario Addison","Vernon Butler","Mike Adams","Kurt Coleman","Tre Boston","Daryl Williams","Matt Paradis","Joey Slye","Jarius Wright","Brandon Allen","Isaac Guerendo","Ji'Ayir Brown|jiayir brown","Jimmie Ward","Robbie Gould","Mitch Wishnowsky","Leonard Floyd","Maliek Collins","Renardo Green","Malik Mustapha","Dee Winters","De'Vondre Campbell|devondre campbell","Jake Brendel","Aaron Banks","Mike McGlinchey","Colton McKivitz","Spencer Burford","Dominick Puni","Isaac Yiadom","Samuel Womack"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-henry", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Derrick Henry.",
    note: "Played on the same team in the same season (Titans 2016–2023 and Ravens 2024–2025), through 2025.",
    tiers: {
      chalk: ["Lamar Jackson","A.J. Brown|aj brown","Ryan Tannehill","Marcus Mariota"],
      bandwagon: ["Mark Andrews","Julio Jones","DeAndre Hopkins|nuk","Delanie Walker","Corey Davis","Jeffery Simmons","Kevin Byard","Zay Flowers","Kyle Hamilton","Roquan Smith","Marlon Humphrey","Taylor Lewan","Justin Tucker","DeMarco Murray"],
      starter: ["Jonnu Smith","Will Levis","Malik Willis","Treylon Burks","Rishard Matthews","Tajae Sharpe","Adam Humphries","Dion Lewis","Tyjae Spears","D'Onta Foreman|donta foreman","Rodger Saffold","Ben Jones","Jack Conklin","Jurrell Casey","Harold Landry","Bud Dupree","Denico Autry","Rashaan Evans","Kenny Vaccaro","Amani Hooker","Adoree' Jackson|adoree jackson","Logan Ryan","Malcolm Butler","Kristian Fulton","Jayon Brown","Brian Orakpo","Derrick Morgan","Jadeveon Clowney","Ryan Succop","Brett Kern","Austin Hooper","Rashod Bateman","Isaiah Likely","Patrick Ricard","Tyler Linderbaum","Ronnie Stanley","Justin Madubuike","Odafe Oweh|jayson oweh","Kyle Van Noy","Nelson Agholor","Diontae Johnson"],
      film: ["Kalif Raymond","Jeremy McNichols","Nate Davis","Wesley Woodyard","Vic Beasley","Stephen Gostkowski","Randy Bullock","Ryan Stonehouse","Nick Folk","Chig Okonkwo","Geoff Swaim","Anthony Firkser","MyCole Pruitt","Nick Westbrook-Ikhine","Dontrell Hilliard","Robert Woods","Arden Key","Azeez Al-Shaair","Justice Hill","Keaton Mitchell","Daniel Faalele","Nate Wiggins","Eddie Jackson","Trenton Simpson","Jordan Stout","Josh Johnson","Cooper Rush","Jaire Alexander"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-donald", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Aaron Donald.",
    note: "Played on the same team in the same season (Rams, 2014–2023), through 2025.",
    tiers: {
      chalk: ["Jared Goff","Matthew Stafford","Todd Gurley","Cooper Kupp"],
      bandwagon: ["Jalen Ramsey","Robert Woods","Brandin Cooks","Odell Beckham Jr.|odell beckham|obj","Von Miller","Puka Nacua","Sammy Watkins","Tavon Austin","Ndamukong Suh","Bobby Wagner","Andrew Whitworth","Johnny Hekker","Greg Zuerlein|greg the leg","Baker Mayfield","Case Keenum"],
      starter: ["Tyler Higbee","Gerald Everett","Darrell Henderson","Cam Akers","Sony Michel","Kyren Williams","Malcolm Brown","Van Jefferson","Allen Robinson","Kenny Britt","Michael Brockers","Robert Quinn","Chris Long","William Hayes","Dante Fowler","Leonard Floyd","Marcus Peters","Aqib Talib","Trumaine Johnson","Janoris Jenkins","Lamarcus Joyner","John Johnson III|john johnson","Eric Weddle","Mark Barron","Alec Ogletree","James Laurinaitis","Cory Littleton","Rodger Saffold","John Sullivan","Rob Havenstein","Matt Gay","Nick Foles","Shaun Hill","Austin Davis","Tutu Atwell","Lance Kendricks","Benny Cunningham","Tre Mason","Demarcus Robinson"],
      film: ["Sean Mannion","John Wolford","Brett Rypien","Ben Skowronek","Brycen Hopkins","Austin Blythe","Brian Allen","Troy Hill","Darious Williams","Nickell Robey-Coleman","David Long","Taylor Rapp","Jordan Fuller","Ernest Jones","Byron Young","Kobie Turner","Sebastian Joseph-Day","Greg Gaines","A'Shawn Robinson|ashawn robinson","Morgan Fox","Samson Ebukam","Brett Maher"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-dak", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Dak Prescott.",
    note: "Played on the same team in the same season (Cowboys, 2016–2025), through 2025.",
    tiers: {
      chalk: ["Ezekiel Elliott|zeke","CeeDee Lamb","Dez Bryant","Micah Parsons"],
      bandwagon: ["Jason Witten","Amari Cooper","Tony Romo","Michael Gallup","Cole Beasley","Tony Pollard","Zack Martin","Tyron Smith","Travis Frederick","DeMarcus Lawrence","Trevon Diggs","George Pickens","Brandin Cooks","Jake Ferguson","Leighton Vander Esch|lve"],
      starter: ["Dalton Schultz","Blake Jarwin","Rico Dowdle","Javonte Williams","Randall Cobb","Terrance Williams","Allen Hurns","Tavon Austin","Jalen Tolbert","Cooper Rush","Andy Dalton","Trey Lance","Alfred Morris","Darren McFadden","La'el Collins|lael collins","Tyler Smith","Tyler Biadasz","Connor Williams","Terence Steele","Randy Gregory","Dorance Armstrong","Osa Odighizuwa","Jaylon Smith","Sean Lee","Anthony Barr","DaRon Bland","Byron Jones","Chidobe Awuzie","Anthony Brown","Jourdan Lewis","Stephon Gilmore","Malik Hooker","Jayron Kearse","Donovan Wilson","Xavier Woods","Brandon Aubrey","Brett Maher","Dan Bailey","Greg Zuerlein","Kenny Clark","KaVontae Turpin"],
      film: ["Ben DiNucci","Garrett Gilbert","Joe Milton","Geoff Swaim","Tyler Guyton","Jeff Heath","Mazi Smith","Bryan Anger","Chris Jones","Kelvin Joseph","Neville Gallimore","Antwaun Woods","Tyrone Crawford","Maliek Collins","David Irving","Taco Charlton","Sam Williams","Damone Clark","Noah Brown","Cedrick Wilson","Deonte Harty"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-01-pats", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2001 Patriots (Tom Brady's team).",
    note: "Anyone who played for them during the 2001 season.",
    tiers: {
      chalk: ["Tom Brady","Drew Bledsoe","Adam Vinatieri","Ty Law"],
      bandwagon: ["Troy Brown","Antowain Smith","David Patten","Tedy Bruschi","Lawyer Milloy","Richard Seymour","Willie McGinest","Mike Vrabel"],
      starter: ["Kevin Faulk","Ted Johnson","Roman Phifer","Otis Smith","Matt Light","Damien Woody","Joe Andruzzi","Bryan Cox","Bobby Hamilton","Anthony Pleasant","Tebucky Jones"],
      film: ["Jermaine Wiggins","Marc Edwards","Terry Glenn","Charles Johnson","Fred Coleman","Patrick Pass","J.R. Redmond|jr redmond","Ken Walter","Larry Izzo","Je'Rod Cherry|jerod cherry","Brandon Mitchell","Grey Ruegamer","Mike Compton","Terrell Buckley","Matt Stevens","Brock Williams","Riddick Parker"],
      deep: ["Rod Rutledge","Leonard Myers"],
      hail: []
    }
  },
  {
    id: "sb-03-pats", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2003 Patriots (Tom Brady's team).",
    note: "Anyone who played for them during the 2003 season.",
    tiers: {
      chalk: ["Tom Brady","Ty Law","Adam Vinatieri","Tedy Bruschi"],
      bandwagon: ["Deion Branch","Troy Brown","David Givens","Antowain Smith","Kevin Faulk","Rodney Harrison","Richard Seymour","Willie McGinest","Mike Vrabel","Ty Warren"],
      starter: ["Daniel Graham","Christian Fauria","Asante Samuel","Tyrone Poole","Eugene Wilson","Roman Phifer","Ted Johnson","Rosevelt Colvin","Ted Washington","Matt Light","Dan Koppen","Joe Andruzzi","Damien Woody","Bethel Johnson","David Patten"],
      film: ["Larry Izzo","Ken Walter","Jarvis Green","Bobby Hamilton","Mike Cloud","Russ Hochstein","Tom Ashworth","Stephen Neal","Je'Rod Cherry|jerod cherry","Matt Chatham","Dan Klecko","Damon Huard","Fred Baxter","Larry Centers","Brandon Gorin"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-04-pats", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2004 Patriots (Tom Brady's team).",
    note: "Anyone who played for them during the 2004 season.",
    tiers: {
      chalk: ["Tom Brady","Corey Dillon","Deion Branch","Adam Vinatieri"],
      bandwagon: ["Troy Brown","David Givens","David Patten","Rodney Harrison","Tedy Bruschi","Richard Seymour","Willie McGinest","Mike Vrabel","Ty Law","Asante Samuel","Vince Wilfork"],
      starter: ["Kevin Faulk","Daniel Graham","Christian Fauria","Eugene Wilson","Roman Phifer","Ted Johnson","Ty Warren","Matt Light","Dan Koppen","Joe Andruzzi","Stephen Neal","Bethel Johnson","Randall Gay"],
      film: ["Patrick Pass","Larry Izzo","Josh Miller","Jarvis Green","Keith Traylor","Tom Ashworth","Russ Hochstein","Brandon Gorin","Rabih Abdullah","Earthwind Moreland","Hank Poteat","Don Davis","Matt Chatham","Rohan Davey"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-14-pats", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2014 Patriots (Tom Brady's team).",
    note: "Anyone who played for them during the 2014 season.",
    tiers: {
      chalk: ["Tom Brady","Rob Gronkowski|gronk","Julian Edelman","Darrelle Revis"],
      bandwagon: ["Brandon LaFell","Danny Amendola","LeGarrette Blount","Shane Vereen","Malcolm Butler","Vince Wilfork","Dont'a Hightower|donta hightower","Devin McCourty","Jimmy Garoppolo|jimmy g","Stephen Gostkowski","Brandon Browner"],
      starter: ["Jonas Gray","Stevan Ridley","Tim Wright","Michael Hoomanawanui","Nate Solder","Sebastian Vollmer","Dan Connolly","Bryan Stork","Ryan Wendell","Chandler Jones","Rob Ninkovich","Jamie Collins","Akeem Ayers","Patrick Chung","Kyle Arrington","Logan Ryan","Sealver Siliga","Alan Branch","Jerod Mayo"],
      film: ["Brandon Tate","Matthew Slater","Ryan Allen","Josh Boyce","Aaron Dobson","Kenbrell Thompkins","James White","Duron Harmon","Marcus Cannon","Cameron Fleming","Josh Kline","Dominique Easley","Chris Jones","Zach Moore","Tavon Wilson","Nate Ebner","Brandon Bolden","James Develin"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-16-pats", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2016 Patriots (Tom Brady's team).",
    note: "Anyone who played for them during the 2016 season.",
    tiers: {
      chalk: ["Tom Brady","Julian Edelman","Rob Gronkowski|gronk","James White"],
      bandwagon: ["LeGarrette Blount","Martellus Bennett","Danny Amendola","Chris Hogan","Malcolm Butler","Dont'a Hightower|donta hightower","Devin McCourty","Jimmy Garoppolo|jimmy g","Jacoby Brissett","Stephen Gostkowski","Dion Lewis"],
      starter: ["Malcolm Mitchell","Michael Floyd","Patrick Chung","Logan Ryan","Eric Rowe","Trey Flowers","Rob Ninkovich","Chris Long","Kyle Van Noy","Alan Branch","Jabaal Sheard","Nate Solder","Marcus Cannon","David Andrews","Joe Thuney","Shaq Mason","Jamie Collins"],
      film: ["Matthew Slater","Ryan Allen","James Develin","Brandon Bolden","Duron Harmon","Shea McClellin","Elandon Roberts","Vincent Valentine","Malcom Brown","Jordan Richards","Cyrus Jones","Justin Coleman","Nate Ebner","Barkevious Mingo"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-18-pats", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2018 Patriots (Tom Brady's team).",
    note: "Anyone who played for them during the 2018 season.",
    tiers: {
      chalk: ["Tom Brady","Julian Edelman","Rob Gronkowski|gronk","Stephon Gilmore"],
      bandwagon: ["Sony Michel","James White","Josh Gordon","Chris Hogan","Phillip Dorsett","Cordarrelle Patterson","Rex Burkhead","Devin McCourty","Jason McCourty","Dont'a Hightower|donta hightower","Trey Flowers","Stephen Gostkowski"],
      starter: ["Kyle Van Noy","Patrick Chung","Duron Harmon","J.C. Jackson|jc jackson","Lawrence Guy","Malcom Brown","Adrian Clayborn","Elandon Roberts","Trent Brown","Marcus Cannon","Joe Thuney","Shaq Mason","David Andrews","Brian Hoyer","Dwayne Allen","Jacob Hollister"],
      film: ["Matthew Slater","Ryan Allen","James Develin","Danny Shelton","Deatrich Wise Jr.|deatrich wise","Ja'Whaun Bentley|jawhaun bentley","Jonathan Jones","Keion Crossen","Brandon Bolden","Albert McClellan","Nate Ebner","John Simon"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-02-bucs", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2002 Buccaneers (Brad Johnson's team).",
    note: "Anyone who played for them during the 2002 season.",
    tiers: {
      chalk: ["Brad Johnson","Warren Sapp","Derrick Brooks","John Lynch"],
      bandwagon: ["Keyshawn Johnson","Mike Alstott","Ronde Barber","Simeon Rice","Dexter Jackson","Michael Pittman","Joe Jurevicius","Keenan McCardell"],
      starter: ["Rob Johnson","Shaun King","Ken Dilger","Shelton Quarles","Brian Kelly","Dwight Smith","Anthony McFarland","Greg Spires","Martin Gramatica","Ryan Nece","Jeff Christy","Roman Oben","Kerry Jenkins"],
      film: ["Karl Williams","Aaron Stecker","Ellis Wyms","Chartric Darby","Jermaine Phillips","Tom Tupa","Cosey Coleman","Kenyatta Walker","Rickey Dudley"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-05-steelers", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2005 Steelers (Ben Roethlisberger's team).",
    note: "Anyone who played for them during the 2005 season.",
    tiers: {
      chalk: ["Ben Roethlisberger|big ben","Jerome Bettis|the bus","Hines Ward","Troy Polamalu"],
      bandwagon: ["Willie Parker|fast willie","Antwaan Randle El","Heath Miller","Cedrick Wilson","James Farrior","Joey Porter","Ike Taylor","Casey Hampton","Aaron Smith","Alan Faneca","Jeff Hartings"],
      starter: ["Charlie Batch","Tommy Maddox","Verron Haynes","Duce Staley","Quincy Morgan","Clark Haggans","Larry Foote","James Harrison","Deshea Townsend","Chris Hope","Bryant McFadden","Kimo von Oelhoffen","Brett Keisel","Marvel Smith","Max Starks","Kendall Simmons","Jeff Reed","Chris Gardocki"],
      film: ["Dan Kreider","Jerame Tuman","Sean Morey","Willie Williams","Chris Kemoeatu"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-08-steelers", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2008 Steelers.",
    note: "Anyone who played for them during the 2008 season.",
    tiers: {
      chalk: ["Ben Roethlisberger|big ben","Troy Polamalu","James Harrison","Hines Ward"],
      bandwagon: ["Santonio Holmes","Willie Parker|fast willie","Heath Miller","LaMarr Woodley","James Farrior","Ike Taylor","Casey Hampton","Aaron Smith","Ryan Clark","Jeff Reed","Rashard Mendenhall"],
      starter: ["Nate Washington","Mewelde Moore","Byron Leftwich","Charlie Batch","Larry Foote","Deshea Townsend","Bryant McFadden","Tyrone Carter","Brett Keisel","Willie Colon","Max Starks","Chris Kemoeatu","Justin Hartwig","Darnell Stapleton","Limas Sweed"],
      film: ["Carey Davis","Gary Russell","Matt Spaeth","Mitch Berger","Travis Kirschke","Nick Eason","Chris Hoke","William Gay","Anthony Madison","Keyaron Fox","Lawrence Timmons"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-06-colts", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2006 Colts (Peyton Manning's team).",
    note: "Anyone who played for them during the 2006 season.",
    tiers: {
      chalk: ["Peyton Manning","Marvin Harrison","Reggie Wayne","Dwight Freeney"],
      bandwagon: ["Joseph Addai","Dominic Rhodes","Dallas Clark","Adam Vinatieri","Bob Sanders","Robert Mathis","Jeff Saturday"],
      starter: ["Ben Utecht","Bryan Fletcher","Aaron Moorehead","Brandon Stokley","Antoine Bethea","Cato June","Gary Brackett","Rob Morris","Kelvin Hayden","Nick Harper","Jason David","Marlin Jackson","Raheem Brock","Booger McFarland","Tarik Glenn","Ryan Diem","Ryan Lilja","Jake Scott","Hunter Smith"],
      film: ["Jim Sorgi","Matt Giordano","Mike Doss","Josh Thomas","Dan Klecko","Charlie Johnson","Dylan Gandy","Gilbert Gardner","Tyjuan Hagler","Rocky Boiman"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-07-giants", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2007 Giants (Eli Manning's team).",
    note: "Anyone who played for them during the 2007 season.",
    tiers: {
      chalk: ["Eli Manning","Michael Strahan","Plaxico Burress","David Tyree"],
      bandwagon: ["Brandon Jacobs","Ahmad Bradshaw","Jeremy Shockey","Amani Toomer","Osi Umenyiora","Justin Tuck","Antonio Pierce","Steve Smith","Kevin Boss"],
      starter: ["Derrick Ward","Reuben Droughns","Sam Madison","Aaron Ross","Corey Webster","R.W. McQuarters|rw mcquarters","Gibril Wilson","James Butler","Kawika Mitchell","Fred Robbins","Barry Cofield","Mathias Kiwanuka","Chris Snee","Shaun O'Hara|shaun ohara","David Diehl","Kareem McKenzie","Rich Seubert","Lawrence Tynes","Jeff Feagles"],
      film: ["Sinorice Moss","Domenik Hixon","Madison Hedgecock","Anthony Wright","Jared Lorenzen","Craig Dahl","Michael Johnson","Reggie Torbor","Jay Alford","Danny Clark"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-11-giants", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2011 Giants (Eli Manning's team).",
    note: "Anyone who played for them during the 2011 season.",
    tiers: {
      chalk: ["Eli Manning","Victor Cruz","Justin Tuck","Jason Pierre-Paul|jpp"],
      bandwagon: ["Hakeem Nicks","Mario Manningham","Ahmad Bradshaw","Brandon Jacobs","Osi Umenyiora","Jake Ballard","Antrel Rolle","Corey Webster","Lawrence Tynes"],
      starter: ["Bear Pascoe","Kenny Phillips","Michael Boley","Chase Blackburn","Mathias Kiwanuka","Chris Canty","Linval Joseph","Aaron Ross","Prince Amukamara","Deon Grant","David Diehl","Chris Snee","David Baas","Kevin Boothe","Kareem McKenzie","Steve Weatherford","David Carr"],
      film: ["Henry Hynoski","D.J. Ware|dj ware","Devin Thomas","Domenik Hixon","Jerrel Jernigan","Ramses Barden","Jacquian Williams","Spencer Paysinger","Greg Jones","Rocky Bernard","Dave Tollefson","Will Beatty","Mitch Petrus"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-09-saints", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2009 Saints (Drew Brees's team).",
    note: "Anyone who played for them during the 2009 season.",
    tiers: {
      chalk: ["Drew Brees","Reggie Bush","Marques Colston","Darren Sharper"],
      bandwagon: ["Pierre Thomas","Jeremy Shockey","Devery Henderson","Robert Meachem","Lance Moore","Jonathan Vilma","Tracy Porter","Garrett Hartley","Will Smith","Jabari Greer","Roman Harper"],
      starter: ["Mike Bell","Heath Evans","David Thomas","Jahri Evans","Carl Nicks","Jon Stinchcomb","Jammal Brown","Jonathan Goodwin","Scott Fujita","Scott Shanle","Sedrick Ellis","Bobby McCray","Charles Grant","Randall Gay","Mark Brunell","Thomas Morstead"],
      film: ["Courtney Roby","Lynell Hamilton","Usama Young","Malcolm Jenkins","Anthony Hargrove","Remi Ayodele","Paul Spicer","Troy Evans","Marvin Mitchell","Chase Daniel"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-12-ravens", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2012 Ravens (Joe Flacco's team).",
    note: "Anyone who played for them during the 2012 season.",
    tiers: {
      chalk: ["Joe Flacco","Ray Lewis","Ray Rice","Ed Reed"],
      bandwagon: ["Anquan Boldin","Torrey Smith","Jacoby Jones","Dennis Pitta","Terrell Suggs","Haloti Ngata","Justin Tucker","Bernard Pierce","Paul Kruger"],
      starter: ["Vonta Leach","Ed Dickson","Tandon Doss","Marshal Yanda","Matt Birk","Michael Oher","Bryant McKinnie","Kelechi Osemele","Dannell Ellerbe","Bernard Pollard","Cary Williams","Corey Graham","Lardarius Webb","Jimmy Smith","Arthur Jones","Pernell McPhee","Courtney Upshaw","Sam Koch"],
      film: ["Tyrod Taylor","Jameel McClain","Albert McClellan","Ma'ake Kemoeatu","Terrence Cody","Chykie Brown","James Ihedigbo","Brendon Ayanbadejo","Bobbie Williams","Jah Reid","LaQuan Williams"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-22-chiefs", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2022 Chiefs (Patrick Mahomes's team).",
    note: "Anyone who played for them during the 2022 season.",
    tiers: {
      chalk: ["Patrick Mahomes","Travis Kelce","Chris Jones","Isiah Pacheco"],
      bandwagon: ["JuJu Smith-Schuster|juju","Kadarius Toney","Marquez Valdes-Scantling|mvs","Jerick McKinnon","Harrison Butker","L'Jarius Sneed|ljarius sneed","Nick Bolton","Trent McDuffie","Frank Clark","Creed Humphrey","Joe Thuney"],
      starter: ["Clyde Edwards-Helaire|ceh","Mecole Hardman","Skyy Moore","Justin Watson","Noah Gray","Orlando Brown Jr.|orlando brown","Trey Smith","Andrew Wylie","George Karlaftis","Willie Gay","Justin Reid","Juan Thornhill","Bryan Cook","Jaylen Watson","Joshua Williams","Carlos Dunlap","Mike Danna","Derrick Nnadi","Chad Henne"],
      film: ["Ronald Jones","Jody Fortson","Blake Bell","Michael Burton","Nick Allegretti","Leo Chenal","Khalen Saunders","Tershawn Wharton","Tommy Townsend","James Winchester","Matt Ammendola","Chris Lammons","Darius Harris","Rashad Fenton"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-23-chiefs", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2023 Chiefs (Patrick Mahomes's team).",
    note: "Anyone who played for them during the 2023 season.",
    tiers: {
      chalk: ["Patrick Mahomes","Travis Kelce","Chris Jones","Isiah Pacheco"],
      bandwagon: ["Rashee Rice","Marquez Valdes-Scantling|mvs","Mecole Hardman","Harrison Butker","L'Jarius Sneed|ljarius sneed","Trent McDuffie","Nick Bolton","Creed Humphrey","Joe Thuney","Justin Reid","George Karlaftis"],
      starter: ["Kadarius Toney","Skyy Moore","Justin Watson","Jerick McKinnon","Clyde Edwards-Helaire|ceh","Noah Gray","Trey Smith","Jawaan Taylor","Donovan Smith","Drue Tranquill","Willie Gay","Leo Chenal","Charles Omenihu","Mike Danna","Bryan Cook","Jaylen Watson","Mike Edwards","Joshua Williams","Blaine Gabbert"],
      film: ["Richie James","Blake Bell","Nick Allegretti","Wanya Morris","Derrick Nnadi","Tershawn Wharton","Felix Anudike-Uzomah","Tommy Townsend","James Winchester","Chamarri Conner","Deon Bush","Montrell Washington","Justyn Ross","Mike Pennel"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-25-seahawks", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 2025 Seahawks (Sam Darnold's team).",
    note: "Anyone who played for them during the 2025 season.",
    tiers: {
      chalk: ["Sam Darnold","Jaxon Smith-Njigba|jsn","Kenneth Walker III|kenneth walker","Devon Witherspoon"],
      bandwagon: ["Cooper Kupp","DeMarcus Lawrence","Leonard Williams","Ernest Jones","Julian Love","Zach Charbonnet","Jason Myers","Michael Dickson","Charles Cross","Riq Woolen|tariq woolen"],
      starter: ["AJ Barner|a.j. barner","Elijah Arroyo","Tory Horton","Byron Murphy II|byron murphy","Jarran Reed","Uchenna Nwosu","Boye Mafe","Derick Hall","Coby Bryant","Nick Emmanwori","Josh Jobe","Abe Lucas","Grey Zabel","Jalen Sundell"],
      film: ["Drew Lock","Jake Bobo","Eric Saubert","Robbie Ouzts","George Holani","Tyrice Knight","Drake Thomas","Ty Okada","Brady Russell"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-90s-cowboys", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 1990s Cowboys (1992, 1993 or 1995) (Troy Aikman's team).",
    note: "Anyone who played for them during the 1992, 1993 or 1995 season.",
    tiers: {
      chalk: ["Troy Aikman","Emmitt Smith","Michael Irvin","Deion Sanders|prime time"],
      bandwagon: ["Jay Novacek","Daryl Johnston|moose","Charles Haley","Larry Brown","Nate Newton","Larry Allen","Erik Williams","Mark Tuinei","Darren Woodson","Russell Maryland","Leon Lett","Ken Norton Jr.|ken norton","Alvin Harper","Kevin Williams"],
      starter: ["Mark Stepnoski","Ray Donaldson","Kevin Smith","James Washington","Thomas Everett","Tony Casillas","Jim Jeffcoat","Tony Tolbert","Robert Jones","Dixon Edwards","Darrin Smith","Lin Elliott","Eddie Murray","Chris Boniol","Mike Saxon","Jason Garrett","Bernie Kosar","Steve Beuerlein"],
      film: ["Kelvin Martin","Lincoln Coleman","Sherman Williams","Eric Bjornson","Shante Carver","Chad Hennings","Godfrey Myles","Dale Hellestrae","Wade Wilson","Kenneth Gant","Bill Bates"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-94-niners", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 1994 49ers (Steve Young's team).",
    note: "Anyone who played for them during the 1994 season.",
    tiers: {
      chalk: ["Steve Young","Jerry Rice","Deion Sanders|prime time","Ricky Watters"],
      bandwagon: ["Brent Jones","John Taylor","William Floyd","Ken Norton Jr.|ken norton","Merton Hanks","Tim McDonald","Dana Stubblefield","Bryant Young","Rickey Jackson","Charles Mann","Elvis Grbac"],
      starter: ["Jesse Sapolu","Steve Wallace","Harris Barton","Bart Oates","Derrick Deese","Ralph Tamm","Gary Plummer","Lee Woodall","Eric Davis","Toi Cook","Doug Brien","Klaus Wilmsmeyer","Adam Walker","Dexter Carter","Derek Loville"],
      film: ["Ed McCaffrey","Ted Popson","Tyronne Drakeford","Dennis Brown","Richard Dent"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-96-packers", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 1996 Packers (Brett Favre's team).",
    note: "Anyone who played for them during the 1996 season.",
    tiers: {
      chalk: ["Brett Favre","Reggie White","Desmond Howard","LeRoy Butler"],
      bandwagon: ["Antonio Freeman","Dorsey Levens","Edgar Bennett","Keith Jackson","Mark Chmura","Robert Brooks","Andre Rison","Sean Jones","Gilbert Brown","Santana Dotson"],
      starter: ["Don Beebe","Eugene Robinson","Doug Evans","Craig Newsome","Mike Prior","Brian Williams","George Koonce","Wayne Simmons","Bernardo Harris","Frank Winters","Adam Timmerman","Aaron Taylor","Earl Dotson","Ken Ruettgers","John Michels","Chris Jacke","Craig Hentrich","Jim McMahon"],
      film: ["William Henderson","Doug Pederson","Travis Jervey","Terry Mickens","Bob Kuberski","Darius Holland","Lamont Hollinquest","Tyrone Williams"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-90s-broncos", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 1997 or 1998 Broncos (John Elway's team).",
    note: "Anyone who played for them during the 1997 or 1998 season.",
    tiers: {
      chalk: ["John Elway","Terrell Davis","Shannon Sharpe","Rod Smith"],
      bandwagon: ["Ed McCaffrey","Steve Atwater","Bill Romanowski","Gary Zimmerman","Tom Nalen","Mark Schlereth","Jason Elam","Neil Smith","Alfred Williams","Darrien Gordon","Brian Griese"],
      starter: ["Howard Griffith","Derek Loville","Bubby Brister","Tony Jones","Brian Habib","Harry Swayne","Dan Neil","John Mobley","Keith Traylor","Maa Tanuvasa","Trevor Pryce","Ray Crockett","Tyrone Braxton","Darrius Johnson","Tom Rouen","Willie Green","Byron Chamberlain"],
      film: ["Vaughn Hebron","Glenn Cadrez","Allen Aldridge","Eric Brown","Keith Burns","Detron Smith","Dwayne Carswell"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-kelce", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Travis Kelce.",
    note: "Played on the same team in the same season (Chiefs, 2013–2025), through 2025.",
    tiers: {
      chalk: ["Patrick Mahomes","Tyreek Hill|cheetah","Alex Smith","Chris Jones"],
      bandwagon: ["Jamaal Charles","Kareem Hunt","Isiah Pacheco","Rashee Rice","Xavier Worthy","Mecole Hardman","Clyde Edwards-Helaire|ceh","Justin Houston","Eric Berry","Tamba Hali","Derrick Johnson","Marcus Peters","Dee Ford","Harrison Butker","Tyrann Mathieu|honey badger","JuJu Smith-Schuster|juju","DeAndre Hopkins|nuk","Le'Veon Bell|leveon bell","Sammy Watkins"],
      starter: ["Dwayne Bowe","Jeremy Maclin","Albert Wilson","Chris Conley","Demarcus Robinson","Spencer Ware","Charcandrick West","Knile Davis","Jerick McKinnon","Damien Williams","Frank Clark","L'Jarius Sneed|ljarius sneed","Nick Bolton","Trent McDuffie","Creed Humphrey","Joe Thuney","Trey Smith","Mitchell Schwartz","Eric Fisher","Laurent Duvernay-Tardif","Dontari Poe","Sean Smith","Brandon Flowers","Chase Daniel","Chad Henne","Nick Foles","Carson Wentz","Cairo Santos","Dustin Colquitt","Anthony Fasano","Hollywood Brown|marquise brown"],
      film: ["Donnie Avery","Dexter McCluster","Junior Hemingway","Jason Avant","De'Anthony Thomas|deanthony thomas","Rodney Hudson","Jeff Allen","Branden Albert","Jaye Howard","Allen Bailey","Ron Parker","Husain Abdullah","Daniel Sorensen","Steven Nelson","Phillip Gaines","Josh Mauga","Ramik Wilson","Anthony Hitchens","Reggie Ragland","Juan Thornhill","Bryan Cook","Jaylen Watson","Willie Gay","Leo Chenal","George Karlaftis","Noah Gray","Demetrius Harris","Tyler Bray"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-wilson", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Russell Wilson.",
    note: "Played on the same team in the same season (Seahawks 2012–2021, Broncos 2022–2023, Steelers 2024, Giants 2025), through 2025.",
    tiers: {
      chalk: ["Marshawn Lynch|beast mode","Richard Sherman","DK Metcalf|d.k. metcalf","Tyler Lockett"],
      bandwagon: ["Earl Thomas","Kam Chancellor","Bobby Wagner","Doug Baldwin","Golden Tate","Jimmy Graham","Michael Bennett","Cliff Avril","Percy Harvin","Courtland Sutton","Jerry Jeudy","George Pickens","T.J. Watt|tj watt","Malik Nabers","Jaxson Dart","Steven Hauschka","Jason Myers"],
      starter: ["Jermaine Kearse","Paul Richardson","Luke Willson","Zach Miller","Chris Carson","Rashaad Penny","Thomas Rawls","Robert Turbin","Christine Michael","Byron Maxwell","Brandon Browner","K.J. Wright|kj wright","Bruce Irvin","Frank Clark","Jadeveon Clowney","Jamal Adams","Duane Brown","Max Unger","Russell Okung","Javonte Williams","Melvin Gordon","Patrick Surtain II|patrick surtain","Bradley Chubb","Justin Simmons","Najee Harris","Jaylen Warren","Pat Freiermuth","Justin Fields","Cameron Heyward|cam heyward","Minkah Fitzpatrick","Brian Burns","Dexter Lawrence","Cam Skattebo","Wan'Dale Robinson|wandale robinson","Jameis Winston","Michael Dickson","Jon Ryan"],
      film: ["Sidney Rice","Ricardo Lockette","Fred Jackson","Will Dissly","Nick Vannett","Ed Dickson","Greg Olsen","Gerald Everett","Freddie Swain","Penny Hart","Justin Britt","Mike Iupati","J.R. Sweezy|jr sweezy","Germain Ifedi","Shaquill Griffin","Tre Flowers","Quandre Diggs","Bradley McDougald","Ugo Amadi","Jordyn Brooks","Poona Ford","Jarran Reed","Al Woods","Carlos Dunlap","Benson Mayowa","Rasheem Green","Brett Rypien","Jarrett Stidham","Marvin Mims Jr.|marvin mims","Greg Dulcich","Alex Singleton","Josey Jewell","Calvin Austin III|calvin austin","Van Jefferson","Mike Williams","Darnell Washington"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-brees", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Drew Brees.",
    note: "Played on the same team in the same season (Chargers 2001–2005 and Saints 2006–2020), through 2025.",
    tiers: {
      chalk: ["Marques Colston","Reggie Bush","Alvin Kamara","Michael Thomas"],
      bandwagon: ["LaDainian Tomlinson|lt","Antonio Gates","Jimmy Graham","Mark Ingram","Pierre Thomas","Darren Sproles","Cameron Jordan","Doug Flutie","Philip Rivers","Taysom Hill","Jameis Winston","Teddy Bridgewater","Jeremy Shockey"],
      starter: ["Devery Henderson","Lance Moore","Robert Meachem","Brandin Cooks","Kenny Stills","Willie Snead","Ted Ginn Jr.|ted ginn","Emmanuel Sanders","Jared Cook","Ben Watson","Latavius Murray","Chris Ivory","Jonathan Vilma","Darren Sharper","Tracy Porter","Malcolm Jenkins","Roman Harper","Will Smith","Jahri Evans","Carl Nicks","Terron Armstead","Ryan Ramczyk","Max Unger","Marshon Lattimore","Demario Davis","Sheldon Rankins","David Onyemata","Garrett Hartley","Wil Lutz","Thomas Morstead","Shawne Merriman","Keenan McCardell","Eric Parker","Donnie Edwards","Junior Seau|seau"],
      film: ["Courtney Roby","Joe Horn","Deuce McAllister","Mike Bell","Heath Evans","David Thomas","Josh Hill","Tre'Quan Smith|trequan smith","Deonte Harris","Andrus Peat","Larry Warford","Jabari Greer","Patrick Robinson","Kenny Vaccaro","Vonn Bell","P.J. Williams|pj williams","Marcus Williams","Eli Apple","Janoris Jenkins","Malcolm Brown","Trey Hendrickson","Alex Okafor","Kurt Coleman","Chase Daniel","Luke McCown","Mark Brunell"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-stafford", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Matthew Stafford.",
    note: "Played on the same team in the same season (Lions 2009–2020 and Rams 2021–2025), through 2025.",
    tiers: {
      chalk: ["Calvin Johnson|megatron","Cooper Kupp","Puka Nacua","Aaron Donald"],
      bandwagon: ["Golden Tate","Marvin Jones","Kenny Golladay","T.J. Hockenson|tj hockenson","Ndamukong Suh","Jalen Ramsey","Odell Beckham Jr.|odell beckham|obj","Von Miller","Davante Adams","Kyren Williams","Matt Prater","Reggie Bush"],
      starter: ["Nate Burleson","Titus Young","Brandon Pettigrew","Eric Ebron","Theo Riddick","Joique Bell","Kerryon Johnson","D'Andre Swift|dandre swift","Ameer Abdullah","Anquan Boldin","Danny Amendola","Jahvid Best","Allen Robinson","Van Jefferson","Tyler Higbee","Darrell Henderson","Cam Akers","Sony Michel","Blake Corum","Andrew Whitworth","Rob Havenstein","Bobby Wagner","Leonard Floyd","Ernest Jones","Kobie Turner","Byron Young","Jared Verse","Braden Fiske","Darious Williams","Taylor Rapp","Ziggy Ansah|ezekiel ansah","Darius Slay","Glover Quin","DeAndre Levy","Stephen Tulloch","Jason Hanson","Shaun Hill","Dan Orlovsky","Baker Mayfield","Jimmy Garoppolo"],
      film: ["Bryant Johnson","Kevin Smith","Mikel Leshoure","Louis Delmas","Chris Houston","Haloti Ngata","A'Shawn Robinson|ashawn robinson","Jarrad Davis","Tracy Walker","Frank Ragnow","Taylor Decker","Riley Reiff","Dominic Raiola","Larry Warford","Tutu Atwell","Ben Skowronek","Demarcus Robinson","Colby Parkinson","Tyler Johnson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-herbert", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Justin Herbert.",
    note: "Played on the same team in the same season (Chargers, 2020–2025), through 2025.",
    tiers: {
      chalk: ["Keenan Allen","Austin Ekeler","Joey Bosa","Derwin James"],
      bandwagon: ["Mike Williams","Khalil Mack","Ladd McConkey","Quentin Johnston","Rashawn Slater","Hunter Henry","Gerald Everett","Najee Harris","J.K. Dobbins|jk dobbins","Omarion Hampton","Cameron Dicker","Tyrod Taylor"],
      starter: ["Jalen Guyton","Joshua Palmer|josh palmer","DeAndre Carter","Donald Parham","Will Dissly","Tyler Conklin","Joshua Kelley","Kimani Vidal","Gus Edwards","Corey Linsley","Joe Alt","Zion Johnson","Bradley Bozeman","Bryan Bulaga","Sebastian Joseph-Day","Morgan Fox","Tuli Tuipulotu","Asante Samuel Jr.|asante samuel","Michael Davis","Chris Harris Jr.|chris harris","J.C. Jackson|jc jackson","Kenneth Murray","Drue Tranquill","Eric Kendricks","Daiyan Henley","Denzel Perryman","Bud Dupree","Elijah Molden","Alohi Gilman","Tarheeb Still","Easton Stick","Chase Daniel","Taylor Heinicke","Dustin Hopkins","Michael Badgley","Tristan Vizcaino","JK Scott"],
      film: ["Jared Cook","Stephen Anderson","Tre' McKitty|tre mckitty","Larry Rountree","Isaiah Spiller","Simi Fehoko","Derius Davis","Brenden Rice","Jamaree Salyer","Trey Pipkins","Matt Feiler","Storm Norton","Nasir Adderley","Jerry Tillery","Linval Joseph","Otito Ogbonnia","Kristian Fulton"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-bigben", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Ben Roethlisberger.",
    note: "Played on the same team in the same season (Steelers, 2004–2021), through 2025.",
    tiers: {
      chalk: ["Antonio Brown","Hines Ward","Troy Polamalu","Le'Veon Bell|leveon bell"],
      bandwagon: ["Jerome Bettis|the bus","JuJu Smith-Schuster|juju","Heath Miller","Santonio Holmes","Mike Wallace","James Harrison","T.J. Watt|tj watt","Cameron Heyward|cam heyward","Najee Harris","Willie Parker|fast willie","Rashard Mendenhall","Chris Boswell","Minkah Fitzpatrick","Emmanuel Sanders","Diontae Johnson","Chase Claypool"],
      starter: ["Plaxico Burress","Martavis Bryant","Markus Wheaton","Antwaan Randle El","Nate Washington","Jerricho Cotchery","James Washington","Eric Ebron","Pat Freiermuth","Vance McDonald","Jesse James","DeAngelo Williams","James Conner","Benny Snell","Isaac Redman","LaMarr Woodley","Lawrence Timmons","James Farrior","Joey Porter","Ike Taylor","Ryan Clark","Casey Hampton","Aaron Smith","Brett Keisel","Bud Dupree","Ryan Shazier","Joe Haden","Stephon Tuitt","Maurkice Pouncey","David DeCastro","Alan Faneca","Ramon Foster","Marcus Gilbert","Alejandro Villanueva","Jeff Reed","Charlie Batch","Byron Leftwich","Mason Rudolph","Devlin Hodges|duck hodges","Landry Jones","Dennis Dixon","Tommy Maddox"],
      film: ["Shaun Suisham","Bryant McFadden","William Gay","Keenan Lewis","Cortez Allen","Mike Mitchell","Sean Davis","Terrell Edmunds","Mike Hilton","Steven Nelson","Cam Sutton","Vince Williams","Arthur Moats","Jarvis Jones","Robert Golden","Javon Hargrave","Tyson Alualu","Matt Spaeth","Dan Kreider","Will Johnson","Roosevelt Nix","Fitzgerald Toussaint","Jaylen Samuels","Ray-Ray McCloud"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-eli", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Eli Manning.",
    note: "Played on the same team in the same season (Giants, 2004–2019), through 2025.",
    tiers: {
      chalk: ["Odell Beckham Jr.|odell beckham|obj","Victor Cruz","Michael Strahan","Saquon Barkley"],
      bandwagon: ["Plaxico Burress","Tiki Barber","Brandon Jacobs","Ahmad Bradshaw","Jeremy Shockey","Hakeem Nicks","Justin Tuck","Osi Umenyiora","Jason Pierre-Paul|jpp","David Tyree","Sterling Shepard","Evan Engram","Daniel Jones"],
      starter: ["Amani Toomer","Steve Smith","Mario Manningham","Rueben Randle","Kevin Boss","Martellus Bennett","Andre Williams","Rashad Jennings","Shane Vereen","Landon Collins","Antrel Rolle","Corey Webster","Prince Amukamara","Janoris Jenkins","Dominique Rodgers-Cromartie|drc","Olivier Vernon","Damon Harrison|snacks","Antonio Pierce","Mathias Kiwanuka","Chris Canty","Linval Joseph","Chris Snee","Shaun O'Hara|shaun ohara","David Diehl","Kareem McKenzie","Will Beatty","Justin Pugh","Ereck Flowers","Nate Solder","Kevin Zeitler","Lawrence Tynes","Josh Brown","Aldrick Rosas","Jeff Feagles","Steve Weatherford","Golden Tate"],
      film: ["Darius Slayton","Derrick Ward","Bear Pascoe","Henry Hynoski","Madison Hedgecock","Larry Donnell","Will Tye","Jerrel Jernigan","Domenik Hixon","Louis Murphy","Brandon Marshall","Paul Perkins","Wayne Gallman","Orleans Darkwa","Kawika Mitchell","Michael Boley","Jon Beason","Devon Kennard","B.J. Hill|bj hill","Dalvin Tomlinson","Dexter Lawrence","Leonard Williams","Alec Ogletree","Kurt Warner","David Carr","Jared Lorenzen","Ryan Nassib","Davis Webb","Geno Smith"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-watt", cat: "connections", diff: "hard",
    prompt: "Name a teammate of J.J. Watt.",
    note: "Played on the same team in the same season (Texans 2011–2020 and Cardinals 2021–2022), through 2025.",
    tiers: {
      chalk: ["DeAndre Hopkins|nuk","Andre Johnson","Deshaun Watson","Arian Foster"],
      bandwagon: ["Jadeveon Clowney","Whitney Mercilus","Brian Cushing","Kyler Murray","Larry Fitzgerald","Matt Schaub","Will Fuller","Lamar Miller","Johnathan Joseph","Budda Baker"],
      starter: ["Brian Hoyer","Ryan Fitzpatrick","Case Keenum","Brock Osweiler","T.J. Yates|tj yates","Tom Savage","Ben Tate","Alfred Blue","Carlos Hyde","David Johnson","Owen Daniels","C.J. Fiedorowicz","Garrett Graham","Jordan Akins","Keke Coutee","Kenny Stills","Brandin Cooks","Kevin Walter","Cecil Shorts","Duane Brown","Laremy Tunsil","Chris Myers","Wade Smith","Derek Newton","Antonio Smith","Connor Barwin","Shaun Cody","Vince Wilfork","D.J. Reader|dj reader","Benardrick McKinney","Zach Cunningham","Kareem Jackson","Kevin Johnson","Tyrann Mathieu|honey badger","Justin Reid","Randy Bullock","Ka'imi Fairbairn|kaimi fairbairn","Shane Lechler","James Conner","Marquise Brown|hollywood brown","Zach Ertz","Christian Kirk","Rondale Moore","Chase Edmonds","A.J. Green|aj green","Isaiah Simmons","Zaven Collins","Chandler Jones","Markus Golden","Byron Murphy Jr.|byron murphy","Matt Prater","Colt McCoy"],
      film: ["Keshawn Martin","DeVier Posey","Jaelen Strong","Braxton Miller","Ryan Griffin","Akeem Dent","Quintin Demps","Danieal Manning","Kendrick Lewis","D.J. Swearinger|dj swearinger","Andre Hal","Jared Crick","Earl Mitchell","Christian Covington","Brennan Scarlett","Jacob Martin","Trace McSorley","Andy Isabella","Greg Dortch"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-raylewis", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Ray Lewis.",
    note: "Played on the same team in the same season (Ravens, 1996–2012), through 2025.",
    tiers: {
      chalk: ["Ed Reed","Terrell Suggs","Joe Flacco","Ray Rice"],
      bandwagon: ["Jamal Lewis","Shannon Sharpe","Rod Woodson","Jonathan Ogden","Haloti Ngata","Trent Dilfer","Derrick Mason","Anquan Boldin","Todd Heap","Matt Stover","Peter Boulware","Sam Adams","Tony Siragusa","Chris McAlister","Steve McNair"],
      starter: ["Kyle Boller","Elvis Grbac","Tony Banks","Vinny Testaverde","Jeff Blake","Anthony Wright","Troy Smith","Priest Holmes","Willis McGahee","Chester Taylor","Mark Clayton","Travis Taylor","Qadry Ismail","Michael Jackson","Torrey Smith","Jacoby Jones","Dennis Pitta","Ed Dickson","Vonta Leach","Marshal Yanda","Ben Grubbs","Jason Brown","Adalius Thomas","Bart Scott","Jarret Johnson","Kelly Gregg","Trevor Pryce","Michael McCrary","Rob Burnett","Duane Starks","Samari Rolle","Lardarius Webb","Dawan Landry","Bernard Pollard","Justin Tucker","Sam Koch","Paul Kruger","Jameel McClain"],
      film: ["Kim Herring","Jermaine Lewis","Brandon Stokley","Kevin Johnson","Daniel Wilcox","Kordell Stewart","Musa Smith","Le'Ron McClain|leron mcclain","Demetrius Williams","Bernard Pierce","Cary Williams","Jimmy Smith","Arthur Jones","Pernell McPhee","Dannell Ellerbe","Brendon Ayanbadejo","Tavares Gooden","Gary Baxter","Will Demps","Ed Hartwell","Cornell Brown"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-fitz", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Larry Fitzgerald.",
    note: "Played on the same team in the same season (Cardinals, 2004–2020), through 2025.",
    tiers: {
      chalk: ["Kurt Warner","Carson Palmer","Kyler Murray","Patrick Peterson"],
      bandwagon: ["Anquan Boldin","DeAndre Hopkins|nuk","David Johnson","Tyrann Mathieu|honey badger","Darnell Dockett","Adrian Wilson","Calais Campbell","Chandler Jones","Budda Baker","Edgerrin James","Matt Leinart","Steve Breaston","Michael Floyd","John Brown","Christian Kirk","Kenyan Drake"],
      starter: ["Early Doucet","Andre Roberts","J.J. Nelson|jj nelson","Jaron Brown","Chase Edmonds","Andre Ellington","Chris Johnson","Beanie Wells|chris wells","Tim Hightower","Rashard Mendenhall","Kerwynn Williams","Jermaine Gresham","Ben Patrick","Rob Housler","Leonard Pope","Daryl Washington","Karlos Dansby","Bertrand Berry","Chike Okeafor","Joey Porter","Antonio Cromartie","Dominique Rodgers-Cromartie|drc","Justin Bethel","Deone Bucannon","Haason Reddick","Markus Golden","Frostee Rucker","Josh Mauga","Kevin Minter","Jonathan Cooper","Mike Iupati","D.J. Humphries","Levi Brown","Lyle Sendlein","Neil Rackers","Jay Feely","Chandler Catanzaro","Phil Dawson","Zane Gonzalez","Andy Lee","Derek Anderson","Kevin Kolb","John Skelton","Drew Stanton","Blaine Gabbert","Josh Rosen","Sam Bradford","Josh McCown","Brian Hoyer","Ryan Lindley","Max Hall","Shaun King","John Navarre"],
      film: ["Bryant Johnson","Jerheme Urban","Sean Morey","LaRod Stephens-Howling","Isaiah Simmons","Dennis Gardeck","Jordan Hicks","Corey Peters","Byron Murphy Jr.|byron murphy","Larry Foote","Gerald Hayes","Greg Toler","Rashad Johnson","Kerry Rhodes","Andy Isabella"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-obj", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Odell Beckham Jr.",
    note: "Played on the same team in the same season (Giants 2014–2018, Browns 2019–2021, Rams 2021, Ravens 2023, Dolphins 2024), through 2025.",
    tiers: {
      chalk: ["Eli Manning","Baker Mayfield","Matthew Stafford","Lamar Jackson"],
      bandwagon: ["Victor Cruz","Jarvis Landry","Nick Chubb","Myles Garrett","Cooper Kupp","Aaron Donald","Von Miller","Jalen Ramsey","Mark Andrews","Zay Flowers","Tyreek Hill","Jaylen Waddle","Tua Tagovailoa|tua","Saquon Barkley"],
      starter: ["Sterling Shepard","Rueben Randle","Evan Engram","Brandon Marshall","Larry Donnell","Andre Williams","Rashad Jennings","Shane Vereen","Paul Perkins","Landon Collins","Jason Pierre-Paul|jpp","Janoris Jenkins","Olivier Vernon","Damon Harrison|snacks","Kareem Hunt","David Njoku","Austin Hooper","Denzel Ward","Joel Bitonio","Wyatt Teller","Case Keenum","Robert Woods","Van Jefferson","Tyler Higbee","Sony Michel","Andrew Whitworth","Gus Edwards","Rashod Bateman","Nelson Agholor","Isaiah Likely","Roquan Smith","Kyle Hamilton","Marlon Humphrey","Justin Madubuike","Justin Tucker","De'Von Achane|devon achane","Raheem Mostert","Jonnu Smith","Tyler Huntley","Skylar Thompson"],
      film: ["Roger Lewis","Tavarres King","Dwayne Harris","Will Tye","Rhett Ellison","Rashard Higgins","KhaDarel Hodge","Donovan Peoples-Jones","Ben Skowronek","Brycen Hopkins","Devin Duvernay","Tylan Wallace","Justice Hill","Keaton Mitchell","Cedrick Wilson","Braxton Berrios"],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-12", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 12.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Tom Brady","Aaron Rodgers","Terry Bradshaw","Roger Staubach"],
      bandwagon: ["Joe Namath|broadway joe","Jim Kelly","Andrew Luck","Bob Griese"],
      starter: ["Ken Stabler|the snake","Randall Cunningham","Marques Colston","Josh Gordon","Kerry Collins"],
      film: ["John Brodie","Percy Harvin","Mohamed Sanu","Chris Godwin"],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-80", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 80.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Jerry Rice","Cris Carter","Steve Largent","Andre Johnson"],
      bandwagon: ["Isaac Bruce","Victor Cruz","Jarvis Landry","Jimmy Graham","Jeremy Shockey"],
      starter: ["Kellen Winslow","Donald Driver","Irving Fryar","Henry Ellard","James Lofton"],
      film: ["Andre Rison","Cris Collinsworth"],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-88", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 88.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Michael Irvin|the playmaker","CeeDee Lamb","Dez Bryant","Tony Gonzalez"],
      bandwagon: ["Marvin Harrison","Lynn Swann","Demaryius Thomas","Greg Olsen"],
      starter: ["Drew Pearson","Alan Page","Jermichael Finley","Hakeem Nicks","Evan Engram"],
      film: ["T.J. Hockenson|tj hockenson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-87", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 87.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Rob Gronkowski|gronk","Travis Kelce","Jordy Nelson"],
      bandwagon: ["Reggie Wayne","Dwight Clark","Eric Decker","Ben Coates"],
      starter: ["Muhsin Muhammad","Ed McCaffrey"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-81", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 81.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Calvin Johnson|megatron","Terrell Owens|t.o.","Randy Moss"],
      bandwagon: ["Tim Brown","Torry Holt","Anquan Boldin","Art Monk"],
      starter: ["Aaron Hernandez","Dick Night Train Lane|night train lane"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-99", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 99.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["J.J. Watt|jj watt","Aaron Donald","Warren Sapp"],
      bandwagon: ["Jason Taylor","Mark Gastineau","Danielle Hunter"],
      starter: ["Dan Hampton"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-21", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 21.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Deion Sanders|prime time","LaDainian Tomlinson|lt","Ezekiel Elliott|zeke"],
      bandwagon: ["Frank Gore","Sean Taylor","Tiki Barber"],
      starter: ["Malcolm Butler","Landon Collins"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-34", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 34.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Walter Payton|sweetness","Bo Jackson","Earl Campbell"],
      bandwagon: ["Thurman Thomas","Herschel Walker","Ricky Williams"],
      starter: ["Joe Perry"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-10", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 10.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Eli Manning","Tyreek Hill","DeSean Jackson"],
      bandwagon: ["Fran Tarkenton","Justin Herbert","Vince Young","Jimmy Garoppolo|jimmy g"],
      starter: ["Santonio Holmes","Chad Pennington","Mac Jones","Drake Maye"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-13", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 13.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Dan Marino","Kurt Warner","Odell Beckham Jr.|odell beckham|obj"],
      bandwagon: ["Mike Evans","Keenan Allen","Brock Purdy","T.Y. Hilton|ty hilton"],
      starter: ["Michael Gallup","Kelvin Benjamin"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-4", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 4.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Brett Favre","Dak Prescott","Adam Vinatieri"],
      bandwagon: ["Derek Carr","Deshaun Watson"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-1", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 1.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Cam Newton","Jalen Hurts","Warren Moon"],
      bandwagon: ["Kyler Murray","Justin Fields"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "routes", cat: "culture", diff: "easy",
    prompt: "Name a pass route.",
    note: "Any route from the route tree or a common concept.",
    tiers: {
      chalk: ["Slant","Post","Go|fly|streak|vertical","Out"],
      bandwagon: ["Curl|hook","Corner","Fade","Screen","Dig|in"],
      starter: ["Wheel","Comeback","Hitch","Seam","Drag","Flat","Post-corner|post corner"],
      film: ["Bubble screen|bubble","Out-and-up|out and up","Sluggo","Stick","Whip","Shallow cross|shallow","Swing"],
      deep: ["Sail","Arrow","Pivot","Angle","Texas","Choice","Spot","Double move"],
      hail: []
    }
  },
  {
    id: "coverages", cat: "culture", diff: "easy",
    prompt: "Name a defensive coverage, front or scheme.",
    note: "Defensive football terms.",
    tiers: {
      chalk: ["Man-to-man|man to man|man coverage|man","Zone|zone coverage","Blitz"],
      bandwagon: ["Cover 2|cover two","Cover 3|cover three","Prevent|prevent defense","Nickel"],
      starter: ["Cover 1|cover one","Cover 0|cover zero","Cover 4|quarters","4-3|four three","3-4|three four","Dime"],
      film: ["Tampa 2|tampa two","46 defense|46 bear|46","Cover 6|cover six","Quarter|quarter defense","Press|press coverage"],
      deep: ["Zone blitz|fire zone","Robber","Bracket","Goal line|goal line defense","Wide 9|wide nine","Big nickel"],
      hail: []
    }
  },
  {
    id: "equipment", cat: "culture", diff: "easy",
    prompt: "Name a piece of football equipment or gear.",
    note: "What players wear or use on the field.",
    tiers: {
      chalk: ["Helmet","Shoulder pads","Football|ball","Cleats"],
      bandwagon: ["Mouthguard|mouthpiece","Gloves","Face mask|facemask","Chin strap"],
      starter: ["Visor","Eye black","Jersey","Thigh pads","Knee pads","Kicking tee|tee"],
      film: ["Hip pads","Rib protector|flak jacket","Tailbone pad","Neck roll","Wristband|wristbands|playbook wristband"],
      deep: ["Guardian cap","Towel","Arm sleeve|sleeves","Back plate","Knee brace"],
      hail: []
    }
  },
  {
    id: "run-plays", cat: "culture", diff: "easy",
    prompt: "Name a type of running play.",
    note: "Common run concepts and play names.",
    tiers: {
      chalk: ["QB sneak|quarterback sneak|sneak","Sweep","Draw"],
      bandwagon: ["Dive","Toss","Counter","Option","Power"],
      starter: ["Inside zone","Outside zone|stretch","Trap","Read option|zone read","Jet sweep","Pitch"],
      film: ["Iso|isolation","Tush push|brotherly shove","Speed option","Belly","Lead","Wildcat"],
      deep: ["Duo","Split zone","Buck sweep","Student body right","Triple option"],
      hail: []
    }
  },
  {
    id: "officials", cat: "culture", diff: "easy",
    prompt: "Name an NFL officiating position or ref signal.",
    note: "On-field officials and well-known signals.",
    tiers: {
      chalk: ["Referee|ref","Touchdown","Flag"],
      bandwagon: ["Umpire","Holding","First down","Line judge"],
      starter: ["Down judge|head linesman","Field judge","Side judge","Back judge","Incomplete pass|incomplete"],
      film: ["Replay official","Personal foul","Illegal motion","Delay of game","Offside"],
      deep: ["Center judge","Safety","Timeout","Touchback","Illegal shift"],
      hail: []
    }
  },
  {
    id: "football-terms", cat: "culture", diff: "easy",
    prompt: "Name a football term or slang phrase.",
    note: "Words fans hear every Sunday.",
    tiers: {
      chalk: ["Touchdown","Sack","Interception|pick","Hail Mary"],
      bandwagon: ["Pick six|pick-six","Red zone","Audible","Blitz","Fumble","Two-minute drill|two minute drill"],
      starter: ["Onside kick","Touchback","Play action|play-action","Fair catch","Turnover on downs","Garbage time"],
      film: ["Pocket","Shotgun","Check down|checkdown","Coffin corner","Scramble","Kneel down|victory formation","Muffed punt|muff"],
      deep: ["Taking a knee","Spot of the foul","Ineligible","Dead ball","Flex","Nickel","Hot route","Bootleg","Pylon"],
      hail: []
    }
  },
  {
    id: "kicks", cat: "culture", diff: "easy",
    prompt: "Name a type of kick in football.",
    note: "Kicks and kicking situations.",
    tiers: {
      chalk: ["Field goal","Punt","Kickoff","Extra point|pat"],
      bandwagon: ["Onside kick","Squib kick|squib"],
      starter: ["Pooch punt|pooch kick|pooch","Drop kick","Fair catch kick"],
      film: ["Coffin-corner punt|coffin corner","Rugby punt","Free kick"],
      deep: ["Surprise onside|surprise onside kick","Mortar kick"],
      hail: []
    }
  },
  {
    id: "stats", cat: "culture", diff: "easy",
    prompt: "Name a stat tracked in football.",
    note: "Box-score and season stats.",
    tiers: {
      chalk: ["Touchdowns|td|tds","Yards","Sacks","Interceptions|ints"],
      bandwagon: ["Completions","Passer rating|qb rating","Receptions|catches","Tackles","Fumbles"],
      starter: ["Yards per carry|ypc","Completion percentage","Yards after catch|yac","Forced fumbles","Field goals made","Targets"],
      film: ["Passes defended|pass breakups","Tackles for loss|tfl","QB hits|quarterback hits","Third-down conversions|third down conversions","Time of possession"],
      deep: ["EPA|expected points added","QBR|total qbr","Air yards","Punt average","Red zone efficiency"],
      hail: []
    }
  },
  {
    id: "nfl-cities", cat: "franchise", diff: "easy",
    prompt: "Name a city or metro area that has an NFL team.",
    note: "Where a team plays today.",
    tiers: {
      chalk: ["Dallas","Green Bay","Kansas City","New York"],
      bandwagon: ["Philadelphia","Chicago","Pittsburgh","Boston|new england|foxborough","Los Angeles","San Francisco|bay area","Miami","Denver","Las Vegas"],
      starter: ["Seattle","Buffalo","Baltimore","Detroit","Cleveland","Cincinnati","Atlanta","New Orleans","Minneapolis|minnesota"],
      film: ["Houston","Indianapolis","Tampa|tampa bay","Phoenix|arizona|glendale","Charlotte","Nashville|tennessee","Jacksonville","Washington|dc"],
      deep: ["Santa Clara","Orchard Park","East Rutherford","Inglewood","Landover"],
      hail: []
    }
  },
  {
    id: "nfl-states", cat: "franchise", diff: "easy",
    prompt: "Name a U.S. state that has an NFL team.",
    note: "Where the home stadium is today.",
    tiers: {
      chalk: ["Texas","California","Florida","New York"],
      bandwagon: ["Pennsylvania","Ohio","Missouri","Wisconsin","Illinois"],
      starter: ["Massachusetts","New Jersey","Colorado","Washington","Michigan","Georgia","Louisiana","Minnesota","Nevada"],
      film: ["Tennessee","North Carolina","Maryland","Indiana","Arizona"],
      deep: [],
      hail: []
    }
  },
  {
    id: "never-won-sb", cat: "franchise", diff: "easy",
    prompt: "Name a team that has never won a Super Bowl.",
    note: "Through Super Bowl LX.",
    tiers: {
      chalk: ["Buffalo Bills|bills|buffalo","Detroit Lions|lions|detroit","Minnesota Vikings|vikings|minnesota","Cleveland Browns|browns|cleveland"],
      bandwagon: ["Cincinnati Bengals|bengals|cincinnati","Atlanta Falcons|falcons|atlanta","Los Angeles Chargers|chargers|san diego chargers"],
      starter: ["Carolina Panthers|panthers|carolina","Arizona Cardinals|cardinals|arizona","Tennessee Titans|titans|tennessee|oilers","Houston Texans|texans|houston","Jacksonville Jaguars|jaguars|jags|jacksonville"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "qb-r1-2000", cat: "draft", diff: "easy",
    prompt: "Name a QB taken in the first round since 2000.",
    note: "2000–2025 drafts.",
    tiers: {
      chalk: ["Patrick Mahomes","Eli Manning","Aaron Rodgers","Josh Allen","Lamar Jackson","Joe Burrow"],
      bandwagon: ["Ben Roethlisberger|big ben","Philip Rivers","Matt Ryan","Cam Newton","Andrew Luck","Matthew Stafford","Michael Vick","Carson Palmer","Joe Flacco","Trevor Lawrence","Justin Herbert","Kyler Murray","Caleb Williams","Jayden Daniels","C.J. Stroud|cj stroud","Baker Mayfield","Jared Goff"],
      starter: ["Vince Young","Jay Cutler","Alex Smith","Sam Bradford","Robert Griffin III|rg3|rgiii","Ryan Tannehill","Blake Bortles","Jameis Winston","Marcus Mariota","Carson Wentz","Mitchell Trubisky|mitch trubisky","Deshaun Watson","Sam Darnold","Daniel Jones","Tua Tagovailoa|tua","Jordan Love","Justin Fields","Mac Jones","Trey Lance","Zach Wilson","Bryce Young","Anthony Richardson","Drake Maye","J.J. McCarthy|jj mccarthy","Bo Nix","Michael Penix Jr.|michael penix","Cam Ward","Jaxson Dart","Kenny Pickett","Johnny Manziel|johnny football","Tim Tebow","Mark Sanchez","Josh Freeman","Teddy Bridgewater","Paxton Lynch","Josh Rosen","Dwayne Haskins","Chad Pennington","David Carr","Joey Harrington","Patrick Ramsey","Byron Leftwich","Kyle Boller","Rex Grossman","J.P. Losman|jp losman","Jason Campbell","Matt Leinart","JaMarcus Russell","Brady Quinn","Brandon Weeden","Christian Ponder","Jake Locker","Blaine Gabbert","EJ Manuel|e.j. manuel"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "ten-k-rush", cat: "records", diff: "easy",
    prompt: "Name a player with 10,000 or more career rushing yards.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["Emmitt Smith","Walter Payton|sweetness","Barry Sanders","Adrian Peterson|ap"],
      bandwagon: ["Frank Gore","LaDainian Tomlinson|lt","Derrick Henry","Jerome Bettis|the bus","Eric Dickerson","Curtis Martin","Jim Brown","Marshall Faulk","Marshawn Lynch|beast mode"],
      starter: ["Tony Dorsett","Edgerrin James|edge","Marcus Allen","Franco Harris","Thurman Thomas","John Riggins","Corey Dillon","O.J. Simpson|oj simpson","Steven Jackson","LeSean McCoy|shady","Tiki Barber","Fred Taylor"],
      film: ["Ricky Watters","Jamal Lewis","Eddie George","Ottis Anderson","Warrick Dunn","Ricky Williams","Thomas Jones"],
      deep: [],
      hail: []
    }
  },
  {
    id: "forty-k-pass", cat: "records", diff: "easy",
    prompt: "Name a QB with 40,000 or more career passing yards.",
    note: "Through the 2025 season.",
    tiers: {
      chalk: ["Tom Brady","Drew Brees","Peyton Manning","Brett Favre"],
      bandwagon: ["Aaron Rodgers","Matthew Stafford","Philip Rivers","Ben Roethlisberger|big ben","Matt Ryan","Dan Marino","John Elway","Eli Manning","Russell Wilson"],
      starter: ["Warren Moon","Fran Tarkenton","Kirk Cousins","Joe Flacco","Carson Palmer","Vinny Testaverde","Drew Bledsoe","Dan Fouts"],
      film: ["Joe Montana","Johnny Unitas","Kerry Collins"],
      deep: [],
      hail: []
    }
  },
  {
    id: "nfl-brothers", cat: "culture", diff: "easy",
    prompt: "Name a set of brothers who both played in the NFL.",
    note: "Answer with the family name.",
    tiers: {
      chalk: ["Manning|mannings|peyton and eli","Kelce|kelces|travis and jason","Watt|watts|jj watt|t.j. watt"],
      bandwagon: ["Bosa|bosas|nick and joey","Barber|barbers|tiki and ronde","Pouncey|pounceys","McCourty|mccourtys","Gronkowski|gronk brothers"],
      starter: ["Sharpe|sterling and shannon","Matthews|clay and casey matthews","Hasselbeck|matt and tim hasselbeck","St. Brown|st brown|amon-ra and equanimeous"],
      film: ["Long|chris and kyle long","Detmer|ty and koy detmer","Bennett|michael and martellus bennett"],
      deep: [],
      hail: []
    }
  },
  {
    id: "initials", cat: "culture", diff: "easy",
    prompt: "Name an NFL player known by his initials.",
    note: "Like \"LT\" or \"CMC\".",
    tiers: {
      chalk: ["LT|lawrence taylor|ladainian tomlinson","CMC|christian mccaffrey","OBJ|odell beckham","TO|t.o.|terrell owens"],
      bandwagon: ["AJ Brown|a.j. brown","DK Metcalf|dk","JJ Watt|j.j. watt","TJ Watt|t.j. watt","CJ Stroud|c.j. stroud"],
      starter: ["JSN|jaxon smith-njigba","CJ2K|chris johnson","TY Hilton|t.y. hilton","DJ Moore|d.j. moore","OJ Simpson|o.j. simpson"],
      film: ["RG3|robert griffin iii","JPP|jason pierre-paul","AJ Green|a.j. green","BTJ|brian thomas jr"],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-steelers", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Pittsburgh Steelers.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Terry Bradshaw","Franco Harris","Troy Polamalu","Jerome Bettis|the bus"],
      bandwagon: ["Joe Greene|mean joe greene","Jack Lambert","Lynn Swann","John Stallworth","Mel Blount","Jack Ham","Mike Webster","Rod Woodson"],
      starter: ["Dermontti Dawson","Alan Faneca","Donnie Shell","Kevin Greene","Ernie Stautner","Bobby Layne","John Henry Johnson"],
      film: ["Jack Butler","Bill Dudley","Len Dawson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-packers", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Green Bay Packers.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Brett Favre","Bart Starr","Reggie White","Charles Woodson"],
      bandwagon: ["Ray Nitschke","Paul Hornung","Jim Taylor","Forrest Gregg","Don Hutson","LeRoy Butler","Julius Peppers","Sterling Sharpe"],
      starter: ["Willie Davis","Herb Adderley","Willie Wood","Jerry Kramer","Henry Jordan","Dave Robinson","Jim Ringo","James Lofton","Ted Hendricks"],
      film: ["Johnny Blood McNally|johnny blood","Clarke Hinkle","Arnie Herber","Cal Hubbard","Mike Michalske","Tony Canadeo","Emlen Tunnell","Len Ford","Jan Stenerud"],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-cowboys", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Dallas Cowboys.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Troy Aikman","Emmitt Smith","Michael Irvin|the playmaker","Roger Staubach"],
      bandwagon: ["Deion Sanders|prime time","Tony Dorsett","Bob Lilly","Randy White","Larry Allen","Terrell Owens|t.o.","DeMarcus Ware"],
      starter: ["Rayfield Wright","Mel Renfro","Bob Hayes","Drew Pearson","Cliff Harris","Chuck Howley","Charles Haley","Herb Adderley","Mike Ditka"],
      film: ["Lance Alworth","Forrest Gregg","Tommy McDonald"],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-niners", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the San Francisco 49ers.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Joe Montana","Jerry Rice","Steve Young","Ronnie Lott"],
      bandwagon: ["Deion Sanders|prime time","Terrell Owens|t.o.","Patrick Willis","Charles Haley","Randy Moss","Bryant Young"],
      starter: ["Joe Perry","Hugh McElhenny","Y.A. Tittle|ya tittle","Fred Dean","Rickey Jackson","Richard Dent","Chris Doleman","Rod Woodson","Jimmy Johnson"],
      film: ["Leo Nomellini","Bob St. Clair|bob st clair","John Henry Johnson","Dave Wilcox"],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-bears", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Chicago Bears.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Walter Payton|sweetness","Dick Butkus","Mike Singletary","Brian Urlacher"],
      bandwagon: ["Gale Sayers","Mike Ditka","Devin Hester","Julius Peppers","Dan Hampton","Richard Dent","Steve McMichael|mongo"],
      starter: ["Sid Luckman","Red Grange","Bronko Nagurski","Jimbo Covert","Bill George","Doug Atkins","Bulldog Turner","Alan Page","Bobby Layne"],
      film: ["Stan Jones","George Connor","George Musso","Joe Stydahar","Danny Fortmann","Bill Hewitt","George McAfee","Ed Sprinkle","Paddy Driscoll","George Trafton","Link Lyman","Ed Healey"],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-giants", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the New York Giants.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Lawrence Taylor|lt","Michael Strahan","Frank Gifford"],
      bandwagon: ["Harry Carson","Sam Huff","Y.A. Tittle|ya tittle","Fran Tarkenton","Larry Csonka"],
      starter: ["Emlen Tunnell","Roosevelt Brown|rosey brown","Andy Robustelli","Mel Hein","Arnie Weinmeister"],
      film: ["Tuffy Leemans","Ken Strong","Jim Thorpe","Red Badgro"],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-raiders", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Raiders.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Marcus Allen","Tim Brown","Charles Woodson","Howie Long"],
      bandwagon: ["Jerry Rice","Ken Stabler|the snake","Fred Biletnikoff","Art Shell","Gene Upshaw","Jim Otto","Willie Brown","Ted Hendricks","Ray Guy","Randy Moss","Rod Woodson"],
      starter: ["Cliff Branch","Dave Casper","Mike Haynes","George Blanda","Warren Sapp","Richard Seymour","Eric Dickerson","James Lofton"],
      film: ["Ron Mix"],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-dolphins", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Miami Dolphins.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Dan Marino","Larry Csonka","Jason Taylor","Zach Thomas"],
      bandwagon: ["Bob Griese","Paul Warfield","Junior Seau","Cris Carter","Thurman Thomas"],
      starter: ["Jim Langer","Larry Little","Nick Buoniconti","Dwight Stephenson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-70s-steelers", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 1970s Steelers (1974, 1975, 1978 or 1979) (Terry Bradshaw's team).",
    note: "Anyone who played for them during the 1974, 1975, 1978 or 1979 seasons.",
    tiers: {
      chalk: ["Terry Bradshaw","Franco Harris","Lynn Swann","Joe Greene|mean joe greene"],
      bandwagon: ["John Stallworth","Jack Lambert","Jack Ham","Mel Blount","Mike Webster","L.C. Greenwood|lc greenwood","Donnie Shell","Rocky Bleier"],
      starter: ["Andy Russell","Dwight White","Ernie Holmes","Glen Edwards","Mike Wagner","J.T. Thomas|jt thomas","Jon Kolb","Larry Brown","Gerry Mullins","Ray Mansfield","Sam Davis","Roy Gerela","Bobby Walden","Randy Grossman","Bennie Cunningham","Sidney Thornton","Steve Furness","John Banaszak","Jim Smith","Joe Gilliam","Mike Kruczek","Ron Johnson","Robin Cole","Loren Toews","Dennis Winston","Matt Bahr","Craig Colquitt","Ted Petersen","Gary Dunn"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-80s-niners", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 1980s 49ers (1981, 1984, 1988 or 1989) (Joe Montana's team).",
    note: "Anyone who played for them during the 1981, 1984, 1988 or 1989 seasons.",
    tiers: {
      chalk: ["Joe Montana","Jerry Rice","Ronnie Lott","Roger Craig"],
      bandwagon: ["Dwight Clark","Steve Young","John Taylor","Charles Haley","Fred Dean","Keena Turner","Tom Rathman","Brent Jones","Freddie Solomon","Wendell Tyler","Russ Francis","Ray Wersching"],
      starter: ["Eric Wright","Dwight Hicks","Carlton Williamson","Jeff Fuller","Tim McKyer","Don Griffin","Michael Carter","Pierce Holt","Larry Roberts","Kevin Fagan","Riki Ellison","Mike Walter","Jack Reynolds|hacksaw reynolds","Randy Cross","Jesse Sapolu","Bubba Paris","Harris Barton","Guy McIntyre","Fred Quillan","Keith Fahnhorst","Earl Cooper","Bill Ring","Mike Wilson","Ricky Patton","Gary Johnson"],
      film: ["Mike Cofer","Barry Helton","Terrence Flagler","Jamie Williams","Matt Millen","Bill Romanowski","Chet Brooks","Jim Fahnhorst"],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-72-dolphins", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning undefeated 1972 Dolphins (Bob Griese's team).",
    note: "Anyone who played for them during the 1972 season.",
    tiers: {
      chalk: ["Bob Griese","Larry Csonka","Earl Morrall","Mercury Morris"],
      bandwagon: ["Paul Warfield","Jim Kiick","Nick Buoniconti","Jake Scott","Larry Little","Jim Langer","Garo Yepremian","Dick Anderson","Manny Fernandez"],
      starter: ["Howard Twilley","Marv Fleming","Bob Kuechenberg","Norm Evans","Wayne Moore","Bill Stanfill","Vern Den Herder","Bob Heinz","Doug Swift","Mike Kolen","Tim Foley","Curtis Johnson","Lloyd Mumphord","Larry Seiple","Otto Stowe","Jim Mandich","Charlie Leigh"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-86-giants", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning 1986 Giants (Lawrence Taylor's team).",
    note: "Anyone who played for them during the 1986 season.",
    tiers: {
      chalk: ["Lawrence Taylor|lt","Phil Simms","Mark Bavaro","Joe Morris"],
      bandwagon: ["Harry Carson","Carl Banks","Leonard Marshall","Jim Burt","Pepper Johnson","Mark Collins","Stacy Robinson","Lionel Manuel","Phil McConkey","Raul Allegre","Sean Landeta"],
      starter: ["Erik Howard","George Martin","Gary Reasons","Andy Headen","Perry Williams","Terry Kinard","Kenny Hill","Herb Welch","Elvis Patterson","Brad Benson","Karl Nelson","Bart Oates","Billy Ard","Chris Godfrey","William Roberts","Maurice Carthon","Lee Rouson","Zeke Mowatt","Bobby Johnson","Solomon Miller","Jeff Rutledge"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "sb-washington", cat: "rosters", diff: "hard",
    prompt: "Name a player on the Super Bowl–winning Washington teams of 1982, 1987 or 1991.",
    note: "Anyone who played for them during the 1982, 1987 or 1991 seasons.",
    tiers: {
      chalk: ["Joe Theismann","John Riggins","Doug Williams","Art Monk"],
      bandwagon: ["Mark Rypien","Darrell Green","Gary Clark","Ricky Sanders","Earnest Byner","Charles Mann","Dexter Manley","Russ Grimm","Joe Jacoby","Jeff Bostic","Mark Moseley","Timmy Smith"],
      starter: ["Mark May","George Starke","Jim Lachey","Raleigh McKenzie","Mark Schlereth","Kelvin Bryant","Gerald Riggs","Ricky Ervins","Don Warren","Terry Orr","Monte Coleman","Wilber Marshall","Andre Collins","Brad Edwards","Martin Mayhew","Barry Wilburn","Tony Peters","Mark Murphy","Dave Butz","Tony McGee","Jay Schroeder","Chip Lohmiller","Alvin Garrett","Charlie Brown","Alvin Walton","Joe Washington","Clint Didier"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-tyreek", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Tyreek Hill.",
    note: "Played on the same team in the same season (Chiefs 2016–2021 and Dolphins 2022–2025), through 2025.",
    tiers: {
      chalk: ["Patrick Mahomes","Travis Kelce","Tua Tagovailoa|tua","Jaylen Waddle"],
      bandwagon: ["Alex Smith","Chris Jones","Kareem Hunt","De'Von Achane|devon achane","Raheem Mostert","Jalen Ramsey","Odell Beckham Jr.|odell beckham|obj","Jonnu Smith","Bradley Chubb","Xavien Howard","Terron Armstead","Justin Houston","Eric Berry","Tyrann Mathieu|honey badger","Harrison Butker","Jason Sanders"],
      starter: ["Clyde Edwards-Helaire|ceh","Sammy Watkins","Mecole Hardman","Demarcus Robinson","Le'Veon Bell|leveon bell","Damien Williams","Spencer Ware","Frank Clark","Mitchell Schwartz","Eric Fisher","Dee Ford","Marcus Peters","Chad Henne","Teddy Bridgewater","Skylar Thompson","Tyler Huntley","Mike White","Jeff Wilson Jr.|jeff wilson","Durham Smythe","Cedrick Wilson","Braxton Berrios","River Cracraft","Jevon Holland","Christian Wilkins","Zach Sieler","Jaelan Phillips","Andrew Van Ginkel","David Long Jr.|david long","Jordyn Brooks","Kader Kohou","Calais Campbell","Connor Williams","Robert Hunt","Aaron Brewer","Austin Jackson","Darren Waller"],
      film: ["Albert Wilson","Chris Conley","De'Anthony Thomas|deanthony thomas","Charcandrick West","Darrel Williams","Byron Pringle","Daniel Sorensen","Ron Parker","Kendall Fuller","Charvarius Ward","Juan Thornhill","Anthony Hitchens","Reggie Ragland","Ben Niemann","Trent Sherfield","Erik Ezukanma","Julian Hill","Salvon Ahmed","Myles Gaskin","Elijah Campbell","Brandon Jones","Eli Apple"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-davante", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Davante Adams.",
    note: "Played on the same team in the same season (Packers 2014–2021, Raiders 2022–2024, Jets 2024, Rams 2025), through 2025.",
    tiers: {
      chalk: ["Aaron Rodgers","Matthew Stafford","Puka Nacua","Jordy Nelson"],
      bandwagon: ["Randall Cobb","Aaron Jones","Clay Matthews","Josh Jacobs","Maxx Crosby","Derek Carr","Garrett Wilson","Breece Hall","Sauce Gardner","Brock Bowers","Kyren Williams","Jordan Love","Mason Crosby"],
      starter: ["James Jones","Jared Cook","Jimmy Graham","Martellus Bennett","Robert Tonyan|bobby tonyan","Marquez Valdes-Scantling|mvs","Allen Lazard","Equanimeous St. Brown","Geronimo Allison","Ty Montgomery","Jamaal Williams","AJ Dillon|a.j. dillon","Eddie Lacy","Za'Darius Smith|zadarius smith","Preston Smith","Rashan Gary","Kenny Clark","Jaire Alexander","David Bakhtiari","Hunter Renfrow","Jakobi Meyers","Darren Waller","Michael Mayer","Jimmy Garoppolo|jimmy g","Gardner Minshew","Aidan O'Connell|aidan oconnell","Daniel Carlson","AJ Cole|a.j. cole","Chandler Jones","Tyler Conklin","Quinnen Williams","C.J. Mosley|cj mosley","Tyrod Taylor","Mike Williams","Tyler Higbee","Jared Verse","Byron Young","Kobie Turner","Rob Havenstein"],
      film: ["Brett Hundley","DeShone Kizer","Tim Boyle","Mack Hollins","Tre Tucker","Zamir White","Ameer Abdullah"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-megatron", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Calvin Johnson.",
    note: "Played on the same team in the same season (Lions, 2007–2015), through 2025.",
    tiers: {
      chalk: ["Matthew Stafford","Ndamukong Suh","Golden Tate","Reggie Bush"],
      bandwagon: ["Jon Kitna","Daunte Culpepper","Brandon Pettigrew","Nate Burleson","Jahvid Best","Kevin Smith","Joique Bell","Ziggy Ansah|ezekiel ansah","Jason Hanson","Matt Prater","DeAndre Levy"],
      starter: ["Shaun Hill","Drew Stanton","Dan Orlovsky","Titus Young","Ryan Broyles","Kris Durham","Eric Ebron","Theo Riddick","Ameer Abdullah","Tony Scheffler","Mikel Leshoure","Kyle Vanden Bosch","Nick Fairley","Cliff Avril","Stephen Tulloch","Louis Delmas","Glover Quin","Chris Houston","Darius Slay","Haloti Ngata","Dominic Raiola","Rob Sims","Riley Reiff","Jeff Backus","Larry Warford","Gosder Cherilus","Roy Williams","Mike Furrey","Shaun McDonald","Ernie Sims","Cory Redding","Corey Williams"],
      film: ["Bryant Johnson","Brian Calhoun","Tatum Bell","Aveion Cason","Will Heller","Sam Martin"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-cam", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Cam Newton.",
    note: "Played on the same team in the same season (Panthers 2011–2019 and 2021, Patriots 2020), through 2025.",
    tiers: {
      chalk: ["Christian McCaffrey|cmc","Luke Kuechly","Greg Olsen","Steve Smith"],
      bandwagon: ["DeAngelo Williams","Jonathan Stewart","Kelvin Benjamin","D.J. Moore|dj moore","Thomas Davis","Julius Peppers","Josh Norman","Ted Ginn Jr.|ted ginn","Graham Gano","Julian Edelman","Damien Harris","Stephon Gilmore","James White"],
      starter: ["Brandon LaFell","Devin Funchess","Curtis Samuel","Jerricho Cotchery","Philly Brown","Mike Tolbert","Charles Johnson","Kawann Short","Star Lotulelei","Shaq Thompson","Kurt Coleman","Roman Harper","Ryan Kalil","Trai Turner","Jordan Gross","Mike Remmers","Michael Oher","Andrew Norwell","Robby Anderson|robbie chosen","Chuba Hubbard","Brian Burns","Jaycee Horn","Haason Reddick","Sam Darnold","P.J. Walker|pj walker","Jakobi Meyers","N'Keal Harry|nkeal harry","Damiere Byrd","Rex Burkhead","Sony Michel","Devin McCourty","J.C. Jackson|jc jackson","Ja'Whaun Bentley|jawhaun bentley","Lawrence Guy","Jarrett Stidham","Brian Hoyer"],
      film: ["Derek Anderson","Joe Webb","Brenton Bersin","Ed Dickson","Fozzy Whittaker","Cameron Artis-Payne","Bene Benwikere","Captain Munnerlyn","Tre Boston","Colin Jones","A.J. Klein|aj klein","Charles Godfrey","Chris Gamble","Jon Beason","James Anderson"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-garrett", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Myles Garrett.",
    note: "Played on the same team in the same season (Browns, 2017–2025), through 2025.",
    tiers: {
      chalk: ["Baker Mayfield","Nick Chubb","Odell Beckham Jr.|odell beckham|obj","Jarvis Landry"],
      bandwagon: ["Deshaun Watson","Amari Cooper","Denzel Ward","Kareem Hunt","David Njoku","Joe Flacco","Jadeveon Clowney","Joel Bitonio","Jerry Jeudy","Shedeur Sanders"],
      starter: ["DeShone Kizer","Tyrod Taylor","Case Keenum","Jacoby Brissett","Dorian Thompson-Robinson","Jameis Winston","Dillon Gabriel","Josh Gordon","Corey Coleman","Rashard Higgins","Donovan Peoples-Jones","Elijah Moore","Cedric Tillman","Austin Hooper","Duke Johnson","Jerome Ford","Wyatt Teller","Jack Conklin","JC Tretter|j.c. tretter","Jedrick Wills","Ethan Pocic","Dawand Jones","Za'Darius Smith|zadarius smith","Olivier Vernon","Larry Ogunjobi","Sheldon Richardson","Dalvin Tomlinson","Jeremiah Owusu-Koramoah|jok","Anthony Walker","Greg Newsome","Martin Emerson","Grant Delpit","Juan Thornhill","John Johnson III|john johnson","Damarious Randall","Joe Schobert","Christian Kirksey","Mack Wilson","Dustin Hopkins","Greg Joseph","Cade York","Corey Bojorquez","Jamie Gillan","Quinshon Judkins","Harold Fannin Jr.|harold fannin","Mason Graham"],
      film: ["Antonio Callaway","Damion Ratley","Seth DeValve","Demetrius Harris","Harrison Bryant","D'Ernest Johnson|dernest johnson","Demetric Felton","Jordan Elliott","Sione Takitaki","Ronnie Harrison","Rodney McLeod","Ogbo Okoronkwo"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-lynch", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Marshawn Lynch.",
    note: "Played on the same team in the same season (Bills 2007–2010, Seahawks 2010–2015 and 2019, Raiders 2017–2018), through 2025.",
    tiers: {
      chalk: ["Russell Wilson","Richard Sherman","Earl Thomas","Kam Chancellor"],
      bandwagon: ["Bobby Wagner","Doug Baldwin","Golden Tate","Michael Bennett","Percy Harvin","Derek Carr","Amari Cooper","Khalil Mack","Fred Jackson","Lee Evans","Terrell Owens|t.o.","Trent Edwards","Ryan Fitzpatrick"],
      starter: ["Jermaine Kearse","Zach Miller","Luke Willson","Jimmy Graham","Cliff Avril","Bruce Irvin","K.J. Wright|kj wright","Byron Maxwell","Brandon Browner","Max Unger","Russell Okung","Tarvaris Jackson","Matt Hasselbeck","Robert Turbin","Christine Michael","Michael Crabtree","Jared Cook","Jordy Nelson","Seth Roberts","Cordarrelle Patterson","Doug Martin","Marquette King","DK Metcalf|d.k. metcalf","Tyler Lockett","Jadeveon Clowney","Chris Carson","Roscoe Parrish","Josh Reed","Aaron Schobel","Paul Posluszny","Donte Whitner","Terrence McGee","Leodis McKelvin","Jason Peters","J.P. Losman|jp losman","Steven Hauschka","Jon Ryan"],
      film: ["Sidney Rice","Ricardo Lockette","Anthony McCoy","Michael Robinson","Red Bryant","Brandon Mebane","Chris Clemons","Leroy Hill","Malcolm Smith","Breno Giacomini","J.R. Sweezy|jr sweezy"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-goff", cat: "connections", diff: "hard",
    prompt: "Name a teammate of Jared Goff.",
    note: "Played on the same team in the same season (Rams 2016–2020 and Lions 2021–2025), through 2025.",
    tiers: {
      chalk: ["Aaron Donald","Amon-Ra St. Brown|amon ra st brown|st brown","Cooper Kupp","Todd Gurley"],
      bandwagon: ["Jahmyr Gibbs","Sam LaPorta","Penei Sewell","Aidan Hutchinson","Jameson Williams","Robert Woods","Brandin Cooks","Jalen Ramsey","Andrew Whitworth","Greg Zuerlein|greg the leg","Johnny Hekker","D'Andre Swift|dandre swift","T.J. Hockenson|tj hockenson","David Montgomery"],
      starter: ["Sammy Watkins","Tavon Austin","Kenny Britt","Josh Reynolds","Tyler Higbee","Gerald Everett","Darrell Henderson","Malcolm Brown","Cam Akers","Michael Brockers","Ndamukong Suh","Marcus Peters","Aqib Talib","Eric Weddle","Lamarcus Joyner","John Johnson III|john johnson","Cory Littleton","Dante Fowler","Rodger Saffold","Rob Havenstein","John Sullivan","Frank Ragnow","Taylor Decker","Jonah Jackson","Brian Branch","Kerby Joseph","Alim McNeill","Alex Anzalone","Jack Campbell","Kalif Raymond","DJ Chark|d.j. chark","Josh Paschal","Za'Darius Smith|zadarius smith","Carlton Davis","Cameron Sutton","C.J. Gardner-Johnson|cjgj","Jake Bates","Michael Badgley","Riley Patterson","Jack Fox","Isaac TeSlaa"],
      film: ["Case Keenum","Sean Mannion","Blake Bortles","John Wolford","Tim Boyle","Hendon Hooker","Teddy Bridgewater","Craig Reynolds","Jamaal Williams","Brock Wright","Tom Kennedy"],
      deep: [],
      hail: []
    }
  },
  {
    id: "tm-lt", cat: "connections", diff: "hard",
    prompt: "Name a teammate of LaDainian Tomlinson.",
    note: "Played on the same team in the same season (Chargers 2001–2009 and Jets 2010–2011), through 2025.",
    tiers: {
      chalk: ["Philip Rivers","Antonio Gates","Drew Brees","Shawne Merriman"],
      bandwagon: ["Junior Seau","Darren Sproles","Vincent Jackson","Michael Turner","Lorenzo Neal","Doug Flutie","Mark Sanchez","Darrelle Revis","Santonio Holmes","Braylon Edwards","Shonn Greene","Plaxico Burress"],
      starter: ["Keenan McCardell","Eric Parker","Malcom Floyd","Chris Chambers","Kassim Osgood","Jacob Hester","Shaun Phillips","Jamal Williams","Luis Castillo","Igor Olshansky","Donnie Edwards","Quentin Jammer","Antonio Cromartie","Eric Weddle","Clinton Hart","Marlon McCree","Nate Kaeding","Mike Scifres","Kris Dielman","Nick Hardwick","Marcus McNeill","Dustin Keller","Jerricho Cotchery","Derrick Mason","Joe McKnight","Bart Scott","David Harris","Calvin Pace","Bryan Thomas","Jim Leonhard","Kyle Wilson","Nick Mangold","D'Brickashaw Ferguson|dbrickashaw ferguson","Nick Folk","Mark Brunell","Billy Volek","Curtis Conway","Tim Dwight"],
      film: ["Reche Caldwell","Brandon Manumaleuna","Stephen Cooper","Matt Wilhelm","Randall Godfrey","Drayton Florence","Sammy Davis"],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-rams", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Rams.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Kurt Warner","Marshall Faulk","Eric Dickerson","Isaac Bruce"],
      bandwagon: ["Deacon Jones","Merlin Olsen","Jack Youngblood","Orlando Pace","Torry Holt","Aeneas Williams"],
      starter: ["Jackie Slater","Tom Mack","Elroy Hirsch|crazylegs hirsch","Norm Van Brocklin","Bob Waterfield","Tom Fears","Dick Night Train Lane|night train lane","Les Richter","Andy Robustelli","Kevin Greene","Joe Namath","Ollie Matson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-colts", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Colts.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Peyton Manning","Edgerrin James|edge","Marvin Harrison","Johnny Unitas"],
      bandwagon: ["Dwight Freeney","Eric Dickerson","Marshall Faulk","Raymond Berry","Lenny Moore","John Mackey","Gino Marchetti","Art Donovan"],
      starter: ["Jim Parker","Ted Hendricks","Joe Perry"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-chiefs", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Kansas City Chiefs.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Tony Gonzalez","Derrick Thomas","Len Dawson","Marcus Allen"],
      bandwagon: ["Joe Montana","Willie Lanier","Bobby Bell","Buck Buchanan","Emmitt Thomas","Will Shields","Jan Stenerud"],
      starter: ["Curley Culp","Johnny Robinson","Warren Moon","Mike Webster"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-vikings", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Minnesota Vikings.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Randy Moss","Brett Favre","Cris Carter"],
      bandwagon: ["Fran Tarkenton","Alan Page","Carl Eller","John Randle","Warren Moon","Chris Doleman","Paul Krause","Jared Allen"],
      starter: ["Randall McDaniel","Ron Yary","Mick Tingelhoff","Gary Zimmerman","Morten Andersen","Steve Hutchinson","Dave Casper","Jan Stenerud"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-eagles", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Philadelphia Eagles.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Reggie White","Brian Dawkins","Terrell Owens|t.o."],
      bandwagon: ["Chuck Bednarik","Steve Van Buren","Harold Carmichael","Sonny Jurgensen","Norm Van Brocklin","Tommy McDonald"],
      starter: ["Pete Pihos","Bob Brown","Claude Humphrey","Richard Dent","Ollie Matson","Bill Hewitt","Alex Wojciechowicz"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-washington", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Washington franchise.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Darrell Green","Art Monk","John Riggins"],
      bandwagon: ["Sonny Jurgensen","Sammy Baugh","Russ Grimm","Joe Jacoby","Champ Bailey","Deion Sanders|prime time","Bruce Smith","Charley Taylor","Bobby Mitchell"],
      starter: ["Ken Houston","Chris Hanburger","Paul Krause","Sam Huff","Dick Stanfel","Wayne Millner","Turk Edwards","Cliff Battles","Bill Dudley","Deacon Jones"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-browns", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Cleveland Browns.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Jim Brown","Joe Thomas","Otto Graham","Ozzie Newsome"],
      bandwagon: ["Lou Groza","Marion Motley","Paul Warfield","Leroy Kelly","Gene Hickerson","Lenny Ford|len ford","Bill Willis"],
      starter: ["Dante Lavelli","Mac Speedie","Frank Gatski","Bobby Mitchell","Mike McCormack","Doug Atkins","Henry Jordan","Willie Davis"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "hof-lions", cat: "teamhof", diff: "easy",
    prompt: "Name a Pro Football Hall of Famer who played for the Detroit Lions.",
    note: "Players only, any part of their career, through the Class of 2025.",
    tiers: {
      chalk: ["Barry Sanders","Calvin Johnson|megatron"],
      bandwagon: ["Lem Barney","Dick Night Train Lane|night train lane","Bobby Layne","Joe Schmidt","Charlie Sanders","Lou Creekmur","Alex Karras","Yale Lary"],
      starter: ["Jack Christiansen","Doak Walker","Dick LeBeau","John Henry Johnson","Ollie Matson","Hugh McElhenny","Bill Dudley","Curley Culp","Dutch Clark|earl dutch clark"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "wr-r1-2015", cat: "draft", diff: "hard",
    prompt: "Name a wide receiver taken in the first round since 2015 (like Justin Jefferson).",
    note: "2015–2025 drafts.",
    tiers: {
      chalk: ["Justin Jefferson","Ja'Marr Chase|jamarr chase","CeeDee Lamb","Amari Cooper"],
      bandwagon: ["Jaylen Waddle","DeVonta Smith","Garrett Wilson","Jaxon Smith-Njigba|jsn","Marvin Harrison Jr.|marvin harrison","Malik Nabers","Brian Thomas Jr.|brian thomas","Brandon Aiyuk","Travis Hunter","Tetairoa McMillan|t-mac","Zay Flowers","Drake London","Chris Olave","Calvin Ridley","D.J. Moore|dj moore","Hollywood Brown|marquise brown","Jerry Jeudy","Henry Ruggs","Mike Williams"],
      starter: ["Kevin White","DeVante Parker","Nelson Agholor","Breshad Perriman","Phillip Dorsett","Corey Coleman","Will Fuller","Josh Doctson","Laquon Treadwell","Corey Davis","John Ross","N'Keal Harry|nkeal harry","Jalen Reagor","Kadarius Toney","Rashod Bateman","Jameson Williams","Jahan Dotson","Treylon Burks","Quentin Johnston","Jordan Addison","Rome Odunze","Xavier Worthy","Ricky Pearsall","Xavier Legette","Emeka Egbuka","Matthew Golden"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "rb-r1-2010", cat: "draft", diff: "hard",
    prompt: "Name a running back taken in the first round since 2010 (like Saquon Barkley).",
    note: "2010–2025 drafts.",
    tiers: {
      chalk: ["Saquon Barkley","Christian McCaffrey|cmc","Ezekiel Elliott|zeke","Bijan Robinson"],
      bandwagon: ["Todd Gurley","Jahmyr Gibbs","Josh Jacobs","Leonard Fournette","Najee Harris","Ashton Jeanty","Mark Ingram","Melvin Gordon","Travis Etienne","Doug Martin","Trent Richardson"],
      starter: ["C.J. Spiller|cj spiller","Ryan Mathews","Jahvid Best","David Wilson","Rashaad Penny","Sony Michel","Clyde Edwards-Helaire|ceh","Omarion Hampton"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-5", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 5.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Donovan McNabb","Paul Hornung","Joe Flacco"],
      bandwagon: ["Jeff Garcia","Tyrod Taylor","Kerry Collins","Teddy Bridgewater"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-11", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 11.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Julio Jones","Larry Fitzgerald","A.J. Brown|aj brown","Julian Edelman"],
      bandwagon: ["Drew Bledsoe","Phil Simms","Alex Smith","Carson Wentz","Daunte Culpepper"],
      starter: ["Norm Van Brocklin","Mark Rypien"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-14", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 14.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Stefon Diggs","Sam Darnold","Ryan Fitzpatrick"],
      bandwagon: ["Andy Dalton","Dan Fouts","Y.A. Tittle|ya tittle","Otto Graham"],
      starter: ["Don Hutson"],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-15", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 15.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Patrick Mahomes","Bart Starr","Tim Tebow"],
      bandwagon: ["Brandon Marshall","Michael Crabtree","Gardner Minshew"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-16", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 16.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Joe Montana","Trevor Lawrence","Tyler Lockett"],
      bandwagon: ["Len Dawson","Jared Goff","Frank Gifford","George Blanda","Jim Plunkett","Jake Plummer","Vinny Testaverde"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-17", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 17.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Josh Allen","Davante Adams","Philip Rivers"],
      bandwagon: ["Jaylen Waddle","Doug Williams","Jake Delhomme"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-18", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 18.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Peyton Manning","Justin Jefferson","A.J. Green|aj green"],
      bandwagon: ["Kirk Cousins","Randall Cobb"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-19", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 19.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Johnny Unitas","Deebo Samuel","Keyshawn Johnson"],
      bandwagon: ["Bernie Kosar","Lance Alworth","Miles Austin"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-20", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 20.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Barry Sanders","Ed Reed","Brian Dawkins"],
      bandwagon: ["Ronde Barber","Mel Renfro","Billy Sims"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-22", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 22.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Emmitt Smith","Derrick Henry","Christian McCaffrey|cmc"],
      bandwagon: ["Matt Forte","Doug Martin"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-24", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 24.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Charles Woodson","Darrelle Revis","Champ Bailey"],
      bandwagon: ["Marshawn Lynch|beast mode","Ty Law","Willie Brown"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-26", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 26.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Saquon Barkley","Le'Veon Bell|leveon bell","Rod Woodson"],
      bandwagon: ["Clinton Portis","Herb Adderley"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-28", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 28.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Marshall Faulk","Adrian Peterson|ap","Darrell Green"],
      bandwagon: ["Curtis Martin","Jonathan Taylor","Chris Johnson|cj2k","Warrick Dunn"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-32", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 32.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Jim Brown","O.J. Simpson|oj simpson","Franco Harris"],
      bandwagon: ["Marcus Allen","Edgerrin James|edge","Jamal Lewis"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-33", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 33.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Tony Dorsett","Aaron Jones","Roger Craig"],
      bandwagon: ["Sammy Baugh"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-54", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 54.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Brian Urlacher","Bobby Wagner","Fred Warner"],
      bandwagon: ["Zach Thomas","Randy White","Chuck Howley"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-58", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 58.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Derrick Thomas","Jack Lambert","Von Miller"],
      bandwagon: [],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-84", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 84.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Randy Moss","Antonio Brown","Shannon Sharpe"],
      bandwagon: ["Sterling Sharpe","Cordarrelle Patterson"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-85", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 85.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Chad Johnson|ochocinco|chad ochocinco","Antonio Gates","George Kittle"],
      bandwagon: ["Vernon Davis"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "jersey-92", cat: "jerseys", diff: "easy",
    prompt: "Name a well-known NFL player who wore No. 92.",
    note: "Any team, any era.",
    tiers: {
      chalk: ["Reggie White","Michael Strahan","James Harrison"],
      bandwagon: ["Haloti Ngata"],
      starter: [],
      film: [],
      deep: [],
      hail: []
    }
  },
  {
    id: "top5-recent", cat: "draft", diff: "easy",
    prompt: "Name a top-5 pick in the NFL Draft since 2017 (like Joe Burrow).",
    note: "Any of the first five picks from 2017 to 2025.",
    tiers: {
      chalk: ["Myles Garrett","Baker Mayfield","Saquon Barkley","Kyler Murray","Nick Bosa","Joe Burrow|burrow","Trevor Lawrence|lawrence","Ja'Marr Chase|jamarr chase|chase","Aidan Hutchinson|hutchinson","Bryce Young","C.J. Stroud|cj stroud|stroud","Caleb Williams|caleb","Jayden Daniels|daniels","Travis Hunter|hunter","Cam Ward|ward"],
      bandwagon: ["Mitchell Trubisky|mitch trubisky","Sam Darnold","Quinnen Williams","Tua Tagovailoa|tua|tagovailoa","Chase Young","Zach Wilson","Kyle Pitts|pitts","Ahmad Gardner|sauce gardner|sauce","Travon Walker|walker","Anthony Richardson|richardson","Drake Maye|maye","Marvin Harrison Jr.|marvin harrison|mhj","Abdul Carter|carter"],
      starter: ["Leonard Fournette","Devin White","Andrew Thomas","Kayvon Thibodeaux|thibodeaux","Will Anderson Jr.|will anderson","Will Campbell"],
      film: ["Solomon Thomas","Bradley Chubb"],
      deep: ["Corey Davis","Denzel Ward","Clelin Ferrell"],
      hail: ["Jeff Okudah|okudah","Trey Lance|lance","Derek Stingley Jr.|derek stingley|stingley","Devon Witherspoon|witherspoon","Joe Alt|alt","Mason Graham|graham"]
    }
  },
  {
    id: "r1-recent", cat: "draft", diff: "easy",
    prompt: "Name a first-round pick from the 2020 to 2025 NFL Drafts (like Justin Jefferson).",
    note: "Any first-rounder from those six drafts.",
    tiers: {
      chalk: ["Joe Burrow","Justin Herbert","Tua Tagovailoa|tua","Justin Jefferson","Trevor Lawrence","Ja'Marr Chase|jamarr chase","Micah Parsons","Justin Fields","Aidan Hutchinson","Sauce Gardner|ahmad gardner","Garrett Wilson","Kenny Pickett","Bryce Young","C.J. Stroud|cj stroud","Bijan Robinson","Jahmyr Gibbs","Caleb Williams","Jayden Daniels","Drake Maye","Marvin Harrison Jr.|marvin harrison","Cam Ward","Travis Hunter","Ashton Jeanty","Abdul Carter"],
      bandwagon: ["CeeDee Lamb","Jordan Love","Chase Young","Tristan Wirfs","Brandon Aiyuk","Jerry Jeudy","Henry Ruggs","Patrick Queen","Clyde Edwards-Helaire|ceh","Zach Wilson","Trey Lance","Mac Jones","Kyle Pitts","Jaylen Waddle","DeVonta Smith","Penei Sewell","Patrick Surtain II|patrick surtain","Najee Harris","Travis Etienne","Rashawn Slater","Travon Walker","Kayvon Thibodeaux","Derek Stingley Jr.|derek stingley","Kyle Hamilton","Drake London","Chris Olave","Jameson Williams","Trent McDuffie","Tyler Linderbaum","Jordan Davis","Jahan Dotson","Anthony Richardson","Will Anderson Jr.|will anderson","Jalen Carter","Jaxon Smith-Njigba|jsn","Zay Flowers","Devon Witherspoon","Jordan Addison","Dalton Kincaid","Christian Gonzalez","Malik Nabers","Brock Bowers","Bo Nix","J.J. McCarthy|jj mccarthy","Michael Penix Jr.|michael penix","Rome Odunze","Brian Thomas Jr.|brian thomas|btj","Xavier Worthy","Quinyon Mitchell","Jared Verse","Joe Alt","Jaxson Dart","Tetairoa McMillan|t-mac","Mason Graham","Will Campbell","Tyler Warren","Colston Loveland","Emeka Egbuka","Omarion Hampton"],
      starter: ["Jeff Okudah","Andrew Thomas","Derrick Brown","Isaiah Simmons","C.J. Henderson|cj henderson","Jedrick Wills","Mekhi Becton","Javon Kinlaw","A.J. Terrell|aj terrell","Austin Jackson","Damon Arnette","Kenneth Murray","Cesar Ruiz","Jalen Reagor","Isaiah Wilson","Noah Igbinoghene","Jeff Gladney","K'Lavon Chaisson|klavon chaisson","Jaycee Horn","Alijah Vera-Tucker","Zaven Collins","Alex Leatherwood","Jaelan Phillips","Jamin Davis","Kadarius Toney","Kwity Paye","Christian Darrisaw","Gregory Rousseau|greg rousseau","Caleb Farley","Eric Stokes","Odafe Oweh|jayson oweh","Payton Turner","Greg Newsome II|greg newsome","Joe Tryon|joe tryon-shoyinka","Rashod Bateman","Ikem Ekwonu","Evan Neal","Charles Cross","Zion Johnson","Jermaine Johnson","Quay Walker","Treylon Burks","Kenyon Green","Kaiir Elam","Devonte Wyatt","Trevor Penning","Cole Strange","George Karlaftis","Lewis Cine","Daxton Hill|dax hill","Tyler Smith","Paris Johnson Jr.|paris johnson","Tyree Wilson","Darnell Wright","Peter Skoronski","Lukas Van Ness","Broderick Jones","Will McDonald IV|will mcdonald","Emmanuel Forbes","Jack Campbell","Calijah Kancey","Quentin Johnston","Deonte Banks","Mazi Smith","Anton Harrison","Myles Murphy","Bryan Bresee","Nolan Smith","Felix Anudike-Uzomah","Olu Fashanu","JC Latham|j.c. latham","Taliese Fuaga","Laiatu Latu","Byron Murphy II|byron murphy","Dallas Turner","Amarius Mims","Troy Fautanu","Chop Robinson","Terrion Arnold","Jordan Morgan","Graham Barton","Darius Robinson","Tyler Guyton","Nate Wiggins","Ricky Pearsall","Xavier Legette","Armand Membou","Kelvin Banks Jr.|kelvin banks","Mykel Williams","Tyler Booker","Kenneth Grant","Jalon Walker","Walter Nolen","Shemar Stewart","Grey Zabel","Jahdae Barron","Derrick Harmon","Matthew Golden","Donovan Jackson","James Pearce Jr.|james pearce","Malaki Starks","Tyleik Williams","Josh Conerly Jr.|josh conerly","Maxwell Hairston","Jihaad Campbell","Josh Simmons"],
      film: [],
      deep: [],
      hail: []
    }
  }
];

/* The daily rotation: day N deals entries 7N..7N+6. A prompt returns only once the
   whole list is spent. Keep the length a multiple of 7 or the tail is never dealt. */
const PROMPT_ORDER = [
  "coaches-jaguars",
  "qb-2023",
  "dolphins-qbs",
  "coaches-chargers",
  "famous-plays",
  "twelve-sb-qbs",
  "mascots",
  "oroy",
  "back-to-back",
  "qb-2020",
  "washington-qbs",
  "coaches-giants",
  "halftime",
  "never-sb",
  "sb-mvp",
  "tm-mahomes",
  "nicknames-players",
  "kickers",
  "all-decade-2010s",
  "ny-la-teams",
  "no1-non-qbs",
  "sb-never-won-qb",
  "sb-07-giants",
  "gronk-qbs",
  "jersey-5",
  "south-divs",
  "fifty-td",
  "nfl-tv",
  "sb-qb",
  "sb-80s-niners",
  "brady-backups",
  "double-mvp",
  "goat-qb-teams",
  "sb-champs-80s",
  "madden-cover",
  "def-sb-mvp",
  "99-rams",
  "mahomes-td",
  "jersey-17",
  "hundred-rush-td",
  "r1-recent",
  "coaches-steelers",
  "sb-06-colts",
  "tm-lynch",
  "sb-mvp-2020s",
  "old-names",
  "initials",
  "mvp-2010s",
  "suburb-teams",
  "24-eagles",
  "tm-dak",
  "sb-2000s-champs",
  "jersey-34",
  "five-sb-teams",
  "te-10k",
  "pats-sb-qbs",
  "07-patriots",
  "tm-wilson",
  "football-tv",
  "jersey-24",
  "hof-qb",
  "sb-2010s-champs",
  "nfl-states",
  "sb-11-giants",
  "pass-champs-2020s",
  "brady-sb-wins",
  "football-movies",
  "intl-countries",
  "lefty-qbs",
  "qb-r1-2000",
  "tm-burrow",
  "sb-25-seahawks",
  "sb-late-qb",
  "afc-teams",
  "jersey-87",
  "multi-mvp-qbs",
  "coaches-eagles",
  "17-eagles",
  "tm-obj",
  "seahawks-sb-qbs",
  "video-games",
  "fifteen-k-rec",
  "afc-north",
  "jersey-1",
  "sb-01-pats",
  "tm-cmc",
  "sb-first-pick-qbs",
  "fan-cries",
  "ap-qb-rb",
  "nfc-north",
  "sb-1990s",
  "sb-04-pats",
  "tm-megatron",
  "sb-recent-champs",
  "jersey-26",
  "four-sb-losses-team",
  "hof-wr",
  "teams",
  "sb-03-pats",
  "tm-fitz",
  "sb-host",
  "father-son",
  "sixty-k-pass",
  "qb-2020s-r1",
  "draft-hosts",
  "sb-12-ravens",
  "tm-stafford",
  "sb-2010s-losers",
  "jersey-14",
  "mannings",
  "hof-lb",
  "coaches-chiefs",
  "sb48-seahawks",
  "tm-cam",
  "sb-champs-70s",
  "nfc-west",
  "fifteen-k-rush",
  "jersey-21",
  "sb-mvp-2010s",
  "sb-14-pats",
  "tm-rodgers",
  "sb-champs-90s",
  "hard-knocks",
  "sb-never-won",
  "hof-coaches",
  "sb-three-wins",
  "sb-23-chiefs",
  "tm-bigben",
  "jersey-88",
  "two-k",
  "cat-teams",
  "qb-brothers",
  "wr-sb-mvp",
  "10-packers",
  "tm-herbert",
  "jersey-99",
  "mvp-2000s",
  "niners-sb-opps",
  "top5-recent",
  "sponsor-stadiums",
  "sb-90s-cowboys",
  "tm-henry",
  "bird-teams",
  "commissioners",
  "twenty-seasons",
  "coaches-patriots",
  "cowboys-sb-opps",
  "20-bucs",
  "tm-peyton",
  "rb-sb-mvp",
  "jersey-4",
  "nfc-teams",
  "nicknames",
  "hof-safeties",
  "sb-09-saints",
  "rec-champs-tens",
  "steelers-sb-opps",
  "lost-team",
  "brady-sb-tds",
  "snl-hosts",
  "giants-sb-opps",
  "sb-90s-broncos",
  "stadiums-old",
  "jersey-13",
  "twenty-sacks",
  "sb-qbs-2015",
  "qb-no7",
  "no1-qbs-recent",
  "tm-allen",
  "sb-18-pats",
  "afc-west",
  "nfl-actors",
  "jersey-20",
  "hof-te",
  "niners-sb-qbs",
  "sb-96-packers",
  "tm-brees",
  "broncos-sb-qbs",
  "nfl-cities",
  "rush-champs-2020s",
  "nfl-brothers",
  "coaches-cowboys",
  "sb-86-giants",
  "tm-goff",
  "conf-champs-2020s",
  "jersey-33",
  "hof-cb",
  "ap-te",
  "animal-teams",
  "sb-70s-steelers",
  "tm-lt",
  "sb-2020s",
  "penalties",
  "hundred-rec-td",
  "jersey-32",
  "stadiums-now",
  "19-chiefs",
  "tm-watt",
  "afc-champs-tens",
  "expansion",
  "formations",
  "opoy-2010s",
  "packers-sb-qbs",
  "sb-72-dolphins",
  "tm-donald",
  "sb-overtime",
  "jersey-81",
  "sb-champ-teams",
  "perfect-regular",
  "cowboys-sb-qbs",
  "21-rams",
  "tm-eli",
  "broadcasters",
  "coaches-2-sb",
  "sb-mvp-multi",
  "west-coast",
  "jersey-80",
  "sb-02-bucs",
  "tm-kelce",
  "five-hundred-td",
  "positions",
  "chiefs-sb-opps",
  "intl-cities",
  "jersey-15",
  "00-ravens",
  "tm-davante",
  "hof-rb",
  "state-teams",
  "sb-coach",
  "trophies",
  "eagles-sb-qbs",
  "tm-saquon",
  "15-broncos",
  "five-k",
  "steelers-sb-qbs",
  "jersey-10",
  "moved-teams",
  "trick-plays",
  "sb-16-pats",
  "tm-hurts",
  "dpoy",
  "rec-champs-2020s",
  "afc-champs-aughts",
  "east-divs",
  "jersey-12",
  "sb-05-steelers",
  "tm-jefferson",
  "sb-four-td",
  "coaches-ravens",
  "wrestlers",
  "region-teams",
  "four-hundred-td",
  "hof-dl",
  "sb-94-niners",
  "wr-r1-2015",
  "field-stadiums",
  "nfc-champs-aughts",
  "ap-wr",
  "qb-no9",
  "tm-tyreek",
  "sb-22-chiefs",
  "sb-qbs-2000",
  "jersey-28",
  "dwts",
  "pa-ohio-teams",
  "twelve-k-rush",
  "mahomes-sb-td",
  "mvp",
  "heisman",
  "nfc-champs-tens",
  "raiders-qbs",
  "sb-loser-teams",
  "two-sport",
  "tm-raylewis",
  "rb-r1-2010",
  "chiefs-sb-qbs",
  "85-bears",
  "jersey-22",
  "celebrations",
  "one-fifty-sacks",
  "tm-brady",
  "oroy-tens",
  "owners",
  "giants-sb-qbs",
  "browns-qbs",
  "jersey-18",
  "coaches-packers",
  "tm-lamar",
  "first-overall",
  "sb-repeat-loss",
  "jets-qbs",
  "sb-mvp-aughts",
  "roofed-stadiums",
  "scoring",
  "rush-champs-tens",
  "mvp-non-qb",
  "tm-garrett",
  "jersey-11",
  "packers-sb-opps",
  "never-won-sb",
  "lions-qbs",
  "gates-qbs",
  "sb-early-teams",
  "ap-dt",
  "rookie-1400-rec",
  "coaches-lions",
  "dpoy-aughts",
  "hof-kickers",
  "sb-clutch-fg",
  "winless",
  "ap-lb",
  "urlacher-qbs",
  "coaches-cardinals",
  "cpoy-aughts",
  "pre-sb-champs",
  "sb-home-field",
  "routes",
  "ap-cb",
  "andre-qbs",
  "ninety-nine-run",
  "coaches-titans",
  "oroy-aughts",
  "coverages",
  "hof-steelers",
  "ap-s",
  "fitz-qbs",
  "pass-champs-tens",
  "sb-mvp-80s",
  "coaches-49ers",
  "equipment",
  "hof-packers",
  "ten-k-rush",
  "ap-ol",
  "calvin-qbs",
  "sb-lose-qbs-aughts",
  "coaches-bengals",
  "run-plays",
  "hof-cowboys",
  "ap-kp",
  "wayne-qbs",
  "rush-td-25",
  "washington-sb-qbs",
  "coaches-browns",
  "officials",
  "hof-niners",
  "witten-qbs",
  "sack-champs-90s",
  "vikings-sb-qbs",
  "coaches-bucs",
  "cpoy-tens",
  "football-terms",
  "hof-bears",
  "ap-vikings-qbs",
  "qb-1k-rush",
  "rams-sb-qbs",
  "coaches-jets",
  "opoy-aughts",
  "kicks",
  "hof-giants",
  "rec-champs-aughts",
  "qb-sb-two-teams",
  "coaches-colts",
  "oroy-mvp",
  "ap-unanimous",
  "stats",
  "hof-raiders",
  "forty-k-pass",
  "sb-lose-qbs-90s",
  "coaches-texans",
  "droy-aughts",
  "sb-08-steelers",
  "hof-dolphins",
  "ap-edge",
  "sack-champs-tens",
  "sb51-scorers",
  "coaches-dolphins",
  "man-of-year",
  "nfl-twins",
  "hof-rams",
  "pre-1940-teams",
  "colts-sb-qbs",
  "coaches-seahawks",
  "pass-champs-aughts",
  "coy-2000s",
  "qb-to-wr",
  "hof-colts",
  "jersey-54",
  "wildcard-champs",
  "coaches-vikings",
  "rush-champs-aughts",
  "droy-2010s",
  "sb-washington",
  "hof-chiefs",
  "jersey-58",
  "sb-return-td",
  "coaches-bears",
  "rec-champs-90s",
  "dpoy-tens",
  "sb-mvp-70s",
  "hof-vikings",
  "jersey-92",
  "fullbacks",
  "sb-four-losses",
  "coaches-saints",
  "sack-champs-aughts",
  "sb-mvp-90s",
  "hof-eagles",
  "jersey-16",
  "coaches-panthers",
  "sb-three-td",
  "rush-champs-90s",
  "coach-sb-2-teams",
  "coaches-raiders",
  "hof-washington",
  "jersey-19",
  "rec-td-18",
  "raiders-sb-qbs",
  "coaches-bills",
  "coaches-rams",
  "pass-champs-90s",
  "hof-browns",
  "bears-qbs",
  "pass-td-champs-tens",
  "dolphins-sb-qbs",
  "coaches-washington",
  "bengals-sb-qbs",
  "coaches-falcons",
  "hof-lions",
  "jersey-84",
  "jersey-85",
  "sb-player-coach",
  "coaches-broncos",
  "sixty-ints",
  "coach-sb-0-4"
];

/* Held back from the rotation entirely — spares, and anything parked on purpose. */
const ROTATION_RESERVE = [
  "seven-td"
];

module.exports = { BANK_NAME, DEEPBALL_LAUNCH, TIERS, PROMPTS, PROMPT_ORDER, ROTATION_RESERVE };
