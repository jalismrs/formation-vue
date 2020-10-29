export interface ApiSeoInterface
{
    date: string;
    config: {
        maxAnnonce?: number;
        maxExpression?: number;
    };
    stats: {
        nombreAnnonces?: number;
        nombreArchives?: number;
        nombreCaracMoy?: number;
        nombreContacts?: number;
        nombreExpressions?: number;
        nombreJoursSansMaj?: number;
        nombreLiensUtiles?: number;
    };
}
