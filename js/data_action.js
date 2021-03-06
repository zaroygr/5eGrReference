data_action = [
    {
        title: "Attack",
        icon: "crossed-swords",
        subtitle: "Επίθεση melee ή από απόσταση",
        description: "Εκτελέστε μια επίθεση με το όπλο σας σώμα με σώμα ή από απόσταση",
        reference: "PHB, pgs. 192,194-195.",
        bullets: [
            "Ορισμένες δυνατότητες, όπως η δυνατότητα <i>Extra Attack</i> του Fighter, σας επιτρέπουν να κάνετε περισσότερες από μία επίθεση με αυτήν την ενέργεια. Κάθε μία από αυτές τις επιθέσεις είναι ένα ξεχωριστό <i>ROLL</i> και μπορεί να στοχεύει διαφορετικά πλάσματα. Μπορείτε να μετακινηθείτε μεταξύ αυτών των επιθέσεων. ",
             "Όταν επιτίθεσαι με ένα ελαφρύ όπλο (light melee weapon), μπορείτε να χρησιμοποιήσετε μια bonus action για να επιτεθείτε με το άλλο σας χέρι (δείτε τη bonus action <i>Offhand attack</i>)",
             "Μπορείτε να αντικαταστήσετε μία από τις επιθέσεις melee με ένα <i> Grapple </i> ή ένα <i> Shove </i>.",
             "Ορισμένες συνθήκες προσφέρουν πλεονέκτημα στην επίθεση: επιθέσεις εναντίον τυφλών, παραλυμένων, απολιθωμένων, συγκρατημένων, αναισθητοποιημένων ή ασυνείδητων στόχων.",
             "Ορισμένες συνθήκες δίνουν μειονέκτημα στην επίθεση: επιθέσεις εναντίον αόρατων ή κρυφών στόχων. Εκτεταμένες επιθέσεις εναντίον επιρρεπών στόχων. Επιθέσεις από τυφλούς, φοβισμένους, δηλητηριασμένους ή περιορισμένους επιτιθέμενους."
        ]
    },
    {
        title: "Grapple",
        icon: "grab",
        subtitle: "Λαβή melee.",
        description: "Προσπαθήστε να αρπάξετε ένα πλάσμα ή να παλέψετε με αυτό",
        reference: "PHB, pg. 195.",
        bullets: [
            "Μπορείτε να χρησιμοποιήσετε την ενέργεια <i> Attack </i> για να κάνετε μια ειδική melee επίθεση αρπαγής.",
             "Ο στόχος της αρπαγής σας δεν πρέπει να είναι περισσότερο από ένα μέγεθος μεγαλύτερο από εσάς, και πρέπει να τον φτάνετε.",
             "Χρησιμοποιώντας τουλάχιστον ένα ελεύθερο χέρι, προσπαθείτε να αρπάξετε τον στόχο κάνοντας ένα grapple check, με έναν έλεγχο Ισχύος (Athletics) που αμφισβητείται από τον έλεγχο Ισχύος (Athletics) ή επιδεξιότητα (Acrobatics) του στόχου (ο στόχος επιλέγει την ικανότητα χρήσης). ",
             "Εάν πετύχεις, υποβάλετε τον στόχο στην κατάσταση κατάβασης <i>grappled </i>  (η ταχύτητά του έχει οριστεί σε 0)."

        ]
    },
    {
        title: "Shove",
        icon: "hand",
        subtitle: "Ειδική επίθεση melee",
        description: "Σπρώξτε ένα πλάσμα, είτε για να το ρίξετε κάτω είτε να το απομακρύνετε από εσάς",
        reference: "PHB, pg. 195.",
        bullets: [
            "Χρησιμοποιώντας την ενέργεια <i> Attack </i>, μπορείτε να κάνετε μια ειδική επίθεση melee για να σπρώξετε ένα πλάσμα. Εάν μπορείτε να κάνετε πολλαπλές επιθέσεις με την ενέργεια Attack, αυτή η επίθεση αντικαθιστά μία από αυτές.",
            "Ο στόχος της ώθησης σας δεν πρέπει να είναι περισσότερο από ένα μέγεθος μεγαλύτερο από εσάς, και πρέπει να είναι εντός προσιτότητας.",
            "Κάνετε έναν έλεγχο Δύναμης (Athletics) που αμφισβητείται από τον έλεγχο Ισχύος (Athletics) ή επιδεξιότητα (Acrobatics) του στόχου (ο στόχος επιλέγει τη δυνατότητα χρήσης).",
            "Εάν κερδίσετε το διαγωνισμό, είτε ρίχνετε κάτω τον στόχο είτε τον σπρώχνετε 5 πόδια μακριά σας."

        ]
    },
    {
        title: "Cast a spell",
        icon: "magic-swirl",
        subtitle: "Cast time of 1 action",
        description: "Κάντε ένα ξόρκι με casting time of 1 action",
        reference: "PHB, pg. 192.",
        bullets: [
          "Δεν μπορείτε να κάνετε ένα ξόρκι με την ενέργεια Action και ένα διαφορετικό ξόρκι με την ενέργεια bonus action στην σειρά σας, εκτός εάν για Action χρησιμοποιείται ξόρκι cantrip.",
          "Ο στόχος ενός ξορκιού πρέπει να βρίσκεται εντός του spells range. Για να στοχεύσετε κάτι, πρέπει να έχετε ένα ελεύθερο μονοπάτι προς αυτό, έτσι ώστε να μην είναι πίσω από πλήρη κάλυψη.",
          "Τα ξόρκια που απετούν πρώτες ύλες (material components) δεν καταναλώνουν το υλικό, εκτός αν αναφέρεται ρητά. Εκτός αν δοθεί το κόστος ενός υλικού, μπορεί να υποθέσετε ότι το κόστος είναι αμελητέο και το υλικό είναι απλώς διαθέσιμο σε μια θήκη συστατικών.",
          "Μερικά ξόρκια απαιτούν από εσάς να διατηρήσετε τη συγκέντρωση για να διατηρήσετε τη μαγεία τους ενεργή (concentration ). Εάν χάσετε τη συγκέντρωση, ένα τέτοιο ξόρκι τελειώνει. Χάνετε τη συγκέντρωση σε ένα ξόρκι εάν ρίξετε ένα άλλο ξόρκι που απαιτεί συγκέντρωση ή όταν είστε ανίκανοι (incapacitated :D ). Κάθε φορά που παίρνετε ζημιά, πρέπει να κάνεις ένα Constitution saving throw για να διατηρήσεις τη συγκέντρωσή σου. Το DC ισούται με το 10 ή το ήμισυ της ζημιάς που δέχτηκες, όποιος αριθμός είναι υψηλότερος. "

        ]
    },
    {
        title: "Dash",
        icon: "sprint",
        subtitle: "Διπλή ταχύτητα κίνησης",
        description: "Αποκτήστε επιπλέον κίνηση για τον τρέχων γύρο",
        reference: "PHB, pg. 192.",
        bullets: [
            "Η αύξηση ισούται με την ταχύτητά σας, μετά την εφαρμογή τυχόν modifiers."
        ]
    },
    {
        title: "Disengage",
        icon: "journey",
        subtitle: "Αποτρέψτε τις opportunity attacks",
        description: "Η κίνησή σας δεν προκαλεί ευκαιριακές επιθέσεις για το υπόλοιπο της σειράς σας",
        reference: "PHB, pg. 192.",
        bullets: [
        ]
    },
    {
        title: "Dodge",
        icon: "aura",
        subtitle: "Αυξήστε την άμυνα σας",
        description: "Εστίαση αποκλειστικά στην αποφυγή επιθέσεων",
        reference: "PHB, pg. 192.",
        bullets: [
          "Μέχρι την έναρξη της επόμενης σειράς σας, κάθε roll επίθεσης που έχει γίνει εναντίον σας έχει disadvantage εάν μπορείτε να δείτε τον επιτιθέμενο και κάνετε τις Dexterity saving throws με advantage.",
          "Χάνετε αυτό το όφελος αν είστε <i>incapacitated</i> ή εάν η ταχύτητά σας πέσει στο 0."

        ]
    },
    {
        title: "Escape",
        icon: "manacles",
        subtitle: "Αποδράστε από grapple",
        description: "Αποδράστε από grapple",
        reference: "PHB, pg. 195.",
        bullets: [
          "Για να ξεφύγεις από grapple, πρέπει να πετύχεις σε ένα Strength (Athletics) ή Dexterity (Acrobatics) που αμφισβητείται από το Strength (Athletics) του αντιπάλου.",
          "Η απόδραση άλλων συνθηκών που σας συγκρατούν (όπως το manacles) μπορεί να απαιτούν έλεγχο Dexterity ή Strength , όπως καθορίζεται από το condition."

        ]
    },
    {
        title: "Help",
        icon: "telepathy",
        subtitle: "Δώστε σε σύμμαχο advantage",
        description: "Δώστε σ'ένα σύμμαχο πλεονέκτημα (advantage) σε έλεγχο ικανότητας ή επίθεση",
        reference: "PHB, pg. 192.",
        bullets: [
          "Ο στόχος κερδίζει advantage στον επόμενο έλεγχο ικανότητας (ability check) που κάνει για την εκτέλεση της εργασίας με την οποία βοηθάτε.",
          "Εναλλακτικά, ο στόχος κερδίζει advantage στο επόμενο attack roll εναντίον ενός πλάσματος σε απόσταση 5 feet από εσάς.",
          "Το πλεονέκτημα διαρκεί μέχρι την έναρξη του επόμενου γύρου σας."

        ]
    },
    {
        title: "Use Object",
        icon: "snatch",
        subtitle: "Χρήση αντικειμένων",
        description: "Αλληλεπιδράστε με ένα δεύτερο αντικείμενο ή χρησιμοποιήστε ειδικές δυνατότητες αντικειμένων",
        reference: "PHB, pg. 193.",
        bullets: [
          "Έχετε μια δωρεάν αληλεπίδραση με ένα αντικείμενο στη  σειρά σας (όπως ξεθηκάρωμα όπλου ή άνοιγμα πόρτας). Εάν θέλετε να αλληλεπιδράσετε με ένα δεύτερο αντικείμενο, χρησιμοποιήστε την ενέργεια Use Object.",
          "Όταν ένα αντικείμενο απαιτεί action για τη χρήση του, πραγματοποιείτε επίσης αυτήν την ενέργεια."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Χρήση ασπίδας",
        description: "Εξοπλίστε ασπίδα",
        reference: "PHB, pgs. 144-146.",
        bullets: [
          "Μια ασπίδα παίρνει πάντα μια ενέργεια (1 action) για να εξοπλίσει.",
          "Η πανοπλία διαρκεί αρκετά λεπτά για να εξοπλίσει."

        ]
    },
    {
        title: "Hide",
        icon: "hood",
        subtitle: "Κάλυψη απόκρυψη",
        description: "Προσπάθεια Κάλυψης Απόκρυψης",
        reference: "PHB, pg. 192.",
        bullets: [
          "Δεν μπορείς να κρυφτείς από ένα πλάσμα που μπορεί να σε δει. Πρέπει να έχεις πλήρη κάλυψη, να είσαι σε μια βαριά σκοτεινή περιοχή, να είσαι αόρατος ή να αποκλείεται με άλλο τρόπο το οπτικό πεδίο του εχθρού.",
          "Εάν κάνετε θόρυβο (όπως φωνάζοντας μια προειδοποίηση ή χτυπώντας ένα βάζο), προδίδεται η θέση σας.",
          "Όταν προσπαθείτε να κρυφτήτε, κάντε Dexterity (Stealth) check και σημειώστε το αποτέλεσμα. Μέχρι να ανακαλυφθείτε ή να σταματήσετε να κρύβεστε, το σύνολο σας αμφισβητείται από Wisdom (Perception) check από οποιοδήποτε πλάσμα αναζητά ενεργά σημάδια της παρουσία σας.",
          "Ένα πλάσμα σας αντιλαμβάνεται ακόμη και αν δεν σας ψάχνει, εάν το Stealth check σας είναι μικρότερο από Passive Perception του.",
          "Εκτός μάχης, μπορείτε επίσης να χρησιμοποιήσετε ένα Dexterity (Stealth) check για ενέργειες όπως να κρυφτήτε από εχθρούς, να ξεγλιστρήσετε από φρουρούς χωρίς να σας αντιληφθούν, να προσεγγίσετε κάποιον χωρίς να σας δει ή σας ακούσει."

        ]
    },
    {
        title: "Search",
        icon: "magnifying-glass",
        subtitle: "Ψάξιμο-Έρευνα",
        description: "Αφιερώστε την προσοχή σας να βρήτε κάτι",
        reference: "PHB, pg. 193.",
        bullets: [
          "Ανάλογα με τη φύση της αναζήτησής σας, το DM ενδέχεται να σας ζητήσει να κάνετε έναν έλεγχο Wisdom (Perception) ή έναν έλεγχο Intelligence (Investigation)."
        ]
    },
    {
        title: "Ready",
        icon: "stopwatch",
        subtitle: "Προετοιμασία μιας action",
        description: "Επιλέξτε μια συνθήκη-έναυσμα  και μια αντίδραση-αποτέλεσμα ",
        reference: "PHB, pg. 193.",
        bullets: [
          "Πρώτα, αποφασίζετε ποια περίσταση θα προκαλέσει την αντίδρασή σας.",
          "Στη συνέχεια, επιλέγετε τη δράση που θα κάνετε ως απάντηση σε αυτήν την περίσταση ή επιλέξτε να προχωρήσετε όσο η ταχύτητα σας ως αντίδραση σε αυτήν.",
          "Όταν πληρούνται οι συνθήκες , μπορείτε είτε να λάβετε το reaction σας αμέσως μετά τη λήξη της συνθήκης είτε να την αγνοήσετε.",
          "Όταν προετοιμάσετε ένα ξόρκι, το ρίχνετε κανονικά, αλλά κρατάτε την ενέργειά του, την οποία απελευθερώνετε με το reaction σας όταν εμφανιστεί η ευκαιρία. Για να προετοιμαστεί, ένα ξόρκι πρέπει να έχει casting time of 1 action και απαιτεί concentration"

        ]
    },
    {
        title: "Use class feature",
        icon: "embrassed-energy",
        subtitle: "Action Φυλής ή Κλάσης",
        description: "Χρησιμοποιήστε ένα χαρακτηριστικό της φυλής σας ή της Class σας που χρησιμοποιεί action",
        reference: "Δείτε τη σελίδα της Class σας για περισσότερες πληροφορίες.",
        bullets: [

        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Πρώτες βοήθειες",
        description: "Σταματήστε ένα ετοιμοθάνατο πλάσμα απ το να κάνει death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
          "Κάντε έναν Wisdom (Medicine) check με DC 10",
          "Σε επιτυχία, το πλάσμα είναι σταθερό και δεν χρειάζεται πλέον να κάνει death saving throws",
          "Ένα σταθεροποιημένο πλάσμα ανακτά 1 hit point μετά από 1d4 ώρες"

        ]
    },
    {
        title: "Improvise",
        icon: "juggler",
        subtitle: "Κάτι δεν υπόκειται σε κανόνες",
        description: "Εκτελέστε οποιαδήποτε ενέργεια μπορείτε να φανταστείτε",
        reference: "PHB, pg. 193.",
        bullets: [
          "Όταν περιγράφετε μια ενέργεια που δεν αναφέρεται λεπτομερώς αλλού στους κανόνες, ο DM σας ενημερώνει εάν αυτή η ενέργεια είναι δυνατή και τι είδους roll πρέπει να κάνετε, εάν υπάρχει, για να προσδιορίσετε την επιτυχία ή την αποτυχία."
        ]
    }
]
