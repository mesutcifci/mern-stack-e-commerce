export interface IComponentPage {
	name: string;
	order: number;
}

export interface IComponentBase {
	name: string;
	slug: string;
	isActive: boolean;
	page: IComponentPage[];
	type: string;
}
