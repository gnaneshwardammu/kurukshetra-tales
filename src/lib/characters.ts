export interface Character {
  name: string;
  description: string;
  src: string;
}

export const characters: Character[] = [
  {
    name: "Krishna",
    description: `Krishna, incarnation of Lord Vishnu, son of Vasudev and Devaki.\nRaised in Gokul by Yashoda and Nanda.\nMaster strategist, philosopher, and Arjuna’s charioteer.\nGuided the Pandavas and delivered the Bhagavad Gita.\nOrchestrated key events in the Mahabharata.\nHis wisdom, compassion, and playfulness are legendary.\nHis teachings emphasize dharma, devotion, and righteousness.`,
    src: "/krishna.jpg",
  },
  {
    name: "Bhishma",
    description: `Bhishma, originally Devavrata, son of Shantanu and Ganga.\nTook a vow of celibacy for his father’s happiness.\nGrandsire and patriarch of the Kuru dynasty.\nPeerless warrior and wise statesman.\nFought for the Kauravas, bound by his oath.\nInvincible until Shikandi’s intervention.\nRemembered for sacrifice, loyalty, and righteousness.`,
    src: "/bhishma.jpg",
  },
  {
    name: "Dronacharya",
    description: `Drona, or Dronacharya, was the royal teacher of the Kauravas and Pandavas.\nSon of sage Bharadwaja, master of military arts.\nTrained all princes in archery and warfare.\nPartial to Arjuna, recognizing his talent.\nFought for the Kauravas, became commander after Bhishma.\nKilled through a strategic deception involving Ashwatthama.\nRemembered as a great teacher, warrior, and tactician.`,
    src: "/drona.jpg",
  },
  {
    name: "Pandu",
    description: `Pandu was the king of Hastinapura and father of the Pandavas.\nSon of Ambalika and Vyasa.\nCursed to die if he approached his wives intimately.\nRetired to the forest, sons born by divine intervention.\nA just and capable ruler before abdication.\nHis death led to the Pandavas’ early struggles.\nRemembered for fairness and devotion to family.`,
    src: "/pandu.jpg",
  },
  {
    name: "Dhritarashtra",
    description: `Dhritarashtra, the blind king of Hastinapura, son of Vyasa and Ambika.\nFather of the Kauravas, husband of Gandhari.\nHis blindness was both physical and metaphorical.\nStruggled to control his ambitious sons, especially Duryodhana.\nIndecision and attachment led to the great war.\nRelied on Vidura and Sanjaya for guidance.\nA cautionary tale about attachment and responsibility.`,
    src: "/dhritarashtra.jpg",
  },
  {
    name: "Vidura",
    description: `Vidura was the wise counselor of the Kuru court.\nSon of Vyasa and Parishrami, born to a maid.\nKnown for righteousness, honesty, and impartiality.\nAdvised Dhritarashtra and the Kauravas against injustice.\nProtected the Pandavas from conspiracies.\nRespected for his wisdom and integrity.\nA paragon of virtue in Indian tradition.`,
    src: "/vidura.jpg",
  },
  {
    name: "Yudhishthira",
    description: `Yudhishthira, eldest Pandava, son of Pandu and Kunti.\nKnown for his righteousness, honesty, and sense of justice.\nSkilled in spear and chariot warfare.\nLost his kingdom in a dice game, endured exile.\nGuided the Pandavas through many hardships.\nCrowned king after the war, ruled with wisdom.\nSymbol of dharma and moral integrity.`,
    src: "/yudhishthir.jpg",
  },
  {
    name: "Bhima",
    description: `Bhima, the second Pandava, was renowned for his immense strength.\nSon of Pandu and Kunti, born by the grace of Vayu.\nHis power and appetite were legendary.\nKilled many demons, including Hidimba.\nFiercely protective of his family, especially Draupadi.\nSlew all 100 Kaurava brothers in the war.\nA mighty protector and loyal brother.`,
    src: "/bhima.jpg",
  },
  {
    name: "Arjuna",
    description: `Arjuna, the third Pandava, is celebrated as the greatest archer of his era.\nSon of Pandu and Kunti, born by the grace of Indra.\nDisciple of Dronacharya, excelled in archery and warfare.\nWon Draupadi’s hand in marriage.\nPlayed a pivotal role in the Kurukshetra war, guided by Krishna.\nHis dilemmas led to the teachings of the Bhagavad Gita.\nSymbol of skill, duty, and righteousness.`,
    src: "/arjuna.jpg",
  },
  {
    name: "Nakula",
    description: `Nakula, fourth Pandava, son of Madri and Ashwini Kumaras.\nRenowned for his beauty and expertise with the sword.\nSkilled horseman and master of Ayurveda.\nPlayed a key role in the Kurukshetra war.\nKnown for his loyalty and humility.\nHelped the Pandavas during exile and war.\nSymbol of charm, skill, and devotion.`,
    src: "/nakula.jpg",
  },
  {
    name: "Sahadeva",
    description: `Sahadeva, youngest Pandava, son of Madri and Ashwini Kumaras.\nWise, skilled in astrology and swordsmanship.\nKnown for his intelligence and foresight.\nPlayed a vital role in the Kurukshetra war.\nHelped strategize and interpret omens.\nLoyal to his brothers and devoted to duty.\nSymbol of wisdom, loyalty, and humility.`,
    src: "/sahadeva.jpg",
  },
  {
    name: "Draupadi",
    description: `Draupadi, born from fire, was the daughter of King Drupad.\nCommon wife of the five Pandavas.\nKnown for her beauty, intelligence, and strong will.\nHer humiliation in the Kaurava court was a turning point.\nVowed not to tie her hair until avenged.\nSymbol of dignity, resilience, and devotion.\nHer story is one of suffering, strength, and triumph.`,
    src: "/draupadi.jpg",
  },

  {
    name: "Karna",
    description: `Karna, son of Kunti and Surya, was abandoned at birth.\nRaised by a charioteer’s family, he faced social rejection.\nA peerless archer, rivaling Arjuna in skill.\nKnown for his unwavering generosity, called Danveer.\nLoyal friend to Duryodhana, king of Anga.\nFought valiantly for the Kauravas, bound by loyalty.\nA noble but misunderstood hero of the epic.`,
    src: "/karna.jpg",
  },

  {
    name: "Duryodhana",
    description: `Duryodhana, eldest Kaurava, son of Dhritarashtra and Gandhari.\nMain antagonist, known for ambition and rivalry with the Pandavas.\nSkilled mace fighter and leader of the Kauravas.\nInstigated the dice game and Draupadi’s humiliation.\nRefused to share the kingdom, causing the war.\nFought bravely but was ultimately defeated.\nSymbol of pride, ambition, and downfall.`,
    src: "/duryodhana.jpg",
  },
  {
    name: "Dushasana",
    description: `Dushasana, second Kaurava, brother of Duryodhana.\nInfamous for his role in Draupadi’s humiliation.\nLoyal supporter of Duryodhana’s schemes.\nFought fiercely in the Kurukshetra war.\nKilled by Bhima in revenge for Draupadi.\nKnown for cruelty and blind loyalty.\nSymbol of injustice and retribution.`,
    src: "/dushasana.jpg",
  },
  {
    name: "Dushala",
    description: `Dushala, only sister of the Kauravas, daughter of Dhritarashtra and Gandhari.\nMarried to Jayadratha, king of Sindhu.\nKnown for her grace and devotion to family.\nWitnessed the tragedy of the war.\nSupported her brothers and husband.\nHer life was marked by sorrow and resilience.\nSymbol of sisterly love and endurance.`,
    src: "/dushala.jpg",
  },
  
  {
    name: "Ganga",
    description: `Ganga, river goddess, wife of Shantanu.\nMother of Bhishma, known for her grace and power.\nPlayed a key role in Bhishma’s upbringing.\nReturned to the celestial realm after Bhishma’s birth.\nSymbol of purity, sacrifice, and divine love.\nCentral figure in early Kuru dynasty.\nRevered as a goddess in Hindu tradition.`,
    src: "/ganga.jpg",
  },
  {
    name: "Shantanu",
    description: `Shantanu, king of Hastinapura, father of Bhishma, Vichitravirya, and Chitrangada.\nMarried Ganga and later Satyavati.\nHis love for Satyavati led to Bhishma’s vow.\nRuled with wisdom and justice.\nHis reign set the stage for the Mahabharata.\nKnown for his sense of duty and love.\nSymbol of royal legacy and sacrifice.`,
    src: "/shantanu.jpg",
  },
  {
    name: "Satyavati",
    description: `Satyavati, queen of Hastinapura, wife of Shantanu.\nMother of Vichitravirya and Chitrangada.\nKnown for her ambition and wisdom.\nInstrumental in shaping the Kuru dynasty.\nMother of Vyasa through sage Parashar.\nHer decisions influenced the epic’s events.\nSymbol of maternal strength and destiny.`,
    src: "/satyavati.jpg",
  },
  {
    name: "Parashara",
    description: `Parashara, great sage, father of Vyasa.\nKnown for his wisdom and spiritual power.\nHad a brief union with Satyavati.\nAuthored important scriptures and texts.\nRespected in Vedic tradition.\nHis lineage shaped the Mahabharata.\nSymbol of knowledge and sagehood.`,
    src: "/parashara.jpg",
  },
  {
    name: "Vyasa",
    description: `Vyasa, great sage and author of the Mahabharata.\nSon of Parashar and Satyavati.\nFather of Pandu, Dhritarashtra, and Vidura.\nKnown for his wisdom and spiritual insight.\nComposed many important scriptures.\nCentral to the epic’s creation.\nSymbol of knowledge and sagehood.`,
    src: "/vyasa.jpg",
  },
   {
    name: "Parishrami",
    description: `Parishrami, maid to Ambika and Ambalika.\nMother of Vidura by Vyasa.\nKnown for her humility and wisdom.\nVidura’s birth brought virtue to the court.\nSymbol of service and righteousness.\nHer son became a paragon of virtue.\nRespected figure in the epic.`,
    src: "/parishrami.jpg",
  },
  
  {
    name: "Kuntibhoj",
    description: `Kuntibhoj, foster father of Kunti.\nKing of the Kunti kingdom.\nRaised Kunti with care and affection.\nEnsured her marriage to Pandu.\nKnown for his generosity and kindness.\nPlayed a minor but important role.\nSymbol of guardianship and support.`,
    src: "/kuntibhoj.jpg",
  },
  {
    name: "Subala",
    description: `Subala, king of Gandhara, father of Shakuni and Gandhari.\nKnown for his wisdom and diplomacy.\nArranged Gandhari’s marriage to Dhritarashtra.\nSupported his children in times of need.\nPlayed a role in the Kaurava-Pandava conflict.\nSymbol of fatherly care and strategy.\nRespected elder in the epic.`,
    src: "/subala.jpg",
  },
  {
    name: "Chitrangada",
    description: `Chitrangada, son of Shantanu and Satyavati.\nKing of Hastinapura after Shantanu.\nKnown for his valor and leadership.\nDied young in battle.\nHis death led to Vichitravirya’s rule.\nPlayed a brief but key role.\nSymbol of youthful courage.`,
    src: "/chitrangada.jpg",
  },
  {
    name: "Vichitravirya",
    description: `Vichitravirya, son of Shantanu and Satyavati.\nKing of Hastinapura after Chitrangada.\nMarried Ambika and Ambalika.\nDied young without heirs.\nHis death led to Vyasa fathering heirs.\nCentral to the Kuru dynasty’s succession.\nSymbol of fate and royal duty.`,
    src: "/vichitravirya.jpg",
  },
  {
    name: "Amba",
    description: `Amba, princess of Kashi, sought Bhishma’s hand.\nRejected and humiliated by Bhishma.\nVowed revenge, reborn as Shikandi.\nHer story is one of determination.\nInstrumental in Bhishma’s fall.\nSymbol of resolve and transformation.\nA tragic figure in the epic.`,
    src: "/amba.jpg",
  },
  {
    name: "Ambika",
    description: `Ambika, queen of Hastinapura, wife of Vichitravirya.\nMother of Dhritarashtra by Vyasa.\nKnown for her beauty and grace.\nPlayed a role in the Kuru dynasty’s succession.\nHer son’s blindness shaped the epic.\nSymbol of royal motherhood.\nA key matriarch in the lineage.`,
    src: "/ambika.jpg",
  },
  {
    name: "Ambalika",
    description: `Ambalika, queen of Hastinapura, wife of Vichitravirya.\nMother of Pandu by Vyasa.\nKnown for her beauty and devotion.\nHer son’s birth ensured the dynasty’s future.\nPlayed a role in the succession crisis.\nSymbol of maternal care and destiny.\nImportant matriarch in the epic.`,
    src: "/ambalika.jpg",
  },
  {
    name: "Prishata",
    description: `Prsata, king of Panchala, father of Drupad.\nKnown for his wisdom and leadership.\nPlayed a minor role in the epic.\nHis lineage continued through Drupad.\nSymbol of royal heritage.\nRespected elder in Panchala.\nPart of the extended Mahabharata family.`,
    src: "/prishata.jpg",
  },
  {
    name: "Bharadwaja",
    description: `Bharadwaja, great sage, father of Dronacharya.\nKnown for his wisdom and spiritual power.\nPlayed a key role in the lineage.\nRespected in Vedic tradition.\nHis son became a legendary teacher.\nSymbol of knowledge and sagehood.\nImportant figure in the epic.`,
    src: "/bharadwaja.jpg",
  },
  {
    name: "Sura",
    description: `Sura, king of the Yadavas, father of Vasudev and Kunti.\nKnown for his generosity and leadership.\nArranged Kunti’s marriage to Pandu.\nPlayed a role in Krishna’s birth.\nSymbol of royal heritage and support.\nRespected elder in the Yadava clan.\nPart of the Mahabharata’s extended family.`,
    src: "/sura.jpg",
  },
  {
    name: "Kamsa",
    description: `Kamsa, king of Mathura, maternal uncle of Krishna.\nKnown for his cruelty and ambition.\nImprisoned Devaki and Vasudev.\nTried to kill Krishna at birth.\nUltimately slain by Krishna.\nSymbol of tyranny and downfall.\nCentral villain in Krishna’s story.`,
    src: "/kamsa.jpg",
  },
  {
    name: "Devaki",
    description: `Devaki, mother of Krishna, wife of Vasudev.\nImprisoned by her brother Kans.\nEndured great suffering for Krishna’s safety.\nKnown for her devotion and patience.\nCentral to Krishna’s early life.\nSymbol of maternal love and sacrifice.\nRevered in Hindu tradition.`,
    src: "/devaki.jpg",
  },
  {
    name: "Vasudev",
    description: `Vasudev, father of Krishna, husband of Devaki.\nKnown for his wisdom and courage.\nSmuggled Krishna to safety at birth.\nEndured Kans’s tyranny for his family.\nCentral to Krishna’s early life.\nSymbol of fatherly love and sacrifice.\nRespected figure in the Yadava clan.`,
    src: "/vasudev.jpg",
  },
  {
    name: "Rohini",
    description: `Rohini, mother of Balarama and Subhadra.\nWife of Vasudev, cared for Krishna in Gokul.\nKnown for her nurturing and devotion.\nCentral to Krishna’s childhood.\nSymbol of maternal love and care.\nRespected figure in the Yadava family.\nPart of Krishna’s early life.`,
    src: "/rohini.jpg",
  },
  {
    name: "Shakuni",
    description: `Shakuni, prince of Gandhara, brother of Gandhari.\nMaster strategist and manipulator.\nInstigated the dice game and war.\nKnown for his cunning and intelligence.\nLoyal to his sister and the Kauravas.\nCentral villain in the epic’s conflict.\nSymbol of strategy and intrigue.`,
    src: "/shakuni.jpg",
  },
  {
    name: "Gandhari",
    description: `Gandhari, queen of Hastinapura, wife of Dhritarashtra.\nMother of the Kauravas, known for her devotion.\nBlindfolded herself for her husband.\nEndured great suffering during the war.\nSymbol of sacrifice, strength, and motherhood.\nRespected matriarch in the epic.\nCentral to the Kaurava lineage.`,
    src: "/gandhari.jpg",
  },
  {
    name: "kunti",
    description: `kunti, daughter of kuntibhoj, wife of pandu.\nMother of Yudhishthira, Bhima, Arjuna.\nKnown for her strength and resilience.\nHad a boon to invoke gods for children.\nPlayed a key role in the Pandavas birth.\nEndured exile and hardsip during the war.\nSymbol of motherhood,sacrifice, and courage.`,
    src: "/kunti.jpg",
  },

  {
    name: "Madri",
    description: `Madri, second wife of Pandu, mother of Nakula and Sahadeva.\nKnown for her beauty and devotion.\nBore twins by the Ashwini Kumaras.\nChose to join Pandu in death.\nSymbol of sacrifice and loyalty.\nHer sons played key roles in the war.\nImportant figure in the Pandava family.`,
    src: "/madri.jpg",
  },
  {
    name: "Drupad",
    description: `Drupad, king of Panchala, father of Draupadi and Dhrishtadyumna.\nKnown for his enmity with Drona.\nPerformed a yajna to obtain children.\nCentral to Draupadi’s birth and swayamvara.\nPlayed a key role in the war.\nSymbol of pride, power, and destiny.\nRespected ruler in the epic.`,
    src: "/drupada.jpg",
  },
  {
    name: "Kripacharya",
    description: `Kripacharya, royal teacher, brother of Kripi.\nKnown for his wisdom and martial skills.\nServed as teacher to the Kuru princes.\nFought in the Kurukshetra war.\nSurvived the war and continued teaching.\nSymbol of knowledge and loyalty.\nRespected figure in the court.`,
    src: "/kripacharya.jpg",
  },
  {
    name: "Kripi",
    description: `Kripi, wife of Dronacharya, sister of Kripacharya.\nKnown for her devotion and support.\nMother of Ashwatthama.\nPlayed a minor but important role.\nSymbol of family and loyalty.\nRespected matriarch in the epic.\nPart of the Kuru lineage.`,
    src: "/kripi.jpg",
  },
  {
    name: "Ashwatthama",
    description: `Ashwatthama, son of Dronacharya and Kripi.\nMighty warrior, fought for the Kauravas.\nKnown for his valor and anger.\nSurvived the war, cursed for his actions.\nSymbol of power and tragedy.\nCentral to the war’s aftermath.\nComplex figure in the epic.`,
    src: "/ashwatthama.jpg",
  },
  {
    name: "Balram",
    description: `Balram, elder brother of Krishna, son of Vasudev and Rohini.\nKnown for his immense strength and loyalty.\nSkilled in mace fighting.\nSupported Krishna and the Pandavas.\nCentral to Krishna’s early life.\nSymbol of power and devotion.\nRevered in Hindu tradition.`,
    src: "/balram.jpg",
  },
  {
    name: "Subhadra",
    description: `Subhadra, sister of Krishna and Balarama.\nWife of Arjuna, mother of Abhimanyu.\nKnown for her beauty and devotion.\nCentral to the Pandava lineage.\nSupported her family during the war.\nSymbol of love, loyalty, and courage.\nRespected figure in the epic.`,
    src: "/subhadra.jpg",
  },
  {
    name: "Jayadrata",
    description: `Jayadrata, king of Sindhu, husband of Dushala.\nKnown for his valor and ambition.\nPlayed a key role in the war.\nResponsible for Abhimanyu’s death.\nKilled by Arjuna in revenge.\nSymbol of rivalry and fate.\nCentral figure in the war’s tragedy.`,
    src: "/jayadrata.jpg",
  },
  {
    name: "Dhrishtadyumna",
    description: `Dhrishtadyumna, son of Drupad, brother of Draupadi.\nCommander of the Pandava army.\nBorn to kill Dronacharya.\nKnown for his bravery and leadership.\nPlayed a key role in the war.\nSymbol of destiny and valor.\nCentral to the Pandavas’ victory.`,
    src: "/dhrishtadyumna.jpg",
  },
  {
    name: "Shikandi",
    description: `Shikandi, warrior of the Pandavas, rebirth of Amba.\nInstrumental in Bhishma’s fall.\nKnown for courage and determination.\nPlayed a key role in the war.\nSymbol of transformation and resolve.\nCentral to Bhishma’s defeat.\nUnique figure in the epic.`,
    src: "/shikandi.jpg",
  }, 
  
  {
    name: "Uttara",
    description: `Uttara, wife of Abhimanyu, mother of Parikshit.\nPrincess of Matsya kingdom.\nKnown for her courage and resilience.\nSurvived the war and protected her son.\nCentral to the Pandava lineage.\nSymbol of motherhood and survival.\nRespected figure in the epic.`,
    src: "/uttara.jpg",
  },
  {
    name: "Abhimanyu",
    description: `Abhimanyu, son of Arjuna and Subhadra.\nValiant young warrior, known for bravery.\nBroke the Chakravyuha formation in war.\nKilled in battle by Kauravas.\nSymbol of youth, valor, and sacrifice.\nCentral to the war’s turning point.\nRemembered as a heroic son.`,
    src: "/abhimanyu.jpg",
  },
  {
    name: "Hidimbi",
    description: `Hidimbi, wife of Bhima, mother of Ghatotkacha.\nRakshasi princess, known for her devotion.\nHelped the Pandavas during exile.\nSymbol of love, loyalty, and strength.\nHer son played a key role in the war.\nRespected figure in the epic.\nPart of the Pandava family.`,
    src: "/hidimbi.jpg",
  },
  {
    name: "Ghatotkacha",
    description: `Ghatotkacha, son of Bhima and Hidimbi.\nPowerful rakshasa warrior, fought for the Pandavas.\nKnown for his strength and magical powers.\nPlayed a key role in the war.\nKilled by Karna with a divine weapon.\nSymbol of sacrifice and valor.\nRemembered as a heroic ally.`,
    src: "/ghatotkacha.jpg",
  },
  {
    name: "Upapandavas",
    description: `Upapandavas, sons of Draupadi and the Pandavas.\nKnown for their bravery and loyalty.\nFought in the Kurukshetra war.\nKilled by Ashwatthama in the night attack.\nSymbol of youth and sacrifice.\nPart of the Pandava lineage.\nRemembered for their tragic fate.`,
    src: "/upapandavas.jpg",
  }
]

