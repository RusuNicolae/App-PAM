import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { delay} from 'rxjs/operators';


@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getAllFarms() {
    return this.http.get<FarmApi[]>(`${environment.apiUrl}/farm`);
  }

  getAllMeds() {
    return this.http.get<MedApi[]>(`${environment.apiUrl}/med`)
      .pipe(
        delay(1700)
      );
  }

//   getDetails()
// {

// }
}

interface FarmApi {
  name: string;
  strada: string;
  id: string;
}

interface MedApi {
  name: string;
  farmacie: string;
 
}