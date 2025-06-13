import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';
import { Court } from '../../model/court';
import { RouterService } from '../../services/router.service';
import { Gender, User } from '../../model/user';
import { Friends } from '../../model/friends';
import { CourtReservation } from '../../model/court-reservation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private routerService: RouterService) { }
  courts: Court[] = [];
  ngOnInit(): void {
    let localStorageService: LocalStorageService = new LocalStorageService();
    if (!localStorageService.exists("pages")) {
      localStorageService.setItem("pages", ["home", "unimplemented"]);
    }
    // if (!localStorageService.exists("previousPages")) {
    localStorageService.setItem("previousPages", []);
    // }

    // if (!localStorageService.exists("currentPage")) {
    localStorageService.setItem("currentPage", "home");
    // }
    if (!localStorageService.exists("courts")) {
      localStorageService.setItem("courts",
        [
          new Court(0, "Padel court 1", "../../assets/images/padel-court-1.png", "Beogradska 63", 8, 18, 4000, 3, 4, 1000, ["../../assets/images/padel-court-1-1.png"]),
          new Court(1, "Padel court 2", "../../assets/images/padel-court-2.png", "Krunska 26", 10, 22, 3800, 4, 2, 340, ["../../assets/images/padel-court-1-1.png"]),
          new Court(2, "Padel court 3", "../../assets/images/padel-court-3.png", "Patrisa Lumumbe 11", 9, 23, 4200, 2, 4, 850, ["../../assets/images/padel-court-1-1.png"]),
          new Court(3, "Padel court 4", "../../assets/images/padel-court-4.png", "Dunavska 1", 8, 18, 4000, 3, 3, 540, ["../../assets/images/padel-court-1-1.png"]),
          new Court(4, "Padel court 5", "../../assets/images/padel-court-5.png", "Vatroslava Jagica 26", 10, 22, 3800, 4, 3, 500, ["../../assets/images/padel-court-1-1.png"]),
          new Court(5, "Padel court 6", "../../assets/images/padel-court-6.png", "Knez Mihajlova 11", 9, 23, 4200, 2, 4, 730, ["../../assets/images/padel-court-1-1.png"])
        ]
      );
    }

    if (!localStorageService.exists("users")) {
      localStorageService.setItem("users",
        [
          new User(0, "milos", "Milos", "Milosevic", Gender.Male, 10, [0,1,2]),
          new User(1, "lazar", "Lazar", "Lazarevic", Gender.Male, 100, [0,2]),
          new User(2, "jovana", "Jovana", "Jovanovic", Gender.Female, 1000, [3]),
          new User(3, "ivan", "Ivan", "Ivanovic", Gender.Male, 334, [0,1]),
          new User(4, "isidora", "Isidora", "Isidorovic", Gender.Female, 11, [1]),
          new User(5, "danilo", "Danilo", "Danilovic", Gender.Male, 543, [1,2]),
          new User(6, "marko", "Marko", "Markovic", Gender.Male, 123, [0,1]),
          new User(7, "ksenija", "Ksenija", "Ksencic", Gender.Female, 125, [0,1]),
          new User(8, "mirko", "Mirko", "Mirkovic", Gender.Male, 678, [1,3,4]),
          new User(9, "antonija", "Antonija", "Antonic", Gender.Female, 234, [1,2]),
          new User(10, "antonije", "Antonije", "Antonic", Gender.Male, 166, [1]),
        ]

      );
    }

    if (!localStorageService.exists("currentUser")) {
      localStorageService.setItem("currentUser", (localStorageService.getItem("users") as User[])[0]);
    }

    if (!localStorageService.exists("friends")) {
      localStorageService.setItem("friends", [
        new Friends(0, 0, 1),
        new Friends(1, 0, 2),
        new Friends(2, 0, 5),
        new Friends(3, 0, 7),
        new Friends(4, 9, 0),
      ]);
    }

    if (!localStorageService.exists("courtReservations")) {
      localStorageService.setItem("courtReservations", []);
    }

    this.courts = localStorageService.getItem("courts") as Court[];

    const sampleMatches: CourtReservation[] = [
      new CourtReservation(1, 1, '2023-06-15', 18, [0, 1, 2, 3], 2),
      new CourtReservation(2, 2, '2023-06-10', 20, [0, 4], 1),
      new CourtReservation(0, 0, '2023-05-28', 16, [5, 6, 7, 8], 2),
      new CourtReservation(1, 1, '2023-05-20', 19, [0, 9, 10, 1], 2),
      new CourtReservation(1, 1, '2024-06-25', 18, [0, 1, 2, 3], 2),
      new CourtReservation(2, 2, '2024-01-22', 20, [0, 4], 1),
      new CourtReservation(0, 0, '2025-01-28', 16, [5, 6, 7, 8], 2),
      new CourtReservation(1, 1, '2025-02-20', 19, [0, 9, 10, 1], 2),
      new CourtReservation(0, 0, '2025-01-23', 16, [0, 1, 3, 2], 2),
      new CourtReservation(1, 1, '2025-03-20', 19, [0, 9, 10, 1], 2),

      new CourtReservation(2, 2, '2026-07-11', 19, [0, 6, 2, 3], 2),
      new CourtReservation(1, 1, '2026-07-15', 17, [5, 1], 1),
      new CourtReservation(0, 0, '2025-12-20', 20, [0, 10], 1),
      new CourtReservation(2, 2, '2025-09-25', 18, [1, 0, 9, 2], 2),
      new CourtReservation(1, 2, '2025-06-15', 19, [2, 0, 9, 3], 2),
      new CourtReservation(0, 2, '2025-09-21', 20, [1, 4, 0, 5], 2),
      new CourtReservation(2, 2, '2025-12-30', 18, [7, 0, 6, 2], 2)
    ];

    sampleMatches[0].finished = true;
    sampleMatches[0].sets = [6, 3];
    sampleMatches[1].finished = true;
    sampleMatches[1].sets = [4, 6];
    sampleMatches[2].finished = true;
    sampleMatches[2].sets = [7, 5];
    sampleMatches[3].finished = true;
    sampleMatches[3].sets = [2, 5];
    sampleMatches[4].finished = true;
    sampleMatches[4].sets = [6, 3];
    sampleMatches[5].finished = true;
    sampleMatches[5].sets = [4, 6];
    sampleMatches[6].finished = true;
    sampleMatches[6].sets = [7, 5];
    sampleMatches[7].finished = true;
    sampleMatches[7].sets = [2, 5];
    sampleMatches[8].finished = true;
    sampleMatches[8].sets = [7, 5];
    sampleMatches[9].finished = true;
    sampleMatches[9].sets = [2, 5];

    localStorageService.setItem("courtReservations", sampleMatches);

  }

  goToBookACourt(id: number) {
    this.routerService.navigateTo("book-a-court/" + id);
  }
}
