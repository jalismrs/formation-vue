import {TrafficInterface}    from 'App/components/data/traffic';
import {BreadcrumbInterface} from 'App/components/layout/breadcrumb';
import {ViewEntityInterface} from 'App/interfaces/entities';
import {ApiSeoInterface}     from 'App/views/app/view/overview/the-main/api-seo-holder/api-seo';
import {AccessInterface}     from 'App/views/app/view/overview/the-main/infos';

export interface DataViewInterface
{
    access: AccessInterface;
    apiSeo: ApiSeoInterface | null;
    breadcrumbs: Array<BreadcrumbInterface>;
    entity: ViewEntityInterface;
    traffic: Record<string, TrafficInterface>;
}
