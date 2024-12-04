export type DonneesForm = {
    nomprenomspere?: string;
    nomprenomsmere?: string;
    numelecteur?: string;
    refrecep?: string;
    typerec?: string;
    nomprenomspv?: string;
    datelieunaisspv?: string;
    nomprenomsperepv?: string;
    nomprenomsmerepv?: string;
    numelecteurpv?: string;
    statutpv?: string;
    argument?: string;
    datelieunaiss?: string;
    decisioncel?: string;
    argumentdec?: string;
    nomprenom?: string;
    nomlv?: string;
    dateform?: string;
    ordre?: string;
    cel?: string;
    titre?: string;
    region?: string;
    departement?: string;
    piecesjointes?: string[];
    sex?: string;
  };
  export type DonneesCorrection = DonneesForm & {
    codeactuellv?: string;
    libelleactuellv?: string;
  }

  export type DonneesReintegration = DonneesForm & {
    nomprenomspv?: string;
    nomprenomsperepv?: string;
    nomprenomsmerepv?: string;
    numelecteurpv?: string;
    statupv?: string;
    datelieunaisspv?: string;
   
  }
  export type DonneesRadiation = DonneesForm & {
   nbredossiers?: string;
   nbrepages?: string;
  }