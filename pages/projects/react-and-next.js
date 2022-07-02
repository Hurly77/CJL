import DBLoader from "common/loaders/DBLoader";
import MapCards from "common/map-cards";
import ProjectsLayout from "layouts/project/ProjectsLayout";
import useProjects from "sdk/hooks/useProjects";
export default function ReactAndNext() {
  const { projects, isLoading } = useProjects("react");

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

ReactAndNext.getLayout = function getLayout(page) {
  return <ProjectsLayout>{page}</ProjectsLayout>;
};
