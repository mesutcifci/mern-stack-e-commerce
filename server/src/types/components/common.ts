export interface IComponentPage {
	name: string;
	order: number;
}

export interface ComponentBase {
	name: string;
	slug: string;
	isActive: boolean;
	page: IComponentPage[];
	type: string;
}
