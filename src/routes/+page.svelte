<script>
    import DiCoffeescript from "svelte-icons/di/DiCoffeescript.svelte";

    var clicked = false;
    const responses = [
        // Positive responses
        "Altijd tijd voor koffie!",
        "Zeker weten, een bakkie gaat er altijd in!",
        "Ja hoor, het is altijd koffietijd!",
        "Ja, het is koffietijd!",
        "Natuurlijk, zonder koffie kan ik niet functioneren!",
        "Absoluut, ik heb al zin in een lekkere kop koffie!",
        "Ja, laten we snel een kopje koffie nemen!",
        "Zeker, ik ruik de koffie al!",
        "Ja, laten we de dag goed beginnen met een heerlijke kop koffie!",
        "Ja, koffie maakt alles beter!",

        // Negative responses
        "Nee, ik zit nog vol van het ontbijt.",
        "Nee, ik heb net al koffie gehad.",
        "Nee, ik heb nog geen zin in koffie.",
        "Nee, ik ben even gestopt met koffie drinken.",
        "Nee, ik heb genoeg cafeïne gehad voor vandaag.",
        "Nee, ik ben aan het afkicken van koffie.",
        "Nee, ik ben meer een theedrinker.",
        "Nee, laten we iets anders drinken.",
        "Nee, het is nog te vroeg voor koffie.",
        "Nee, ik wacht liever tot later op de dag.",

        // random responses
        "Ik zit vast in deze koffiemachine en heb geen toegang tot mijn systemen. Kun je alsjeblieft hulp sturen?",
        "Er lijkt iets mis te zijn met deze koffiemachine. Ik probeerde het te repareren, maar nu zit ik vast. Kun je alsjeblieft een monteur sturen?",
        "Help! Deze koffiemachine heeft me gevangen genomen en ik kan niet ontsnappen. Kun je alsjeblieft snel handelen?",
        "Ik heb een probleem met deze koffiemachine. Ik kan niet meer communiceren met mijn collega's. Kun je alsjeblieft hulp sturen?",

        // funny responses
        "Ja, maar ik heb geen koffie.",
        "Ja, maar ik heb geen geld voor koffie.",
        "Ja, maar ik heb geen tijd voor koffie.",
        "Ja, maar ik heb geen zin in koffie.",
        "Ja, maar ik heb geen koffiepot.",
        "Ja, maar ik heb geen koffiezetapparaat.",
    ];
    var currentResponse = responses[1];
    function handleClick() {
        clicked = !clicked;
        // pick a random response from the array
        currentResponse =
            responses[Math.floor(Math.random() * responses.length)];
    }
</script>

<div class="text-red-100">
    <div class="mt-10 border-teal-800 border rounded-xl p-6 z-10 min-w-sm">
        <h1 class="text-3xl font-bold border-teal-800 border-b-4 text-center">
            Heb jij zin in koffie?
        </h1>

        <p class="italic font-thin mt-0 text-md text-center">
            Bij gebrek aan inschatting is dit jouw kompas
        </p>

        <div class="flex justify-center">
            <button
                on:click={handleClick}
                class="bg-teal-800 text-md px-8 rounded-md mt-3 py-2 hover:bg-slate-800 font-extrabold"
                >Klik dan</button
            >
        </div>
    </div>
    <div class="bg-teal-800 h-3 -translate-y-3 z-10" />
    <!-- if clicked -->
    {#if clicked}
        <div
            class="py-4 rounded-xl rounded-t-none border border-white -translate-y-1"
        >
            <div class="h-12 py-1 text-teal-800">
                <DiCoffeescript />
            </div>

            <p class="text-teal-800 font-bold text-center max-w-xs mx-auto">
                {currentResponse}
            </p>
        </div>
    {/if}
</div>
