export enum GroupEnum {
	EMPTY = 'empty',
	NOT_EMPTY = 'not_empty',
}
export interface IGroup {
	status: GroupEnum;
}

export interface IUser {
	name: string;
	email: string;
	groupId?: string | null;
}
