
// player.js

// Funkcja PlayTrack - przyjmuje URL ścieżki audio i odtwarza ją
function PlayTrack(trackUrl) {
    if (!trackUrl) {
        console.error("Brak URL ścieżki do odtworzenia");
        return;
    }

    // Sprawdź, czy istnieje już element audio
    let audioPlayer = document.getElementById('audio-player');

    if (!audioPlayer) {
        // Jeśli nie, utwórz nowy element audio i dodaj do body
        audioPlayer = document.createElement('audio');
        audioPlayer.id = 'audio-player';
        audioPlayer.controls = true;  // pokaż kontrolki odtwarzacza
        document.body.appendChild(audioPlayer);
    }

    // Przypisz źródło i rozpocznij odtwarzanie
    audioPlayer.src = trackUrl;
    audioPlayer.play()
        .then(() => {
            console.log("Odtwarzanie rozpoczęte");
        })
        .catch(err => {
            console.error("Błąd odtwarzania:", err);
        });
}
