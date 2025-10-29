import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ApperIcon from '@/components/ApperIcon';
import Button from '@/components/atoms/Button';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md mx-auto"
      >
        <div className="mb-6 flex justify-center">
          <ApperIcon name="AlertCircle" size={80} className="text-accent" />
        </div>
        <h1 className="text-6xl font-display font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-display font-semibold text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 font-body">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => navigate('/')} className="flex items-center gap-2">
            <ApperIcon name="Home" size={20} />
            Back to Home
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ApperIcon name="ArrowLeft" size={20} />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;