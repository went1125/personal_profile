import { describe, expect, it } from "vitest";
import { getProject, projects } from "../../lib/projects";
describe("project content", () => { it("provides three replaceable projects", () => expect(projects).toHaveLength(3)); it("finds a project by its stable slug", () => expect(getProject("aura-health")?.title).toBe("Aura Health")); });
