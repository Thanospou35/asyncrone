// Tâche 01: Itérer avec Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Délai de 1 seconde
        console.log("Itération avec valeur:", value);
    }
}

// Appel de la fonction pour la démonstration
iterateWithAsyncAwait([1, 2, 3, 4, 5]);

// Tâche 02: Attendre un appel
async function awaitCall() {
    const simulateApiCall = () => 
        new Promise(resolve => setTimeout(() => resolve("Données de l'API simulées"), 2000));
    
    const data = await simulateApiCall(); // Attente de la promesse
    console.log("Reponse envoyé:", data);
}

// Appel de la fonction pour la démonstration
awaitCall();

// Tâche 03: Gérer les erreurs avec Async/Await
async function awaitCallWithErrorHandling() {
    const simulateApiCall = () =>
        new Promise((resolve, reject) => 
            setTimeout(() => {
                const success = Math.random() > 0.5; // 50% de chances de succès
                success ? resolve("Données récupérées avec succès") : reject("Erreur de l'API simulée");
            }, 2000)
        );

    try {
        const data = await simulateApiCall();
        console.log("Réponse de l'API (Tâche 03):", data);
    } catch (error) {
        console.error("Une erreur est survenue (Tâche 03):", error);
    }
}

// Appel de la fonction pour la démonstration
awaitCallWithErrorHandling();
