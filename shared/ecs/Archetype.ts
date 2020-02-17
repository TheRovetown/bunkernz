import { Component } from ".";

/**
 * An archetype is a unique combination of component types.
 * The entity manager (Ecs) holds all existing archetypes.
 */
export class Archetype {

    public chunk: any[] = [];
}