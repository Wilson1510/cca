// Daftar pertanyaan dan jawaban
const data = [
    {
        question: "Ayah Samuel seorang pelayan Tuhan di bawah pengawasan imam dan bersama  dengan istrinya mempersembahkan korban sembelihan tahunan. Nama ayah Samuel adalah ...",
        answer: "Elkana"
    },
    {
        question: "Setelah orang tua Samuel diberkati Eli, Tuhan mengindahkan Hana, ibunya sehingga mengandung dan melahirkan anak lagi. Maka Samuel mempunyai …. Saudara laki-laki dan … saudara Perempuan",
        answer: "Tiga dan dua"
    },
    {
        question: "Saat Tuhan memanggil Samuel sebanyak tiga kali, ia belum mengenal Tuhan dan firman Tuhan belum pernah dinyatakan kepadanya. Setelah itu, Tuhan datang dan berdiri serta memanggilnya seperti yang sudah dilakukan- Nya. Jawaban dan tanggapan Samuel terhadap panggilan Tuhan tersebut adalah",
        answer: "Berbicaralah, sebab hamba-Mu ini mendengar"
    },
    {
        question: "Setelah Tuhan memanggil Samuel sebanyak tiga kali, saat tidur di dalam Bait Suci maka ia makin mengenal-Nya. Kemudian Tuhan menampakkan diri kepadanya di",
        answer: "Silo"
    },
    {
        question: "Dalam pertempuran orang Israel dan Filistin, orang Filistin mengatur barisannya berhadapan dengan orang Israel. Ketika pertempuran menghebat, terpukullah kalah orang Israel oleh orang Filistin. Kira-kira berapa jumlah orang Israel yang tewas dalam pertempuran tersebut?",
        answer: "4000 orang"
    },
    {
        question: "Orang Filistin telah banyak menewaskan orang Israel, meski demikian mereka masih mengalami ketakutan. Sumber ketakutan mereka adalah ",
        answer: "Bunyi sorak-sorai dari orang Israel karena tabut perjanjian tiba di perkemahan"
    },
    {
        question: "Dalam peperangan orang Filistin, orang Israel terpukul kalah. Mereka melarikan diri masing-masing ke kemahnya. Yang dirampas orang Filistin dari orang Israel sampai menewaskan kedua anak Eli adalah ",
        answer: "Tabut Tuhan"
    },
    {
        question: "Orang Filistin bersepakat bahwa Tabut Allah Israel tidak boleh tinggal pada mereka, sebab tangan Allah keras melawan mereka dan melawan Dagon, allah mereka. Oleh sebab itu, mereka bersepakat memindahkan Tabut Allah dari Asdod ke ",
        answer: "Gat"
    },
    {
        question: "Setelah orang Filistin memindahkan Tabut Allah, maka tangan Tuhan mendatangkan kegemparan yang sangat besar atas kota itu sehingga tangan Tuhan menghajar orang-orang Gat, baik itu anak-anak maupun orang dewasa dengan menimbulkan",
        answer: "Borok-borok pada mereka"
    },
    {
        question: "Mengapa semua raja kota orang Filistin bersepakat untuk mengembalikan tabut Allah ke Israel?",
        answer: "Ada kegemparan maut di seluruh kota"
    },
    {
        question: "Tabut Tuhan berada di daerah orang Filistin selama",
        answer: "Tujuh bulan"
    },
    {
        question: "Berdasarkan kesepakatan para imam dan orang Filistin, mereka harus mengantar tabut Allah Israel dan membayar tebusan salah kepada Tuhan. Berapa jumlah tebusan salah itu?",
        answer: "Lima borok emas dan lima tikus emas"
    },
    {
        question: "Orang-orang Bet-Semes sedang menuai gandum di lembah. Ketika mereka mengangkat muka, maka tampaklah kepada mereka tabut itu. Apa reaksi mereka saat melihat tabut Tuhan?",
        answer: "Bersukacita"
    },
    {
        question: "Yang dipersembahkan orang Bet-Semes di Ladang Yosua sebagai korban bakaran dan korban sembelihan kepada Tuhan adalah ",
        answer: "Lembu-lembu yang menyusui"
    },
    {
        question: "Ketika bangsa Israel meminta raja, lalu Samuel menyampaikan kepada Tuhan dan menjelaskan kepada bangsa Israel hak-hak raja yang akan memerintah mereka. Apa tanggapan bangsa Israel ketika mendengarkan penjelasan Samuel, tentang segala firman Tuhan tersebut?",
        answer: "Menolak"
    },
    {
        question: "Saul merupakan keturunan bangsa Israel dari suku Benyamin. Ayahnya bernama",
        answer: "Kish bin Abiel"
    },
    {
        question: "Kata Kish kepada Saul, anaknya, 'Ambillah salah seorang bujang, bersiaplah dan pergilah mencari..'",
        answer: "Keledai keledai"
    },
    {
        question: "Saul dan bujangnya pergi menemui seorang abdi Allah untuk menanyakan petunjuk atas apa yang mereka cari. Mereka membawa .... sebagai pemberian",
        answer: "Seperempat syikal perak"
    },
    {
        question: "Rumah Kediaman Saul berada di ",
        answer: "Gibea"
    },
    {
        question: "Jumlah orang Israel yang ikut dalam barisan di Bezek untuk menolong orang Yabesh-Gilead adalah sebanyak ",
        answer: "Tiga ratus ribu"
    },
    {
        question: "Dimanakah tempat Saul dijadikan raja oleh seluruh bangsa Israel dihadapan Tuhan?",
        answer: "Gilgal"
    },
    {
        question: "Seruan Samuel kepada Tuhan dihadapan bangsa Israel saat musim menuai gandum guna menyadarkan mereka adalah agar Tuhan memberikan ",
        answer: "Guruh dan hujan"
    },
    {
        question: "Nama pendekar dari tentara orang filistin, yang tinggi badannya enam hasta sejengkal, yang berasal dari Gat adalah",
        answer: "Goliat"
    },
    {
        question: "Setelah Daud melarikan diri dari Saul, ia menemui Samuel. Kemudian pergilah mereka bersama-sama dan tinggal di",
        answer: "Nayot"
    },
    {
        question: "Daud meminta kepada Yonatan untuk membiarkannya pergi dan bersembunyi sampai lusa petang sehingga Daud tidak harus duduk makan bersama-sama dengan raja Saul. Tempat tujuan Daud untuk bersembunyi adalah di ",
        answer: " Padang "
    },
    {
        question: "Daud sampai di Nob bertemu dengan imam Ahimelekh dan meminta….. dari padanya",
        answer: "Lima roti biasa"
    },
    {
        question: "Ada seseorang Bernama Doeg, seorang Edom di Nob dan dikhususkan melayani Tuhan. Doeg adalah pegawai Saul yang bertugas sebagai pengawas atas….. Saul",
        answer: "Gembala-gembala"
    },
    {
        question: "Nabi Gad meminta kepada Daud supaya jangan tinggal di kubu gunung dan menyuruhnya pergi dan pulang kembali ke tanah",
        answer: "Yehuda"
    },
    {
        question: "Jumlah seluruh imam yang dibunuh oleh Saul di Nob adalah…. Orang",
        answer: "Delapan puluh lima"
    },
    {
        question: "Dari orang fasik timbul kefasikan. Tetapi tanganku tidak akan memukul engkau. Peribahasa ini seperti diungkapkan oleh",
        answer: "Orang tua tua"
    },
    {
        question: "Nabal mempunyai isteri bijak dan cantik, ia Bernama",
        answer: "Abigail"
    },
    {
        question: "Siapakah yang turun bersama Daud untuk pergi ke tempat perkemahan Saul di bukit Hakhila? ",
        answer: "Abisai"
    },

    {
        question: "Yang diambil Daud dari sebelah kepala Saul saat ia tidur di kemahnya adalah",
        answer: "Tombak dan kendi"
    },
    {
        question: "Kota yang diberikan Akhis kepada Daud sebagai tempat tinggalnya adalah",
        answer: "Ziklag"
    },
    {
        question: "Daud tinggal di daerah orang Filistin selama….. bulan",
        answer: "Enam belas"
    },

    {
        question: "Akhis mengangkat Daud sebagai",
        answer: "Pengawal"
    },
    {
        question: "Suatu hari Saul berbicara kepada para pegawainya: “Carilah bagiku seorang perempuan yang sanggup memanggil arwah; maka aku hendak pergi kepadanya dan meminta petunjuk kepadanya.” Di manakan seorang Perempuan yang sanggup memanggil arwah? ",
        answer: "En-dor"
    },
    {
        question: "Penyebab para panglima orang Filistin marah kepada Akhis saat hendak berperang melawan orang Israel di Yizreel adalah karena….",
        answer: "Membawa Daud dan orangnya ikut berperang "
    },
    {
        question: "Jumlah orang muda yang melarikan diri dari Daud dengan menunggang unta setelah merampas dari tanah orang Filistin dan Yehuda adalah",
        answer: "Empat ratus"
    },

    {
        question: "Mayat Saul dipakukan orang Filistin di tembok kota",
        answer: "Bet-sean"
    },

    {
        question: "Berapa lama Eli memerintah sebagai hakim atas orang Israel? ",
        answer: "40 tahun"
    },
    {
        question: "Siapakah yang dipanggil berkumpul untuk memindahkan tabut Allah Israel?",
        answer: "Semua raja kota orang filistin"
    },

    {
        question: "Apakah nama suku yang menurunkan tabut Tuhan dengan peti benda-benda emas dari kereta di daerah Bet-Semes? ",
        answer: "Suku lewi"
    },

    {
        question: "Apa yang diminta Samuel kepada orang-orang Israel sebelum melawan orang Filistin di Mizpa? ",
        answer: "Menjauhkan diri dari para Baal dan Asytoret serta beribadah hanya kepada Tuhan"
    },
    {
        question: "Bagaimana cara Tuhan menolong orang Israel melawan orang Filistin di Mizpa? ",
        answer: "Tuhan mengguntur dengan bunyi yang hebat ke atas orang Filistin dan mengacaukan mereka sehingga mereka terpukul kalah oleh orang Israel"
    },


    {
        question: "Siapakah hakim yang diangkat Samuel setelah ia menjadi tua di Bersyeba?",
        answer: "Anaknya Yoel dan Abia "
    },
    {
        question: "Ke mana Samuel membawa Saul dan bujangnya untuk makan bersama para undangan yang kira-kira tiga puluh orang banyaknya? ",
        answer: "Pendopo"
    },
    {
        question: "Apa itu Gibea Allah? ",
        answer: "Tempat kedudukan pasukan orang "
    },
    {
        question: "Apa syarat perjanjian yang akan dilakukan antara Nahas, orang Amon dan orang Yabesh?",
        answer: "Mencungkil mata kanan "
    },
    {
        question: "Siapakah nama-nama utusan Tuhan yang datang untuk melepaskan bangsa Israel dari tangan musuh disekeliling mereka?",
        answer: "Yerubaal, Barak, Yefta, dan Samuel"
    },
    {
        question: "Siapakah nama anak Saul yang memukul kalah pasukan pendudukan orang Filistin yang ada di Geba? ",
        answer: "Yonatan "
    },
    {
        question: "Mengapa Samuel langsung menegur Saul setelah ia bertemu dengannya? ",
        answer: "Karena Saul tidak mengikuti perintah Tuhan "
    },
    {
        question: "Berapa jumlah rakyat yang tinggal bersama Saul di Migron? ",
        answer: "Kira-kira enam ratus orang "
    },
    {
        question: "Siapakah nama anak perempuan Saul yang termuda dan akan diangkat menjadi isteri Daud?  ",
        answer: "Mikhal"
    },

    {
        question: "Siapa yang menghalang-halangi orang Israel keluar dari Mesir? ",
        answer: "Orang Amalek "
    },
    {
        question: "Kepada siapakah Saul menyuruh mereka menjauh dari orang Amalek? ",
        answer: "Orang Keni "
    },
    {
        question: "Apa saja yang diberikan Yonatan kepada Daud? ",
        answer: "Jubah, baju perang, pedang, panah "
    },
    {
        question: "Kepada siapakah Saul mengatakan bahwa Daud harus dibunuh? ",
        answer: "Yonatan dan semua pegawainya "
    },
    {
        question: "Apa tanda yang dibuat Yonatan kepada Daud sebagai perjanjian untuk menyelamatkannya dalam persembunyian? ",
        answer: "Memanahkan tiga anak panah ke samping batu "
    },
    {
        question: "Dari Nob, Daud lari dari Saul dan sampailah ia kepada Akhis. Siapakah Akhis itu? ",
        answer: "Raja kota Gat "
    },
    {
        question: "Ke gua manakah Daud melarikan diri dan saudara-saudaranya ingin menjumpainya? ",
        answer: "Gua Adulam "
    },
    {
        question: "Kepada raja siapakah Daud meninggalkan ayah dan ibunya selama ia berada di kubu gunung? ",
        answer: "Raja negeri Moab "
    },
    {
        question: "Berapa banyak orang yang dibawa Daud keluar dari Kehila? ",
        answer: "Kira-kira enam ratus orang "
    },
    {
        question: "Apa sebutan nama dari gunung batu di padang gurun Maon? ",
        answer: "Gunung Batu Keluputan "
    },
    {
        question: "Apa yang dilakukan Daud terhadap Saul di Gua saat membuang hajat? ",
        answer: "Memotong punca jubah Saul "
    },
    {
        question: "Apa sumpah yang diminta Saul kepada Daud? ",
        answer: "Tidak akan melenyapkan keturunan Saul dan tidak menghapuskan Namanya dari kaum keluarganya  "
    },
    {
        question: "Bagaimana Nabal meninggal dunia? ",
        answer: "Kira-kira sepuluh hari sesudah isterinya menceritakan perkara itu, Tuhan memukul Nabal sehingga mati "
    },
    {
        question: "Mengapa Akhis mempercayai Daud? ",
        answer: "Karena ia berpikir bahwa Daud telah dibenci diantara orang Israel "
    },
    {
        question: "Siapakah yang diminta Saul untuk menikamnya dengan pedang? ",
        answer: "Pembawa senjatanya "
    },
    {
        question: "Dimana tempat tulang-tulang Saul dikuburkan? ",
        answer: "Di bawah pohon tamariska di Yabesh "
    },
    {
        question: "Adapun Samuel menjadi…….di hadapan Tuhan; ia masih anak-anak, yang tubuhnya berlilitkan baju efod dari…..lenan. Setiap tahun ibunya membuatkan dia…..dan membawa jubah itu kepadanya, apabila ia bersama-sama suaminya pergi mempersembahkan…..tahunan  ",
        answer: "- Pelayan, Kain ,Jubah kecil, Korban sembelihan "
    },
    {
        question: "Sebab di seluruh kota itu ada……maut;…….Allah menekan orang-orang di sana dengan…….",
        answer: "- Kegemparan, Tangan, Sangat berat"
    },
    {
        question: "Kota-kota yang diambil orang Filistin dari pada Israel, kembali pula kepada Israel, mulai dari……sampai….. ; dan orang israel merebut daerah sekitarnya dari tangan orang Filistin. Antara orang Israel dan orang…….ada damai. ",
        answer: "- Ekron, Gat, Amori "
    },
    {
        question: "Berkatalah seluruh bangsa itu kepada Samuel: “…..untuk hamba-hambamu ini kepada Tuhan, Allahmu, supaya jangan kami……., sebab dengan meminta raja bagi kami, kami menambah……kami dengan kejahatan ini”. ",
        answer: "Berdoalah, Mati, Dosa"
    },
    {
        question: "Dan berkatalah Samuel kepada bangsa itu: “…….; memang kamu telah melakukan segala kejahatan ini, tetapi janganlah berhenti mengikuti……, melainkan beribadahlah kepada Tuhan dengan segenap…….mu”. ",
        answer: "Jangan takut, Tuhan, Hati"
    },

    {
        question: "Lalu Saul memanggil rakyat berkumpul dan memeriksa barisan mereka di…….: ada…….orang pasukan berjalan kaki dan…….. orang Yehuda.",
        answer: "Telaim, Dua ratus ribu, sepuluh ribu"
    },

    {
        question: "Jika demikian, tunjukkanlah…….kepada hambamu, sebab engkau telah mengikat…….di hadapan Tuhan dengan……..ini. ",
        answer: "Kesetiaanmu, perjanjian, hambamu"
    },

    {
        question: "Lalu bertanyalah Daud kepada…….: “Apakah aku akan pergi……..orang Filistin itu? “Jawab Tuhan kepada Daud: “Pergilah, kalahkanlah orang Filistin itu dan……Kehila.” ",
        answer: "Tuhan, Mengalahkan, Selamatkanlah"
    },
    {
        question: "Ketika Saul dengan orang-orangnya pergi……Daud, diberitahukanlah hal itu kepada Daud, lalu pergilah ia ke gunung batu dan tinggal di padang gurun Maon. Saul…….hal itu, lalu……Daud di padang gurun Maon. ",
        answer: "Mencari, mendengar, mengejar"
    },
    {
        question: "Ketika itu ada seorang laki-laki di Maon, yang mempunyai Perusahaan di…..orang itu sangat kaya; ia mempunyai…….ekor domba dan…….ekor kambing.",
        answer: "Karmel, Tiga ribu, seribu"
    },
    {
        question: "Maka Daud dan orang-orangnya bergerak maju dan menyerbu orang Gesur, orang……….dan orang………; sebab orang-orang inilah penduduk negeri itu yang membentang dari Telam ke arah…….sampai tanah Mesir. ",
        answer: "Girzi, amalek, syur"
    },
    {
        question: "Maka Ketika raja-raja kota orang Filistin berjalan lewat dalam pasukan-pasukan……..dan……, dan Ketika juga Daud beserta orang-orangnya…….lewat di belakangnya bersama-sama dengan Akhis. ",
        answer: "Seratus, seribu, berjalan"
    },


];
const data1 = [
    {
        question: "Nama seorang imam dari rombongan Abia adalah ",
        answer:"Zakharia"
    },
    {
        question: "Semua anak laki-laki sulung harus dikuduskan bagi Allah dan mempersembahkan korban menurut yang di firmankan dalam hukum Tuhan yaitu sepasang burung ",
        answer:"Tekukur atau 2 ekor anak burung merpati"
    },{
        question: "Ketika Yohanes datang ke seluruh daerah Yordan dan menyerukan : “Bertobatlah dan ……",
        answer:"Berilah dirimu di baptis dan Allah akan mengampuni dosamu.”"
    },{
        question: "Seorang Perempuan yang disembuhkan Yesus dari sakit demam menurut Lukas 4:38-41 adalah ibu mertua …..",
        answer:"Simon"
    },
    {
        question: "Yesus mengulurkan tangannya, menjamah orang itu,dan berkata : “Aku mau, jadilah engkau tahir.” Orang yang disembuhkan Yesus itu adalah orang ……",
        answer:"Kusta"
    },
    {
        question: "Yesus memandang murid-muridnya dan berkata : “Berbahagialah, hai kamu yang miskin,karena kamulah yang ……",
        answer:"Empunya Kerajaan Allah"
    },
    {
        question: "Ketika Yesus makan di rumah seorang Farisi, maka datanglah seorang Perempuan pendosa ke rumah itu untuk bertemu Yesus dengan membawa buli-buli ……",
        answer:"Pualam berisi minyak Wangi"
    },
    {
        question: "Setelah Yesus meredakan angin badai yang menerpa perahu mereka akhirnya Yesus dan murid-muridnya mendarat di tanah orang Gerasa yang terletak di Seberang ……",
        answer:"Galilea"
    },
    {
        question: "Dikisahkan bahwa anak Perempuan kepala rumah ibadah menderita sakit pendarahan. Ia menderita penyakit itu dan tak seorang pun yang bisa menyembuhkannnya. Berapa lama anak Perempuan itu menderita pendarahan?",
        answer:"12 tahun"
    },
    {
        question: "Yesus memanggil kedua belas muridnya, lalu memberikan tenaga dan kuasa kepada mereka untuk …..",
        answer:"Menguasai setan-setan dan menyembuhkan penyakit-penyakit"
    },
    {
        question: "Tiga rasul yang diajak Yesus naik ketas gunung untuk berdoa adalah …..",
        answer:"Petrus, Yohanes, dan Yakobus"
    },
    {
        question: "Ada seseorang datang mencobai Yesus, katanya : “ Guru, apa yang harus kuperbuat untuk memperoleh hidup yang kekal?” Perkataan ini di ucapkan oleh …..",
        answer:"Ahli Taurat"
    },
    {
        question: "Tuhan, ajarilah kami berdoa! Ini merupakan permintaan dari seorang murid …..",
        answer:"Yesus"
    },
    {
        question: "Suatu hari Yesus mengusir dari seorang suatu setan yang membisukan. Melihat peristiwa itu, ada di antara mereka yang mengatakan bahwa Yesus mengusir setan dengan kuasa …..",
        answer:"Beelzebul"
    },
    {
        question: "Orang-orang Niniwe bertobat pada waktu mereka mendengarkan pemberitaan ….",
        answer:"Yunus"
    },
    {
        question: "Dalam Lukas 13:4 Yesus mengatakan bahwa kedelapan belas orang yang mati ditimpa Menara, lebih besar kesalahannya dari pada kesalahan semua orang lain yang diam di Yerusalem. Menara itu terletak dekat…..",
        answer:"Siloam"
    },
    {
        question: "Dalam injil Lukas 16:16 Yesus menyatakan bahwa Hukum Taurat dan Kitab para nabi berlaku sampai kepada zaman",
        answer:"Yohanes"
    },
    {
        question: "Seorang pengemis yang badanya penuh dengan borok, berbaring dekat pintu rumah orang kaya Bernama",
        answer:"Lazarus"
    },
    {
        question: "“ Bahkan jikalau ia berbuat dosa terhadap engkau tujuh kali sehari dam tujuh kali ia Kembali kepadamu dan berkata. Aku menyesal maka engkau harus…….",
        answer:"Mengampuni dia"
    },
    {
        question: "Ketika Yesus memasuki suatu desa datanglah sepuluh orang kusta menemui Dia. Mereka berdiri agak jauh dan berteriak, “Yesus,……",
        answer:"Guru, kasihanilah kami!”"
    },
    {
        question: "Ada kesepuluh orang kusta, Ketika melihat bahwa ia telah sembuh, Kembali memuliakan Allah dengan suara nyarin, lalu tersungkur di depan kaki Yesus dan mengucap Syukur kepada-Nya ",
        answer:"Samaria"
    },
    {
        question: "Kepada beberapa orang yang menganggap dirinya benar dan memandang rendah orang lain, Yesus mengutarakan perumpamaan tentang dua orang yang pergi ke Bait Allah untk berdoa. Dua orang itu adalah orang…..",
        answer:"Farisi dan pemungut cukai"
    },
    {
        question: "Ketika Yesus hamper tiba di Yerikho, ada seorang buta yang duduk di pinggir jalan dan mengemis, Ia mendengar orang banyak lewat dan dengan suara nyaring berseru “ Yesus, ……….”",
        answer:"Anak Daud kasihanilah aku!”"
    },
    {
        question: "Zakheus berlari mendahului orang banyak, lalu memanjat sebatang pohon untuk melihat Yesus, yang akan lewat di situ. Apa nama pohon itu ?",
        answer:"Pohon ara"
    },
    {
        question: "Yesus menyuruh kedua orang murid-Nya ke kampung yang di depan mereka Ketika mereka telah dekat Betfage dan Betani. Betfage dan Betani terletak di gunung yang bernama bukit ……",
        answer:"Zaitun"
    },
    {
        question: "Orang yang tidak mengakui adanya kebangkitan adalah orang…",
        answer:"Saduki"
    },
    {
        question: "Tentang runtuhnya Yerusalem Yesus mengatakan bahwa banyak orang melarikan diri ke pegunungan, yang berada di dalam kota harus mengungsi, dan yang berada di pedusunan jangan masuk ke dalam kota. Hal itu terjadi di daerah…..",
        answer:"Yudea"
    },
    {
        question: "Yesus mengajar di Bait Allah pada siang hari dan pada malam hari ia keluar dan bermalam di gunuung yang Bernama Bukit ",
        answer:"Zaitun"
    },
    {
        question: "Yesus menyuruh dua orang murid untuk persiapkan perjamuan Paskah supaya mereka bisa makan Bersama. Dua orang murid tersebut adalah……",
        answer:"Petrus dan Yohanes "
    },
    {
        question: "Ada seseorang melihat Petrus duduk  dekat api dan mengamat-amatinya, lalu berkata “ Juga orang ini bersama-sama  dengan Dia.” Ini merupakan perkataan dari  dari seorang hamba………",
        answer:"Perempuan"
    },
    {
        question: "Ketika Yesus diadili, kepada-Nya diajukan pertanyaan “ Engkaukah raja orang Yahudi?”  ini merupakan pertanyaan dari",
        answer:"Pilatus"
    },
    {
        question: "Seorang anggota Majelis besar yang baik lagi bener, pergi menghadap Pilatus dan meminta mayat Yesus untuk dikuburkan. Orang ini bernama ……..",
        answer:"Yusuf dari Arimatea "
    },
    {
        question: "Seorang murid yang pergi ke kubur dan hanya melihat kain kafan saja lalu ia pergi, dan bertanya-tanya dalam hatinya apa yang kiranya telah terjadi. Murid itu adalah……..",
        answer:"Petrus"
    },
    {
        question: "Diluar kota manakah Yesus mengangkat tangan-Nya dan memberkati  murid-murid sebelum Ia berpisah dari mereka dan terangkat ke surga ………..?",
        answer:"Betania"
    },
    {
        question: "Saat Yesus terangkat ke surga para rasul sujud menyembah kepada-Nya dengan sangat bersukacita.  Lalu mereka pulang ke…..",
        answer:"Yerusalem"
    },
    {
        question: "Kaisar yang mengeluarkan perintah, menyuruh mendaftarkan semua orang di seluruh dunia yaitu…….",
        answer:"Kaisar Agustus"
    },
    {
        question: "Yang menjadi walI negeri di Siria pada saat pendaftaran pertama kali diadakan bagi semua warga di dunia yaitu……",
        answer:"Kirenius "
    },
    {
        question: "Seorang yang benar dan saleh yang menantikan penghiburan bagi israel dan dinyatakan bahwa ia tidak akan mati sebelum ia meliahat Mesias yaitu…",
        answer:"Simeon "
    },
    {
        question: "Seorang nabi Perempuan, anak Fanuel dari suku Asye yang berada di bait Allah Ketika Yesus dipersembahkan adalah…… ",
        answer:"Hana"
    },
    {
        question: "Yesus memulai pewartaan-Nya Ketika  ia berumur……",
        answer:"30 tahun"
    },
    {
        question: "Setiap  tahun orang tua Yesus merayakan hari raya Paskah di….",
        answer:"Yerusalem"
    },
    {
        question: "Tempat Yesus dibesarkan dan memulai pelayanan-Nya di……..",
        answer:"Nazaret "
    },
    {
        question: "Nabi Elia diutus Tuhan kepada seorang perempuan janda  di Sarfat, di tanah ….. ",
        answer:"Sidon "
    },
    {
        question: "Yesus melihat seorang pemungut cukai, yang sedang duduk di rumah cukai, pemungut cukai itu Bernama ……",
        answer:"Lewi "
    },
    {
        question: "“ Tuan, janganlah bersusah-susah, sebab aku tidak layak menerima Tuan di dalam rumahku, tetapi katakan saja sepatah kata, maka hambaku itu akan sembuh. Ini merupakan perkataan dari seorang …..",
        answer:"Perwira "
    },
    {
        question: "Yesus membangkitkan seorang anak muda yang sudah meninggal anak dari seorang janda  di dekat gerbang kota…….",
        answer:"Nain "
    },
    {
        question: "Nama seorang Farisi yang mengundang Yesus makan di rumahnya yaitu…",
        answer:"Simon "
    },
    {
        question: "Benih dalam perumpamaan tentang penabur berarti….",
        answer:"Firman Allah"
    },
    {
        question: "Ada seorang laki-laki yang dirasuki oleh banyak setan menurut Lukas 8:27-30. Nama lain dari Kumpulan setan tersebut ……",
        answer:"Legion "
    },
    {
        question: "Nama seorang kepala rumah ibadah yang memohon kepada Yesus untuk dating ke rumahnya menyembuhkan anak Perempuan adalah…..",
        answer:"Yairus "
    },
    {
        question: "Setelah para rasul Kembali melaksanankan tugas perutusan, mereka menceritakan kepada Yesus apa yang telah mereka kerjakan. Lalu Yesus membawa mereka dan menyingkir ke sebuah kota yang bernama..…",
        answer:"Betsaida "
    },
    {
        question: "Dalam perjalanan kemanakah kisah seorang yang di rampok habis-habisan, dipukul sampai setengah mati dan dibiarkan dipinggir jalan ?",
        answer:"Yerikho "
    },
    {
        question: "Seorang Perempuan yang duduk dekat kaki Tuhan dan terus mendengarkan perkataan Yesus yaitu …..",
        answer:"Maria "
    },
    {
        question: "Berapakali Yesus mengatakan “celakalah kamu” orang-orang farisi dan ahli-ahli taurat dalam Luk 11:42-57 ?",
        answer:"Enam kali "
    },
    {
        question: "Hari dimana orang harus menyembelih domba Paskah. Disebut hari raya……",
        answer:"Roti tidak beragi "
    },
    {
        question: "Pada saat sidang para tua-tua bangsa Yahudi dan imam-imam kepala dan ahli-ahli taurat, mereka menghadapkan Yesus ke ……",
        answer:"Mahkamah agama"
    },
    {
        question: "Tempat Dimana Yesus disalibkan Bernama tengkorak. Nama lain dari tengkorak adalah……",
        answer:"Golgota / kalvari"
    },
    {
        question: "Siapakah yang berkata “ sungguh orang ini adalah orang benar!” pada peristiwa Yesus wafat ?",
        answer:"Kepala pasukan "
    },
    {
        question: "Setelah Yesus bangkit, ada dua orang murid-Nya pergi ke sebuah kampung ……",
        answer:"Emaus "
    },
    {
        question: "“ Adakah engkau satu-satunya orang asing di Yerusalem, yang tidak tahu apa yang terjadi di situ pada hari-hari belakangan ini “Ini merupakan pertanyaan dari  ….",
        answer:"Kleopas"
    },
    {
        question: "Lengkapilah kalimat berikut ini : Simeon menyambut anak itu dan menantangnya sambil….., katanya “ Sekarang, Tuhan biarkanlah hamba-Mu ini pergi dalam……, sesuai dengan firman-Mu, sebab mataku telah…. Yang dari pada-Mu, yang telah Engkau sediakan di hadapan segala bangsa, yaitu terang yang menjadi pernyataan bagi… dan menjadi…., israel”",
        answer:"Memuji Allah, Damai sejahtera, melihat keselamatan, bangsa-bangsa lain, kemuliaan bagi umat-Mu"
    },
    {
        question: "Lengkapilah kalimat berikut ini : Di dalam rumah ibadah itu ada seorang yang… dan ia berteriak…: “Hai Engkau…, apa urusan-Mu dengan kami? Engkau dating hendak…? Aku tahu siapa Engkau: Yang….’’",
        answer:"Kerasukan setan, Dengan suara keras ,Yesus orang Nazareth , Membinasakan kami ,Kudus dari Allah"
    },
    {
        question: "Kemudiandari pada Tuhan menunjuk … yang lain lalu mengutus… mendahuluhi-Nya ke setiap kota dan tempat yang hendak dikunjungi_nya. Kata_Nya kepada mereka: “…, tetapi pekerja sedikit. Karena itu mintalah kepada Tuhan yang empunya tuaian, supaya ia….. untuk tuaian itu. Pergilah, sesungguhnya ….. seperti anak domba ke Tengah-tengah serigala.",
        answer:"	Tujuh puluh murid, Mereka berdua-dua, Tuaian memang banyak ,Mengirimkan pekerja-pekerja, Aku mengutus kamu"
    },
    {
        question: "Matamu adalah  ….. jika matamu baik …, tetapi jika matamu jahat,… Karena itu perhatikanlah supaya terang yang ada padamu… Jika seluruh tubuhmu terang dan tidak ada bagian yang gelap, maka seleuruhnya akan terang, sama seperti apabila… dengan cahayanya.’’",
        answer:"Pelita tubuhmu, Teranglah seluruh tubuhmu, Gelaplah tubuhmu , Jangan menjadi kegelapan, Pelita menerangi engkau"
    },
    {
        question: "Yesus tiba-tiba …. Mereka dan berkata kepada mereka : “…!” mereka terkejut dan takut dan menyangka bahwa … Akan tetapi ia berkata kepada mereka.” …. Dan apa sebabnya timbul keraguan-raguan…. Kamu ?",
        answer:"Berdiri di tengah-tengah , Damai Sejahtera bagi kamu, Mereka melihat hantu, Mengapa kamu terkejut, Di dalam hati"
    },
    {
        question: "Apa jawab Zakaria ketika malaikat mengatakan bahwa ia akan mempunyai seorang anak ?",
        answer:"Bagaimanakah aku tahu bahwa hal itu akan terjadi? Sebab aku sudah tua dan istriku sudah lanjut umurnnya ?"
    },
    {
        question: "Apa yang terjadi Ketika Elizabeth mendengar Salam Maria ?",
        answer:"Melonjaklah anak yang didalam rahim Elizabeth, Dan ia pun dipenuhi dengan ruh kudus"
    },
    {
        question: "Apa jawab Elizabeth Ketika Maria memberi salam kepadanya ?",
        answer:"Diberkatilah engkau diantara semua Perempuan dan diberkatilah buah Rahimmu. Siapaka aku ini sampai ibu Tuhanku dating mengunjungi aku? Sesungguhnya Ketika salammu sampai ketelingaku, anak dalam rahimmku melunjak kegirangan "
    },
    {
        question: "Apa kata Yesus Ketika ibunya bertanya :” Naka, mengapa Engkau  berbuat kami cemas mencari engkau?”",
        answer:"Jawab Yesus kepada mereka “ Mengapa kamu mencari Aku? Tidakkah kamu tahu, bahwa Aku harus berada di dalam rumah Bapa-Ku ?’’"
    },
    {
        question: "Apa jawab Yesus Ketika iblis berkata kepada-Nya : ‘’ Segala kuasa dan kemuliaan duniawi ini akan kuberikan kepada-Mu, jikalau Engkau mau menyembah aku?’’",
        answer:"Ada tertulis : Engkau harus menyembah Tuhan, Allahmu dan hanya kepada Dia sajalah engkau berbakti!"
    },
    {
        question: "Pada zaman nabi Elia banyak orang kusta di Israel. Siapa orang kusta yang ditahirkan oleh nabi Elisa?",
        answer:"Naaman, orang siria"
    },
    {
        question: "Mengapa orang-orang di Kepernaun takjub kepada Yesus ?",
        answer:"Karena mereka mendengar pengajaran atau perkataan Yesus penuh kuasa"
    },
    {
        question: "Apa kata Yesus pada saat menghardik orang yang kerasukan setan dalam kisah Lukas?’’",
        answer:"“ Diam, keluarlah dari padanya!’’"
    },
    {
        question: "Apa yang terjadi setelah Simon menebarkan jala Ketika Yesus menyuruhnya",
        answer:"Mereka menangkap sejumlah besar ikan, sehingga jala mereka mulai koyak"
    },
    {
        question: "Sebutkan 12 rasul Yesus menurut Injil Lukas ",
        answer:"Simon petrus, Andreas saudara simon, Yakobus, Yohanes, Filipus , Bartolomeus, Matius, Thomas, Yakobus anak Alfeus, Simon dari Zelot, Yudas anak Yakobus dan Yudas Iskariot yang kemudian menjadi pengkhianat"
    },
    {
        question: "Setelah Yesus berdoa dan memilih 12 rasul-Nya, ia turun dengan mereka dan berhenti pada suatu tempat yang datar: disitu berkumpul sejumlah besar dari murid-muridnya dan juga banyak orang lain yang datang. Dari mana sajakah orang-orang itu datang ?",
        answer:"Orang-orang itu datang dari seluruh Yudea dan dari Yeusalem dan dari daerah Pantai Tirus dan Sidon"
    },
    {
        question: "Apa yang dilakukan Yesus ketika melihat seorang janda yang kehilangan seorang anak yang msih muda meninggal Ketika ia dan para rasul ma uke kota Nain? ",
        answer:"Yesus merasa tergerak hati-Nya oleh belas kasihan dan membangkitkan anak muda itu"
    },
    {
        question: "Apa kata Yesus kepada Perempuan pendosa yang telah meminyakinya dengan minyak wangi ?",
        answer:"“ Dosa mu telah diampuni dan Imanmu telah menyelamatkan engkau, pergilah dengan selamat!”"
    },
    {
        question: "Untuk apa Yesus berjalan berkeliling dari kota ke kota dan dari desa ke desa?",
        answer:"Memberitakan Injil Kerajaan Allah "
    },
    {
        question: "Apa perkataan Yesus kepada Perempuan yang sembuh dari pendarahan selama 12 tahun, yang yakinasal aku menjamah jumbai jubah-Nya pasti saya sembuh ?",
        answer:"“ Hai anak-Ku imanmu telah menyelamatkan engkau, pergilah dengan selamat!”"
    },
    {
        question: "Untuk apa Yesus mengutus kedua belas murid-Nya",
        answer:"Untuk memberitakan Kerajaan Allah dan menyembuhkan orang"
    },
    {
        question: "Siapa yang mengatakan kepada Yesus “ Tuhan, apakh engkau mau, supaya kami menyuruh api turun dari langit untuk membinasakan mereka (orang Samaria)?",
        answer:"Yakobus dan Yohanes "
    },
    {
        question: "Apa kata Yesus Ketika Perempuan berkata kepada-Nya “ Berbahagialah ibu yang telah mengandung dan yang telah menyusui Engkau.”",
        answer:"“ yang berbahagia ialah mereka yang mendengarkan firman Allah dan yang memeliharanya"
    },
    {
        question: "Mengapa kepala rumah ibadat gusar kepada Yesus dalam kisah Lukas 13:11-14 ?",
        answer:"Karena Yesus menyembuhkan orang pada hari sabat"
    },
    {
        question: "Apa kata Yesus Ketika 10 orang kusta datang dan berseru kepada-Nya memohon untuk disembuhkan ?",
        answer:"‘’ Pergilah, perhatikanlah dirimu kepada imam-imam”"
    },
    {
        question: "Apa yang dilakukan para murid Yesus ketika melihat banyak orang membawa anak-anak kepada Yesus ",
        answer:"Mereka memarahi orang-orang itu"
    },
    {
        question: "Apa kata Yesus kepada Zakheus Ketika ia melihaat Zakheus di atas pohon ?",
        answer:"“ Zakheus, segeralah turun, sebab hari ini Aku harus menumpang di rumahmu"
    },
    {
        question: "Apa perkataan Yesus kepada para murid-Nya setelah mereka sudah sampai di bukit Zaitun ?",
        answer:"‘’ Berdoalah supaya kamu jangan jatuh ke dalam pencobaan”"
    },
    {
        question: "Apa isi doa Yesus Ketika di taman Getsemani ?",
        answer:"“Ya Bapa-Ku, jikalau Engkau mau, ambilah cawan ini dari pada-Ku, tetapi bukanlah kehendak-Ku, melainkan kehendakMulah yang terjadi”"
    },
    {
        question: "Apa kata Yesus Ketika Yudas datang ke taman Zaitun Bersama rombongan dan mencium Yesus?",
        answer:"“ Hai Yudas engkau menyerahkan Anak Manusia dengan ciuman?”"
    },
    {
        question: "Apa jawab Yesus Ketika para tua-tua bangsa Yahudi, imam-imam kepala dan ahli-ahli taurat berkata : Kalau begitu Engkau ini Anak Allah ?",
        answer:"Yesus menjawab : “Kamu sendiri mengatakan, bahwa Akulah anak Allah”"
    },
    {
        question: "Apa yang dilakukan seorang pemungut cukai saat berdoa di bait Allah?",
        answer:"Dia berdiri jauh-jauh, bahkan ia tidak berani menengadah ke langit, melainkan ia memukul diri dan berkata : “Ya Allah, kasihanilah aku orang berdosa ini”."
    },
    {
        question: "Mengapa Ketika melihat Yesus, Herodes sangat girang?",
        answer:"Karena sudah lama ia ingin melihat Yesus, karena ia sering mendengar tentang dia, lagipula ia mengharapkan melihat bagaimana Yesus mengadakan suatu tanda."
    },
    {
        question: "Apa yang terjadi dengan Yesus Ketika berdoa di atas gunung saat Ia mengajak 3 orang rasulnya?",
        answer:"Wajahnya berubah dan pakaiannya menjadi warna putih berkilau-kilauan"
    },
    {
        question: "Apa reaksi orang Samaria, Ketika ia melihat orang yang jatuh di tangan penyamun dan keadaannya yang sedang sekarat itu?",
        answer:"Hatinya tergerak oleh belas kasih"
    }
]
let currentQuestionIndex = -1;

// Fungsi untuk menampilkan pertanyaan baru secara acak
function samuel() {
    // Memilih pertanyaan secara acak
    currentQuestionIndex = Math.floor(Math.random() * data.length);
    document.getElementById("keterangan").innerHTML = "samuel"
    // Menampilkan pertanyaan
    document.getElementById("question").innerHTML = data[currentQuestionIndex].question;
    
    // Menyembunyikan jawaban jika sebelumnya sudah ditampilkan
    document.getElementById("answer").style.display = "none";
}
function lukas(){
    currentQuestionIndex = Math.floor(Math.random() * data1.length);
    document.getElementById("keterangan").innerHTML = "lukas"
    // Menampilkan pertanyaan
    document.getElementById("question").innerHTML = data1[currentQuestionIndex].question;
    
    // Menyembunyikan jawaban jika sebelumnya sudah ditampilkan
    document.getElementById("answer").style.display = "none";
}
function urutsamuel(){
    currentQuestionIndex = currentQuestionIndex + 1
    document.getElementById("keterangan").innerHTML = currentQuestionIndex + " samuel"
    // Menampilkan pertanyaan
    document.getElementById("question").innerHTML = data[currentQuestionIndex].question;
    
    // Menyembunyikan jawaban jika sebelumnya sudah ditampilkan
    document.getElementById("answer").style.display = "none";
}
function urutlukas(){
    currentQuestionIndex = currentQuestionIndex + 1
    document.getElementById("keterangan").innerHTML = currentQuestionIndex + " lukas"
    // Menampilkan pertanyaan
    document.getElementById("question").innerHTML = data1[currentQuestionIndex].question;
    
    // Menyembunyikan jawaban jika sebelumnya sudah ditampilkan
    document.getElementById("answer").style.display = "none";
}
// Fungsi untuk menampilkan jawaban dari pertanyaan saat ini
function jawabsamuel() {
    if (currentQuestionIndex === -1) {
        alert("Silakan pilih pertanyaan terlebih dahulu.");
    } else {
        document.getElementById("answer").style.display = "block";
        document.getElementById("answer").innerHTML = data[currentQuestionIndex].answer;
    }
}
function jawablukas() {
    if (currentQuestionIndex === -1) {
        alert("Silakan pilih pertanyaan terlebih dahulu.");
    } else {
        document.getElementById("answer").style.display = "block";
        document.getElementById("answer").innerHTML = data1[currentQuestionIndex].answer;
    }
}