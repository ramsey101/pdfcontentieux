"use client";

import Recepisse from "@/composants/pdfs/recepisse";
import { DonneesRecepisse } from "@/types/donneesrecepisse";

const mesdatas: DonneesRecepisse = {
  titre: "RECEPISSE DE DEPOT DE RECLAMATION",
  region: "AGNEBY TIASSA",
  departement: "TIASSALE",
  cel: " CESP TIASSALE",
  ordre: "ORDRE 1",
  dateform: "17/12/2022",
  nomlv: "M. FABIO",
  typerec: "INSCRIPTION OU RECTIFICATION OU RADIATION",
  datelieunaissrec: "17/12/2022",
  nomprenomrec: "M. FABIO",
  nomprenomspererec: "M. FABIO",
  nomprenomsmererec: "M. FABIO",
  nomprenomspv: "M. FABIO",
  nomprenomsperepv: "M. FABIO",
  nomprenomsmerepv: "M. FABIO",
  statutpv: "OMIS SUR LA LEP ou RECENSE",
  numelecteurrec: "1",
  numelecteurpv: "10555eud",
  piecesjointes: ["Acte de naissance", "Certificat de nationalité", "Acte de mariage", "Acte de naissance de l'enfant"],
  refrecep: "10554",
  argumentrec: "M. FABIO",
  datelieunaisspv: "17/12/2022",
  decisioncel: "Irrecevabilité ou Acceptation ou Rejet ou Mise en instance(sursis à statuer)",
  argumentdec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
};

export default function Page() {
  return (<>
  <div className="flex items-center justify-center min-h-screen">
    <Recepisse mesdatas={mesdatas} />
  </div>
 
  </>);
}
