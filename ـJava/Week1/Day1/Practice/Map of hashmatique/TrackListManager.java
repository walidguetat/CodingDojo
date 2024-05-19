import java.util.HashMap;
import java.util.Map;

public class TrackListManager {
    public static void main(String[] args) {
        // Créer un HashMap pour stocker les titres des chansons et leurs paroles
        HashMap<String, String> trackList = new HashMap<>();

        // Ajouter au moins 4 chansons avec leurs paroles
        trackList.put("Sunset Dreams", "As the sun sets, dreams take flight...");
        trackList.put("Ocean Waves", "Feel the ocean waves, crashing on the shore...");
        trackList.put("Mountain High", "Climbing mountains high, reaching for the sky...");
        trackList.put("City Lights", "Under city lights, the night comes alive...");

        // Extraire une chanson par son titre
        String trackTitle = "Ocean Waves";
        String lyrics = trackList.get(trackTitle);
        System.out.println("Lyrics for " + trackTitle + ": " + lyrics);
        System.out.println();

        // Afficher tous les titres de chansons et leurs paroles
        System.out.println("Track List:");
        for (Map.Entry<String, String> entry : trackList.entrySet()) {
            System.out.println("Track: " + entry.getKey() + " - Lyrics: " + entry.getValue());
        }
    }
}
