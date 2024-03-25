import { BaseEntity } from "../shared/base.entities";
export interface Posts extends BaseEntity {
    id: string;
    createdBy: string;
    folderId: string;
    metadata: {
        tag: string;
        title: string;
        announcer: string | null;
        organization: {
            name: string;
            id: string;
        };
        responsable: string | null;
        version: string | null;
        duration: string;
        product: string | null;
        orderPattern?: string | null;
        city: string | null;
        comment?: string | null;
    };
    type: string;
    status: StatusPosts;
    files: Files[];
    destionations: Destinations[];
}
interface Destinations {
    id: string;
    name: string;
    fileId: string;
}
interface Files {
    id: string;
    name: string;
    path: string;
    size: number;
    standard: number;
    format: string;
    width: number;
    height: number;
    duration: number;
    frameRate: number;
    bitRate: number;
    codec: string;
    aspectRatio: string;
    audioChannels: number;
    sampleRate: number;
    extension: string;
    status: StatusFiles;
}
interface StatusFiles {
    approved: number;
    playable: boolean;
    downloaded: boolean;
    deleted: boolean;
}
interface StatusPosts {
    completed: boolean;
    destination: boolean;
    sended: boolean;
    downloaded: boolean;
    deleted: boolean;
    marked: boolean;
    file: boolean;
    approved: number;
    durationAlert: boolean;
}
export {};
