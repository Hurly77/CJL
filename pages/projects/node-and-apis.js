import DBLoader from "common/loaders/DBLoader";
import MapCards from "common/map-cards";
import ProjectsLayout from "layouts/project/ProjectsLayout";
import useProjects from "sdk/hooks/useProjects";

export default function NodeAndApis() {
  const { projects, isLoading } = useProjects("api");
  return (
    <div>
      {isLoading ? (
        <div className="flex">
          <DBLoader />
        </div>
      ) : (
        <MapCards projects={projects} />
      )}
    </div>
  );
}

NodeAndApis.getLayout = function getLayout(page) {
  return <ProjectsLayout>{page}</ProjectsLayout>;
};
