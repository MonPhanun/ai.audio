export class AudioModel {
    book: string = "";
    cd: string = "";
    track: string = "";
    exercise: string = "";
    audioName: string = "";
    audio: string = "";

    constructor(book: string, audioName: string, cd: string, track: string, exercise: string, audio: string) {
        this.book = book;
        this.cd = cd;
        this.track = track;
        this.exercise = exercise;
        this.audioName = audioName;
        this.audio = audio;

    }

    static bookOneAudio = [
        new AudioModel("Book 1", "Audio 1", "CD 1", "Track 1", "Exercise 1", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 01 Credits.mp3"),
        new AudioModel("Book 1", "Audio 2", "CD 1", "Track 2", "Exercise 2", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 02 p5 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 3", "CD 1", "Track 3", "Exercise 3", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 03 p5 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 4", "CD 1", "Track 4", "Exercise 4", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 04 p7 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 5", "CD 1", "Track 5", "Exercise 5", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 05 p7 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 6", "CD 1", "Track 6", "Exercise 6", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 06 p9 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 7", "CD 1", "Track 7", "Exercise 7", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 07 p9 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 8", "CD 1", "Track 8", "Exercise 8", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 08 p11 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 9", "CD 1", "Track 9", "Exercise 9", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 09 p11 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 10", "CD 1", "Track 10", "Exercise 10", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 10 p13 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 11", "CD 1", "Track 11", "Exercise 11", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 11 p13 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 12", "CD 1", "Track 12", "Exercise 12", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 12 p15 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 13", "CD 1", "Track 13", "Exercise 13", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 13 p15 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 14", "CD 1", "Track 14", "Exercise 14", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 14 p17 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 15", "CD 1", "Track 15", "Exercise 15", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 15 p17 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 16", "CD 1", "Track 16", "Exercise 16", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 16 p19 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 17", "CD 1", "Track 17", "Exercise 17", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 17 p19 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 18", "CD 1", "Track 18", "Exercise 18", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 18 p21 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 19", "CD 1", "Track 19", "Exercise 19", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 19 p21 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 20", "CD 1", "Track 20", "Exercise 20", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 20 p23 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 21", "CD 1", "Track 21", "Exercise 21", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 21 p23 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 22", "CD 1", "Track 22", "Exercise 22", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 22 p25 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 23", "CD 1", "Track 23", "Exercise 23", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 23 p25 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 24", "CD 1", "Track 24", "Exercise 24", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 24 p27 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 25", "CD 1", "Track 25", "Exercise 25", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 25 p27 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 26", "CD 1", "Track 26", "Exercise 26", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 26 p29 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 27", "CD 1", "Track 27", "Exercise 27", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 27 p29 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 28", "CD 1", "Track 28", "Exercise 28", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 28 p31 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 29", "CD 1", "Track 29", "Exercise 29", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 29 p31 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 30", "CD 1", "Track 30", "Exercise 30", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 30 p33 Ex5.mp3"),
        new AudioModel("Book 1", "Audio 31", "CD 1", "Track 31", "Exercise 31", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 31 p33 Ex6-7.mp3"),
        new AudioModel("Book 1", "Audio 32", "CD 1", "Track 32", "Exercise 32", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 1 CD1 Track 32 p34 Ex5.mp3"),

    ];
    //
    static bookTwoAudio = [
        new AudioModel("Book 2", "Audio 1", "CD 1", "Track 1", "Exercise 1", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 33 p5 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 2", "CD 1", "Track 2", "Exercise 2", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 34 p5 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 3", "CD 1", "Track 3", "Exercise 3", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 35 p7 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 4", "CD 1", "Track 4", "Exercise 4", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 36 p7 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 5", "CD 1", "Track 5", "Exercise 5", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 37 p9 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 6", "CD 1", "Track 6", "Exercise 6", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 38 p9 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 7", "CD 1", "Track 7", "Exercise 7", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 39 p11 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 8", "CD 1", "Track 8", "Exercise 8", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 40 p11 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 9", "CD 1", "Track 9", "Exercise 9", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 41 p13 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 10", "CD 1", "Track 10", "Exercise 10", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 42 p13 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 11", "CD 1", "Track 11", "Exercise 11", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 43 p15 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 12", "CD 1", "Track 12", "Exercise 12", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 44 p15 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 13", "CD 1", "Track 13", "Exercise 13", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 45 p17 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 14", "CD 1", "Track 14", "Exercise 14", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 46 p17 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 15", "CD 1", "Track 15", "Exercise 15", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 47 p19 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 16", "CD 1", "Track 16", "Exercise 16", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 48 p19 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 17", "CD 1", "Track 17", "Exercise 17", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 49 p21 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 18", "CD 1", "Track 18", "Exercise 18", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 50 p21 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 19", "CD 1", "Track 19", "Exercise 19", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 51 p23 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 20", "CD 1", "Track 20", "Exercise 20", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 52 p23 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 21", "CD 1", "Track 21", "Exercise 21", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 53 p25 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 22", "CD 1", "Track 22", "Exercise 22", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 54 p25 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 23", "CD 1", "Track 23", "Exercise 23", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 55 p27 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 24", "CD 1", "Track 24", "Exercise 24", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 56 p27 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 25", "CD 1", "Track 25", "Exercise 25", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 57 p29 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 26", "CD 1", "Track 26", "Exercise 26", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 58 p29 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 27", "CD 1", "Track 27", "Exercise 27", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 59 p31 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 28", "CD 1", "Track 28", "Exercise 28", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD1 Track 60 p31 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 29", "CD 1", "Track 29", "Exercise 29", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 2 CD2 Track 01 p34 Glossary.mp3"),

    ];
    //
    static bookThreeAudio = [
        new AudioModel("Book 2", "Audio 1", "CD 1", "Track 1", "Exercise 1", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 02 p5 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 2", "CD 1", "Track 2", "Exercise 2", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 03 p5 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 3", "CD 1", "Track 3", "Exercise 3", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 04 p7 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 4", "CD 1", "Track 4", "Exercise 4", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 05 p7 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 5", "CD 1", "Track 5", "Exercise 5", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 06 p9 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 6", "CD 1", "Track 6", "Exercise 6", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 07 p9 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 7", "CD 1", "Track 7", "Exercise 7", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 08 p11 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 8", "CD 1", "Track 8", "Exercise 8", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 09 p11 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 9", "CD 1", "Track 9", "Exercise 9", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 10 p13 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 10", "CD 1", "Track 10", "Exercise 10", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 11 p13 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 11", "CD 1", "Track 11", "Exercise 11", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 13 p15 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 12", "CD 1", "Track 12", "Exercise 12", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 14 p17 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 13", "CD 1", "Track 13", "Exercise 13", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 15 p17 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 14", "CD 1", "Track 14", "Exercise 14", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 16 p19 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 15", "CD 1", "Track 15", "Exercise 15", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 17 p19 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 16", "CD 1", "Track 16", "Exercise 16", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 18 p21 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 17", "CD 1", "Track 17", "Exercise 17", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 19 p21 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 18", "CD 1", "Track 18", "Exercise 18", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 20 p23 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 19", "CD 1", "Track 19", "Exercise 19", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 21 p23 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 20", "CD 1", "Track 20", "Exercise 20", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 22 p25 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 21", "CD 1", "Track 21", "Exercise 21", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 23 p25 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 22", "CD 1", "Track 22", "Exercise 22", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 24 p27 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 23", "CD 1", "Track 23", "Exercise 23", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 25 p27 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 24", "CD 1", "Track 24", "Exercise 24", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 26 p29 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 25", "CD 1", "Track 25", "Exercise 25", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 27 p29 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 26", "CD 1", "Track 26", "Exercise 26", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 28 p31 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 27", "CD 1", "Track 27", "Exercise 27", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 29 p31 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 28", "CD 1", "Track 28", "Exercise 28", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 30 p33 Ex5.mp3"),
        new AudioModel("Book 2", "Audio 29", "CD 1", "Track 29", "Exercise 29", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 31 p33 Ex6-7.mp3"),
        new AudioModel("Book 2", "Audio 30", "CD 1", "Track 30", "Exercise 30", "CAREER PATHS INFORMATION TECHNOLOGY BOOK 3 CD2 Track 32 p34 Glossary.mp3"),
    ];
}